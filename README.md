# Innovamat-challenge

## Description

### The application works in the following way: 
(Assuming that there is a set of activities in the itinerary, with at least one activity for each level of difficulty.)

The student asks for an activity to the API.

If the student has not started the itinerary, the API will return the first activity in the itinerary.
If the student has completed the itinerary, that is to say, the student has solved the last activity of the itinerary correctly, the API will return a response saying that there are no more available activities, since the itinerary has already been completed.
Once the student gets the next activity to do, he/she will do all the required exercises through the application. When done, the application will send the results to the API, specifying the following parameters:

The identifier of the activity obtained in the previous step.
The identifier of the student who has solved the activity.
A string with the ordered results of the exercises done. For example, for an activity with 4 exercises: "1_34_-5_'none'".
The time spent by the student to do the activity.

## Starting configuration

1. Run `npm install` from "innovamat-challenge" folder to get all the dependencies
2. Run `npm test` to run the tests
3. Run `npm run nodemon` to start the server
4. `http://localhost:3000`

## Instructions

### `GET/ activity/:studentId?itineraryId=1`

Student 1: itinerary isn't started
http://localhost:3000/activity/1?itineraryId=1

Student 2: itinerary is in progress
http://localhost:3000/activity/2?itineraryId=1

Student 3: itinerary is finished
http://localhost:3000/activity/3?itineraryId=1

