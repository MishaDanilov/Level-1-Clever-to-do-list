# Level 1 Clever to-do list

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- Docker - https://docs.docker.com/engine/install/.
- DockerHub - https://hub.docker.com/

## Downloading

```
git clone {repository URL}
```

## Edit .env file

```
PORT=3001
JWT_SECRET_KEY=secret-key

POSTGRES_HOST=postgres
POSTGRES_PORT=<your postgres port>
POSTGRES_DB=<your postgres db>
POSTGRES_USER=<your postgres user name>
POSTGRES_PASSWORD=<your postgres password>
```

## Building Docker

```
docker compose build
```

## Starting Docker containers

```
docker compose up
```

After starting the app on port (3001 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:3001/.

## Linter

```
cd server
```
```
npm run lint
```
### OR
```
cd client
```
```
npm run lint
```
