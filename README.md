## Description

This project is a (on progress...) new version for the back-end of a project I did some months ago, in the Driven Full-Stack bootcamp.
It aims to simulate an app to post and find jobs, where as a user, you can createa an account, post the jobs you provide and find jobs other users have posted.

It's a microsservices based app using the [Nest](https://github.com/nestjs/nest) framework (Not yet deployed).
Each service runs in different ports and has it's own dockerfile.

The current available microsservices are:

- auth:
  - Port 3000
  - Endpoints:
    - GET /,
    - GET /:id,
    - POST /,
    - PATCH /:id, -
    - DELETE /:id
- jobs:
  - Port 3001
  - Endpoints:
    - GET /,
    - GET /:id,
    - POST /,
    - PATCH /:id,
    - DELETE /:id
- contracts:
  - Port 3002
  - Endpoints:
    - GET /,
    - GET /:providerId/:receiverId/:jobId,
    - POST /,
    - PATCH /:providerId/:receiverId/:jobId,
    - DELETE /:providerId/:receiverId/:jobId

## Technologies

- TypeScript
- Nestjs
- Prisma
- Postgresql
- Joi
- Docker

## Running the app

#### If you have docker on your machine, in the terminal, on the root of the project:

```bash
docker-compose up
```

## Otherwirse:

- Installation

```bash
$ npm install
```

- Starting

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
