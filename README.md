## Description

This project is a (on progress...) new version for the back-end of a project I did some months ago, in the Driven Full-Stack bootcamp.
It aims to simulate an app to post and find jobs, where as a user, you can createa an account, post the jobs you provide and find jobs other users have posted.

It's a microsservices based app using the [Nest](https://github.com/nestjs/nest) framework.
Each service runs in different ports and has it's dockerfile.

## Technologies

- TypeScript
- Nestjs
- Prisma
- Postgresql
- Joi
- Docker

## Installation

```bash
$ npm install
```

## Running the app

#### If you have docker on your machine, in the terminal, on the root of the project:

```bash
docker-compose up
```

### Otherwirse:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
