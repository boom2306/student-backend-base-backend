const express = require('express');
const {
    RetrieveAllTrips,
    CreateTrip,
    DeleteTripById,
    UpdateTripById,
    RetrieveTripById
} = require('../controller/TripController');

const TripRouter = express.Router();

TripRouter.route('/')
.get(RetrieveAllTrips)
.post(CreateTrip);

TripRouter.route('/:id')
.get(RetrieveTripById)
.delete(DeleteTripById)
.put(UpdateTripById);

module.exports = TripRouter;