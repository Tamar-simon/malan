Branch master!

## Installation and Setup
   
1. **ShoppingStore - dotnet core project**:
   
   ```bash
   dotnet restore
   dotnet build
   dotnet run

2. **shopping-store-server-node - Node.js + TS + express**:
   
   ```bash
   npm i 
   npm start

3. **shopping-store-client - React + TS**:
   
   ```bash
   npm i 
   npm start
   
4.Mongo db - locally

5.SQL - locally

   
- shopping-store-client - http://localhost:3000/
- the client send Http request to Api categories (dotnet) - > MSSQL 
- user select category - we save the details with Redux .  
- the next page we display the proucts and send Http request to Node.js server to save the orders in Mongodb.

## Tech Stack
- **Frontend**: React, Redux Toolkit, TypeScript
- **Backend**: Node.js, Express, TypeScript, Dotnet 8
- **Database**: MongoDB,Entity Framework

 ## TODO
- add loggers in error case for deployment we can monitor it with **Cloud watch (AWS)**.
- use enviromet varibale for dbName . 
- configuration .

 ## For Deployment
- we have to create pipliene to deploy all app to AWS .
- Create new MS - API Gateway - all request come its.
- API Gateway also authentication and authorization for **secure**.

- ודs
- ק



![Untitled-2024-09-23-1328](https://github.com/user-attachments/assets/254ef67d-9480-4b03-91fd-dd8e4b39a59a)
