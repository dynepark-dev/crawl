# crawl

## Docker

```
CMD
docker build -t expressback:1.0 -f Dockerfile.dev .
docker run -d -v /app/node_modules -v ${PWD}:/app -p 3001:3001 --name express-app expressback:1.0

```
