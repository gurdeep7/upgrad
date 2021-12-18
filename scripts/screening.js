 
 let f_name = document.getElementById("f_name")

 let l_name = document.getElementById("l_name")

 let email = document.getElementById("email")

 let mobile = document.getElementById("mobile")
if(details.name != undefined)
{let name = details.name.split(" ")

 f_name.value = name[0]
if(name[1] != undefined){
 l_name.value = name[1]
}
 email.value = details.email;

 email.disabled = true;

 mobile.value = details.mobile

 mobile.disabled = true;}
// Gender select start
{
 let male = document.getElementById("male")

 let female = document.getElementById("female")

 let noGender = document.getElementById("noGender")
 var gen_flag = 0;
 let gender = ""
 male.addEventListener("click",()=>{
     gender = "Male"
     male.setAttribute("class","border-box border-4 p-4 bg-blue-500 text-xl font-bold text-upgrad-blue rounded-2xl" )
     female.setAttribute("class","border-box border-4 p-4 text-xl font-bold text-upgrad-blue rounded-2xl")
     noGender.setAttribute("class","border-box border-4 p-4 text-xl font-bold text-upgrad-blue rounded-2xl")
     gen_flag = 1;
 })
 female.addEventListener("click",()=>{
     gender = "Female"
    male.setAttribute("class","border-box border-4 p-4 text-xl font-bold text-upgrad-blue rounded-2xl" )
    female.setAttribute("class","border-box border-4 p-4  bg-pink-500 text-xl font-bold text-upgrad-blue rounded-2xl")
    noGender.setAttribute("class","border-box border-4 p-4 text-xl font-bold text-upgrad-blue rounded-2xl")
    gen_flag = 1;
})

noGender.addEventListener("click",()=>{
    gender = "No Gender"
    noGender.setAttribute("class","border-box border-4 p-4  bg-yellow-500 text-xl font-bold text-upgrad-blue rounded-2xl")
    male.setAttribute("class","border-box border-4 p-4 text-xl font-bold text-upgrad-blue rounded-2xl" )
    female.setAttribute("class","border-box border-4 p-4 text-xl font-bold text-upgrad-blue rounded-2xl")
    gen_flag = 1;
})
}
//Gender select ends

//Check Graduation
var g_flag = 0
{
let g_yes = document.getElementById("g_yes")

let g_no = document.getElementById("g_no")
let graduation = ""
g_yes.addEventListener("click",()=>{
    graduation = "Yes"
    g_yes.setAttribute("class","border-box border-4 p-4 bg-green-500 text-xl font-bold text-upgrad-blue rounded-2xl")
    g_no.setAttribute("class","border-box border-4 p-4 text-xl font-bold text-upgrad-blue rounded-2xl")
    g_flag = 1
})

g_no.addEventListener("click",()=>{
    graduation = "No"
    g_yes.setAttribute("class","border-box border-4 p-4 text-xl font-bold text-upgrad-blue rounded-2xl")
    g_no.setAttribute("class","border-box border-4 p-4 bg-gs-red text-xl font-bold text-upgrad-blue rounded-2xl")
    g_flag = 1
})
}

async function myFunction() {

    var city = document.getElementById("city_name").value

    if(gen_flag == 0){
        alert("Please select your gender")
        return
    }
    if(g_flag == 0){
        alert("Please fill graduation details")
        return;
    }
    let user_id = JSON.parse(localStorage.getItem("user_id"))
    let course_id = JSON.parse(localStorage.getItem("course_id"))
    let raw1 = {
        gender,
        city,
        graduation,
        user_id,
    course_id}
    raw1 = JSON.stringify(raw1)
   
   
    let user11 = await fetch("https://upgrad78.herokuapp.com/usercoursedetail",
                {
                    method:"POST",
                    headers:{'Content-Type': 'application/json',
                "Authorization":`Bearer ${details.token}`},
                    body:raw1,
                })
            
      let user1 = await user11.json()
if(user1.status = "passed"){
    location.replace("pleasewait.html")
}else{
    console.log(user1)
    alert("invalid details")
}
  }