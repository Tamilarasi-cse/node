const fs =require('fs')
// reading file
fs.readFile('./docs/blog.txt',(err,data)=>
{
    if(err)
        {
            console.log(err);
        }
    console.log(data.toString());
})

console.log('last line');
// writing files

fs.writeFile('./docs/blog.txt','hello hiii ',()=>
    {
        console.log('file written')
    }

)
    