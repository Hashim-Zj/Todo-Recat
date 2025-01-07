
<!-- PROJECT NAME :"TODO LIST MANAGEMENT SYSTEM " -->
  <h1> "TECHNOLOGES"</h1>
<!-- BAKEND: -->


python3 -m venv env
source env/bin/activate


env\Scripts\activate  # in Windows

pip install django djangorestframework python-decouple mysqlclient


<!------------- STEPS FOR MYSQL DATABASE  --------------------->

<!-- start mysql -->
sudo mysql -u root -p

<!-- create a user by adding  username and password -->
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';

<!-- create database todolist -->
CREATE DATABASE todo_list;

<!-- Grant user the privilages of the DB -->
GRANT ALL PRIVILEGES ON todo_list.* TO 'username'@'localhost';

<!-- chke privilages are granted -->
SHOW GRANTS FOR 'username'@'localhost';

<!-- --------------------------- -->

<!------------------ FRONTEND SIDE-------------------- -->
npm install axios react-datepicker react-router-dom

