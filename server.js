const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors({
    origin:'https://rappers.onrender.com/api'
}))

app.use(express.static('public'));

let rappers = {
    '21 savage':{
        name:'Sheyaa Bin Abraham Joseph',
        age:25,
        birthLocation:'London,England'
    },
    'chance the rapper':{
        name:'Chancellor Bennet',
        age:28,
        birthLocation:'Illonois,USA'
    },
    'dylan':{
        name:'Dylan',
        age: 'Dylan',
        birthLocation:'Dylan'
    }
}

app.get('/',(request,respond)=>{
    
    respond.sendFile(__dirname)
})

app.get('/api/:name',(request,response)=>{
    const rapperInfor = request.params.name.toLowerCase()
    if(rappers[rapperInfor]){
        response.json(rappers[rapperInfor])
    }else{
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT,()=>{
    console.log(`The server is running on PORT ${PORT}`)
})