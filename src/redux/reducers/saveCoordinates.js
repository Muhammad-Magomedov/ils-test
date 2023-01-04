const initialState = {
    coordinates: [
        {
            key: '1',
            req_number: '1',
            lat_coordinates_ot: "59.84660399",
            Ing_coordinates_ot: "30.29496382",
            lat_coordinates_do: "59.82934196",
            Ing_coordinates_do: "30.42423701",
        },
        {
            key: '2',
            req_number: '2',
            lat_coordinates_ot: "59.82934196",
            Ing_coordinates_ot: "30.42423701",
            lat_coordinates_do: "59.82761295",
            Ing_coordinates_do: "30.41705607",
        },
        {
            key: '3',
            req_number: '3',
            lat_coordinates_ot: "59.83567701",
            Ing_coordinates_ot: "30.38064206",
            lat_coordinates_do: "59.84660399",
            Ing_coordinates_do: "30.29496392",
        },
        {
            key: '4',
            req_number: '4',
            lat_coordinates_ot: "59.84660399",
            Ing_coordinates_ot: "30.29496392",
            lat_coordinates_do: "59.82761295",
            Ing_coordinates_do: "30.41705607",
        },
        {
            key: '5',
            req_number: '5',
            lat_coordinates_ot: "59.83567701",
            Ing_coordinates_ot: "30.38064206",
            lat_coordinates_do: "59.84660399",
            Ing_coordinates_do: "30.29496392",
        },
    ],
    currentCoordinate: {
        key: '1',
        req_number: '1',
        lat_coordinates_ot: "59.84660399",
        Ing_coordinates_ot: "30.29496382",
        lat_coordinates_do: "59.82934196",
        Ing_coordinates_do: "30.42423701",
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "SAVE_COORDINATE": {
            return {
                ...state,
                currentCoordinate: action.payload
            }
        }
        default: {
            return { ...state }
        }
    }
}