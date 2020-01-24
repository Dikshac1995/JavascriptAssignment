// function inquiryformValidate()
// {
//    var flag = true;
//    if (!fNameValidate() == false) flag==false;
//    if (!lNameValidate() == false) flag==false;
//    if (!PhoneValidation() == false) flag==false;
//    if (!officeValidation() == false) flag==false;
//    if (!emailValidation() == false) flag==false;
// }





// // validation for fname

// function fNameValidate()

// {   
// var firstName = document.getElementById('firstName').value;

// if (firstName == "") {
//    document.getElementById("fname").style.display = "table";
//    document.getElementById("fname").innerHTML = "This field is required";
//    return false;

// }
// else{
//    document.getElementById("fname").style.display = "none";
//    return true;

// }

// }
 
// //validation for lname

// function lNameValidate()

// {   
// var lastName = document.getElementById('lastName').value;

// if (lastName == "") {
//    document.getElementById("lname").style.display = "table";
//    document.getElementById("lname").innerHTML = "This field is required";
//    return false;

// }
// else{
//    document.getElementById("lname").style.display = "none";
//    return true;

// }

// }
//  //validation for phone_no
//  function PhoneValidation()
//  {

 
//  var phoneNo = document.getElementById("phoneNO").value;

//  if (phoneNo == "") {
//     document.getElementById("phoneno").style.display = "table";
//     document.getElementById("phoneno").innerHTML = "This is required";
//     return false;
//  }

//     else if (isNaN(phoneNo)) {
//       document.getElementById("phoneno").style.display = "table";
//       document.getElementById("phoneno").innerHTML = "phoneNo must be numeric";
//       return false;
//    }

//   else  if (phoneNo.length != 10) {
//       document.getElementById("phoneno").style.display = "table";
//       document.getElementById("phoneno").innerHTML =
//          "phoneNo must be 10 digit number";
//          return false;
//    } else
//     {
//       document.getElementById("phoneno").style.display = "none";
//       flag = true;
//    }
//  }


//  // validation for office no
 
//  function officeValidation()
//  {
//    var officeNo = document.getElementById("officeNO").value;
//    if (officeNo == "") {
//       document.getElementById("officeno").style.display = "table";
//       document.getElementById("officeno").innerHTML = "This is required";
//       return false;
//    }
  
//       else if (isNaN(officeNo)) {
//         document.getElementById("officeno").style.display = "table";
//         document.getElementById("officeno").innerHTML = "officeNo must be numeric";
//         return false;
//      }
//      else
//      {
//        document.getElementById("officeno").style.display = "none";
//        return  true;
//     }
//  }
 

//  //validation for email
//  function  emailValidation()
//  {
//    var email = document.getElementById("email").value;

//    if (email == "") {
//       document.getElementById("emailid").style.display = "table";
//       document.getElementById("emailid").innerHTML = "please fill  email";
//       return false;
//    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value)
//    ) 
//    {
//       document.getElementById("emailid").style.display = "table";
//       document.getElementById("emailid").innerHTML =
//          "email is invalid";
//          return false;
//  }
//  else
//  {
//    document.getElementById("emailid").style.display = "none";
//    return  true;
// }
//  }


//  function blurcheck( ) {
  
//    var id = event.target.id;
//    var value = event.target.value.toString();
//    if (value == "") 
//    {
//       document.getElementsByName(id)[0].style.display = "table";
//       console.log( document.getElementsByName(id));
//        document.getElementsByName(id)[0].innerHTML = "field required";
		
//    } else 
//    {
//       document.getElementsByName(id)[0].style.display = "none";
//    }
// }
// 'firstName',

	// // 'lastName',
	// 'phoneNO',
	// 'officeNO',
	// 'emailId',
	// // 'password',
	// 'confirmPassword',

	// 'checkbox_sample18',

	// 'aboutYou'



// // function blurcheck( ) {
// //    console.log(event);
// //    var id = event.target.id;
// //    var value = event.target.value.toString();
// //    if (value == "") {
// //       document.getElementsByName(id)[0].style.display = "table";
// //       document.getElementByName(id).innerHTML = "Field required";
// //     //   document.getElementById("lname").innerHTML = "**please fill lastName";
// //     //   document.getElementById("phoneno").innerHTML = "**please fill phoneNo";

// //     //   document.getElementById("officeno").innerHTML = "**please fill officeNo";
// //     //   document.getElementById("emailid").innerHTML = "**please fill  email";
// //     //   document.getElementById("pass").innerHTML = "**please fill password";
// //     //   document.getElementById("cpass").innerHTML = "**please fill password";
// //     //   document.getElementById("about").innerHTML = "**this field is not empty";
// //    } else {
// //       document.getElementsByName(id)[0].style.display = "none";
// //    }
// // }

var allInputs = 
[
	
	  { 
		'id':'firstName',
		'label':'first Name',
		'validation':[
			{
				type:'required',
				errorMessage: 'first Name is required'
			}
		]
	},
	{ 
		'id':'lastName',
		'label':'last Name',
		'validation':[
			{
				type:'required',
				errorMessage: 'last Name is required'
			}
		]
	},
	{ 
		'id':'phoneNO',
		'label':'phone No',
		'validation':[
			{
				type:'required',
				errorMessage: 'phone No  is required'
			},
			{
				type:'pattern',
				value: /^\d{10}$/,
				errorMessage: 'enter 10 digit number'
			}
		]
	},
	{ 
		'id':'officeNO',
		'label':'office No',
		'validation':[
			{
				type:'required',
			    errorMessage : 'office No is required'
			},
			{
				type:'pattern',
				value: /^[0-9]+$/,
				errorMessage: 'Phone number should be numeric '
			}
		]
	},

	{
	   'id':'emailId',
	   'label':'Email',
	   'validation':[
			{
				type:'required',
				errorMessage : 'Email is required'
			},
			{
				type:'pattern',
				value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				errorMessage: 'Email is invalid'
			}
	   ]  
	   
	},

	
	
	{
		'id':'password',
		'label':'password1',
		'validation':[
			 {
				 type:'required',
				 errorMessage :'password is required'
			 },
			 {
				 type:'pattern',
	             value :/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
				 errorMessage: 'password  is invalid - password contain 1 special symbol, uppercase,lower case charchter and digit '
			 }
		]  
		
	 },

	{
	   'id':'confirmPassword',
	   'label':'password2',
	   'validation':
	   [
	      {
	         type:'required',
	         errorMessage: 'password is required'
	        
		  },
		  {
			  type :'MatchPassword',
			  value: 'password',
		      errorMessage :'password does not match '
		  
		  }
		]
	   
	},
	{ 
		'id':'checkbox_sample18',
		'label':'checkbox',
		'validation':[
			{
				type:'checkbox',
			    errorMessage : 'please select 1 intrest '
			}
		]
	},
	{ 
		'id':'aboutYou',
		'label':'about You',
		'validation':[
			{
				type:'required',
			    errorMessage : 'about You is required'
			}
		]
	},
	
	
]
	


function formValidate(e)
{

	// e.preventDefault(); 
   console.log("ht",e)
   if(e.type =='submit'){

	for(var i = 0; i < allInputs.length; i++)
	
		{
		onInputValidate(allInputs[i]);
        }
	e.preventDefault(); 
   }
  else if(e.type =='blur')
  { 
	  console.log(e.type,"hihhnmn")
	
	  switch(e.target.id){
		  case "firstName" :
			  {
				 
				onInputValidate(allInputs[0]);
				break
			  }
			  case "lastName" :
			  {
				 
				onInputValidate(allInputs[1]);
				break
			  }
			  case "phoneNO" :
			  {
				 
				onInputValidate(allInputs[2]);
				break
			  }
			  case "officeNO" :
			  {
				 
				onInputValidate(allInputs[3]);
				break
			  }
			  case "emailId" :
			  {
				 
				onInputValidate(allInputs[4]);
				break
			  }
			  case "password" :
			  {
				 
				onInputValidate(allInputs[5]);
				break
			  }
			  case "confirmPassword" :
			  {
				 
				onInputValidate(allInputs[6]);
				break
			  }
			  case "checkbox_sample18" :
			  {
				 
				onInputValidate(allInputs[7]);
				break
			  }
			  case "aboutYou" :
			  {
				 
				onInputValidate(allInputs[8]);
				break
			  }
	  }
	// for(var i =0; i < allInputs.length; i++)
	// {
	// onInputValidate(allInputs[i]);
	// // break
	// } 
   }


}
function onInputValidate(inputConfig)
{
	console.log("wecokm")

	console.log('inputId', inputConfig);
	

	var el = document.getElementById(inputConfig.id);
	// var el2 = document.getElementById(inputConfig.class);
	var elParent = el.closest(".form-control");
	var errorEl = elParent.querySelector('.error');
	


	for(var i = 0; i < inputConfig.validation.length; i++){
		if(inputConfig.validation[i].type == 'required'){
			if(el.value == '')
			{
				errorEl.innerHTML = inputConfig.validation[i].errorMessage;
				break;
			}
			
		}
		 if(inputConfig.validation[i].type == 'pattern'){
			if(!inputConfig.validation[i].value.test(el.value))
			{
				errorEl.innerHTML = inputConfig.validation[i].errorMessage;
			}
		}
		 if(inputConfig.validation[i].type == 'MatchPassword'){
			if(!inputConfig.validation[i].value.match(el.value))
			{
				errorEl.innerHTML = inputConfig.validation[i].errorMessage;
			}
		}
		if(inputConfig.validation[i].type == 'checkbox'){
			if(!inputConfig.validation[i].checked== true)
			{
				errorEl.innerHTML = inputConfig.validation[i].errorMessage;
			}
		}

		// else 
		// {
		// 	errorEl.innerHTML = inputConfig.validation[i].errorMessage.style.display="none";
		// 	return true
		// }
	}}


	
	// if(!inputid.validation.type)
	// {
	// 	errorEl.innerHTML= inputId.validation.errorMessage;
	// 	return false;
	// }


	// else if(el.type == 'checkbox'|| el.type == 'radio') 
	// {
	//    if(el.value == ''){
	//      errorEl.innerHTML =  'select at least one checkbox';
	//      return false;
	//     }
	//    else 
	//    {
	//    errorEl.innerHTML = '';
	//    return true;
	//    }
	// }

	// else
	// {
		
    //   if(inputId ==  "emailId")
	// 	  {
	// 		 var patt = new RegExp(inputId.validation.pattern);
	// 		 var emailCheck =patt.test(el.value);
	// 		 if(!emailCheck)
	// 		 {
	// 			errorEl.innerHTML = inputId.validation.errorMessage;
	// 			return false;
	// 		 }
	// 	 }
	// 	else if (inputId.id ==  "password")
	// 	 {
	// 		  var passwordPattern = new RegExp(inputId.validation.pattern);
	// 		  var passCheck = passwordPattern.test(el.value);
	// 		  if(!passCheck)
	// 		  {
	// 			errorEl.innerHTML = inputId.validation.errorMessage;
	// 			return false; 
	// 		  }

	// 	 }

	// 	 else{
	// 		errorEl.innerHTML = '';
	// 		return true;
	// 	 }
		 

	// }


