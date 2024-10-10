


let baseSalary1 = document.getElementById("base-salary");
let years1 = document.getElementById("years");
let baseSalary2 = document.getElementById("base-salary2");
let years2 = document.getElementById("years2");
let baseSalary3 = document.getElementById("base-salary3");
let years3 = document.getElementById("years3");
let form = document.getElementById("form"); 
let totalSalary = document.getElementById("total-salary");


form.addEventListener("submit", function(event) {
    event.preventDefault();

    
    let basic1 = Number(baseSalary1.value);
    let yEAR1 = Number(years1.value);
    let basic2 = Number(baseSalary2.value);
    let yEAR2 = Number(years2.value);
    let basic3 = Number(baseSalary3.value);
    let yEAR3 = Number(years3.value);

    
    const calculateTotalSalary = (baseSalary, yearsOfService) => {
        let bonusPercent = yearsOfService >= 5 ? 0.10 : 0.05;  
        return  baseSalary * bonusPercent; 
    };


    const firstEmployeeSalary = calculateTotalSalary(basic1, yEAR1);
    const secondEmployeeSalary = calculateTotalSalary(basic2, yEAR2);
    const thirdEmployeeSalary = calculateTotalSalary(basic3, yEAR3);

    
    const totalCompanySalary = firstEmployeeSalary + secondEmployeeSalary + thirdEmployeeSalary;


    totalSalary.textContent = `Total salary the company needs to pay is: $${totalCompanySalary.toFixed(2)}`;


    form.reset();

});
