fetch("data.json")
.then(Response => Response.json())
.then(data =>{
    
    for (const title of data) {
        
        console.log(title)
    }
})