let myData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  //   billing_address: "",
  address_line1: "",
  address_line2: "",
  city: "",
  state: "",
  country: "",
  GST_user: "",
  // payment options
  card_number: "",
  card_expiry: "",
  card_cvv: "",
};
function SenData() {
  //first_name
  myData.first_name = document.getElementById("first_name").value;
  //last_name
  myData.last_name = document.getElementById("last_name").value;
  //email
  myData.email = document.getElementById("email").value;
  //phone
  myData.phone = document.getElementById("c_no").value;

  //   NOW WORK ON BILLING ADDRESS
  //address_line1
  myData.address_line1 = document.getElementById("addres1").value;
  //address_line2
  myData.address_line2 = document.getElementById("addres2").value;

  //city
  myData.city = document.getElementById("city").value;
  //state
  myData.state = document.getElementById("state").value;
  //country
  myData.country = document.getElementById("country").value;
  //regestration number
  console.log(myData);
}
