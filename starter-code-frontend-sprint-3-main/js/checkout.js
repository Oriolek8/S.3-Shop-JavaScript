/*- Tots els camps són obligatoris.
- Tots els camps han de tenir almenys 3 caràcters. X

- El nom i cognoms han de contenir només lletres.
- El telèfon ha de contenir només números.
- La contrasenya ha d'incloure números i lletres.
- L'email ha de tenir format d'email. X
*/

//Campos



// Get the error elements
let errorPassword = document.getElementById("errorPassword");
let errorName = document.getElementById('errorName');  
let errorPhone = document.getElementById('errorPhone');  





    const formulario = document.getElementById("formulario");
    const inputs = document.querySelectorAll("#formulario input");
    const botonBuy = document.getElementById("btn");
    

    

    const expresiones = {
        nombre:/^[a-zA-Z ]{3,}$/, //Solo letras
        email:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,//Formato email
        lastName:/^[a-zA-Z ]{3,}$/,  //Solo letras
        password:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // 8 caracteres minimo una letra y un numero
        phone:/^\d{7,14}$/      
    }
  

    function validarCampo(e){
        
        //Inputs major 3   YA SE QUE SE PUEDEN CREAR EXPRESIONES REGULARES QUE TENGAN UN MINIMO DE CARACTERES, ES PARA PRACTICAR
        if(e.target.value.length >= 3){
            e.target.classList.remove("errorGeneral")
            e.target.classList.add("good")
                      
        }else{
            e.target.classList.remove("good")
            e.target.classList.add("errorGeneral")
            
        }
        
        switch(e.target.name){
            case "nombre":
                if(expresiones.nombre.test(e.target.value)){
                  e.target.classList.remove("errorGeneral")  
                   errorName.style.display = "none";
                   e.target.classList.add("good")
                }else{
                    e.target.classList.remove("good");
                    e.target.classList.add("errorGeneral");
                    errorName.style.display = "block";
                }
                break;
            case "lastName":
            if(expresiones.lastName.test(e.target.value)){
                e.target.classList.remove("errorGeneral")
                e.target.classList.add("good")    
            }else{
                e.target.classList.remove("good");
                e.target.classList.add("errorGeneral");  
                }
                break;
            case "email":
                if(expresiones.email.test(e.target.value)){
                    e.target.classList.remove("errorGeneral")
                    e.target.classList.add("good")
                }else{
                    e.target.classList.remove("good")
                    e.target.classList.add("errorGeneral")   
                }
                break;
            case "password":
                if(expresiones.password.test(e.target.value)){
                    e.target.classList.remove("errorGeneral")
                    e.target.classList.add("good")
                    errorPassword.style.display = "none";
                }else{
                    e.target.classList.remove("good")
                    e.target.classList.add("errorGeneral") 
                    errorPassword.style.display = "block";  
                }
                break;
            case "phone":
                if(expresiones.phone.test(e.target.value)){
                    e.target.classList.remove("errorGeneral")
                    e.target.classList.add("good")
                    errorPhone.style.display = "none";

                }else{
                    e.target.classList.remove("good")
                    e.target.classList.add("errorGeneral") 
                    errorPhone.style.display = "block";
                }
            break;
            }
        }
    
        
    inputs.forEach( input => {

            input.addEventListener("keyup", validarCampo)
            input.addEventListener("blur", validarCampo)

    })
    

   
