# NodeCRUD app workshop

## What is CRUD?

### Create
Create data --> INSERT statement  
  
### Read
Read data  --> SELECT statement  
  
### Update
Update data  --> UPDATE statement  
  
### Delete
Delete data  --> DELETE statement  


## Setup mysql
### Mac
https://sequelpro.com/docs/ref/mysql/install-on-osx

### Windows
https://www.youtube.com/watch?v=LnOnzNQnJMU

### Linux
https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-16-04
```shell
$ sudo apt-get update
$ sudo apt-get install mysql-server
$ sudo mysql_secure_installation
```
Mac user and Windows user can use MAMP to install mysql easily.   
https://www.mamp.info/en/downloads/  


## Setup DB
### Create DB & TABLE
```sql
CREATE DATABASE blog;
SHOW DATABASES;
USE blog;
CREATE TABLE article(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, title VARCHAR(50), content TEXT, timestamp TIMESTAMP);
SHOW TABLES;
```
### Create USER & GRANT
```sql
CREATE USER 'user_name'@'localhost' IDENTIFIED BY 'YourPassword';
SELECT Host, User FROM mysql.user;
GRANT ALL PRIVILEGES ON blog TO 'user_name'@'localhost';
```


### Install npm packages
npm package express  
https://www.npmjs.com/package/express  
  
npm package mysql  
https://www.npmjs.com/package/mysql  
  
npm package express-handlebars   
https://www.npmjs.com/package/express-handlebars  
  
```js
$ npm install express --save
$ npm install mysql --save
$ npm install express-handlebars --save
$ npm install body-parser --save  
```


