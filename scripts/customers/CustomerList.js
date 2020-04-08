import { useComputers } from "../computers/ComputerDataProvider.js";
import { useEmployees } from "../employees/EmployeeDataProvider.js";
import { useCustomers } from "./CustomerDataProvider.js";
import { useEmployeeCustomers } from "../employees/EmployeeCustomerProvider.js";
import { Customer } from "./Customer.js";

const contentTarget = document.querySelector(".customersContainer")

export const CustomerList = () => {
    const employeeCollection = useEmployees()
    
    const customerCollection = useCustomers()
    const customerRelationships = useEmployeeCustomers()


    customerCollection.map(singleCustomer => {
        
        const relationships = customerRelationships.filter(empCustObj => empCustObj.customerId === singleCustomer.id)
        const assignedEmployees = relationships.map(rel => {
            return employeeCollection.find(employeeObj => employeeObj.id === rel.employeeId)
        })
        
        
        
        contentTarget.innerHTML += Customer(singleCustomer, assignedEmployees)
        
    }).join(" ")




}