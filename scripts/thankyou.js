

const fruitsURL = "./data/fruit.json";
function calculateNutrition() {
    const getFruits = async () => {
        const response = await fetch("../data/fruit.json");
        const fruitsInfo = await response.json();
        let fruit1 = document.getElementById("fruits1");

        fruitsInfo.forEach(element => {
            if (element.name == fruit1.target.value){
                console.log(element.nutritions);
            }
        });
    }


    const params = new URLSearchParams(window.location.search);
    const firstName = params.get('first-name');
    const email = params.get('email');
    const phone = params.get('phone');
    const fruits = params.getAll('fruit');
    console.log(fruits)
    const specialInstructions = params.get('special-instructions');

    // Display the order details on the page
    document.getElementById('firstName').textContent = firstName;
    document.getElementById('email').textContent = email;
    document.getElementById('phone').textContent = phone;
    document.getElementById('fruits').textContent = fruits.join(', ');
    document.getElementById('specialInstructions').textContent = specialInstructions;

    // Fetch and calculate nutritional information
    const fetchNutritionalInfo = async () => {
  
    const response = await fetch(fruitsURL)
      const data = await response.json();
      let totalCarbs = 0;
      let totalProtein = 0;
      let totalFat = 0;
      let totalSugar = 0;
      let totalCalories = 0;
      console.log(data)

      fruits.forEach(fruit => {
        console.log(fruit)
        let array = data.fruits.filter((item) => {
            return item.name == fruit
        })
        console.log(array)
        totalCarbs += array[0].nutritions.carbohydrates
        totalProtein += array[0].nutritions.protein
        totalFat += array[0].nutritions.fat
        totalSugar += array[0].nutritions.sugar
        totalCalories += array[0].nutritions.calories

      })

      // Display the nutritional information on the page
      document.getElementById('carbohydrates').textContent = totalCarbs.toFixed(2);
      document.getElementById('protein').textContent = totalProtein.toFixed(2);
      document.getElementById('fat').textContent = totalFat.toFixed(2);
      document.getElementById('sugar').textContent = totalSugar.toFixed(2);
      document.getElementById('calories').textContent = totalCalories.toFixed(2);
    };

    fetchNutritionalInfo();

    // Set the estimated pickup time
    const pickupTime = new Date();
    pickupTime.setHours(pickupTime.getHours() + 2); // Example: Pickup in 2 hours
    document.getElementById('pickupTime').textContent = pickupTime.toLocaleString();
}
calculateNutrition()