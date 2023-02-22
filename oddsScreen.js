<script>

// Create a variable for the API endpoint. 
let xanoUrl = new URL('https://x8ki-letl-twmt.n7.xano.io/api:cY_49sjB/');

// Define a function (set of operations) to get restaurant information.
// This will use the GET request on the URL endpoint
function getRestaurants() {

    // Create a request variable and assign a new XMLHttpRequest object to it.
    // XMLHttpRequest is the standard way you access an API in plain Javascript.
    let request = new XMLHttpRequest();

    // Define a function (set of operations) to get restaurant information.
    // Creates a variable that will take the URL from above and makes sure it displays as a string. 
    // We then add the word 'restaurant" so the API endpoint becomes https://x715-fe9c-6426.n7.xano.io/api:Iw1iInWB/restaurant
    //let url = xanoUrl.toString() + 'americanfootball_nfldb';
		let url = xanoUrl.toString() + 'bestfeaturedodds';

    // Remember the 'request' was defined above as the standard way to access an API in Javascript.
    // GET is the verb we're using to GET data from Xano
    request.open('GET', url, true)

    // When the 'request' or API request loads, do the following...
    request.onload = function() {

        // Store what we get back from the Xano API as a variable called 'data' and converts it to a javascript object
        let data = JSON.parse(this.response)

        // Status 200 = Success. Status 400 = Problem.  This says if it's successful and no problems, then execute 
        if (request.status >= 200 && request.status < 400) {

            // Map a variable called cardContainer to the Webflow element called "Cards-Container"
            const cardContainer = document.getElementById("odds-container")

            // This is called a For Loop. This goes through each object being passed back from the Xano API and does something.
            // Specifically, it says "For every element in Data (response from API), call each individual item restaurant"
            data.forEach(odd => {

                // For each restaurant, create a div called card and style with the "Sample Card" class
                const card = document.createElement('div')
                card.setAttribute('class', 'sampleodds');

                // When a restuarant card is clicked, navigate to the item page by passing the restaurant id
                //card.addEventListener('click', function() {
                //    document.location.href = "/item?id=" + restaurant.id;
                //});

                // For each restaurant, Create an image and use the restaurant image coming from the API
                //const hometeam = card.getElementsByTagName('HomeTeam')[0]
                //hometeam.textContent = americanfootball_nfldb.home_team;
                
                //Empty div to create padding
                const placeHold = document.createElement('div');
                placeHold.setAttribute('class', 'emptyBlock');
                
                //Moneyline label
                const moneyline = document.createElement('h6');
                moneyline.setAttribute('class', 'oddsmarket');
                moneyline.textContent = 'Moneyline';
                
                //Spread label
                const spread = document.createElement('h6');
                spread.setAttribute('class', 'oddsmarket');
                spread.textContent = 'Spread';
                
                //Total label
                const total = document.createElement('h6');
                total.setAttribute('class', 'oddsmarket');
                total.textContent = 'Total';
    
                //Hometeam name
                const hometeam = document.createElement('h6');
                hometeam.setAttribute('class', 'oddsteam');
								hometeam.textContent = odd.home_team;
                
                //Team one grid for ML
                const teamoneh2hgrid = document.createElement('div')
                teamoneh2hgrid.setAttribute('class', 'w-layout-grid mlgrid');
                  
                  //ML Sportsbook Logo, Team One
                  const teamonelogoh2h = document.createElement('img');
                  teamonelogoh2h.setAttribute('class', 'sportsbooklogo');
                  teamonelogoh2h.src = odd.teamoneh2hSBLOGO.sportsbooklogo.url;
                  
                  //ML price, Team One
                  const teamoneh2hprice = document.createElement('h6');
                  teamoneh2hprice.setAttribute('class', 'oddsprice');
                  teamoneh2hprice.textContent = odd.besth2hteamone;

                  teamoneh2hgrid.appendChild(teamonelogoh2h);
                  teamoneh2hgrid.appendChild(teamoneh2hprice);
                  
                const teamonespreadgrid = document.createElement('div')
                teamonespreadgrid.setAttribute('class', 'w-layout-grid mlgrid');
                
                	const teamonelogospread = document.createElement('img');
                  teamonelogospread.setAttribute('class', 'sportsbooklogo');
                  teamonelogospread.src = odd.teamonespreadSBLOGO.sportsbooklogo.url;
                  
                  const 
                
                
                //Team two grid for ML
                const teamtwoh2hgrid = document.createElement('div')
                teamtwoh2hgrid.setAttribute('class', 'w-layout-grid mlgrid');
                  
                  //ML Sportsbook Logo, Team One
                  const teamtwologoh2h = document.createElement('img');
                  teamtwologoh2h.setAttribute('class', 'sportsbooklogo');
                  teamtwologoh2h.src = odd.teamtwoh2hSBLOGO.sportsbooklogo.url;
                  
                  //ML price, Team One
                  const teamtwoh2hprice = document.createElement('h6');
                  teamtwoh2hprice.setAttribute('class', 'oddsprice');
                  teamtwoh2hprice.textContent = odd.besth2hteamtwo;

                  teamtwoh2hgrid.appendChild(teamtwologoh2h);
                  teamtwoh2hgrid.appendChild(teamtwoh2hprice);
                
                //Awayteam name
                const awayteam = document.createElement('h6');
                awayteam.setAttribute('class', 'oddsteam');
                awayteam.textContent = odd.away_team;
                
                //HOME ML
               /* const homeOdds = document.createElement('h6');
                homeOdds.setAttribute('class', 'oddsprice');
                homeOdds.textContent = odd.bookmakers[0].markets[0].outcomes[0].price;
                
                //Home spread price, concat w/ spread
                const homeSpreadPrice = odd.bookmakers[0].markets[1].outcomes[0].price;
                
                //HOME SPREAD
                const homeSpread = document.createElement('h6');
                homeSpread.setAttribute('class', 'oddsprice');
                homeSpread.textContent = odd.bookmakers[0].markets[1].outcomes[0].point + ' / ' + homeSpreadPrice;
                
                //OVER POINTS
                const overPoints = document.createElement('h6');
                overPoints.setAttribute('class', 'oddsprice');
                overPoints.textContent = 'o' + odd.bookmakers[0].markets[2].outcomes[0].point;
                
                const awayOdds = document.createElement('h6');
                awayOdds.setAttribute('class', 'oddsprice');
                awayOdds.textContent = odd.bookmakers[0].markets[0].outcomes[1].price;
                
                //Away spread price, concat w/ spread
                const awaySpreadPrice = odd.bookmakers[0].markets[1].outcomes[1].price;
                
                //AWAY SPREAD
                const awaySpread = document.createElement('h6');
                awaySpread.setAttribute('class', 'oddsprice');
                awaySpread.textContent = odd.bookmakers[0].markets[1].outcomes[1].point + ' / ' + awaySpreadPrice;
                
                const underPoints = document.createElement('h6');
                underPoints.setAttribute('class', 'oddsprice');
                underPoints.textContent = 'u' + odd.bookmakers[0].markets[2].outcomes[1].point; */
                

                // Place the card into the div "Cards-Container" 
                card.appendChild(placeHold);
                card.appendChild(moneyline);
                card.appendChild(spread);
                card.appendChild(total);
								card.appendChild(hometeam);
                card.appendChild(teamoneh2hgrid);
                card.appendChild(teamtwoh2hgrid);
                //card.appendChild(homeOdds);
                //card.appendChild(homeSpread);
               // card.appendChild(overPoints);
                card.appendChild(awayteam);
               // card.appendChild(awayOdds);
              //  card.appendChild(awaySpread);
              //  card.appendChild(underPoints);
            
                cardContainer.appendChild(card);
            })
        }
    }

    // Send Restaurant request to API
    request.send();
}



// This fires all of the defined functions when the document is "ready" or loaded
(function() {
    getRestaurants();
})();

</script>
