# Debug assignment 2 - instructions

In this assignment, you'll be editing an existing software project. There are several problems in the code, and it's your job to find and fix them all.

## Rules

- Do not ask your classmates (verbally or through any other communication method) for help
- Do not copy/paste any code from someone else or from any online resource
- Do not use ChatGPT or any other AI code tools
- Do not edit any files in the `instructions` folder

## Process

- This repository has been automatically created for you
- **Clone** it onto your machine (**do not** fork it)
- Work on the `main` branch, and make all your commits there
- Run `git push` to sync your local changes with the remote repository
- A pull request (PR) has been automatically created on the remote repository for you (**do not** delete this)
- When you have made your final commits (and pushed), request a review on the PR from your assigned reviewer

## Project context

*Snack Rankings* is a back-end project that allows users to view and vote on their favourite snacks.

This project has two key elements:

- An API that allows users to vote on snacks and see a list of snacks with their total votes
- A database storing the snack data

**The database is not provided to you for this project; you'll need to [configure](#database) your own.**

## Instructions

Get the project working without any error messages and with full functionality as described below.

### API

The API should be runnable with a single command. When the server is running, it should listen for requests on port 3000.

The API should have the following routes and functionalities:

| Route | Method | Response |
| --- | --- | --- |
| `/` | `GET` | Returns a JSON object describing the API. |
| `/snacks` | `GET` | Returns a JSON object containing all the snacks. |
| `/snacks` | `POST` | Accepts a JSON object and uses it to create and store a new snack. |
| `/snacks/top` | `GET` | Returns a JSON object representing the snack with the most votes. |
| `/snacks/:id` | `GET` | Returns a JSON object representing a single snack from the collection, selected by `:id`. |
| `/snacks/:id` | `PATCH` | Updates a specific snack, incrementing or decrementing its vote count. |
| `/snacks/:id` | `DELETE` | Deletes a specific snack, selected by `:id`. |

Use an API testing platform such as Hoppscotch, Postman or Insomnia to test the API. 

### Database

The API codebase contains a setup script for a database, but no database is currently connected.

As part of the assignment, you'll need to connect a database and verify that the setup script (and all queries used in the app) function as expected.

### README

The project README should contain clear information on the following:

1. How to install the required libraries
2. How to run the server
3. Any remaining bugs in the project

---

[Back](../README.md)

---
