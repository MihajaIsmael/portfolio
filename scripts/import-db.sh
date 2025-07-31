#!/bin/bash

set -a
source .env
set +a

SQL_FILE="./backup/wordpress-db.sql"

if [ ! -f "$SQL_FILE" ]; then
  echo "❌ Le fichier $SQL_FILE est introuvable."
  exit 1
fi

echo "⏳ Importation de la base dans le conteneur $WORDPRESS_DB_HOST..."

cat "$SQL_FILE" | docker exec -i wordpress-db \
  mysql -u "$WORDPRESS_DB_USER" -p"$WORDPRESS_DB_PASSWORD" "$WORDPRESS_DB_NAME"

echo "✅ Base importée vers $WORDPRESS_DB_NAME"
