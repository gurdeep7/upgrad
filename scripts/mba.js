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

    var requestOptions = {
        method : "GET",
        redirect: 'follow'
      };
      var courses;
    fetch("https://upgrad78.herokuapp.com/course", requestOptions)
    .then(response => response.json())
    .then(result => {courses= result
        showgrid("Management");
    })
var sidedropdown = document.getElementById("sidedropdown")
function showcourse(value){
    let data = courses.filter(el => el.category == value)
    showondrop(data)
}

function showondrop(data){
    sidedropdown.innerHTML = null;

    data.forEach(({_id,title,logo,Duration,university,link,offer}) => {
        let div = document.createElement("div")
        div.style.margin = "20px"
        div.onclick = ()=>{
            localStorage.setItem("course_id",(JSON.stringify(_id))),
            window.location.href = link;
        }
        div.setAttribute("class","border-black border-2 rounded-lg flex hover:border-gs-red hover:bg-gray-100 ")
        let img = document.createElement("img")
        img.src = logo;
        img.style.width = "20%"
        img.style.height= "40px"
        img.style.marginTop="20px"
        let details = document.createElement("div")
        details.style.width= "70%";
        let h1 = document.createElement("h1")
        h1.style.fontWeight= "bold"
        h1.textContent = title;
        let uni = document.createElement("p")
        uni.style.fontSize = "12px"
        uni.textContent = university;
        let p = document.createElement("p")
        p.innerText = "Duration-" + Duration +" Months";
        p.style.fontSize= "12px"
        let off = document.createElement("p")
        off.style.margin = "5px"
        off.style.padding = "2px"
        off.style.width = "fit-content"
        if(offer == "New"){
            off.style.backgroundColor = "red";
            off.style.color= "white"
        }else if(offer == ""){
            off.style.backgroundColor = "transparent";
        }
        else{
            off.style.backgroundColor = "yellow";
            off.style.color= "red"
        }
        off.setAttribute("class","rounded")
        let arrow = document.createElement("div")
        arrow.innerHTML = "​&#8594;"
        arrow.style.marginTop= "10%"
        arrow.style.backgroundColor= "yellow"
        arrow.setAttribute("class","text-3xl text-gray-400 h-0")
        off.textContent = offer
        details.append(h1,uni,p,off)
        div.append(img,details,arrow)
        sidedropdown.append(div)
    });

}
//Copy from deepesh
var flag = 0;
let modal=document.getElementById("modal");
//sign up button 
let signupbutton=document.getElementById("button1");
//close button 
let closebutton=document.getElementById("closebutton");

//adding click event on signup button
signupbutton.addEventListener("click",clicksignup);

//adding click event on close button
closebutton.addEventListener("click",clickclose);

//adding click event on clicking outside
window.addEventListener("click",clickoutside);

//function for click event on signup
function clicksignup(){
    if(flag == 0){
    modal.style.display="block";
    }else{
        if(confirm("Are You sure to logout")==true){
            localStorage.setItem("User_data",JSON.stringify([]));
            window.location.reload()
        }
    }
}

//function for click event on close modal
function clickclose(){
    modal.style.display="none";
}

//function for click event on outside clicking for close
function clickoutside(e){
    if(e.target == modal)
    modal.style.display="none";
}

//close button 
let continue_button=document.getElementById("continue_button");
//adding click event on continue button
continue_button.addEventListener("click",continuebutton);

// creating local storage
if(localStorage.getItem("User_data")===null){
    localStorage.setItem("User_data",JSON.stringify([]));
}
let email_input=document.getElementById("email_input");
        email_input.addEventListener("input",validatemail)
//adding user data in local storage
function continuebutton(){
       
          
          
    checkBackendEmail()
async function checkBackendEmail(){
let email11 =await fetch(`https://upgrad78.herokuapp.com/check/${email_input.value}`)
let email1 = await  email11.json()
console.log(email1)

localStorage.setItem("email",JSON.stringify(email_input));
  if(email1 != undefined){
      if(email1.status == "passed")
      {
      
          alert("already registered");
          localStorage.setItem("user_id",JSON.stringify(email1.user_id));
          askotp()
           //appending otp for taking checking user
           

      }
      
      else{
         
         //appending details for taking user details
         let containing=document.getElementById("containing");
         containing.innerHTML=null;
         let div=document.createElement("h2");
         div.textContent="Enter Your Details";
         let inputname=document.createElement("input");
         inputname.setAttribute("id","email_input");
         inputname.placeholder="Enter your name";
         let inputmobile=document.createElement("input");
         inputmobile.type = "number"
         inputmobile.setAttribute("id","mobile_input");
         inputmobile.oninput=()=> validatemobile(inputmobile.value,inputname.value)
         inputmobile.placeholder="Enter your mobile no.";
         let continue_button=document.createElement("button");
         continue_button.innerHTML="Continue";
         
         continue_button.setAttribute("id","continue_button");
         containing.append(div,inputname,inputmobile,continue_button);
         continue_button.onclick=function(){
          let user_datas={
              email:email_input.value,
              name: inputname.value,
              mobile_number: inputmobile.value
          };
          var raw = JSON.stringify(user_datas)
          fetchuserid()
          async function fetchuserid(){
              let user = await fetch("https://upgrad78.herokuapp.com/register",
              {
                  method:"POST",
                  headers:{'Content-Type': 'application/json'},
                  body:raw,
              })
              let user1 = await user.json()
              localStorage.setItem("user_id",JSON.stringify(user1.user_id));
          }
          askotp()
          //forward();
      }  
  }  
         
  }
}
}
function askotp()
        {  let containing=document.getElementById("containing");
          containing.innerHTML=null;
          let div=document.createElement("h2");
          div.textContent="Enter the code sent to your Mobile";
          let inputotp=document.createElement("input");
          inputotp.setAttribute("id","email_input");
          inputotp.placeholder="Enter 4 digit OTP";
          inputotp.type="password";
          inputotp.oninput = ()=>{
              if(inputotp.value.length != 4){
                  continue_button.style.backgroundColor = "gray"
                  continue_button.disabled = true;
              }else{
                  continue_button.style.backgroundColor = "red"
                  continue_button.disabled = false;
              }
          }
          let continue_button=document.createElement("button");
          continue_button.innerHTML="Continue";
          continue_button.setAttribute("id","continue_button");
          containing.append(div,inputotp,continue_button);
          continue_button.onclick=async function(){
              let user_id= JSON.parse(localStorage.getItem("user_id"))
              let user =await fetch(`https://upgrad78.herokuapp.com/check/${user_id}/${inputotp.value}`)
              let user1 = await user.json()
              console.log(user1.status)
              if(user1.status == "passed"){
                  localStorage.setItem("User_data",JSON.stringify(user1))
                 forward()
              }
              else{
                  alert("Wrong OTP")
                  return
              }
          }
      }
function forward(){
    window.location.reload();
}

function validatemail() {
    continue_button.style.backgroundColor = "gray"
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email_input.value.match(validRegex)) {


    continue_button.style.backgroundColor = "red"
    continue_button.disabled = false;

  } else {
    continue_button.style.backgroundColor = "gray"
    continue_button.disabled = true;
  }
}

function validatemobile(mobile,name) {
   
    let continue_button=document.getElementById("continue_button");
   if(name.length > 3){
       if(mobile.length == 10){
       continue_button.style.backgroundColor = "red"
    continue_button.disabled = false;
    console.log("done")
       }else{
        continue_button.disabled = true;
        continue_button.style.backgroundColor = "gray"
       }
   }else{
    continue_button.disabled = true;
    continue_button.style.backgroundColor = "gray"
   }
}

//Login Check
var details = JSON.parse(localStorage.getItem("User_data"))
if(details.name != undefined){

button1.setAttribute("class","p-2 rounded text-gray-600 absolute right-2")
button1.innerHTML =`<span class="material-icons" style="margin-top: 8px;">account_circle</span><span class="relative -top-2"> ${details.name.substring(0,7)}...</span>`
flag = 1;
}
async function screen(){
    if(flag == 0){
        modal.style.display="block";
    }else{
        let user_id = JSON.parse(localStorage.getItem("user_id"))
        let course_id = JSON.parse(localStorage.getItem("course_id"))
        let raw1 = {user_id,
            course_id}
            raw1 = JSON.stringify(raw1)
           
           
            let user11 = await fetch("https://upgrad78.herokuapp.com/checkin",
                        {
                            method:"POST",
                            headers:{'Content-Type': 'application/json'},
                            body:raw1,
                        })
                    
              let user1 = await user11.json()
              if(user1.status = "passed"){
        details.course = "MBA (Executive) with Specialisation in Business Analytics";
        details.fees = 400000;
        localStorage.setItem("User_data",JSON.stringify(details))
        window.location.href="screening.html"
    }
}
}