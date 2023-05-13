

    
   
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

    //  localStorage.setItem(email.value,JSON.stringify(obj));
     axios.post("https://crudcrud.com/api/7e393b9d20904233ba090bc035a96b3f/appointmentData",obj)
        .then((response)=>{
        console.log(response);
     }).catch((err)=>{
        console.log(err);
     })

     showUserOnScreen(obj);

    }
    window.addEventListener("DOMContentLoaded",()=>{
        axios.get("https://crudcrud.com/api/7e393b9d20904233ba090bc035a96b3f/appointmentData")
        .then((response)=>{
            console.log(response)
            for(var i=0;i<response.data.length;i++){
                showUserOnScreen(response.data[i]);
            }
        }).catch((err)=>{
            console.log(err);
        })
      
        
    })

    function showUserOnScreen(obj){
        const parenElement=document.getElementById("love");
        const childElememt=document.createElement('li');
        childElememt.textContent=obj.name+"-"+obj.email+"-"+obj.password;
 
        const delbtn=document.createElement('input');
        delbtn.type= "button"
        delbtn.value ='Delete'
       
       
       delbtn.onclick =()=> {
        //    localStorage.removeItem(obj.email);
        //    parenElement.removeChild(childElememt);
           axios.delete("https://crudcrud.com/api/7e393b9d20904233ba090bc035a96b3f/appointmentData")
           .then((response)=>{
               console.log(response)
               for(var i=0;i<response.data.length;i++){
                   showUserOnScreen(response.data[i]);
               }
           }).catch((err)=>{
               console.log(err);
           })
       }
 
       const edit=document.createElement('input');
       edit.type="button";
       edit.value='Edit'
       edit.onclick=()=>{
        // localStorage.removeItem(obj.email);
        // parenElement.removeChild(childElememt);
        axios.put("https://crudcrud.com/api/7e393b9d20904233ba090bc035a96b3f/appointmentData")
        .then((response)=>{
            console.log(response)
            for(var i=0;i<response.data.length;i++){
                showUserOnScreen(response.data[i]);
            }
        }).catch((err)=>{
            console.log(err);
        })
        username.value=obj.name;
        email.value=obj.email;
        password.value=obj.password;
           
        
           
       }
       childElememt.appendChild(delbtn);

       childElememt.appendChild(edit);
         
        parenElement.appendChild(childElememt);
       
     }
     
   