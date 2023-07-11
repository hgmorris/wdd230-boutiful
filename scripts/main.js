var lastModified = document.lastModified;
let lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.innerHTML = lastModified;
//-------------------------------------------------------------------

var images = ['hero-img-1', 'hero-img-2', 'hero-img-3', 'hero-img-4'];
var index = 0;

function cycleImages() {
    document.getElementById(images[index]).style.display = 'none';

    index++;
    if (index >= images.length) {
        index = 0;
    }
    document.getElementById(images[index]).style.display = 'block';

    setTimeout(cycleImages, 3000);
}



//----------------------------------------------------------------------------------------------------------------------------------------

const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Los%20Angeles%2C%20California?unitGroup=metric&key=B7NKJ24KZHZ58EX3SH9EE8J9E&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    document.querySelector('#t').textContent = Math.round(t * 5/9 +32 );
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
document.querySelector('#ws').textContent = data.currentConditions.windspeed;
document.querySelector('#condition').textContent =  data.currentConditions.conditions;
document.querySelector('#weather_icon').src = image;
document.querySelector('#weather_icon').alt= data.currentConditions.conditions + ' icon';
};



//-------------------------------------------------------------------------------------

const totalCount = localStorage.getItem('smoothieCount') || 0;
const totalElement = document.getElementById('number-of-drinks');
totalElement.textContent = totalCount;
//--------------------------------------------------------------------------------------------------------------------------------------------------------

const newsAPIURL = "https://newsapi.org/v2/everything?q=Los-Angeles-California-Food&sortBy=publishedAt&apiKey=2e9124a7be4943789b86e0761026ee46";
const getNews = async () => {
    const response = await fetch(newsAPIURL);
    const data = await response.json();
    console.log(data);

    for (let index = 0; index < 3; index++) {
        let newsArticle = data.articles[index];

        console.log(newsArticle.title);
        let tittle = document.querySelector(`#news${index} h3`);
        tittle.textContent = newsArticle.title;

        console.log(newsArticle.description);
        let description = document.querySelector(`#news${index} p`);
        description.textContent = newsArticle.description;

        console.log(newsArticle.urlToImage);
        let image = document.querySelector(`#news${index} img`);
        image.src = newsArticle.urlToImage;
    }
}



function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 34.0522, lng: -118.2437},
      zoom: 12
    });
    var marker = new google.maps.Marker({
      position: {lat: 34.0522, lng: -118.2437},
      map: map,
      title: 'Los Angeles'
    });
  }

async function loadAll(){
    // cycleImages();
    await getWeather();
    await getNews();
    initMap();
}