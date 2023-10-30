# Book Library API

This is a simple Node.js application that provides CRUD (Create, Read, Update, Delete) operations for a book library. It uses MongoDB as the database for storing book data.

## API Endpoints and Usage

### 1. Add a New Book

- **Endpoint:** `/api/books`
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

- **Endpoint:** `/api/books`
- **HTTP Method:** GET
- **Response:** JSON array of all books in the database.

### 3. View Details of a Specific Book by ID

- **Endpoint:** `/api/books/:id`
- **HTTP Method:** GET
- **Response:** JSON with the book's details for the specified ID.

### 4. Update a Book's Details

- **Endpoint:** `/api/books/:id`
- **HTTP Method:** PUT
- **Request Body:** JSON with the fields to update.
  ```json
  {
    "title": "New Title"
  }
  ```
- **Response:** JSON with the updated book's details.

### 5. Delete a Book

- **Endpoint:** `/api/books/:id`
- **HTTP Method:** DELETE
- **Response:** JSON confirmation message for successful deletion.

## Setup and Local Deployment

To set up and run this application locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies:**

   Navigate to the project directory and run the following command to install the required Node.js packages.

   ```bash
   npm install
   ```

3. **Set Up MongoDB:**

   You can use a local MongoDB instance or a cloud solution like MongoDB Atlas. Make sure to configure your MongoDB connection in the `config.js` or `.env` file.

4. **Run the Application:**

   Start the Node.js server using the following command:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Assumptions and Decisions

- We assume that the book data includes fields for `title`, `author`, and `summary`. You can extend this data model as needed.

- The application uses Express.js for routing and MongoDB for data storage.

- Error handling is minimal in this sample application. In a production application, you should implement more robust error handling and validation.

- The application doesn't include user authentication. In a real-world scenario, you'd likely add user management features.

- We assume that you have a working MongoDB instance set up and properly configured.
