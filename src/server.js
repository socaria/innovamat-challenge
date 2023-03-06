const express = require("express");
const { getActivity } = require("./routes/activity");
const { getItinerary } = require("./routes/itinerary");
const { getStudent } = require("./routes/student");
const { postResponse } = require("./routes/response");


const server = express();
server.use(express.json());

server.get("/itinerary", getItinerary);
server.get("/student", getStudent);
server.get("/activity/:studentId", getActivity);
server.post("/response/:studentId", postResponse);



module.exports = {server};