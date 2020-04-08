import { Employee } from "./Employee.js";
import { useComputers } from "../computers/ComputerDataProvider.js";
import { useEmployees } from "./EmployeeDataProvider.js";
import { useDepartments } from "../departments/DepartmentDataProvider.js";
import { useLocations } from "../locations/LocationDataProvider.js";
import { useCustomers } from "../customers/CustomerDataProvider.js";
import { useEmployeeCustomers } from "./EmployeeCustomerProvider.js";

const contentTarget = document.querySelector(".container")


export const EmployeeList = () => {
    const employeeCollection = useEmployees()
    const computerCOllection = useComputers()
    const departmentCollection = useDepartments()
    const locationCollection = useLocations()
    const customerCollection = useCustomers()
    const customerRelationships = useEmployeeCustomers()


    employeeCollection.map(singleEmployee => {
        
        const foundComputer = computerCOllection.find(singleComputer => singleComputer.id === singleEmployee.computerId)
        const foundDepartment = departmentCollection.find(singleDepartment => singleEmployee.departmentId === singleDepartment.id)
        const foundLocation = locationCollection.find(singleLocation => singleEmployee.locationId === singleLocation.id)
        const relationships = customerRelationships.filter(empCustObj => empCustObj.employeeId === singleEmployee.id)
        const assignedCustomers = relationships.map(rel => {
            return customerCollection.find(custObj => custObj.id === rel.customerId)
        })
        
        
        
        contentTarget.innerHTML += Employee(singleEmployee, foundComputer, foundDepartment, foundLocation, assignedCustomers)
        
    }).join(" ")




}


