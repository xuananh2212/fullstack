-- this is comment
INSERT INTO users(id , name , email, password, status, created_at, updated_at)
VALUES(1,'user1', 'user1@gmail.com', '123456', true, NOW(), NOW()),
(5,'user5', 'user5@gmail.com', '123456', true, NOW(), NOW()),
(6,'user6', 'user6@gmail.com', '123456', true, NOW(), NOW()),
(7,'user7', 'user7@gmail.com', '123456', true, NOW(), NOW())
-- update data
UPDATE users
SET name='User11',email='user11@gmail.com', status='false'
WHERE id= 1
UPDATE users
SET updated_at=NULL WHERE id=1
UPDATE users
SET updated_at=NULL WHERE id=3
-- delete data
DELETE FROM users
WHERE id=1
--truy vấn dữ liệu
SELECT * FROM users
-and
SELECT * FROM users
WHERE id >=1 AND id <= 2
- in
SELECT * FROM users
WHERE id in(1,3,5)
- between
SELECT * FROM users
WHERE id BETWEEN 1 AND 3
-hiện thị dữ liệu
SELECT * FROM users
WHERE email LIKE '%user2%'
- is null
SELECT * FROM users
WHERE updated_at IS NULL
- not
SELECT * FROM users
WHERE updated_at IS NOT NULL
