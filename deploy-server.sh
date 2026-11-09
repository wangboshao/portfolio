#!/bin/bash
set -e
mkdir -p /var/www/portfolio
rm -rf /tmp/dep
git clone -q -b deploy --depth 1 https://github.com/wangboshao/portfolio.git /tmp/dep
rm -rf /var/www/portfolio/*
cp -r /tmp/dep/. /var/www/portfolio/
rm -rf /var/www/portfolio/.git
chown -R www-data:www-data /var/www/portfolio
cat > /etc/nginx/sites-available/portfolio <<'EOF'
server {
    listen 8080;
    listen 80;
    server_name _;
    root /var/www/portfolio;
    index index.html;

    gzip on;
    gzip_types text/css application/javascript image/svg+xml;

    location /assets/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF
ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl enable nginx >/dev/null 2>&1
systemctl restart nginx
echo NGINX_OK
ls /var/www/portfolio
