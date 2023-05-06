

    
   
let username=document.getElementById('name');
let movie=document.getElementById('movie');
let category=document.getElementById('category');
let button=document.getElementById("btn");
   

button.onclick=()=>{
    let obj={
        name: username.value,
        movie:movie.value,
        category:category.value, 
    
     }
     localStorage.setItem(movie.value,JSON.stringify(obj));
     
    showUserOnScreen(obj);

    }

    function showUserOnScreen(obj){
        const parenElement=document.getElementById("love");
        const childElememt=document.createElement('li');
        childElememt.textContent=obj.name+"-"+obj.movie+"-"+obj.category;
 
        const delbtn=document.createElement('input');
        delbtn.type= "button"
        delbtn.value ='Delete Expens'
       
       
       delbtn.onclick =()=> {
           localStorage.removeItem(obj.movie);
           parenElement.removeChild(childElememt);
       }
 
       const edit=document.createElement('input');
       edit.type="button";
       edit.value='Edit Expense'
       edit.onclick=()=>{
        localStorage.removeItem(obj.movie);
        parenElement.removeChild(childElememt);
           
        username.value=obj.name;
        movie.value=obj.movie;
        category.value=obj.category;
           
        
           
       }
       childElememt.appendChild(delbtn);

       childElememt.appendChild(edit);
         
        parenElement.appendChild(childElememt);
       
     }
     
   