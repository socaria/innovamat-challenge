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

Make sure you have Node *v12.x* installed:</br>
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
In case of doesn't have npm you can install via `npm`</br>
</br>
    bash $ npm install -g nodemon</br>
</br>
restart the bash console
</br>
## Development

### Initial setup

1. Clone the repo.

2. Install dependencies in the root folder:

    $ npm i
  

4. Start the development server:

    $ npm run nodemon


5. For GET type requests you can access from the browser with the routes indicates in the instructions. For the oders requests you have to install POSTMAN following the instructions in se POSTMAN section (in the end of this README)

6. Run the suits test:

    $ npm test

## Instructions
### `Get the registered students`

Use the following routes to get the registered students:

To get all the students: 
http://localhost:3000/student

To get a particular student, for example student 1:
http://localhost:3000/student?studentId=1

### `Get the itinerary`

Use the following routes to get the available itineraries:

To get all the itineraries: 
http://localhost:3000/itinerary

To get the calculus itinerary:
http://localhost:3000/itinerary?itineraryId=1

### `Get the next activity of some student`

Use the following route to see the next activity of some student:
http://localhost:3000/activity/:studentId?itineraryId=1

#### Examples:

Student 1: itinerary isn't started
http://localhost:3000/activity/1?itineraryId=1

Student 2: itinerary is in progress
http://localhost:3000/activity/2?itineraryId=1

Student 3: itinerary is finished
http://localhost:3000/activity/3?itineraryId=1

### `Post a response of some student`
Use the following routes to post a response of some student:
http://localhost:3000/response/studentId?itineraryId=1
You have to send a object in the body with this information:


{
    "activityId",
    "time",
    "result"
}

#### Example
##### Student 1, activity A1

route:

http://localhost:3000/response/1?itineraryId=1

send by body:

{
    "activityId": "A1",
    "time": 60,
    "result": "1_0_2"
}

##### Student 2, activity A3

route:

http://localhost:3000/response/2?itineraryId=1

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


. Create a new `Collection` to group there all the requests that we are going to make for this project. For that click on the `Collections` button, then select `+` and give it a name.

<p align="center">
  <img src=https://user-images.githubusercontent.com/103151285/223133669-e729b1a9-5738-4cd8-969c-5ec964e2fcb6.png alt='Img' />
</p>

2. Create a new `Request`, give it a name 

<p align="center">
  <img src=https://user-images.githubusercontent.com/103151285/223133729-c7b35acf-c017-4374-b639-6674403c74e6.png alt='Img' />

</p>

<p align="center">
  <img src=https://user-images.githubusercontent.com/103151285/223133815-a2a298d5-2d5d-4666-a656-6b60ef0a6942.png alt='Img' />

</p>

- Indicate type of Request:

    * GET
    * POST

- Indicate the URL http://localhost:3000/

- Include the `Params` or the `Body` depending on the type of Request you make
