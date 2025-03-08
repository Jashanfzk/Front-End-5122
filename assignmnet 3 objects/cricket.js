var iplTeam={
    name:"kings eleven punjab",// team name 
    captain:"shreyas iyer",// current captain 
    homeGround:"Mohali stadium",// Home stadium
    trophies:2,// number of trophies won by captain
    
    newcaptain:function(newcaptainname){// Function to modify the newcaptain in the iplteam
        iplTeam.captain=newcaptainname;
        alert("The new captain of " + iplTeam.name +" is now "+  iplTeam.captain )
    },
    updatehomeground:function(newhomeground){   // Function to update the homeground 
        iplTeam.homeGround=newhomeGround;
        alert("The new home ground of "+ iplTeam.name  +"is "+  iplTeam.homeGround )// alert for upgrade in home ground for the team in a  session
    },
    updateTrophies:function(newTrophies){ 
        if(!isNaN(newTrophies)) {  // method to write trophies only in numbers
        iplTeam.trophies= newTrophies;
        alert( iplTeam.name + "has now " + iplTeam.trophies +  " trophies ");// alert for update number of trophies under captaincy
        }else{
            alert("Please enter a valid number of trophies");
        }
    }

}

console.log(iplTeam); // step number 6 created object put to console 
// prompt user to suugest new captain
var userinput=prompt("Suggest the new captain name",iplTeam.captain)  
iplTeam.newcaptain( userinput);// Function call for newcaptain
// prompt to suggest a new home ground
var newhomeGround=prompt("Please suggest a new home ground",iplTeam.homeGround)
iplTeam.updatehomeground( newhomeGround);// Function call for updatehomeground
// prompt user to enter updated number of trophies
var newTrophies=parseInt(prompt("Enter the upadted number of trophies",iplTeam.trophies))
iplTeam.updateTrophies( newTrophies);// Function call for newtrophies
//  iplteam object updated to console 
console.log(iplTeam);
