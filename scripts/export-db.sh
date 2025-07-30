#!/bin/bash

# Charger les variables depuis .env
set -a
source .env
set +a

# Utiliser les variables dans ton script
docker exec wordpress-db \
  mysqldump --column-statistics=0 -u $WORDPRESS_DB_USER -p$WORDPRESS_DB_PASSWORD $WORDPRESS_DB_NAME wp_posts wp_postmeta wp_options > ./backup/wordpress-db.sql

echo "✅ Export effectué depuis la base de données vers backup/wordpress-db.sql"
