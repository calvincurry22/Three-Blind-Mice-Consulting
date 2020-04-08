let departments = []


export const getDepartments = () => {
    return fetch("http://localhost:8888/departments")
    .then(res => res.json())
    .then(parsedDepartments => {
        departments = parsedDepartments
    })
}



export const useDepartments = () => departments.slice()
