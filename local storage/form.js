

    
   
let username=document.getElementById('name');
let email=document.getElementById('email');
let password=document.getElementById('password');
let button=document.getElementById("btn");
//let key=new Date().getTime();
   

button.onclick=()=>{
    let obj={
        name: username.value,
        email:email.value,
        password:password.value,
       // key,
    
     }
     localStorage.setItem(email.value,JSON.stringify(obj));
     
    showUserOnScreen(obj);

    }

    function showUserOnScreen(obj){
        const parenElement=document.getElementById("love");
        const childElememt=document.createElement('li');
        childElememt.textContent=obj.name+"-"+obj.email+"-"+obj.password;
 
        const delbtn=document.createElement('input');
        delbtn.type= "button"
        delbtn.value ='Delete'
       
       
       delbtn.onclick =()=> {
           localStorage.removeItem(obj.email);
           parenElement.removeChild(childElememt);
       }
       childElememt.appendChild(delbtn);
         
        parenElement.appendChild(childElememt);
       
     }
     
     
        

     