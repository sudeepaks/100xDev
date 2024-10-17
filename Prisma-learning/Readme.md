# Setup
## node initialization
*  npm i save-dev prisma typescript ts-node @types/node nodemon

## ts.config file setup
### by using prisma documentation ts.config settings

## prisma initialization
* npx prisma init --datasource-provider postgresql

## For formating prisma code
* npx prisma format

## To generate SQL code from prisma and generate dev version of code or migrate changes of schema to database
* npx prisma migrate dev --name init

## To generate client 
* npm i @prisma/client

## optionally if we want to generate client then
* npx prisma generate 

## create script.ts file and include
* import { PrismaClient } from "@prisma/client";
* const prisma = new PrismaClient();

# Models
## Format of the model
* field * type of model * optional * attribute
* Example-> id int @id @default(autoincrement())
* example-> name string?

# Relations
## one to many
* Example one which shows that one user can have many posts

## many to many
* category model to post model

## one to one
*User to userprefernce

# Block-level attributes
* Ex > @@unique([age, name]) this requires every field in the attributes be unique

# enum

# Prisma Functions
* create
* createMany
* deleteMany
* findUnique({
    where: {
        email: "kyle@test.com"
    }
})
* update