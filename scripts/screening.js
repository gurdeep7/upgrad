 
 let f_name = document.getElementById("f_name")

 let l_name = document.getElementById("l_name")

 let email = document.getElementById("email")

 let mobile = document.getElementById("mobile")

let name = details.name.split(" ")

 f_name.value = name[0]
if(name[1] != undefined){
 l_name.value = name[1]
}
 email.value = details.email;

 email.disabled = true;

 mobile.value = details.mobile

 mobile.disabled = true;