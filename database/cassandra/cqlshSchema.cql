DROP KEYSPACE IF EXISTS pawstel_gallery_service;

-- CREATE KEYSPACE pawstel_gallery_service WITH replication = {'class':'SimpleStrategy','replication_factor':1};

-- USE pawstel_gallery_service;

-- CREATE TABLE photo_listings (
--   id INT PRIMARY KEY,
--   listing_id INT, --WOULD BE FOREIGN KEY
--   photo_url TEXT,
--   descriptions TEXT
-- );

-- CREATE TABLE listings (
--   id INT PRIMARY KEY,
--   listing_name TEXT,
--   listing_review_average INT,
--   listing_review_total INT,
--   listing_owner_user_id INT,
--   listing_address TEXT,
--   listing_description TEXT,
--   listing_space_description TEXT,
--   listing_neighborhood_description TEXT
--   -- listing_photos SET<INT> -- PHOTO LISTING IDS
-- );

-- CREATE TABLE favorite_lists (
--   id INT PRIMARY KEY,
--   owner_id INT,
--   list_name TEXT,
--   list_ids SET<INT>
-- );

--  CREATE TABLE users (
--   id INT PRIMARY KEY,
--   user_name VARCHAR,
--   user_photo_url VARCHAR,
--   fav_lists_ids SET<int>,
--   listings_ids SET<int>
-- );

-- COPY photo_listings(
--   id,
--   listing_id,
--   photo_url,
--   descriptions
-- ) FROM '/Users/EnemyBoss/Projects/HackReactor/pawstel/Gallery/database/csvFolder/photos/data1.csv' WITH HEADER=false AND DELIMITER='|';

-- COPY listings(
--   id,
--   listing_name,
--   listing_review_average,
--   listing_review_total,
--   listing_owner_user_id,
--   listing_address,
--   listing_description,
--   listing_space_description,
--   listing_neighborhood_description
-- ) FROM '/Users/EnemyBoss/Projects/HackReactor/pawstel/Gallery/database/csvFolder/listings/data1.csv' WITH HEADER=false AND DELIMITER='|';

-- COPY favorite_lists(
--   id,
--   owner_id,
--   list_name,
--   list_ids
-- ) FROM '/Users/EnemyBoss/Projects/HackReactor/pawstel/Gallery/database/csvFolder/favorites/data1.csv' WITH HEADER=false AND DELIMITER='|';

-- COPY users(
--   id,
--   user_name,
--   user_photo_url,
--   listings_ids
-- ) FROM '/Users/EnemyBoss/Projects/HackReactor/pawstel/Gallery/database/csvFolder/users/data1.csv' WITH HEADER=false AND DELIMITER='|';



-- ZIP CSVs
-- tar -cvzf cqlshCSVfold.tar.gz csvFolder
-- UNZIP CSVs
-- gunzip -c cqlshCSVfold.tar.gz | tar xvf -