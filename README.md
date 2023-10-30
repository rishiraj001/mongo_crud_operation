# Book Library API

This is a simple Node.js application that provides CRUD (Create, Read, Update, Delete) operations for a book library. It uses MongoDB as the database for storing book data.

## API Endpoints and Usage

### 1. Add a New Book

- **Endpoint:** `http://localhost:3000/api/addBook`
- **HTTP Method:** POST
- **Request Body:** JSON
  ```json
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "summary": "A classic novel about the American Dream."
  }
  ```
- **Response:** JSON with the newly created book's details.

### 2. View a List of All Books

- **Endpoint:** `http://localhost:3000/api/readAllBooks`
- **HTTP Method:** GET
- **Response:** JSON array of all books in the database.

### 3. View Details of a Specific Book by ID

- **Endpoint:** `http://localhost:3000/api/getBookById?id`
- **HTTP Method:** GET
- **Response:** JSON with the book's details for the specified ID.

### 4. Update a Book's Details

- **Endpoint:** `http://localhost:3000/api/updateBookById`
- **HTTP Method:** PUT
- **Request Body:** JSON with the fields to update.
  ```json
  {
    "title": "New Title",
    "author": "F. Scott Fitzgerald",
    "summary": "A classic novel about the American Dream."
  }
  ```
- **Response:** Operation Successfully Message.

### 5. Delete a Book

- **Endpoint:** `http://localhost:3000/api/deleteBookById?id`
- **HTTP Method:** DELETE
- **Response:** Operation Successfully Message.

## Setup and Local Deployment

To set up and run this application locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone git@github.com:rishiraj001/mongo_crud_operation.git
   ```

2. **Install Dependencies:**

   Navigate to the project directory and run the following command to install the required Node.js packages.

   ```bash
   npm install
   ```

3. **Set Up MongoDB:**

   You can use a local MongoDB instance or a cloud solution like MongoDB Atlas. Make sure to configure your MongoDB connection in the `db.js` and `.env` file.

4. **Run the Application:**

   Start the Node.js server using the following command:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000/api/`.

## Assumptions and Decisions

- We assume that the book data includes fields for `title`, `author`, and `summary`. You can extend this data model as needed.

- The application uses Express.js for routing and MongoDB for data storage.

- Error handling is minimal in this sample application. In a production application, you should implement more robust error handling and validation.

- The application doesn't include user authentication. In a real-world scenario, you'd likely add user management features.

- We assume that you have a working MongoDB instance set up and properly configured.

## Deployment on AWS Lightsail

### Prerequisites

1. An AWS account (If you don't have one, sign up at [AWS](https://aws.amazon.com/))
2. The AWS CLI tool (You can install it from [here](https://aws.amazon.com/cli/))

### Steps for Deployment

1. **Create an AWS Lightsail Instance:**

   - Log in to the AWS Lightsail Console.

   - Click the "Create instance" button.

   - Select a region for your instance and choose a platform. In this case, choose "Linux/Unix" and the latest Node.js.

   - Choose your instance plan based on your requirements and budget.

   - Optionally, you can configure your SSH key pair for secure access.

   - Click the "Create" button to create your instance.

2. **Connect to Your Lightsail Instance:**

   - In the Lightsail dashboard, click on your instance.

   - Go to the "Connect" tab, and you will find instructions on how to SSH into your instance.

3. **Upload Your Application Code:**

   - You can use the AWS CLI or an SFTP client to upload your application code to your Lightsail instance.

4. **Install Dependencies:**

   - After connecting to your Lightsail instance, navigate to your project directory and install the required Node.js packages using npm.

   ```bash
   npm install
   ```

5. **Set Up MongoDB:**

   - If you're using a separate MongoDB server, make sure to update the database configuration in your project to point to the correct MongoDB instance.

6. **Start Your Application:**

   - Use a process manager like `pm2` to start your Node.js application in the background.

   ```bash
   npm install -g pm2
   pm2 start server.js
   ```

7. **Open Port 80 (HTTP) on Your Lightsail Instance:**

   - In the Lightsail dashboard, go to the "Networking" tab and add a new rule to allow inbound traffic on port 80 (HTTP).

8. **Access Your Application:**

   - Open a web browser and navigate to your Lightsail instance's public IP address or domain (if you've configured one).

   Your Node.js application should now be accessible via the public IP address or domain of your Lightsail instance.
