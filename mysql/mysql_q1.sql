TABLE companies
   id INTEGER PRIMARY KEY,
   name VARCHAR (30) NOT NULL,
   country VARCHAR (30) NOT NULL




-- Answer
SELECT country,COUNT(*) FROM `companies` WHERE 1
GROUP BY country
ORDER BY country ASC;
