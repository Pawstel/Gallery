\timing

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(30) NOT NULL,
  user_photo_url VARCHAR(250)
);

CREATE TABLE lists (
  id SERIAL PRIMARY KEY,
  list_name VARCHAR(50),
  list_user_id INTEGER NOT NULL --REFERENCES users(id)
);

CREATE TABLE listings (
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

CREATE TABLE listings_lists (
  listing_id INTEGER NOT NULL, --REFERENCES listings(id),
  list_id INTEGER NOT NULL --REFERENCES lists(id)
);

CREATE TABLE listing_photos (
  id SERIAL PRIMARY KEY,
  photo_description VARCHAR(255),
  photo_url VARCHAR(200) NOT NULL,
  photo_listing_id INTEGER NOT NULL --REFERENCES listings(id)
);

\copy users (user_name, user_photo_url) from '/csvFolder/users/data1.csv' DELIMITERS ',' CSV;
\copy lists (list_name, list_user_id) from '/csvFolder/lists/data1.csv' DELIMITERS ',' CSV;
\copy listings (listing_name, listing_review_average, listing_review_total, listing_host_name, listing_address, listing_host_photo_url, listing_description, listing_space_description, listing_neighborhood_description) from '/csvFolder/listings/alldata.csv' DELIMITERS ',' CSV;
\copy listings_lists (listing_id, list_id) from '/csvFolder/listing_lists/data1.csv' DELIMITERS ',' CSV;
\copy listing_photos (photo_description, photo_url, photo_listing_id) from '/csvFolder/listing_photos/data1.csv' DELIMITERS '|' CSV;

ALTER TABLE lists ADD CONSTRAINT user_fk FOREIGN KEY (list_user_id) REFERENCES users (id) MATCH FULL;
ALTER TABLE listings_lists ADD CONSTRAINT list_fk FOREIGN KEY (list_id) REFERENCES lists (id) MATCH FULL;
ALTER TABLE listings_lists ADD CONSTRAINT listing_list_fk FOREIGN KEY (listing_id) REFERENCES listings (id) MATCH FULL;
ALTER TABLE listing_photos ADD CONSTRAINT listing_fk FOREIGN KEY (photo_listing_id) REFERENCES listings (id) MATCH FULL;

CREATE INDEX photo_listing_listing_id_index ON listing_photos(photo_listing_id);
CREATE INDEX listing_name_index ON listings(listing_name);
CREATE INDEX user_lists_index ON lists(list_user_id);

-- ZIP CSVs
-- tar -cvzf psqlCSVfold.tar.gz csvFolder
-- UNZIP CSVs
-- gunzip -c psqlCSVfold.tar.gz | tar xvf -
