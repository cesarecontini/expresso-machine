const validator = require('validator');
const fs = require('fs-extra');
const moment = require('moment');

const getFormattedDateAsInt = () => Number(moment().format('YYYYMMDDHHmmss'));

const list = val => {
    if (!val) return [];
    return val
        .split(',')
        .filter(v => v && v.length > 0 && validator.isAlpha(v))
        .map(v => v.toLowerCase())
        .map(v => v.replace(/ /g, ''));
};

const pathExist = path => {
    return fs.pathExists(path).then(exists => {
        if (!exists) {
            throw new Error(
                'You must run this command in an expresso-machine generated project'
            );
        }
        return true;
    });
};

const addToNotes = notesArray => {
    const noteFileName = './expresso-machine-notes.txt';
    fs.exists(noteFileName)
        .then(exists => {
            if (exists) {
                return fs
                    .readFile('./index.js')
                    .then(file => file.toString().split('\n'));
            }
            return fs.writeFile(noteFileName, '').then(() => ['\n']);
        })
        .then(fileBits => {
            notesArray.forEach(note => {
                fileBits.push(
                    `==================================== NOTE ADDED ${getFormattedDateAsInt()}
                     ==========================================================================
                     ${note}
                    `
                );
            });

            return fs.writeFile(noteFileName, fileBits.join('\n').toString());
        });
};

module.exports = {
    list,
    pathExist,
    addToNotes,
};
