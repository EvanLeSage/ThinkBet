
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
		    
		  
                //Team one grid for Spread
                const teamonespreadgrid = document.createElement('div');
                teamonespreadgrid.setAttribute('class', 'w-layout-grid mlgrid');
                   
		   //Spread Sportsbook Logo, Team One
                   const teamonelogospread = document.createElement('img');
                   teamonelogospread.setAttribute('class', 'sportsbooklogo');
                   teamonelogospread.src = odd.teamonespreadSBLOGO.sportsbooklogo.url;
		    
		   //Create a div for the spread and price
		   const teamonespreadOddsToPrice = document.createElement('div');
		   teamonespreadOddsToPrice.setAttribute('class', 'oddstopricediv');
                   
		   	//Spread amount, best, team one
		    	const bestSpreadTeamOne = document.createElement('h6');
		    	bestSpreadTeamOne.setAttribute('class', 'oddsprice');
		    	bestSpreadTeamOne.textContent = odd.teamonebestspread;
		    
		    	//Spread price, best, team one
		    	const bestSpreadPriceTeamOne = document.createElement('h6');
		    	bestSpreadPriceTeamOne.setAttribute('class', 'oddsprice');
		    	bestSpreadPriceTeamOne.textContent = odd.teamonespreadprice;
		    
		    	//Append to OddsToPriceDiv
		    	teamonespreadOddsToPrice.appendChild(bestSpreadTeamOne);
		    	teamonespreadOddsToPrice.appendChild(bestSpreadPriceTeamOne);
		    
		   //Append to teamonespreadgrid
		   teamonespreadgrid.appendChild(teamonelogospread);
		   teamonespreadgrid.appendChild(teamonespreadOddsToPrice);
		    
		    
		//Over grid
                const overgrid = document.createElement('div');
                overgrid.setAttribute('class', 'w-layout-grid mlgrid');
                   
		   //Over book logo
                   const overlogo = document.createElement('img');
                   overlogo.setAttribute('class', 'sportsbooklogo');
                   overlogo.src = odd.bestoverSBLOGO.sportsbooklogo.url;
		    
		   //Create a div for the over line and price
		   const overDiv = document.createElement('div');
		   overDiv.setAttribute('class', 'oddstopricediv');
                   
		   	//Over amount, best
		    	const bestOver = document.createElement('h6');
		    	bestOver.setAttribute('class', 'oddsprice');
		    	bestOver.textContent = odd.besttotalover;
		    
		    	//Over price, best
		    	const overBestPrice = document.createElement('h6');
		    	overBestPrice.setAttribute('class', 'oddsprice');
		    	overBestPrice.textContent = odd.bestoverprice;
		    
		    	//Append to overDiv
		    	overDiv.appendChild(bestOver);
		    	overDiv.appendChild(overBestPrice);
		    
		   //Append to overgrid
		   overgrid.appendChild(overlogo);
		   overgrid.appendChild(overDiv);
                
                
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

                // Place the card into the div "Cards-Container" 
                card.appendChild(placeHold);
                card.appendChild(moneyline);
                card.appendChild(spread);
                card.appendChild(total);
		card.appendChild(hometeam);
                card.appendChild(teamoneh2hgrid);
		card.appendChild(teamonespreadgrid);
		card.appendChild(overgrid);
                card.appendChild(teamtwoh2hgrid);
                card.appendChild(awayteam);
            
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

