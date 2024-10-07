Branch master!

## Tech Stack
- **Frontend**: React, Redux Toolkit, TypeScript
- **Backend**: Node.js, Express, TypeScript, Dotnet 8
- **Database**: MongoDB,Entity Framework


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

   
- shopping-store-client - navigate this url -  http://localhost:3000/
  
 ## Flow
- The client send Http request to Api categories (dotnet) - > MSSQL 
- User select category - we save the details with Redux .  
- The next page we display the proucts and send Http request to Node.js server to save the orders in Mongodb.

 ## For Deployment
- Create pipliene to deploy all app to AWS .
- AWS API Gateway - all request come its, implement authentication and authorization for **secure**.
- We need AWS Elastic Load Balancer to support big data, scaling
- All microservices (MS) will run on **EC2** instances, providing flexible and customizable virtual servers for the application.
- For React app we also use **CloudFront** for performance improvement.
 ## Database Setup
The project utilizes **RDS** (Relational Database Service) for  MSSQL. This ensures scalable and managed database solutions, leveraging the benefits of cloud infrastructure.
Mongodb will run on EC2

 ## TODO
- Add loggers in error case for deployment we can monitor it with **Cloud watch (AWS)**.
- Use enviromet varibale for dbName etc . 
  configuration .
- Add test as part of CICD proccess.
- To add a notification banner for success or error state


![Untitled-2024-09-23-1328](https://github.com/user-attachments/assets/2dd03829-3fd0-4c4d-8fd3-32844084923b)

![image](https://github.com/user-attachments/assets/29cd076c-cab8-4699-8d43-fe8869a0f2b9)



