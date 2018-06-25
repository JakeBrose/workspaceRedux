-- June 25, exercise 1
-- write a function called increment that takes
-- in a value ( age ) and increments it by 1.

CREATE FUNCTION increment (i integer) RETURNS integer
AS 'select age + 1'
LANGUAGE SQL;

-- June 25, exercise 2
-- table = random_string with text column containing a random string
-- remove vowels from string using regex

SELECT REGEXP_SPLIT_TO_TABLE(text, '[aeiouAEIOU]')
AS results
FROM random_string

-- June 25, exercise 3
-- create a new table called results
-- that has the id, name, and stock
-- from the products table where the stock is 2 or less

create table results
  as (select id, name, stock
      from products
      where stock <= 2
      AND producent = 'CompanyA'
      order by id)

