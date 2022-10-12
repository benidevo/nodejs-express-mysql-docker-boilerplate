#!/bin/sh

# wait for MySQL
echo "Waiting for MySQL..."
while ! nc -z db 3306; do
  sleep 0.1
done

echo "Initializing DB..."
# generate tables
# run migrations

status=$?
if [ $status -eq 0 ]; then
  echo "Starting development server..."

    yarn run dev
else
  echo "Error initializing DB, exiting..."
fi
