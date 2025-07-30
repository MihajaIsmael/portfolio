#!/bin/bash

set -a
source .env
set +a

docker cp ./backup/wordpress-db.sql $WORDPRESS_DB_HOST:/tmp/

docker exec -i $WORDPRESS_DB_HOST \
  mysql -u $WORDPRESS_DB_USER -p$WORDPRESS_DB_PASSWORD $WORDPRESS_DB_NAME < /tmp/wordpress-db.sql

echo "✅ Base importée vers $WORDPRESS_DB_NAME"
