const but_notify=document.querySelector("#but_notify")
const input_email=document.querySelector("#input_email")
const text_error=document.querySelector(".text_error")

but_notify.addEventListener("click",(e)=>{
    e.preventDefault()
    if ( input_email.value=="") {
        text_error.style.display="block"
        input_email.classList.add("error")
    } else{
       let d= input_email.value
       if (d.includes(".")) {
        alert("email sended")
       } else{
        text_error.style.display="block"
        input_email.classList.add("error")
       }

    }

})