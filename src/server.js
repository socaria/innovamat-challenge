const express = require("express");

const { getActivity } = require("./routes/activity");
const { getItinerary } = require("./routes/itinerary");
const { getStudent } = require("./routes/student");
const { postResponse } = require("./routes/response");
const { getActivityAdaptativeFactor } = require("./routes/activityAdaptativeFactor")

const server = express();

server.use(express.json());

server.get("/itineraries", getItinerary);
server.get("/itineraries/:itineraryId", getItinerary);

server.get("/students", getStudent);
server.get("/students/:studentId", getStudent);

server.post("/students/:studentId/response", postResponse);

server.get("/activity/:studentId", getActivity);
server.get("/activity-adaptative-factor/:studentId", getActivityAdaptativeFactor);

module.exports = {server};