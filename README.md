# pool-api

#To set up db
  #Postgres
    -brew install postgresql
    -brew services start postgresql
    -createuser root
    -createdb pool
    -psql pool
    -alter database pool owner to root

#To start servers
  -npm install
  -npm run buildEnv
  -npm run setup:rest-server
  -npm run db:setup:rest-server

  -npm run start 