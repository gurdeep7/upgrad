var details = JSON.parse(localStorage.getItem("User_data"))
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "user": "61b8ccfe3d58aecf68543b38",
  "courses": [
    "61b86570dd5eb249ad475bb7"
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/checkout", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

console.log(result)
if(details.name != undefined){
 var name1 = details.name.split(" ")
}


  //first_name
 var first_name= document.getElementById("first_name")
first_name.value = name1[0]
  //last_name
if(name1[1] != undefined){
  var last_name= document.getElementById("last_name")
last_name.value = name1[1]

}
  //email
  var email = document.getElementById("email")
  email.value = details.email
  email.disabled = true;
  //phone
  var phone = document.getElementById("c_no")

  phone.value = details.mobile

  phone.disabled = true;

  //   NOW WORK ON BILLING ADDRESS
  //address_line1
  address_line1 = document.getElementById("addres1").value;
  //address_line2
  address_line2 = document.getElementById("addres2").value;

  //city
  city = document.getElementById("city").value;
  //state
  state = document.getElementById("state").value;
  //country
  country = document.getElementById("country").value;
  //regestration number

  var coursename = document.getElementById("coursename")

  coursename.textContent = details.course


  // Fees Calculation

  let total = details.fees

  let total_fee = document.getElementById("total_fee")

  total_fee.textContent = total

  var taxAmount = document.getElementById("taxAmount")
 //round off
  let tax = Math.round(total * 0.152542)

  taxAmount.textContent = tax

  let courseFee = document.getElementById("courseFee")

  courseFee.textContent = total - tax

  document.getElementById("Full_Payment").checked = true

  document.getElementById("Part_Time").disabled = true


function SenData(){

  localStorage.setItem("User_data",JSON.stringify([]));

  window.location.href = "thankyou.html"
}




