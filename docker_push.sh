#!/bin/bash
echo "building Dockerfile..."
docker build -t dressyourkid/kid-shop-ui .
echo "Dockerfile built successfully"

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push dressyourkid/kid-shop-ui
