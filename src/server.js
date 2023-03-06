const express = require("express");
const { getActivity } = require("./routes/activity");
const { getItinerary } = require("./routes/itinerary");
const { getStudent } = require("./routes/student");
const { postSequence } = require("./routes/sequence");


const server = express();
server.use(express.json());

server.get("/itinerary", getItinerary);
server.get("/student", getStudent);
server.get("/activity/:studentId", getActivity);
server.post("/sequence/:studentId", postSequence);



module.exports = {server};