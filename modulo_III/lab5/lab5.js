/**
 *     @author Seneida <seneidasanchez25@gmail.com>
 *     @fileOverview This script use data types in JS
 *     @licence BSD 3-Clause License
 */

//declaration vars
let email = "";
let pass = "";
let login = {};


// Disable form submission if there are invalid fields
(function () {
  'use strict'

  // Getting the required validations from the fields in the form
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

/**
 * @method
 * @param word
 * @returns {string|undefined}
 * @description this method use for encoded a word in base64
 */
const encodeBase64 = word => {
    let encodedStringBtoA = undefined;
    if (word !== null && word !== undefined && word.length > 0) {
      encodedStringBtoA = btoa(word);
    }
    debugger
    return encodedStringBtoA;
};

 /**
 * @method
 * @param data
 * @returns {Object|null}
 * @description this method use for build data for send to server
 */
 const buildData = buildLoginDataForRequest  => {
    let login = null;
  
    if (buildLoginDataForRequest !== null && buildLoginDataForRequest !== undefined) {
        login = {
        email: buildLoginDataForRequest.email,
        password: buildLoginDataForRequest.pass
      }
    }
    debugger
    return login;
};
 /**
 * @method
 * @returns {Object}
 * @description this method use for get data from the HTML inputs,
 * also through convert to JSON object for next time send to any server
 */
 const getLoginDataForm = () => {

    //1. first step load data from html
    const validationEmail = document.getElementById("validationEmail").value;
    const validationPassword = document.getElementById("validationPassword").value;
    const mensajeError = document.getElementById("mensajeError");
    debugger


    //2. sanitize data
    email = validationEmail;
    pass = encodeBase64(validationPassword);

    //Validate the form fields with the required characters.

    //Validate the email field with a minimum of 6 characters and a regular expression pattern.
    var emailPattern = /^[a-zA-Z0-9._-]{6,}@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(validationEmail) || validationEmail < 6 ) {
      mensajeError.textContent = "El correo electronico no es valido debe tener minimo seis caracteres";
      return false; 
    }
   
   /*var passwordPattern = /^.{6,}$/; 
   if(!passwordPattern.test(validationPassword) || validationPassword < 6 ){
      mensajeError.textContent = "la contraseña debe tener mas de seis caracteres.";
      return false;  
    }*/
    if (validationPassword.length !== 6 || isNaN(validationPassword)) {
      mensajeError.textContent = "La contraseña debe tener al menos seis caracteres.";
      return false;
    }
  
    return true;

    debugger

   // 3. prepare to send
   user = buildData({pass: pass, email: email});

   debugger
};

// function to save the validated data of the form.
function guardardatos() {
  const formularioValido = getLoginDataForm();
  
  if (formularioValido) {
    // Here you would save the product data
    alert("¡Datos guardado correctamente!");
    return true;
  } else {
    alert("¡llene el formulario correctamente!");
    return false;
  }
} 
// function to save the validated data of the form.
/*function guardardatos() {
  const formularioValido = getLoginDataForm();
  
  if (formularioValido) {
    // Here you would save the product data
    alert("¡Datos guardado correctamente!");
    return true;
  }
} 
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", guardardatos); */



