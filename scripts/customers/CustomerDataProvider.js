let customers = []


export const getCustomers = () => {
    return fetch("http://localhost:8888/customers")
    .then(res=> res.json())
    .then(parsedCustomers => customers = parsedCustomers)
}



export const useCustomers = () => customers.slice()
