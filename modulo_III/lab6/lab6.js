/**
 *     @author Seneida <seneidasanchez25@gmail.com>
 *     @fileOverview This script use data types in JS
 *     @licence BSD 3-Clause License
 */
// Función para el ejercicio 3
function ejercicio3() {

    // Declaration vars
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
     * @param {Object} buildProductDataForRequest
     * @returns {Object|null}
     * @description this method use for build data for send to server
     */
    const buildData = buildProductDataForRequest => {
        let product = null;

        if (buildProductDataForRequest !== null && buildProductDataForRequest !== undefined) {
            product = {
                productname: buildProductDataForRequest.productName,
                producttype: buildProductDataForRequest.productType,
                quantity: buildProductDataForRequest.quantity,
                price: buildProductDataForRequest.price,
                latitude: buildProductDataForRequest.latitude,
                longitude: buildProductDataForRequest.longitude
            }
        };
        return product;
    }

    /**
     * @method
     * @returns {Object}
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
      
        if (isNaN(validationInputQuantity) || validationInputQuantity <= 0 ){
            mensajeError.textContent = "La Cantidad debe ser mayor que cero.";
            return false;  
        }
      
        if (validationInputPrice < 5 ){
            mensajeError.textContent = "El prcio debe ser un numero mayor o igual que 5.";
            return false;  
        }
      
        if (validationInputLatitude < 6 ){
            mensajeError.textContent = "La latitude debe ser un numero mayor o igual que seis.";
            return false;  
        }
      
        if (validationInputLongitude < 6 ){
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
            alert("¡Llene el formulario correctamente!");
            return false;
        }
    }
}

// Función para el ejercicio 4
function ejercicio4() {
    
    // Declaration vars
    let email = "";
    let name = "";
    let lastname = "";
    let phone = "";
    let pass = "";
    let user = {};

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
     * @returns {string|null}
     * @description this method use for capitalize a word
    */
    const wordToCapitalize = word => {
        let toCapitalize = null;
        if (word !== null && word !== undefined && word.length > 0) {
            toCapitalize = word[0].toUpperCase() + word.slice(1);
        }
        return toCapitalize;
    };

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
        return encodedStringBtoA;
    };

    /**
     * @method
     * @param data
     * @returns {Object|null}
     * @description this method use for build data for send to server
    */
    const buildData = buildUserDataForRequest => {
        let user = null;

        if (buildUserDataForRequest !== null && buildUserDataForRequest !== undefined) {
            user = {
                email: buildUserDataForRequest.email,
                firstname: buildUserDataForRequest.name,
                last_name: buildUserDataForRequest.lastname,
                phone: buildUserDataForRequest.phone,
                password: buildUserDataForRequest.pass
            }
        }
        return user;
    };

    /**
     * @method
     * @returns {Object}
     * @description this method use for get data from the HTML inputs,
     * also through convert to JSON object for next time send to any server
    */
    const getUserDataForm = () => {
        // Obtener datos del formulario
        const validationEmail = document.getElementById("validationEmail").value;
        const validationName = document.getElementById("validationName").value;
        const validationLastname = document.getElementById("validationLastname").value;
        const validationPhone = document.getElementById("validationPhone").value;
        const validationPassword = document.getElementById("validationPassword").value;
        const mensajeError = document.getElementById("mensajeError");

        // sanitize data
        email = validationEmail;
        name = wordToCapitalize(validationName);
        lastname = wordToCapitalize(validationLastname);
        phone = validationPhone;
        pass = encodeBase64(validationPassword);

        //Validate the form fields with the required characters.

        //Validate the email field with a minimum of 6 characters and a regular expression pattern.
        var emailPattern = /^[a-zA-Z0-9._-]{6,}@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(validationEmail) || validationEmail < 6 ) {
            mensajeError.textContent = "El correo electronico no es valido debe tener minimo seis caracteres";
            return false; 
        }

        if (validationName !== null && validationName !== undefined && validationName.length < 3){
            mensajeError.textContent = "El nombre debe tener al menos tres caracteres.";
            return false;  
        }

        if(validationLastname !== null && validationLastname !== undefined && validationLastname.length < 3 ){
            mensajeError.textContent = "El apellido debe tener al menos tres caracteres.";
            return false;  
        }
      
        if(validationPhone.length !== 10 || isNaN(validationPhone)){
            mensajeError.textContent = "El teléfono debe contener 10 dígitos numéricos";
            return false;
        }
      
        if (validationPassword.length !== 6 || isNaN(validationPassword)) {
            mensajeError.textContent = "La contraseña debe tener al menos seis caracteres.";
            return false;
        }

        return true;

        debugger

        // 3. prepare to send
        user = buildData({name: name, lastname: lastname, phone: phone, pass: pass, email: email});
     
        debugger
    };

    // function to save the validated data of the form.
    function guardardatos() {
        const formularioValido = getUserDataForm();

        if (formularioValido) {
          // Here you would save the product data
          alert("¡Datos guardados correctamente!");
          return true;
        } else {
          alert("¡Llene el formulario correctamente!");
          return false;
        }
    }
}


// Función para el ejercicio 5
function ejercicio5() {
    
    // Declaration vars
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
        return encodedStringBtoA;
    };

    /**
     * @method
     * @param data
     * @returns {Object|null}
     * @description this method use for build data for send to server
    */
    const buildData = buildLoginDataForRequest => {
        let login = null;

        if (buildLoginDataForRequest !== null && buildLoginDataForRequest !== undefined) {
            login = {
                email: buildLoginDataForRequest.email,
                password: buildLoginDataForRequest.pass
            }
        }
        return login;
    };

    /**
     * @method
     * @returns {Object}
     * @description this method use for get data from the HTML inputs,
     * also through convert to JSON object for next time send to any server
   */
    const getLoginDataForm = () => {
        // Obtener datos del formulario
        const validationEmail = document.getElementById("validationEmail").value;
        const validationPassword = document.getElementById("validationPassword").value;
        const mensajeError = document.getElementById("mensajeError");

        // sanitize data
        email = validationEmail;
        pass = encodeBase64(validationPassword);

        //Validate the form fields with the required characters.

       //Validate the email field with a minimum of 6 characters and a regular expression pattern.
       var emailPattern = /^[a-zA-Z0-9._-]{6,}@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
       if (!emailPattern.test(validationEmail) || validationEmail < 6 ) {
          mensajeError.textContent = "El correo electronico no es valido debe tener minimo seis caracteres";
          return false; 
        }
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
            alert("¡Datos guardados correctamente!");
            return true;
        } else {
            alert("¡Llene el formulario correctamente!");
            return false;
        }
    }
}
// Logic to run exercise functions when page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    ejercicio3();
    ejercicio4();
    ejercicio5();
});