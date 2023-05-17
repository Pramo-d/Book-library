let price=document.getElementById('price');
let dish=document.getElementById('dish');
let table=document.getElementById('Table')
let button=document.getElementById('btn');
let crudid= "34f2ee748e614f8f9aa9a2f83fb57cad";

button.onclick=()=>{

    const obj={
        price:price.value,
       dish:dish.value,
       table:table.value
    }
    axios.post(`https://crudcrud.com/api/${crudid}/orderData `,obj)
    .then((response)=>{
    showUserOnScreen(response.data);
    console.log(response.data);
 }).catch((err)=>{
    console.log(err);
 })

}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get(`https://crudcrud.com/api/${crudid}/ordertData`)
    .then((response)=>{
       
        for(var i=0;i<response.data.length;i++){
            console.log(response.data[i]);
             showUserOnScreen(response.data[i]);
        }
    }).catch((err)=>{
        console.log(err);
    })
  
    
})
 
function showUserOnScreen(obj){
    var list1=document.getElementById("Table1");
    var list2=document.getElementById("Table2");
    var list3=document.getElementById("Table3");


    // var table1=document.getElementById('table1').value;
    // var table2=document.getElementById('table2').value;
    // var table3=document.getElementById('table3').value;


  //  const parenElement=document.getElementById("Table1");
    const childElememt=document.createElement('li');

    childElememt.textContent= obj.price+"-"+obj.dish+"-"+obj.table;
     //parenElement.appendChild(childElememt);
    // if()

    const delbtn=document.createElement('input');
    delbtn.type= "button"
    delbtn.value ='Delete Order'
 
   
   delbtn.onclick =()=> {

     
   
        axios.delete(`https://crudcrud.com/api/${crudid}/orderData/${obj._id}`)
        .then((response)=>{
            //parenElement.removeChild(childElememt);
            confirm("Do you want to delete the order");
            childElememt.remove();
            console.log(response.data)
        }).catch((err)=>{
            console.log(err);
        })
 
    }


    childElememt.appendChild(delbtn);
   // parenElement.appendChild(childElememt);

   if(obj.table=='table1'){
    list1.appendChild(childElememt);
   }
   if(obj.table=='table2'){
    list2.appendChild(childElememt);
   }
   if(obj.table=='table3'){
    list3.appendChild(childElememt);
   }
}