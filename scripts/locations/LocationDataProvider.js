let locations = []

export const getLocations = () => {
    return fetch("http://localhost:8888/locations")
    .then(res => res.json())
    .then(parsedLocations => locations = parsedLocations)
}



export const useLocations = () => locations.slice()