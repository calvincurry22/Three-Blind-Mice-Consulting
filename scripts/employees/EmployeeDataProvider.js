let employees = []


export const getEmployees = () => {
    return fetch("http://localhost:8888/employees")
    .then(res => res.json())
    .then(parsedEmployees => {
        employees = parsedEmployees
    })
}


export const useEmployees = () => employees.slice()






