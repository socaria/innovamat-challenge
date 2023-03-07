const itineraries = require('../../mocks/itineraries.json');

const getItinerary = (req, res) => {
    const { itineraryId } = req.params;

    try {
        if (itineraryId) {
            const itinerary = itineraries.find(itinerary => itinerary.id === parseInt(itineraryId))

            return res.send(itinerary);
        } else {
            return res.send(itineraries);
        }
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
}

module.exports = { getItinerary };
