
const posts=[
    {tile:'post one',defined:new Date().getTime()},
    {tile:'post two',defined:new Date().getTime()}
]
function getPost(){
    for(let i=0;i<posts.length;i++){
        console.log(posts[i])
    }
}
 function LastUserActivityTime(){
     new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const date=new Date().getTime();
        resolve()
    },1000)
})
 }
 function create3Post(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    const newPost=[{title:'post three',defined:new  Date().getTime()}]
    resolve(newPost)
})
    })
 }
 create3Post().then((ele)=>{
    console.log(ele)
    return   getPost()
 })
