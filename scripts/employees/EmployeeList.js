import { Employee } from "./Employee.js";
import { useComputers } from "../computers/ComputerDataProvider.js";
import { useEmployees } from "./EmployeeDataProvider.js";

const contentTarget = document.querySelector(".container")


export const EmployeeList = () => {
    const employeeCollection = useEmployees()
    const computerCOllection = useComputers()

    employeeCollection.map(singleEmployee => {
        const foundComputer = computerCOllection.find(singleComputer => singleComputer.id === singleEmployee.computerId)

        contentTarget.innerHTML += Employee(singleEmployee, foundComputer)
        
    }).join(" ")
}