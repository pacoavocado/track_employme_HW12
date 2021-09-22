   
SELECT employee.first_name, employee.last_name, title, salary, department_name AS department, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee 
JOIN department ON department_name = department.id 
JOIN emp_role ON department_id = emp_role.id 
LEFT JOIN employee manager on manager.id = employee.manager_id;