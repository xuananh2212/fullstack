--
SELECT users.id, users.email, count(posts.id)
FROM posts
RIGHT JOIN users
ON users.id = posts.user_id
GROUP BY users.id, users.email , posts.user_id;

SELECT users.*, (SELECT count(posts.id) FROM posts WHERE posts.user_id = users.id) 
FROM users 

SELECT users.id, users.email, count(posts.id)
FROM posts
RIGHT JOIN users
ON users.id = posts.user_id
GROUP BY users.id, users.email , posts.user_id
HAVING count(posts.id) >= 2


SELECT users.* 
FROM users
WHERE users.id = (
  SELECT max_posts.user_id
  FROM (
  SELECT posts.user_id , count(posts.id) AS count_posts
  FROM posts
  GROUP BY posts.user_id
	  ) AS max_posts
  WHERE max_posts.count_posts = (
	SELECT MAX(max_p.count_posts) 
	  FROM ( SELECT count(posts.id) AS count_posts
            FROM posts
			GROUP BY posts.user_id
			) as max_p
  )
  FETCH NEXT 1 ROWS ONLY

)
SELECT users.id, users.email, count(posts.id)
FROM posts
RIGHT JOIN users
ON users.id = posts.user_id
GROUP BY users.id, users.email , posts.user_id
HAVING count(posts.id) = (
	SELECT MAX(posts_count) as posts_count FROM
   (SELECT  count(posts.id) as posts_count
	FROM posts
	RIGHT JOIN users
	ON users.id = posts.user_id
	GROUP BY users.id, users.email , posts.user_id
	)
)
 FETCH NEXT 1 ROWS ONLY
 
 
 
 
 


