# Fastify graphql typescript template

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/79967339634e584feae3?action=collection%2Fimport)

## Run docker image

Provides ready to go docker compose config

```bash
sudo docker compose build
sudo docker compose up
```

## Local installation

```bash
yarn instal
```

## Local start

```bash
yarn build
yarn start
```

## Test

```bash
yarn test
yarn test:cov
```

## Test at docker image

```bash
sudo docker compose up backend -d

sudo docker exec fastify-gql-api yarn test:cov

sudo docker compose stop backend
```

## Access at

`http://localhost:8080/api/<method>` or `http://127.0.0.1:8080/api/<method>`

## Api routes

- POST `/graphql`
- GET `/graphql`

## Description

This is ready to use fastify template using typescript and mercurius as graphql functionality provider
