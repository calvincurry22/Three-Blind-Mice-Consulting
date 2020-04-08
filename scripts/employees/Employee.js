

export const Employee = (employeeObj, computerObj, departmentObj, locationObj, customerArray) => {
    
    return `
        <div class="employeeCard">
            <h2 class="employeeName">${employeeObj.firstName} ${employeeObj.lastName}</h2>
            <p class="employeeAge">Age: ${employeeObj.age}</p>
            <p class="employeeLocation">Office Location: ${locationObj.name}</p>
            <p class="employeeDepartment">Department: ${departmentObj.name}</p>
            <p class="computerModel">Computer Model: ${computerObj.model} ${computerObj.year}</p>
            <section class="employeeCustomers">Worked for the following customers: 
                <ul>
                    ${customerArray.map(singleCustomer => {
                        return `
                            <li>${singleCustomer.name}</p>
                        `
                     }).join(" ")}
                </ul> 
            </section>
       </div>
    `
}