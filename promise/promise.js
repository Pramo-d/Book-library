 function checkBook(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const book='i have book';
            resolve(book);
        }, 2000);
    })
 }
 function checkIdCard(book){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const idCard=book+' i have idCard ';
            resolve(idCard)
        }, 2000);
    })
 }
 function entryInLibrary(idCard){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const entry=idCard+' i am In library ';
            resolve(entry)
        }, 2000);
    })
 }
 async function nowStudy(){
    const book=await checkBook();
     console.log(book)
    const  idCard=await checkIdCard(book);
    console.log('i have a idCard')

    const  entry=await entryInLibrary(idCard);
    console.log('i get entry')

 }
 nowStudy()