
const express = require("express")

const app = express()

const port = 4000

app.get("/",(req,res)=>{
     
    const responce = isPrime(parseInt(req.query.num))
    res.json(responce)
})

app.listen(port,()=>console.log(`Server Running on Port:${port}`))







function isPrime(num){

    let startTime = new Date()
    let endTime = new Date()
    let prime = true

    for(i=2;i<num/2;i++){
    if(num<2){
        prime =  false
    
          console.log("gg")
            endTime = new Date()
            prime= false
            break;
        
    }
}

    if(isPrime) endTime = new Date()

    // console.log()

    return {
        "number":num,
        "isPrime":prime,
        "time":startTime.getTime()-endTime.getTime()
    }

}
