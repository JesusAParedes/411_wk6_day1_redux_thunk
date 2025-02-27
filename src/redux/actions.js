const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
};

export const fetchMakes = () => {
    return (dispatch) => {
      fetch(url)
        .then(res => res.json())
        .then(response => {
          const action = {
            type: 'FETCH_MAKES',
            value: response.Results
          }
          dispatch(action)
        })
    }};

export const deleteMakes = (index) => {
    return {
        type: 'REMOVE_MAKES',
        value: index
    }
};



// export const fetchMakes = () => {
//     return async cars => {
//         const response = await fetch(url);
//         const action = (
//             {
//                 type: "FETCH_MAKES",
//                 value: response.Results
//             }
//         )
    
//     };
// };