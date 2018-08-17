-- DROP DATABASE IF EXISTS pawstel_gallery_service;
CREATE DATABASE IF NOT EXISTS pawstel_gallery_service;

-- DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(30) NOT NULL,
  user_photo_url VARCHAR(250) NOT NULL
);
-- DROP TABLE IF EXISTS lists CASCADE;
CREATE TABLE IF NOT EXISTS lists (
  id SERIAL PRIMARY KEY,
  list_name VARCHAR(50) ,
  list_user_id INTEGER NOT NULL REFERENCES users(id)
);
-- DROP TABLE IF EXISTS listings CASCADE;
CREATE TABLE IF NOT EXISTS listings (
  id SERIAL PRIMARY KEY,
  listing_name TEXT,
  listing_review_average INTEGER,
  listing_review_total INTEGER,
  listing_host_name VARCHAR(50),
  listing_address TEXT,
  listing_host_photo_url VARCHAR(255),
  listing_description TEXT,
  listing_space_description TEXT,
  listing_neighborhood_description TEXT
);
-- DROP TABLE IF EXISTS listings_lists CASCADE;
CREATE TABLE IF NOT EXISTS listings_lists (
  listing_id INTEGER NOT NULL REFERENCES listings(id),
  list_id INTEGER NOT NULL REFERENCES lists(id)
);
-- DROP TABLE IF EXISTS listing_photos CASCADE;
CREATE TABLE IF NOT EXISTS listing_photos (
  id SERIAL PRIMARY KEY,
  photo_description VARCHAR(255),
  photo_url VARCHAR(200) NOT NULL,
  photo_listing_id INTEGER NOT NULL REFERENCES listings(id)
);

-- copy users (user_name, user_photo_url) from '/Users/EnemyBoss/Projects/HackReactor/pawstel/Gallery/database/csvFolder/users/data1.csv' DELIMITERS ',' CSV;
-- copy lists (list_name, list_user_id) from '/Users/EnemyBoss/Projects/HackReactor/pawstel/Gallery/database/csvFolder/lists/data1.csv' DELIMITERS ',' CSV;
-- copy listings (listing_name, listing_review_average, listing_review_total, listing_host_name, listing_address, listing_host_photo_url, listing_description, listing_space_description, listing_neighborhood_description) from '/Users/EnemyBoss/Projects/HackReactor/pawstel/Gallery/database/csvFolder/listings/data1.csv' DELIMITERS ',' CSV;
-- copy listings (listing_name, listing_review_average, listing_review_total, listing_host_name, listing_address, listing_host_photo_url, listing_description, listing_space_description, listing_neighborhood_description) from '/Users/EnemyBoss/Projects/HackReactor/pawstel/Gallery/database/csvFolder/listings/data2.csv' DELIMITERS ',' CSV;
-- copy listings (listing_name, listing_review_average, listing_review_total, listing_host_name, listing_address, listing_host_photo_url, listing_description, listing_space_description, listing_neighborhood_description) from '/Users/EnemyBoss/Projects/HackReactor/pawstel/Gallery/database/csvFolder/listings/data3.csv' DELIMITERS ',' CSV;
-- copy listings (listing_name, listing_review_average, listing_review_total, listing_host_name, listing_address, listing_host_photo_url, listing_description, listing_space_description, listing_neighborhood_description) from '/Users/EnemyBoss/Projects/HackReactor/pawstel/Gallery/database/csvFolder/listings/alldata.csv' DELIMITERS ',' CSV;
-- copy listings_lists (listing_id, list_id) from '/Users/EnemyBoss/Projects/HackReactor/pawstel/Gallery/database/csvFolder/listing_lists/data1.csv' DELIMITERS ',' CSV;
-- copy listing_photos (photo_description, photo_url, photo_listing_id) from '/Users/EnemyBoss/Projects/HackReactor/pawstel/Gallery/database/csvFolder/listing_photos/data1.csv' DELIMITERS ',' CSV;


CREATE INDEX photo_listing_listing_id_index ON listing_photos(photo_listing_id);
CREATE INDEX listing_name_index ON listings(listing_name);



-- ZIP CSVs
-- tar -cvzf psqlCSVfold.tar.gz csvFolder
-- UNZIP CSVs
-- gunzip -c psqlCSVfold.tar.gz | tar xvf -