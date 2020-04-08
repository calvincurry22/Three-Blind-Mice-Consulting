import { getEmployees } from "./employees/EmployeeDataProvider.js";
import { getComputers } from "./computers/ComputerDataProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { getDepartments } from "./departments/DepartmentDataProvider.js";
import { getLocations } from "./locations/LocationDataProvider.js";
import { getCustomers } from "./customers/CustomerDataProvider.js";
import { getEmployeeCustomers } from "./employees/EmployeeCustomerProvider.js";
import { CustomerList } from "./customers/CustomerList.js";



getComputers()
    .then(getEmployees)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(EmployeeList)
    .then(CustomerList)





    