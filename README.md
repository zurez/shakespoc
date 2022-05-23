
# Shakespoc

Pokemon described by Shakespeare

## Prerequisite

The following softwares are needed to run the project

- [>= Nodev16](https://nodejs.org/en/download/) [Required]
- [Docker](https://www.docker.com/products/docker-desktop/) [To run project through docker]

## Tech Stack

**Client:** Node,React, MaterialUI, Axios

**Server:** Node, NestJs, Typescript, Axios

**Integration Test:**  Cypress, Mocha, Typescript

## API Reference

### Get pokemon by name

```http
  GET /pokemon/{pokemonName}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pokemonName` | `string` | **Required**. The pokemon name |

## Run Client locally for development

Clone the project

```bash
  git clone https://github.com/zurez/shakespoc
```

Go to the project client directory

```bash
  cd shakespoc/client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

#### Client would be available at `http://localhost:3000`

## Run Server locally for development

Clone the project

```bash
  git clone https://github.com/zurez/shakespoc
```

Go to the project server directory

```bash
  cd shakespoc/server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start:dev
```

#### Server would be available at `http://localhost:3001`

## Run project via docker on production

Clone the project

```bash
  git clone https://github.com/zurez/shakespoc
```

Go to the project directory

```bash
  cd shakespoc
```

Build image and run via docker

```bash
  docker-compose up --build
```

To build and run only client

```bash
    docker-compose up --build client
```

To build and run only server

```bash
    docker-compose up --build server
```

### Project can be accessed via browser on `http://localhost:3000`

## Running Tests

### Running unit tests on client

To run tests, run the following commands

cd into the client directory

```bash
cd client
```

run tests

```bash
npm run test
```

### Running integration tests

```bash
cd integration_tests
```

run tests

```bash
npm run test
```

## Environment Variables

To run this project, no Environment variable is needed.

## Optimizations

As we are talking with external api services, therefore it becomes essential
that we keep the api requests to a minimum, and therefore, in this project api caching has been implemented
both on the client and server through [axios-cache-interceptor](https://www.npmjs.com/package/axios-cache-interceptor)
TTL for cache expiry is `1 hour`

## ToDo

- Write unit tests for  server
- Add more coverage to unit tests for client
- Improve caching logic
- Better api response on 429 and 404 error from 3rd party apis
- Better documentation
- Reduce docker build time
