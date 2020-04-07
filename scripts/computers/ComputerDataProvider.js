let computers = []


export const getComputers = () => {
    return fetch("http://localhost:8888/computers")
    .then(res => res.json())
    .then(parsedComputers => {
        computers = parsedComputers
    })
}


export const useComputers = () => {
    return computers.slice()
}