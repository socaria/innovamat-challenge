# Innovamat-challenge

## Description

### The application has the following structure: 

* src/app.js: it is the starting point of the application, here we have the server conection.
* src/server.js: is the server where are the end-points of our API.
* src/routes: there are the routes declarated of each entity.
* src/utils: there are the methos "score", "nextActivity" and nextActivityAdaptativeFactor".
* src/tests: there are the tests for the utils methods.
* mocks: there are the mocked information about itineraries and students.

## Starting configuration

Make sure you have Node *v16.x* installed:</br>
</br>
    bash $ node -v
</br>
    v16.15.0
</br>
</br>
It's recommended using [nvm](https://github.com/nvm-sh/nvm) to install it or manage versions.</br>
</br>
In case of doesn't have npm you can install via `nvm`</br>
    bash $ nvm install node v16.15.0 </br>

Make sure you have nodemon globally installed </br>
</br>
    bash $ nodemon -v </br>
    v2.0.9 </br>
</br>
In case of doesn't have nodemon you can install via `npm`</br>
</br>
    bash $ npm install -g nodemon</br>
</br>
restart the bash console
</br>

## Initial setup

1. Clone the repo.

2. Install dependencies in the root folder:

    $ npm i
  

3. Start the development server:

    $ npm start


4. For GET requests you can access from the browser with the routes indicates in the instructions section. For the oders requests you have to install POSTMAN following the instructions in the POSTMAN section (at the end of this README)

6. Run the tests:

    $ npm test

## Instructions
### `Get the registered students`

Use the following routes to get the registered students:

To get all the students: 
http://localhost:3000/students

To get a particular student, for example student 1:
http://localhost:3000/students/1

### `Get the itinerary`

Use the following routes to get the available itineraries:

To get all the itineraries: 
http://localhost:3000/itineraries

To get the calculus itinerary:
http://localhost:3000/itineraries/1

### `Get the next activity of some student`

Use the following route to see the next activity of some student:
http://localhost:3000/activities/:studentId?itineraryId=1

#### Examples:

Student 1: itinerary isn't started
http://localhost:3000/activities/1?itineraryId=1

Student 2: itinerary is in progress
http://localhost:3000/activities/2?itineraryId=1

Student 3: itinerary is finished
http://localhost:3000/activities/3?itineraryId=1

### `Get the next activity of some student with adaptative factor`

Use the following route to see the next activity of some student:
http://localhost:3000/activities-adaptative-factor/:studentId?itineraryId=1

#### Examples:

Student 1: itinerary isn't started
http://localhost:3000/activities-adaptative-factor/1?itineraryId=1

Student 2: itinerary is in progress, but the students has to go back to the previous level
http://localhost:3000/activities-adaptative-factor/4?itineraryId=1

Student 3: itinerary is finished
http://localhost:3000/activities/3?itineraryId=1
### `Post a response of some student`
Use the following routes to post a response of some student:
http://localhost:3000/students/:studentId/response?itineraryId=1

You have to choose the "POST" method and send a object in the body with this information:


{
    "activityId": string;
    "time": number;
    "result": string;
}

#### Example
##### Student 1, activity A1

route:

http://localhost:3000/students/1/response?itineraryId=1

send by body:

{
    "activityId": "A1",
    "time": 60,
    "result": "1_0_2"
}

##### Student 2, activity A3

route:

http://localhost:3000/students/2/response?itineraryId=1


send by body:

{
    "activityId": "A4",
    "time": 60,
    "result": "1_0_-5_9"
}


## Postman

### Download

Download the postman application from https://www.postman.com/downloads/

### Instructions

Once installed, you will be able to access to "MyWorkSpace" from the following Postman screen:

<p align="center">
<img src=https://user-images.githubusercontent.com/103151285/223133354-2958bccd-4cdf-4a83-bcc8-404a1c628450.png alt='Img' />
</p>


1. Create a new `Collection` to group there all the requests that we are going to make for this project. For that click on the `Collections` button, then select `+` and give it a name.

<p align="center">
  <img src=https://user-images.githubusercontent.com/103151285/223133669-e729b1a9-5738-4cd8-969c-5ec964e2fcb6.png alt='Img' />
</p>

2. Create a new `Request` and give it a name 

<p align="center">
  <img src=https://user-images.githubusercontent.com/103151285/223133729-c7b35acf-c017-4374-b639-6674403c74e6.png alt='Img' />

</p>

<p align="center">
  <img src=https://user-images.githubusercontent.com/103151285/223133815-a2a298d5-2d5d-4666-a656-6b60ef0a6942.png alt='Img' />

</p>

- Indicate type of Request:

    * GET
    * POST

- Indicate the base URL http://localhost:3000/

- Include the `route`, `params` or the `body` depending on the type of request you will perform
