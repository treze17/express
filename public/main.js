document.querySelector('button').addEventListener('click',makeReq)

async function makeReq(){
    const rap = document.querySelector('input').value

    try{
      const response = await fetch(`https://rappers.onrender.com/api/${rap}`)
      const data = await response.json()
      console.log(data)
      document.querySelector('h2').textContent = data.name
    }catch(error){
        console.log(error)
    }
}