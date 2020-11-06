# Code-Along Workshops

## Introduction

Quickly work through all major areas of the full stack so you can see it all come together:

- Client-side a.k.a. Frontend (React)
- Server-side a.k.a Backend (Express, and Database (MySQL).

## Goal

After working through this practice repo, you should be able to quickly build and work in any ExpressJS application.

Building a basic CRUD app should be mostly muscle memory.

## Getting started

**How to perform this activity:**

In class, we will work through all parts (as much as we can)

**_NOTE_**: The code written in class has many different styles (ES5 functions, ES6 functions, async callbacks, promises, etc) to show a variety of ways to handle the same functionality.

Once we have finished, you should delete everything and start over for yourself!

On the second rebuild: Do not reference code you already wrote for this assignment! Instead, rely on DOCUMENTATION and your CHEATSHEET.

## Part 1: ReactJS (Fetching Directly)

In your frontend folder:

**Using the [NASA Astronomy Picture of the Day API](https://api.nasa.gov/):**

- Refactor the given React code to do the following:
  - On page load, fetch the Astronomy Picture of the Day from NASA API and render to the page
  - Include the date, explanation, title, and image

## Part 2: Server API

Objectives _(read this carefully)_:

- Create a server that responds to the specified RESTful routes
- Each route should respond back with **dummy data for now**

Technologies:

- Node
- Express
- NPM
- Git

_ROUTES (PART 1)_

| METHOD | PATH               | DESCRIPTION                             |
| ------ | ------------------ | --------------------------------------- |
| GET    | /api/picture     | respond with string "the picture" |

Technologies:
- MySQL
- MySQLJS
- Postman

_ROUTES (PART 2)_
| METHOD | PATH               | DESCRIPTION                             |
| ------ | ------------------ | --------------------------------------- |
| GET    | /api/picture     | respond with the Astronomy Picture of the Day Information |

## Part 3: MySQL Queries

- Connect your server to your database using MySQLJS (mysql javascript)
- Complete the server routes outlined in the route table below (use the queries.js helper functions)

Technologies:

- MySQL
- MySQLJS
- Postman

_ROUTES:_

| METHOD | PATH               | DESCRIPTION                                          |
| ------ | ------------------ | ---------------------------------------------------- |
| GET    | /api/picture     | respond with the Astronomy Picture of the Day from the database     |

-- If the picture does not exist in the database, add it
* Note, this is slightly awkward logic, but that's okay for now!

## Part 4: ReactJS (Refactor using Data From Your Server API)

In your frontend folder:

**Using the Astronomy Picture of the Day data from your server API routes:**

- Update your React app to:
  - View the Astronomy Picture of the Day from the server (not directly accessing the NASA API)

**HINT: You will need to use AJAX (Fetch, Axios, etc) to allow your client side code to talk to your server.**

You've already created the endpoints below, now you need to use AJAX to communicate to them and get the info you need to the client-side code:

| METHOD | PATH               | DESCRIPTION                                          |
| ------ | ------------------ | ---------------------------------------------------- |
| GET    | /api/picture     | respond with the Astronomy Picture of the day                       |
