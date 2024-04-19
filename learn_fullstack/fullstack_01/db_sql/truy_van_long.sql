SELECT * FROM users_courses
SELECT  user_id,  COUNT(*) as sum_count 
FROM users_courses
GROUP BY user_id 
HAVING  count(*) > 1

SELECT * from users
where (SELECT count (*) from users_courses where users_courses.user_id = users.id) > 1

select * from 
(
select users.* ,
(SELECT count (*) from users_courses where users_courses.user_id = users.id) as count_user
from users) as m
where count_user > 1