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
    modal.style.display="block";
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

//adding user data in local storage
function continuebutton(){
    
    
        let user_datas=JSON.parse(localStorage.getItem("User_data"));
        let email_input=document.getElementById("email_input");
        let flag=false;
        if(user_datas!=null){

            user_datas.forEach(({email})=>{
                if(email_input.value==email){
                    flag=true;
                    
                }
            });
        }
        if(email_input.value!=""){
            if(flag==true)
            {
                alert("already registered");

                 //appending otp for taking checking user
                let containing=document.getElementById("containing");
                containing.innerHTML=null;
                let div=document.createElement("h2");
                div.textContent="Enter the code sent to your phone and email";
                let inputotp=document.createElement("input");
                inputotp.setAttribute("id","email_input");
                inputotp.placeholder="Enter 4 digit OTP";
                inputotp.type="password";
                let continue_button=document.createElement("button");
                continue_button.innerHTML="Continue";
                continue_button.setAttribute("id","continue_button");
                containing.append(div,inputotp,continue_button);
                continue_button.onclick=function(){forward();}
            }
            else{
               let email={email:email_input.value};
               user_datas.push(email);
               localStorage.setItem("User_data",JSON.stringify(user_datas));

               //appending details for taking user details
               let containing=document.getElementById("containing");
               containing.innerHTML=null;
               let div=document.createElement("h2");
               div.textContent="Enter Your Details";
               let inputname=document.createElement("input");
               inputname.setAttribute("id","email_input");
               inputname.placeholder="Enter your name";
               let inputmobile=document.createElement("input");
               inputmobile.setAttribute("id","email_input");
               inputmobile.placeholder="Enter your mobile no.";
               let continue_button=document.createElement("button");
               continue_button.innerHTML="Continue";
               continue_button.setAttribute("id","continue_button");
               containing.append(div,inputname,inputmobile,continue_button);
               continue_button.onclick=function(){forward();}    
               
        }
}
}
function forward(){
    window.location.href="index.html";
}
