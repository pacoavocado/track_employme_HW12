INSERT INTO department (department_name)
VALUES  ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');

INSERT INTO emp_role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 80000, 1),
       ('Lead Engineer', 150000, 2),
       ('Software Engineer', 120000, 2),
       ('Account Manager', 160000, 3),
       ('Accountant', 125000, 3),
       ('Legal Team Lead', 250000, 4),
       ('Lawyer', 190000, 4),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
        ('John', 'Doe', 1, NULL),
        ('Mike', 'Chan', 2, 'John Doe'),
        ('Ashley', 'Rodriguez', 3, NULL),
        ('Kevin', 'Tupik', 4, 'Ashley Rodriguez'),
        ('Kunal', 'Singh', 5, NULL),
        ('Malia', 'Brown', 6, 'Kunal Singh'),
        ('Sarah', 'Lourd', 7, NULL),
        ('Tom', 'Allen', 6, 'Sarah Lourd'),