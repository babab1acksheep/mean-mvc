# MEAN Song rating app
This small web application is a modified version of the AngularJS song rate app. They differ in storage scenario. While the original version is storing the songs inside the HTML5 LocalStorage, this application is storing the information inside a MongoDB.
This application demonstrates the usage of the MEAN stack, containing:
* MongoDB
* Express.js
* AngularJS
* Node.js

This application will be used in the Become MEAN tutorial, which you can at [http://g00glen00b.be](http://g00glen00b.be/mean-stack).

## Installation
Clone this repo and install all front-end dependencies by using:
```
bower install
```
If you're not interested in Bower you can still manually install all libraries.
The back-end dependencies (Mongoose & Express.js) can be retrieved using npm, by invoking the command:
```
npm install
```

## Libraries

### MongoDB
MongoDB is a NoSQL database, allowing you to store object structures using BSON. It's the way to go when considering to write a web application using a pure JavaScript stack (for example with Node.js).

### Express.js
Express.js is a web framework for Node.js, allowing you to easily write handlers and provide both static and dynamic resources.
Due to its structure it's also fairly easy to write your web application using the Model-View-Controller pattern.

### Mongoose
Mongoose is probably the most MongoDB client framework in Node.js. It allows you to set connections and provide schemes and models.

### Node.js
Node.js is a JavaScript platform using the V8 engine. It's a popular solution for serverside JavaScript code.

### AngularJS
AngularJS is a JavaScript client-side MVC framework made by the folks of Google.

### Twitter Bootstrap
Twitter Bootstrap is a responsive UI library written by Twitter.

### Font awesome
Font Awesome is an iconic font which can be used to display many icons onto your web application.

### Lo-dash
Lo-dash is a utility belt for JavaScript and provides utilities for functions, objects and collections.

### Underscore.string
Underscore.string is a utility library for String manipulating in JavaScript.
