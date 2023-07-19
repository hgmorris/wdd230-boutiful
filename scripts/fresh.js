var lastModified = document.lastModified;
let lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.innerHTML = lastModified;
//----------------------------------------------------------------------------------

const submitButton = document.querySelector('input[type="submit"]');
let smoothieCount = parseInt(localStorage.getItem("smoothieCount"));
submitButton.addEventListener('click', function(event) {
    
    
    smoothieCount += 1;
    
    localStorage.setItem('smoothieCount', smoothieCount);
    
    
});

//------------------------------------------------------------------------------------

const fruitsURL = "../data/fruit.json";
const getFruits = async () => {
    const response = await fetch(fruitsURL);
    const data = await response.json();
    console.log(data);

    data.fruits.forEach(element => {
        var newoption = document.createElement("option");
        newoption.value = String(element.name);
        newoption.textContent = String(element.name);

        var select1 = document.getElementById('fruits1');
        select1.appendChild(newoption);
    });

    data.fruits.forEach(element => {
        var newoption = document.createElement("option");
        newoption.value = String(element.name);
        newoption.textContent = String(element.name);

        var select2 = document.getElementById('fruits2');
        select2.appendChild(newoption);
    });

    data.fruits.forEach(element => {
        var newoption = document.createElement("option");
        newoption.value = String(element.name);
        newoption.textContent = String(element.name);

        var select3 = document.getElementById('fruits3');
        select3.appendChild(newoption);
    });
}

getFruits();

//----------------------------------------------------------------------------------------

function submitForm(event) {
   
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
