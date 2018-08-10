# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

CRUD listings endpoints:
Create: POST: localhost:3000/listings
  takes: data: {
    listing_review_average : INT,
    listing_review_total : INT,
    listing_host_name : VARCHAR(50),
    listing_address : TEXT,
    listing_host_photo_url : VARCHAR(255),
    listing_description : TEXT,
    listing_space_description : TEXT,
    listing_neighborhood_description : TEXT
  }
  
  Read: GET: localhost:3000/listings
    returns: [20 last created {listings}]

  Read: GET: localhost:3000/listings/:listing_id
    returns: {listing object}

  Update: PUT: localhost:3000/listings/:listing_id
    takes: newListingData: {listingObj}
  
  Delete: DELETE: localhost:3000/listings/:listing_id
    deletes: {listing @listing_id}


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
npm run react-dev

within the database directory, run schema.sql then run Populator.js to populate the database.
```

