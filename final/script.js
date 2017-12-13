var size = 1;
var pepperCount = 0;
var hamCount = 0;
var pepperoniCount = 0;

if (window.location.hash === '') {
  window.location.hash = '#intro'
}

function sizeof(pizzaSize) {
  clearToppings(); 
  
  if (pizzaSize === "sm") {
    size = 1;
    addBase();
  } else if (pizzaSize === "md") {
    size = 2;
    addBase();
  }
  else if (pizzaSize === "lg") {
    size = 3;
    addBase();
  }
}

function rand(i) {
  var r = Math.floor((Math.random() * (size * 50)) + i);
  return r;
}

function clearToppings() {
  var pepper = document.getElementById("pepper");
  var ham = document.getElementById("ham");
  var pepperoni = document.getElementById("pepperoni");

  if (pepperCount != 0){
    for (var i = 0; i < (pepperCount * (size * 5)); i++) {
      pepper.removeChild(pepper.childNodes[0]);
    }
    pepperCount = 0;
  }

  if (hamCount != 0){
    for (var i = 0; i < (hamCount * (size * 6)); i++) {
      ham.removeChild(ham.childNodes[0]);
    }
    hamCount = 0;
  }

  if (pepperoniCount != 0){
    for (var i = 0; i < (pepperoniCount * (size * 4)); i++) {
      pepperoni.removeChild(pepperoni.childNodes[0]);
    }
    pepperoniCount = 0;
  }
}

function addPepper() {
  var pepper = document.getElementById("pepper");
  
  for (var i = 0; i < (size * 5); i++) {
    var peppers = document.createElement("div");
    peppers.className = "manyPepper";
    peppers.style.transform = "translate(" + rand(i) + "px, " + rand(i) + "px) rotate(" + rand(i) +"deg) skew(" + (rand(i)/5) + "deg, " + (rand(i)/5) + "deg)";

    pepper.appendChild(peppers);
  }
  
  pepper.style.transform = "translate(" + size * 17 + "px, " + size * 17 + "px)";
  pepper.style.transition = "1s";

  pepperCount++;
  return pepper;
}

function addHam() {
  var ham = document.getElementById("ham");
  
  for (var i = 0; i < (size * 6); i++) {
    var hams = document.createElement("div");
    hams.className = "manyHam";
    hams.style.transform = "translate(" + rand(i) + "px, " + rand(i) + "px) rotate(" + rand(i) +"deg)";


    ham.appendChild(hams);
  }
  
  hams.style.transition = "1s";
  ham.style.transform = "translate(" + size * 17 + "px, " + size * 17 + "px)";
  ham.style.transition = "1s";

  hamCount++;
  return ham;
}

function addPepperoni() {
  var pepperoni = document.getElementById("pepperoni");
  
  for (var i = 0; i < (size * 4); i++) {
    var pepperonis = document.createElement("div");
    pepperonis.className = "manyPepperoni";
    pepperonis.style.transform = "translate(" + rand(i) + "px, " + rand(i) + "px)";

    pepperoni.appendChild(pepperonis);
  }
  
  pepperoni.style.transform = "translate(" + size * 17 + "px, " + size * 17 + "px)";
  pepperoni.style.transition = "1s";

  pepperoniCount++;
  return pepperoni;
}


function addBase() {
  var pizza = document.getElementById("pizza");
  var base = document.getElementById("base");
  var cheese = document.getElementById("cheese");

  base.style.width = size * 75 + 30 + "px";
  base.style.height = size * 75 + 30 + "px";
  base.style.border = "10px solid #f5ba0a"
  base.style.borderRadius = size * 75 + 30 + "px";
  cheese.style.width = size * 75 + "px";
  cheese.style.height = size * 75 + "px";
  cheese.style.border = "10px solid #f8dc56"
  cheese.style.borderRadius = size * 75 + "px";

  
  
  cheese.style.transform = "translate(5px, 5px)";

  cheese.style.transition = "1s";
  base.style.transition = "1s";

  base.appendChild(cheese);
  pizza.appendChild(base);

  
  return pizza;
}

function clearPizza() {
  location.reload();
}

function pizzaBuilder(pSize, pizzaPepperoni, pizzaHam, pizzaPepper) {
  var pizzaArray = {pSize:pSize, pepperoni:pizzaPepperoni, ham:pizzaHam, pepper:pizzaPepper};
  return pizzaArray;
}

function makePizza() {
  var pSize = "sm";
  var pizzaPepperoni = false;
  var pizzaHam = false;
  var pizzaPepper = false;

  if (size === 1) {
    pSize = "Small";
  } else if (size === 2) {
    pSize = "Medium";
  } else if (size === 3) {
    pSize = "Large";
  }

  if (pepperoniCount != 0) {
    pizzaPepperoni = true;
  }
  if (hamCount != 0) {
    pizzaHam = true;
  }
  if (pepperCount != 0) {
    pizzaPepper = true;
  }

  var pizzaArray = pizzaBuilder(pSize, pizzaPepperoni, pizzaHam, pizzaPepper);

  localStorage.setItem('pizza', JSON.stringify(pizzaArray));

  document.getElementById("outputPizza").innerHTML = "Selection Saved";
}

function displayPizza() {
  var pizzaArray = JSON.parse(localStorage.getItem('pizza'));
  var summary = "";

  var outputPizza = document.getElementById('outputPizza');

  if (localStorage.getItem('pizza') === null) {
    outputPizza.innerHTML = "Nothing to display, Local Storage is empty";
    return;
  }
  
  if (pizzaArray.pepperoni === true)
    summary += "Pepperoni ";
  if (pizzaArray.ham === true)
    summary += "Ham ";
  if (pizzaArray.pepper === true)
    summary += "Pepper ";
  summary += "Pizza";

  outputPizza.innerHTML = "You Ordered: " + pizzaArray.pSize + " " + summary;
}


/************ Map ***********/

function personBuilder(personName, personPhone, personAddress, personCity, personState, personZip, personTime) {
  var personArray = {name: personName, phone: personPhone, address: personAddress, city: personCity, state: personState, zip: personZip, time: personTime};
    
  return personArray;
}

function makePerson() {
  var personName = document.getElementById("name").value;
  var personPhone = document.getElementById("phone").value;
  var personAddress = document.getElementById("address").value;
  var personCity = document.getElementById("city").value;
  var personState = document.getElementById("state").value;
  var personZip = document.getElementById("zip").value;
  var personTime = document.getElementById("time").value;

  var personArray = personBuilder(personName, personPhone, personAddress, 
    personCity, personState, personZip, personTime);

  localStorage.setItem('person', JSON.stringify(personArray));
  outputPerson.innerHTML = "Information saved";
}

function displayPerson() {
  var personArray = JSON.parse(localStorage.getItem('person'));
  var summary = "";

  var outputPerson = document.getElementById('outputPerson');

  if (localStorage.getItem('person') === null) {
    outputPerson.innerHTML = "Nothing to display, Local Storage is empty";
    return;
  }

  outputPerson.innerHTML = personArray.name + " (" + personArray.phone + ")<br>" + 
  personArray.address + "<br>" + personArray.city + " " + personArray.state 
  + " "  + personArray.zip + "<br>Estimated time of delivery is " + personArray.time;
  
}
/*
function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}
*/

/*
var map;
var infowindow;

function initMap() {
  var rexburg = {lat: 43.825683, lng: -111.788654};

  map = new google.maps.Map(document.getElementById('map'), {
    center: rexburg,
    zoom: 14
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: rexburg,
    radius: 2500,
    type: ['airport']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  })
}
*/

/********** Billing *********/

function billBuilder(billingName, billingAddress, cardNum, expDate, cid) {
  var billArray = {billingName: billingName, billingAddress: billingAddress, cardNum: cardNum, expDate: expDate, cid: cid};
    
  return billArray;
}

function makeBill() {
  var billingName = document.getElementById("billingName").value;
  var billingAddress = document.getElementById("billingAddress").value;
  var cardNum = document.getElementById("cardNum").value;
  var expDate = document.getElementById("expDate").value;
  var cid = document.getElementById("cid").value;

  var billArray = billBuilder(billingName, billingAddress, cardNum, expDate, cid);

  localStorage.setItem('bill', JSON.stringify(billArray));
  outputBilling.innerHTML = "Payment information saved";

}

function displayBill() {
  var billArray = JSON.parse(localStorage.getItem('bill'));
  var summary = "";

  var outputBilling = document.getElementById('outputBilling');

  if (localStorage.getItem('bill') === null) {
    outputBilling.innerHTML = "Nothing to display, Local Storage is empty";
    return;
  }

  outputBilling.innerHTML = billArray.billingName + "<br>" + 
  billArray.billingAddress + "<br>" + billArray.cardNum + "<br>" + billArray.expDate + "<br>" + billArray.cid;
  
}



/*********** Summary *********/

function orderSummary() {
  //location.reload();
  var pizzaArray = JSON.parse(localStorage.getItem('pizza'));
  var personArray = JSON.parse(localStorage.getItem('person'));
  var summary = "";

  if (localStorage.getItem('pizza') === null || localStorage.getItem('person') === null) {
    outputPizza.innerHTML = "Nothing to display, Local Storage is empty";
    return;
  }

  if (pizzaArray.pepperoni === true)
    summary += "Pepperoni ";
  if (pizzaArray.ham === true)
    summary += "Ham ";
  if (pizzaArray.pepper === true)
    summary += "Pepper ";
  summary += "Pizza";

  output.innerHTML = personArray.name + " (" + personArray.phone + ")<br>" 
  + "You Ordered: " + pizzaArray.pSize + " " + summary + 
  "<hr>Your Pizza will be delivered to:<br>" + personArray.address + "<br>" 
  + personArray.city + " " + personArray.state + " "  + personArray.zip + 
  "<br>Estimated time of delivery is " + personArray.time;;
}

function displayPizza() {
  var pizzaArray = JSON.parse(localStorage.getItem('pizza'));
  var summary = "";

  var outputPizza = document.getElementById('outputPizza');

  if (localStorage.getItem('pizza') === null) {
    outputPizza.innerHTML = "Nothing to display, Local Storage is empty";
    return;
  }
  
  if (pizzaArray.pepperoni === true)
    summary += "Pepperoni ";
  if (pizzaArray.ham === true)
    summary += "Ham ";
  if (pizzaArray.pepper === true)
    summary += "Pepper ";
  summary += "Pizza";

}
function displayPerson() {
  var personArray = JSON.parse(localStorage.getItem('person'));
  var summary = "";

  var outputPerson = document.getElementById('outputPerson');

  if (localStorage.getItem('person') === null) {
    outputPerson.innerHTML = "Nothing to display, Local Storage is empty";
    return;
  }

  outputPerson.innerHTML = personArray.name + " (" + personArray.phone + ")<br>" + 
  personArray.address + "<br>" + personArray.city + " " + personArray.state 
  + " "  + personArray.zip + "<br>Estimated time of delivery is " + personArray.time;
  
}


function drawCanvas() {
  var draw = document.getElementById("draw");
  draw.style.visibility = "hidden";
  var canvas = document.getElementById("canvas");
  var next = document.createElement("a");
  var main = document.getElementById("main");
  next.type = "button";
  next.className = "fancy_button";

  next.addEventListener('click', function() {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    output.innerHTML = "";
    location.reload();
  }, false);

  next.innerHTML = "Order another pizza";
  next.id = "next";
  next.href = "#intro";
  main.appendChild(next);


  var img = new Image();
  img.addEventListener('load', function() {
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 300, 100, 600, 550, 0, 0, 250, 150);
      ctx.fillStyle = "red";
      ctx.moveTo(75, 32);
      ctx.lineTo(93, 10);
      ctx.lineTo(110, 32);
      ctx.stroke();
      ctx.fill();
      ctx.fillStyle = "yellow";
      ctx.beginPath();
      ctx.arc(93, 10, 8, 0, 2*Math.PI);
      ctx.stroke();
      ctx.fill();
      
    }
  }, false);
  img.src = "../llama_logo/llama.png";
  
  output.innerHTML = "<h2>Your pizza will be arriving by Party Pizza Llama shortly!</h2>";

}
