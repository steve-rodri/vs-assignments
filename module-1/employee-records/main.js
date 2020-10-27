const employees = [];

function Employee(name, jobTitle, salary, status = "Full Time") {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = status;
}

Employee.prototype.printEmployeeForm = function () {
  console.log(
    `Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}"`
  );
};

let bobVance = new Employee("Bob Vance", "Owner", "$100,000");
let michaelScott = new Employee(
  "Michael Scott",
  "Regional Manager",
  "$60,000",
  "Part Time"
);
let dwightSchrute = new Employee(
  "Dwight Schrute",
  "Assistant to the Regional Manager",
  "$45,000"
);

bobVance.status = "Part Time";

bobVance.printEmployeeForm();
michaelScott.printEmployeeForm();
dwightSchrute.printEmployeeForm();

employees.push(bobVance);
employees.push(michaelScott);
employees.push(dwightSchrute);
