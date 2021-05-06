docker build --no-cache -f SQL\Dockerfile.PostgreSql -t uchet/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t uchet/app ../..
