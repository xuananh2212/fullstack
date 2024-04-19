-- sắp xếp kết quả theo giá id courses tăng dân
-- thêm 1 cột 'discount' ở câu lệnh truy vấn , theo điều kiện sau: giá >= 200000 -> 10%, ngược lại 0
-- thêm cột 1 cột 'sale_price'
SELECT 
	users.name , 
	users.email, 
	(
	CASE 
	WHEN courses.price >= 2000 THEN '10%'
	ELSE '0%'
	END 
	) as discount,
	(courses.price - courses.price * (CASE 
	WHEN courses.price >= 2000 THEN 10
	ELSE 0
	END ) / 100) as sale_price,
	courses.*, 
	users_courses.*
FROM users
JOIN users_courses
on users_courses.user_id = users.id
JOIN courses
ON courses.id = users_courses.course_id
ORDER BY courses.price desc
-- chuyển số trang : -> offset = (page - 1 ) * limit
