// Simple Mock Data
const trips = [
    { id: 1,
        destination: 'Paris',
        location: 'France',
        continet: 'Europe',
        language: 'French',
        description: 'The city of lights and love.',
        flightCost: 500,
        hotelCost: 150,
        foodCost: 70,
        visacost: 60,
        currencycode: 'EUR' },
    { id: 2,
        destination: 'Tokyo',
        location: 'Japan',
        continet: 'Asia',
        language: 'Japanese',
        description: 'A bustling metropolis blending tradition and modernity.',
        flightCost: 800,
        hotelCost: 200,
        foodCost: 80,
        visacost: 40,
        currencycode: 'JPY' },

    { id: 3,
        destination: 'New York',
        location: 'USA',
        continet: 'North America',
        language: 'English',
        description: 'The city that never sleeps.',
        flightCost: 300,
        hotelCost: 180,
        foodCost: 90,
        visacost: 0,
        currencycode: 'USD' },

    { id: 4,
        destination: 'Sydney',
        location: 'Australia',
        continet: 'Australia',
        language: 'English',
        description: 'Famous for its Sydney Opera House and beautiful beaches.',
        flightCost: 900,
        hotelCost: 220,
        foodCost: 85,
        visacost: 100,
        currencycode: 'AUD' },
];

function GetTripWithDailyCost() {
    for (let i = 0;i < trips.length;i++) {
        const trip = trips[i];
        trip.totalDailyCost = trip.hotelCost + trip.foodCost + trip.visacost + trip.flightCost;
    }
    return trips;
}  

module.exports = {GetTripWithDailyCost, trips};
        