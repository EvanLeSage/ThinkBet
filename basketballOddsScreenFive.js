//Evan LeSage, ThinkBet
//Basketball Odds Screen

// Create a variable for the API endpoint. 
let xanoUrl = new URL('https://x8ki-letl-twmt.n7.xano.io/api:cY_49sjB/');


// Get all NBA and NCAAB basketball odds from the API 
function getOdds() {


    // Create a request and assign a new XMLHttpRequest object to it.
    let request = new XMLHttpRequest();
    let url = xanoUrl.toString() + 'bestfeaturedoddsbysport?sport_key_requested[]=basketball_nba&sport_key_requested[]=basketball_ncaab';
    
    request.open('GET', url, true)

    // When the API request loads, do the following...
    request.onload = function() {

        //Parse the API response and store in 'data'
        let data = JSON.parse(this.response)

        // Status 200 = Success. Status 400 = Problem. If no problems, then execute 
        if (request.status >= 200 && request.status < 400) {

            // Map cardContainer variables to their respective Webflow elements
            const cardContainerNBA = document.getElementById("odds-container-nba")
            const cardContainerNCAAB = document.getElementById("odds-container-ncaab")

            //Loop through all odds returned by the API request
            data.forEach(odd => {

                // For each odd, create a div called card and style with the sampleodds class
                const card = document.createElement('div')
                card.setAttribute('class', 'sampleodds');

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


                //Team two grid for Spread
                const teamtwospreadgrid = document.createElement('div');
                teamtwospreadgrid.setAttribute('class', 'w-layout-grid mlgrid');

                //Spread Sportsbook Logo, Team One
                const teamtwologospread = document.createElement('img');
                teamtwologospread.setAttribute('class', 'sportsbooklogo');
                teamtwologospread.src = odd.teamtwospreadSBLOGO.sportsbooklogo.url;

                //Create a div for the spread and price
                const teamtwospreadOddsToPrice = document.createElement('div');
                teamtwospreadOddsToPrice.setAttribute('class', 'oddstopricediv');

                //Spread amount, best, team one
                const bestSpreadTeamTwo = document.createElement('h6');
                bestSpreadTeamTwo.setAttribute('class', 'oddsprice');
                bestSpreadTeamTwo.textContent = odd.teamtwobestspread;

                //Spread price, best, team one
                const bestSpreadPriceTeamTwo = document.createElement('h6');
                bestSpreadPriceTeamTwo.setAttribute('class', 'oddsprice');
                bestSpreadPriceTeamTwo.textContent = odd.teamtwospreadprice;

                //Append to OddsToPriceDiv
                teamtwospreadOddsToPrice.appendChild(bestSpreadTeamTwo);
                teamtwospreadOddsToPrice.appendChild(bestSpreadPriceTeamTwo);

                //Append to teamonespreadgrid
                teamtwospreadgrid.appendChild(teamtwologospread);
                teamtwospreadgrid.appendChild(teamtwospreadOddsToPrice);

                //Under grid
                const undergrid = document.createElement('div');
                undergrid.setAttribute('class', 'w-layout-grid mlgrid');

                //Under book logo
                const underlogo = document.createElement('img');
                underlogo.setAttribute('class', 'sportsbooklogo');
                underlogo.src = odd.bestunderSBLOGO.sportsbooklogo.url;

                //Create a div for the over line and price
                const underDiv = document.createElement('div');
                underDiv.setAttribute('class', 'oddstopricediv');

                //Over amount, best
                const bestUnder = document.createElement('h6');
                bestUnder.setAttribute('class', 'oddsprice');
                bestUnder.textContent = odd.besttotalunder;

                //Over price, best
                const underBestPrice = document.createElement('h6');
                underBestPrice.setAttribute('class', 'oddsprice');
                underBestPrice.textContent = odd.bestunderprice;

                //Append to overDiv
                underDiv.appendChild(bestUnder);
                underDiv.appendChild(underBestPrice);

                //Append to overgrid
                undergrid.appendChild(underlogo);
                undergrid.appendChild(underDiv);

                // Place the card into the div "Cards-Container" 
                card.appendChild(placeHold);
                card.appendChild(moneyline);
                card.appendChild(spread);
                card.appendChild(total);
                card.appendChild(hometeam);
                card.appendChild(teamoneh2hgrid);
                card.appendChild(teamonespreadgrid);
                card.appendChild(overgrid);
                card.appendChild(awayteam);
                card.appendChild(teamtwoh2hgrid);
                card.appendChild(teamtwospreadgrid);
                card.appendChild(undergrid);
                
                //Sort each odd into the appropriate card container (NBA or NCAAB)
                if(odd.sport_key == "basketball_nba")
                {
                     cardContainerNBA.appendChild(card);
                }
                else
                {
                    cardContainerNCAAB.appendChild(card);
                }
            })
        }
    }

    // Send the request to API
    request.send();
}



// This fires all of the defined functions when the document is "ready" or loaded
(function() {
    getOdds();
})();
