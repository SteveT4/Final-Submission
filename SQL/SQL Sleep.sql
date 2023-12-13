CREATE TABLE Person (
  person_id INT PRIMARY KEY,
  person_first_name text,
  person_last_name text,
  person_age int,
  person_height float,
  person_weight float
  );
  
CREATE TABLE Sleep (
  sleep_id INT PRIMARY KEY,
  sleep_days int,
  sleep_hours_perday float,
  person_id INT,
  FOREIGN KEY (person_id) REFERENCES person(person_id)
  );
    
CREATE TABLE Diet (
  diet_id INT PRIMARY KEY,
  diet_calories_consumed int,
  diet_calories_burnt int,
  person_id INT,
  FOREIGN KEY (person_id) REFERENCES person(person_id)
  );  
  
 
  
 INSERT INTO Person VALUES
 	(1,"John", "Doe", 25, 5.10, 10.0),
    (2,"Steve", "Taylor", 42, 5.8, 10.7),
    (3,"James", "Ryan", 44, 6.2, 12.0),
    (4,"Abigail", "Jones", 32, 5.6, 8.4);
 
 insert into Sleep VALUES
 	(101, 1, 7.5, 1),
    (102, 2, 6.0, 2),
    (103, 3, 8.0, 3),
    (104, 4, 9.5, 4);
    
 insert into Diet VALUES
 	(201, 2500, 1000, 1),
    (202, 4000, 1500, 2),
    (203, 1000, 50, 3),
    (204, 500, 100, 4);
    
 
 	
SELECT Person.person_first_name, Sleep.sleep_days, Diet.diet_calories_consumed
FROM Person
INNER JOIN Sleep ON Person.person_id = Sleep.person_id 
INNER Join Diet ON Person.person_id = Diet.person_id;
    
let name = "Steve";
console.log (name);
