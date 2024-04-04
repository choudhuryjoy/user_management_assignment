# User Management API

This is a simple RESTful API for managing user data. It provides endpoints for creating, reading, updating, and deleting user records.

## Installation

1. Clone the repository:

```bash
git clone <repo_name>
```

2. Navigate to the project directory:

```bash
cd your-repository
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node dist/index.js
```

## Usage

### Create a User

Endpoint: `POST /users`

Example request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25,
  "gender": "Male",
  "address": "123 Main Street",
  "mobileNo": "2222222222"
}
```

### Read a User

Endpoint: `GET /users/:userId`

### Update a User

Endpoint: `PUT /users/:userId`

Example request body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 30
}
```

### Delete a User

Endpoint: `DELETE /users/:userId`

## Contributing

Contributions are welcome! Please follow these steps to contribute:

Feel free to customize it further to match your project's specifics!
