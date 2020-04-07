

export const Employee = (employeeObj, computerObj) => {
    return `
        <div class="employeeCard">
            <h2 class="employeeName">${employeeObj.firstName} ${employeeObj.lastName}</h2>
            <p class="employeeAge">Age: ${employeeObj.age}</p>
            <p class="computerModel">Computer Model: ${computerObj.model}</p>
            <p class="computerYear">Computer Manufacture year: ${computerObj.year}</p>
       </div>
    `
}