let val=document.getElementById('main');
val.style.backgroundColor='grey';
 
localStorage.setItem('name', 'rohan');

  let obj={
  name:'Ram',
  age:'26'
  
  }
  let obj1=JSON.stringify(obj);
  localStorage.setItem('newObj',obj1);
    
let objs=JSON.parse(localStorage.getItem('obj'));