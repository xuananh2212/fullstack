SELECT * FROM users
SELECT * FROM groups
INSERT INTO  groups(name)
VALUES('admin'),
	  ('manager'),
	  ('Staff')
	  
INSERT INTO users(name, email, password)
VALUES ('user2', 'user2@gmail.com', '123456'),
		('user3', 'user3@gmail.com', '123456'),
		('user4', 'user4@gmail.com', '123456')
		
-- join bang
 SELECT * FROM users
 JOIN groups on users.group_id = groups.id