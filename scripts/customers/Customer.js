export const Customer = (customerObj, employeeArray) => {

    return `
        <h2>Customer Name: ${customerObj.name}</h2>
        <section>Employees worked with:
            <ul>
                ${employeeArray.map(singleEmployee => {
                    return `<li>${singleEmployee.firstName} ${singleEmployee.lastName}</li>`
                }).join(" ")}
            </ul>
        </section>
    `
} 