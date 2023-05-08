## Description

- Calculates the angle between the hour and minute pointers on a clock.
- Provides a command-line interface (CLI) for input and output.
- Written in JavaScript.
- This project uses MVC Architecture
- This poject uses Prisma ORM and PostgreSql database

## Requirements

- Node.js installed on your machine.

## 🚀 Installing

- To install this project, you need to clone this repository and use this command in root of the project:

```bash
# clone this project
$ git clone https://github.com/AgarbSpace/Clock-Pointers-Angle.git

# navigate to the project directory
$ cd Clock-Pointers-Angle

# install dependencies
$ npm install

```

## Running the app

- To run the app, you need to create an .env file following the .env.example file, then run:

```bash
# generate Prisma Client and Database
$ npm run migrate:dev
# run the app
$ npm run dev

```

- This project will run in localhost:8080, and the path you need to send requests is v1/rest/clock/:hour/:minute or
- v1/rest/clock/:hour

```bash
# to send a request, example:
$  curl http://localhost:8080/v1/rest/clock/6/0
result: {"angle":180}

```

## Test

```bash
# unit tests
$ npm run test
# this script brings the coverage

```

## Run With Docker

- after create a .env file:

```bash
# build container
$ docker compose build
# run container
$ docker compose up

```
