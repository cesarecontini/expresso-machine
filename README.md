# WELCOME TO THE EXPRESSO-MACHINE PROJECT

![alt text](./assets/logo.png "Logo Title Text 1")


## EXPRESS JS API CLI APPLICATION GENERATOR

### ABOUT EXPRESSO-MACHINE

Expresso-machine is an express js API generator cli application which provides the following features:

* Express application skeleton
* REST API CRUD generation - GET, POST, PUT, DELETE HTTP methods implementation for each API endpoint defined in cli command
* Validation schema initial definition
* Generation of an initial SEQUELIZE model, migration, seed & configuration files for models defined in cli options
* Dockerfile & docker-compose.yml files generated for out-of-the-box project docker virtualization
* VISUAL CODE configuration for out-of-the-box debugging
* JWT initial implementation for API endpoints protection

### GET STARTED

```
npm install -g expresso-machine
```

This will install the cli expresso command at global level. Once the installation process completes run the following command:

```
expresso-machine -h
```

You should get the following output or similar:

```
Usage: expresso-machine -i my-app l- product,category

Options:
  -V, --version                output the version number
  -i, --init <projectname>     Creates a project named <projectname> (default: "my-app")
  -p, --port [port]            Set the port the node app is exposed on [port] (default: 3000)
  -P, --dbport [dbport]        Set the port database is exposed on [dbport] (default: 5433)
  -o, --overwrite              Overwrite project folder if already existing
  -d, --dbDialect [dbDialect]  Enter the database [dbDialect] you would like to use: postgres, sqlite, mssql or mysql (default: "postgres")
  -l, --list <apiEndpoints>    A list of api properties <apiEndpoints>, comma-separated (default: ["product","category"])
  -h, --help                   output usage information

```

### EXAMPLE

At this point you are ready to start generating express js apps! Take a look at the following example command to run:

```
expresso-machine -i my-animal-app -l dog,cat
```

This command will create a 'my-animal-app' folder with a ready to run dockerized application. CD into the folder:

```
cd my-animal-app
```

Run the following command as a background process:

```
npm run init &
```

This command will run docker-compose build and the overall app. Wait until this process completes in the background. When it does run:

```
npm run init-db &
```

This will create a sequelize migration and create the Dog, Cat tables as well as the seeding process to create a record for each table.

The application exposes the following endpoints on default port 3000:

```
GET localhost:3000/dogs/ (all paginated dogs)
GET localhost:3000/dogs/:id (get a dog with id <:id>)
POST localhost:3000/dogs/ (create a dog, you must include the 'dog' object in the request body)
PUT localhost:3000/dogs/:id (update a dog, you must include the 'dog' object in the request body and 'id' <:id>)
DELETE localhost:3000/dogs/:id (delete dog with 'id' :id)

```