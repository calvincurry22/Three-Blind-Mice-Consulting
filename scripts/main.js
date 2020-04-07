import { getEmployees } from "./employees/EmployeeDataProvider.js";
import { getComputers } from "./computers/ComputerDataProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js";



getComputers()
    .then(getEmployees)
    .then(EmployeeList)