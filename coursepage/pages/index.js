// calling id certificate section
let showExecutive=document.getElementById("showExecutive");
// calling id participation certificate section
let showParticipation=document.getElementById("showParticipation");
// calling id of iiit
let show_iit=document.getElementById("show_iit");
// calling id of joint participation
let show_joint=document.getElementById("show_joint");

//adding click event 
show_iit.addEventListener("click",showEx);
//function for displaying
function showEx()
{
    showParticipation.style.display="none";
    showExecutive.style.display="block";
  
}

//adding click event
show_joint.addEventListener("click",showjoint);
 //function for displaying
function showjoint()
{
    showExecutive.style.display="none";
    showParticipation.style.display="block";
}

//calling scroll button id
const btnScrollToTop=document.querySelector("#btnScrollToTop");
//adding event listener to scroll button
    btnScrollToTop.addEventListener("click",function(){
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth",
        });
        
    });
  