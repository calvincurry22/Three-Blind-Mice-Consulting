import { getEmployees } from "./employees/EmployeeDataProvider.js";
import { getComputers } from "./computers/ComputerDataProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { getDepartments } from "./departments/DepartmentDataProvider.js";
import { getLocations } from "./locations/LocationDataProvider.js";



getComputers()
    .then(getEmployees)
    .then(getDepartments)
    .then(getLocations)
    .then(EmployeeList)





    