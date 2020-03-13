USE employee_trackerDB;

INSERT INTO department (name) 
VALUES 
("Management"), ("Markets"),  ("Toilet Cleaners");

INSERT INTO role
(title, salary, department_id)
VALUES 
("CEO", 550000.00, 1),
("Executive Assistant to the CEO", 290000.00, 1),
("Administrative Supervisor", 155000.00, 1),
("Account Executive", 75000.00, 2),
("Marketing Analyst", 70000.00, 2),
("Sales Development Representative", 45000.00, 2),
("Head of Sanitation", 69000.00, 4),
("Assistant Sanitation Specialist", 66600.00, 4),;

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
VALUES
("Brennan","Predmore", 1, null),
("Calvin","Carter", 1, null),
("Jimi","Paige", 2, 1),
("Travis","Barker", 2, 1),
("Eric","Garcia", 2, 2),
("Bernie","Sanders", 3, 2),
("Tom","Hanks", 4, 2);