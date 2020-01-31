// hotel
 var recom = {
  "firstHotel":[
   { "name":"Hotel Arya",
    "category":"2nd Star",
    "price":"rs 1090/per night",
    
   },
   { "name":"Hotel piyush",
    "category":"2nd Star",
    "price":"rs 1090/per night",
    
   }
    
  ]
}
// storing 
var urRecoom = []
let drafts = 0
let count = 0

// let signupname = document.querySelector("#signupname")

// drafts it will be called when cancel button is called
let userName = document.querySelector("#hotelLoginName")


function draftts(event){
	event.preventDefault();
	drafts++

// i was putting it in a object but than i thought to just increse the count user has clicked this cancel button
	// let name = userName.value
	// let category = document.querySelector("#hotelcategory").value
	// drafts.name = name
	// drafts.category= category
	// localStorage.setItem('drafts', JSON.stringify(drafts));
	localStorage.setItem('drafts', drafts)

	console.log(drafts)

 }
// confirmation it will be called when submit is called

function submit(event){
event.preventDefault();

var rc = document.querySelector('#hotelcategory')
var rd = rc.value
console.log(rd)
if(rd == "2nd star"){
 urRecoom.push(recom.firstHotel)
  localStorage.setItem('recom', JSON.stringify(urRecoom));

console.log(urRecoom)
	// document.querySelector("#recom").innerText = urRecoom
}else{
	alert("choose ur category")
}
// var hot = urRecoom.map(hotel=>{
// document.querySelector('#hotel').innerText = JSON.stringify(hotel)
// })

}

function bttn(event){
event.preventDefault();
console.log(localStorage.getItem('recom')) 
document.querySelector('#hotel').innerText = localStorage.getItem('recom')

}

function checkDrafts(event){
	event.preventDefault();
console.log(localStorage.getItem('drafts')) 
document.querySelector('#recom').innerText = localStorage.getItem('drafts')

}

function getCount(event){
	event.preventDefault();
	console.log(count)
	document.querySelector('#recom').innerText = localStorage.getItem('count')
}

// taking user sign up value and storing it
var signUpname = document.getElementById('signupname');
var signuppassword = document.getElementById('signuppassword');

// storing input from register-form
function signup() {
    localStorage.setItem('signUpname', signUpname.value);
    localStorage.setItem('signuppassword', signuppassword.value);
}

// // check if stored data from register-form is equal to entered data in the   login-form
function check() {
	event.preventDefault();
	count++
localStorage.setItem('count',count)
		
    // stored data from the register-form
    var storedName = localStorage.getItem('signUpname');
    var storedPw = localStorage.getItem('signuppassword');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    }else {
        alert('You are loged in.');
    }
}