let employeeCustomers = []


export const getEmployeeCustomers = () => {
    return fetch("http://localhost:8888/employeeCustomers")
    .then(res => res.json())
    .then(parsedEmployeeCustomers => employeeCustomers = parsedEmployeeCustomers)
}



export const useEmployeeCustomers = () => employeeCustomers.slice()

