import { Employee } from "./Employee.js";
import { useComputers } from "../computers/ComputerDataProvider.js";
import { useEmployees } from "./EmployeeDataProvider.js";
import { useDepartments } from "../departments/DepartmentDataProvider.js";

const contentTarget = document.querySelector(".container")


export const EmployeeList = () => {
    const employeeCollection = useEmployees()
    const computerCOllection = useComputers()
    const departmentCollection = useDepartments()

    employeeCollection.map(singleEmployee => {
        const foundComputer = computerCOllection.find(singleComputer => singleComputer.id === singleEmployee.computerId)
        const foundDepartment = departmentCollection.find(singleDepartment => singleEmployee.departmentId === singleDepartment.id)

        contentTarget.innerHTML += Employee(singleEmployee, foundComputer, foundDepartment)
        
    }).join(" ")
}