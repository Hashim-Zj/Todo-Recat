
# TODO LIST MANAGEMENT SYSTEM

## Technologies Used
- **Backend**: Django, Django REST Framework
- **Frontend**: React.js, Axios, React Bootstrap, React Datepicker, React Toastify
- **Database**: MySQL

---

## Setting Up the Project

### Step 1: Create a Virtual Environment
#### For Linux:
```bash
python3 -m venv env
source env/bin/activate
```
#### For Windows:
```bash
python -m venv env
env\Scripts\activate
```

### Step 2: Install Required Dependencies
```bash
pip install django djangorestframework python-decouple mysqlclient
```

---

## MySQL Database Setup

### Step 3: Configure MySQL
#### Start MySQL:
```bash
sudo mysql -u root -p
```
#### Create a New User:
```sql
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
```
#### Create the Database:
```sql
CREATE DATABASE todo_list;
```
#### Grant Privileges to the User:
```sql
GRANT ALL PRIVILEGES ON todo_list.* TO 'username'@'localhost';
```
#### Verify Privileges:
```sql
SHOW GRANTS FOR 'username'@'localhost';
```

### Step 4: Create an Environment File
In the main folder, create a `.env` file with the following format:
```
DB_NAME=todo_list
DB_USER=username
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=3306
```

---

## Backend Setup

### Step 5: Migrate and Run the Backend Server
Navigate to the backend directory:
```bash
cd todolist_backend/
```
Run the following commands:
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

---

## Frontend Setup

### Step 6: Install Dependencies and Run
Navigate to the frontend directory:
```bash
cd todolist_frontend/
```
Install dependencies:
```bash
npm install axios react-datepicker react-router-dom react-bootstrap react-toastify
```
Run the frontend server:
```bash
npm start
```

---

## API Endpoints for Testing

### Get All Todos
**Method**: GET  
**URL**: `http://localhost:8000/todo/`

### Get a Specific Todo
**Method**: GET  
**URL**: `http://localhost:8000/todo/<id>/`  
Replace `<id>` with the ID of the todo item.

### Add a New Todo
**Method**: POST  
**URL**: `http://localhost:8000/todo/`
**Body**:
```json
{
  "title": "new one",
  "description": "Complete the project",
  "due_date": "2025-01-09"
}
```

### Edit a Todo
**Method**: POST  
**URL**: `http://localhost:8000/todo/<id>/`  
Replace `<id>` with the ID of the todo item.
**Body**:
```json
{
  "title": "new one",
  "description": "Complete the project",
  "due_date": "2025-01-09",
  "status": "Completed"
}
```

### Delete a Todo
**Method**: DELETE  
**URL**: `http://localhost:8000/todo/<id>/`  
Replace `<id>` with the ID of the todo item.

---

