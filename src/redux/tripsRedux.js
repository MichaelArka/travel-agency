/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // [DONE] filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // [DONE] TODO  - filter by duration

  output = output.filter((trip) => {
    const condition = filters.duration;
    return condition.from <= trip.days && condition.to >= trip.days;
  });

  // [DONE] TODO - filter by tags

  output = output.filter((trip) => {
    const conditionTwo = filters.tags;
    return conditionTwo.every(tag => trip.tags.includes(tag));
  });
  // [DONE] TODO - sort by cost descending (most expensive goes first)

  output = output.sort((tripOne, tripTwo) => {
    const [costOne, costTwo] = [tripOne, tripTwo].map((trip) =>
    Number(trip.cost.replace(/[^0-9.]+/g, ''))
    );

    if (costOne > costTwo) {
      return -1;
    };
    if (costOne < costTwo) {
      return 1;

    } else {
      return 0;
    };
    
  });

  // var.replace(/[^0-9]+/g, '');  
  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips;

  // [DONE] TODO - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered.find(trip => trip.id === tripId) : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips;

  // [DONE] TODO - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered.filter(trip => trip.country.code === countryCode) : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
// const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
