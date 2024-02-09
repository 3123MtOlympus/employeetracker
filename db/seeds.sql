INSERT INTO department (name)
VALUES ('FE'),
		('ME'),
		('BE');
        
INSERT INTO roles (title, salary, department_id)
VALUES ("CS", 17.00, 1),
		("HR", 23.00, 2),
        ("M", 28.00, 1);
        
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Frederick", "Grady", 3, NULL),
		("Carmen", "Carter", 2, 1),
        ("Lynn", "Watson", 1,1),
        ("Sierra", "neShelle", 1, 2),
        ("Allen", "Wayne", 3, NULL),
        ("Whitney", "Grant", 2,2),
        ("Justin", "Brooks", 1, 2);
		