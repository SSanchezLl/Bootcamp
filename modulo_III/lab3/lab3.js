/**
 *     @author Seneida <seneidasanchez25@gmail.com>
 *     @fileOverview This script use data types in JS
 *     @licence BSD 3-Clause License
 */

//declaration vars

let productName = "";
let productType = "";
let quantity = "";
let price = "";
let latitude = "";
let longitude = "";
let product = {};



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
        }, false);
      })
})()



/**
 * @method
 * @param data
 * @returns {Object|null}
 * @description this method use for build data for send to server
 */
const buildData = buildProductDataForRequest => {
    let product  = null;

    if (buildProductDataForRequest !== null && buildProductDataForRequest !== undefined) {
      product  = {
            productname: buildProductDataForRequest.productName,
            producttype: buildProductDataForRequest.productType,
            quantity: buildProductDataForRequest.quantity,
            price: buildProductDataForRequest.price,
            latitude: buildProductDataForRequest.latitude,
            longitude: buildProductDataForRequest.longitude
        }
    };
    debugger
    return product ;
}


/**
 * @method
 * @returns {Object}
 * @description this method use for get data from the HTML inputs,
 * also through convert to JSON object for next time send to any server
 */



const getProductDataForm = () => {


    // first step load data from html

    const validationInputName = document.getElementById("validationInputName").value;
    const validationInputProduct = document.getElementById("validationInputProduct").value;
    const validationInputQuantity = document.getElementById("validationInputQuantity").value;
    const validationInputPrice = document.getElementById("validationInputPrice").value;
    const validationInputLatitude = document.getElementById("validationInputLatitude").value;
    const validationInputLongitude = document.getElementById("validationInputLongitude").value;
    const mensajeError = document.getElementById("mensajeError");

    debugger
    
    // sanitize data
    productName = validationInputName;
    productType = validationInputProduct;
    quantity = validationInputQuantity;
    price = validationInputPrice;
    latitude = validationInputLatitude;
    longitude = validationInputLongitude;

    //Validate the form fields with the required characters.
    if (validationInputName.length < 4) {
      mensajeError.textContent = "El nombre del producto debe tener al menos cuatro caracteres.";
      return false; 
    }

    if (validationInputProduct.length < 6){
      mensajeError.textContent = "El tipo de producto debe tener al menos seis caracteres.";
      return false;  
    }

    if(isNaN(validationInputQuantity) || validationInputQuantity <= 0 ){
      mensajeError.textContent = "La Cantidad debe ser mayor que cero.";
      return false;  
    }

    if(validationInputPrice < 5 ){
      mensajeError.textContent = "El prcio debe ser un numero mayor o igual que 5.";
      return false;  
    }

   if(validationInputLatitude < 6 ){
      mensajeError.textContent = "La latitude debe ser un numero mayor o igual que seis.";
      return false;  
    }

    if(validationInputLongitude < 6 ){
      mensajeError.textContent = "La longitude debe ser un numero, 6 o mayor que 6.";
      return false;  
    }

    return true;

 
    // prepare to send
    user = buildData({productname: productName, producttype: productType, quantity: quantity, price: price, latitude: latitude, longitude: longitude});
 
};
// function to save the validated data of the form.
function guardarProducto() {
  const formularioValido = getProductDataForm();
  
  if (formularioValido) {
    // Here you would save the product data
    alert("¡Producto guardado correctamente!");
    return true;
  } else {
    alert("¡llene el formulario correctamente!");
    return false;
  }
} 
