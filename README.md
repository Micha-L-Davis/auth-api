# Auth API Server 

Latest Pull Request: https://github.com/Micha-L-Davis/auth-api/pull/1

## Installation

1. Clone this repository onto your local machine
2. `cd` into `./auth-api`
3. Install package dependencies with `npm install`

## Author

Micha Davis

## Routes

### V1
Valid `Model` types include `clothes` and `food`

* GET : `/:model`
    * Parameters: 
        * Model type
    * Response
        * 500 if invalid
        * 200 if valid and all entries of that model type.   

* GET : `/:model/:id`
    * Parameters: 
        * model type
        * id number
    * Response
        * 404 if not found
        * 200 if found, and the entry found.   

* POST : `/:model` 
    * Parameters:
        * JSON object in body matching model schema     
    * Response:
        * 201 and the created object

* PUT : `/:model/:id`
    * Response:
        * 200 and the updated record

* DELETE : `/:model/:id`
    * Parameters:
        * model type
        * id number 
    * Response:
        * 200 and the id of the deleted object.

### V2

* GET : `/:model`
    * Parameters: 
        * Model type
    * Response
        * 500 if invalid
        * 200 if valid and all entries of that model type.   

* GET : `/:model/:id`
    * Parameters: 
        * model type
        * id number
    * Response
        * 404 if not found
        * 200 if found, and the entry found.   

* POST : `/:model` 
    * Parameters:
        * JSON object in body matching model schema     
    * Response:
        * 201 and the created object

* PUT : `/:model/:id`
    * Response:
        * 200 and the updated record

* DELETE : `/:model/:id`
    * Parameters:
        * model type
        * id number 
    * Response:
        * 200 and the id of the deleted object.
