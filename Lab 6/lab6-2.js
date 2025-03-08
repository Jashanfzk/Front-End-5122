//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload=pageloaded;




//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageloaded(){
	//GET DOM ELEMENTS WE'LL NEED
	var mysteryBox=document.getElementById("mysteryBox")
	var buttonBox=document.getElementById("buttomBox")
	
}
	


	//====CREATE THE FUNCTIONS WE'LL NEED====

	//FUNCTION TO ASK USER

function askforREsponse()
{
var response=confirm("Do you want to change something")
if (response===true)
	{
	mysteryBox.style.display="none";
	buttonBox.style.display="block";

}

}
	//FUNCTION TO CHANGE buttonBox
function suprise()
{
buttonBox.style.width="600px";
buttonBox.style.background="orange";
buttonBox.innerHTML="<h2>surprise</h2>";
}

	//SETUP LISTENERS
	mysteryBox.onmouseover=askforREsponse;
	buttonBox.onclick=suprise;


//END onload FUNCTION