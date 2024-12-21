# Comandos para construir la imagen 
## Build
```bash
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

## Run
```bash
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up
```
## Nota
Por defecto, docker-compose usa el archivo .env, por lo que si tienen el archivo .env y lo configuran con sus variables de entorno de producción, bastaría con
```bash
docker-compose -f docker-compose.prod.yaml up --build
```