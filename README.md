# Debug Assignment 2 - Back-end Snack Rankings project


## Description

The purpose of this project is essentially an API that allows users to vote on snacks and see a list of snacks with their total votes. To ensure its versatile, the voting system enables a user to specify the number of votes to add or subtract from a certain snack. The database that stores the data has been configured with Elephant SQL. Furthermore, you are able to select specific snacks based on their ID, display all snacks at once, delete a snack based on its unique ID number and create a new snack to add to the database.

## Getting Started

### Dependencies

* First of all ensure you have Node.js installed on your machine
* Install express to build the server
* Install dotenv to process variables stored in a .env file
* Install cors to enable cross-origin requests in the API
* Install pg to to allow for API to interact with the SQL database
```
npm install express dotenv cors pg
```

### Development Dependencies 

* Install nodemon as a development dependency to run the server
```
npm install nodemon -D
```

### Executing program

After all dependencies have been installed the following steps are followed to run the program:

* Upload your database as the .env is placed in the .gitignore file and is not uploaded to my repo.
* Run the setting up of the database: 
```
npm run setup-db
```
* Start the server:
```
npm run dev
```
* Access your local host at http://localhost:3000/ (assuming you set the PORT to 3000)
* To return a JSON object describing the API: http://localhost:3000/ 
* To return a JSON object containing all the snacks: http://localhost:3000/snacks
* To return a JSON object representing the snack with the most votes: http://localhost:3000/snacks/top
* To return a JSON object representing a single snack from the collection, selected by its snack_id value: http://localhost:3000/snacks/:snack_id (where you replace :snack_id by the actual number value)
* To add a new snack create a POST request in ThunderClient: http://localhost:3000/snacks and in the JSON section add snack_name (string), snack_description (string), healthy (BOOLEAN), vegetarian (BOOLEAN)
* To increment or decrement vote value by specific amount create a PATCH in ThunderClient request: http://localhost:3000/snacks/:snack_id/:vote_val (where you replace :snack_id by actual number of snack id and :vote_val by the number of votes.). If you want to subtract you can use the negative value it works fine. It also wont return negative votes.
* To delete a specific snack by its snack_id value: http://localhost:3000/snacks/:snack_id (where you replace :snack_id by the actual number value)

## Remaining bugs

* Have not noticed any. Works as I expect/want it to work

## Author

Constantinos Stylianou
