console.log('Welcome to Project-4')

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
let validEmail = false;
let validName = false;
let validPhone = false;

name.addEventListener('blur' , function(){
    console.log('Your name is blurred');
    // Validating Name
    
    let regex = /^[a-zA-z]([0-9a-zA-Z]){2,20}/;
    let str = name.value;
    let input1 = document.getElementById('input1');
    if(regex.test(str)){
        console.log('Your username is Valid');
        input1.classList.remove('active');
        validName = true;
    }
    else{
        validName = false;
        console.log('Your username is not Valid')
        input1.classList.add('active');
    }
    
})
email.addEventListener('blur' , function(){
    console.log('Your name is blurred');
    // Validating Name
    
    let regex = /^([_a-zA-Z0-9\.\-]+)@([_a-zA-Z0-9\.\-]+)\.([A-Za-z!=0-9]){2,5}$/;
    let str = email.value;
    let input2 = document.getElementById('input2');
    if(regex.test(str)){
        validEmail = true;
        console.log('Your email-id is Valid');
        input2.classList.remove('active');
    }
    else{
        validEmail = false;
        console.log('Your email-id is not Valid')
        input2.classList.add('active');
    }
    
})
phone.addEventListener('blur' ,function(){
    console.log('Your phone is blurred');
    // validating phone
   
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    let input3 = document.getElementById('input3');
    if(regex.test(str)){
        validPhone = true;
        console.log('Your Phone is Valid');
        input3.classList.remove('active');
    }
    else{
        validPhone = false;
        console.log('Your Phone is not Valid')
        input3.classList.add('active');
    }
})
password.addEventListener('blur' ,function(){
    console.log('Your password is blurred');
    // validating phone
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let str = password.value;
    let input4 = document.getElementById('input4');
    if(regex.test(str)){
        console.log('Your Password is Valid');
        input4.classList.remove('active');
    }
    else{
        console.log('Your Password is not Valid')
        input4.classList.add('active');
    }
});

password2.addEventListener('blur' , function(){
    let str = password2.value
    if(str !== password.value){
        console.log('Your password is not matched');
        input5.classList.add('active');
    }
    else{
        console.log('Your password is matched');
        input5.classList.remove('active');
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', function(e){
    e.preventDefault();
    console.log('You clicked on submit');
    

    
    if(validEmail && validName && validPhone){
        console.log('Phone , email , Username are valid');
        let alert = document.getElementById('alert');
        alert.classList.add('active')
    }
    else{
        console.log('Phone , email , Username are not valid')
        let alert2 = document.getElementById('alert2');
        aler2.classList.add('active')
    }
})




        
