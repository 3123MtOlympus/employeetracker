// Import and require mysql2
const mysql = require('mysql2');
const inqurier = require('inquirer');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'mysql2024',
    database: 'business_db'
  },
  console.log(`Connected to the business_db database.`)
);

// Node index Function ---------------------->

const promptUser = () => {
   inqurier.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices:[
        "view all departments", 
        "view all roles", 
        "view all employees", 
        "add department", 
        "add to roles", 
        "add to employees",
        "update employee role"
      ]
    },
  ])

  // Show Functions -------------------------->

  .then(function(answers){
console.log(answers); 
console.log(answers.choice);

if(answers.choice === "view all departments"){
  // console.log("show departments")
showDepartment()
}

if(answers.choice === "view all roles"){
  // console.log("roles")
  showRoles()
}

if(answers.choice === "view all employees"){
  //console.log("employee")
  showEmployee()
}

// Add Functions --------------------------->

if(answers.choice === "add department"){
  // console.log('add department')
addDepartment()
}

if(answers.choice === "add to roles"){
  //console.log("add role")
  addRole()
}

if(answers.choice === "add to employees"){
  //console.log("add employee")
  addEmployee()
}

// Update Function -------------------------->

if(answers.choice === "update employee role"){
  //console.log('update employee role')
  updateEmployeeRole()
}
  })
};



// Query Show Functions ------------------------>

function showDepartment(){
db.query("SELECT * FROM department", function(err, results){
if (err){
  throw err
}
console.table(results)
})
}

function showRoles(){
  db.query("SELECT * FROM roles", function(err, results){
    if (err){
      throw err
    }
    console.table(results)
  })
}

function showEmployee(){
  db.query('SELECT * FROM employee', function(err, results){
    if (err){
      throw err
    }
    console.table(results)
  })
}

// Query Add Functions
// app.post('/api/new-department', ({ body }, res) => {
//   const sql = `INSERT INTO department (name)
//   VALUES (?)`;
//   const params = [body.name]
// })
function addDepartment(){
  db.query(sql, params, (err, results) => {
    if (err){
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
  })
});
};

function addRole(){
  db.query("INSERT INTO roles (title, salary, department_id)", function(err, results){
  if(err){
    throw err
}
console.table(results)
  })
}

function addEmployee(){
  db.query("INSERT INTO employee", function(err, results){
    if(err){
      throw err
    }
    console.log(results)
  })
}

// Querry Update Function

function updateEmployeeRole(){
  db.query("UPDATE employee (role_id)", function(err, results){
    if(err){
      throw err
    }
    console.log(results)
  })
}
promptUser();