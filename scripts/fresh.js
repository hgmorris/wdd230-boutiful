var lastModified = document.lastModified;
let lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.innerHTML = lastModified;
//----------------------------------------------------------------------------------

const submitButton = document.querySelector('button[type="submit"]');
let smoothieCount = parseInt(localStorage.getItem("smoothieCount"));
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    smoothieCount += 1;
    
    localStorage.setItem('smoothieCount', smoothieCount);
    
});

//------------------------------------------------------------------------------------

const fruitsURL = "https://andejuli.github.io/wdd230/fruit.json";
const getFruits = async () => {
    const response = await fetch(fruitsURL);
    const data = await response.json();
    console.log(data);

    data.forEach(element => {
        var newoption = document.createElement("option");
        newoption.value = String(element.name);
        newoption.textContent = String(element.name);

        var select1 = document.getElementById('fruits1');
        select1.appendChild(newoption);
    });

    data.forEach(element => {
        var newoption = document.createElement("option");
        newoption.value = String(element.name);
        newoption.textContent = String(element.name);

        var select2 = document.getElementById('fruits2');
        select2.appendChild(newoption);
    });

    data.forEach(element => {
        var newoption = document.createElement("option");
        newoption.value = String(element.name);
        newoption.textContent = String(element.name);

        var select3 = document.getElementById('fruits3');
        select3.appendChild(newoption);
    });
}

getFruits();

//----------------------------------------------------------------------------------------

function calculateNutrition() {
    const getFruits = async () => {
        const response = await fetch("https://andejuli.github.io/wdd230/fruit.json");
        const fruitsInfo = await response.json();
        let fruit1 = document.getElementById("fruits1");

        fruitsInfo.forEach(element => {
            if (element.name == fruit1.target.value){
                console.log(element.nutritions);
            }
        });
    }

}

function submitForm(event) {
    event.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var specialInstructions = document.getElementById('specialInstructions').value;
    var orderDate = new Date();
    var output = 'Order Details:<br><br>';
    output += 'First Name: ' + firstName + '<br>';
    output += 'Email: ' + email + '<br>';
    output += 'Phone: ' + phone + '<br>';
    output += 'Fruit Selections: ' + fruitNames + '<br>';
    output += 'Special Instructions: ' + specialInstructions + '<br>';
    output += 'Order Date: ' + orderDate + '<br>';
    output += 'Nutrition Information:<br>';
    output += 'Total Carbohydrates: <span id="carbs"></span><br>';
    output += 'Total Protein: <span id="protein"></span><br>';
    output += 'Total Fat: <span id="fat"></span><br>';
    output += 'Total Sugar: <span id="sugar"></span><br>';
    output += 'Total Calories: <span id="calories"></span><br>';
    document.getElementById('output').innerHTML = output;
    calculateNutrition();
}
