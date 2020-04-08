

export const Employee = (employeeObj, computerObj, departmentObj) => {
    return `
        <div class="employeeCard">
            <h2 class="employeeName">${employeeObj.firstName} ${employeeObj.lastName}</h2>
            <p class="employeeAge">Age: ${employeeObj.age}</p>
            <p class="employeeDepartment">Department: ${departmentObj.name}</p>
            <p class="computerModel">Computer Model: ${computerObj.model} ${computerObj.year}</p>
       </div>
    `
}