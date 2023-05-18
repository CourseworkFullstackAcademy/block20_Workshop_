const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const h1Freelancers = document.createElement("h1");
    h1Freelancers.innerHTML = "FREELANCERS";
    document.body.appendChild(h1Freelancers);

    const rootDiv = document.getElementById("root");
    rootDiv.appendChild(h1Freelancers);
   
    const ulUsers = document.createElement("ul");
    
   
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      ulUsers.appendChild(li);
    });
   
    document.body.appendChild(ulUsers);
   }

//call the main function
main();

const root = document.querySelector('.root');
root.style.backgroundColor = 'yellow';
root.style.color = 'red';
