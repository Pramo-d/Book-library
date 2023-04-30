

    

  
 
//  let nam=localStorage.setItem("name",name);
//  let mail=localStorage.setItem("email",email);
//  let pass=localStorage.setItem("password",password);
  
//  let obj={
//     Username:username.value,
//     email:email.value,
//     password:password.value,
//  }
 //localStorage.setItem('obj.email',Json.stringfy(obj));
//show();

  
//   function show(){
//     let parent=document.getElementById('value');
//   let child =document.createElement('li');
//   child.textContent= obj.email;
//   child.appendChild(document.createTextNode(child));
  
 
//   }

// button.addEventListener('click',function(){
//     let obj={
//         Username:name.value,
//         email:email.value,
//         password:password.value,
//      }
//      localStorage.setItem('obj.email',JSON.stringfy(obj));

// })
   
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
    //      let ul=document.getElementById('value')
    //      ul.parentElement;   
    //  let li=document.createElement('li');
    //  li.appendChild(document.createTextNode(obj));

    //   let show=document.createElement('li');
    //   show.setAttribute("type","button");
    //   show.setAttribute("value",obj);
    // document.body.appendChild(show) ;

    showUserOnScreen(obj);

    }

    function showUserOnScreen(obj){
        const parenElement=document.getElementById("value");
        const childElememt=document.createElement('li');
        childElememt.textContent=obj.name+"-"+obj.email+"-"+obj.password;
        parenElement.appendChild(childElememt);
    }