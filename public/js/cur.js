console.log("Cur.js")

// const url='https://api.lunarcrush.com/v2?data=assets&key=hvp5ismajydbm1j7f4hry&symbol=DOGE'
// request({url,json:true},(error,{body}=response)=>{
//     const name=body.data[0].name
//     const price=body.data[0].price
//     console.log(name+' '+price)
//     })


const name=document.querySelector('#name')
const price=document.querySelector('#price')
const marketcap=document.querySelector('#marketcap')
const change24h=document.querySelector('#change24h')
const change7d=document.querySelector('#change7d')
const change30d=document.querySelector('#change30d')
const input=document.querySelector('input')
const submit=document.querySelector('submit')
const form=document.querySelector('form')





form.addEventListener('submit',(e)=>{
    e.preventDefault()
    name.textContent="Loading...."
    price.textContent=" "
    marketcap.textContent=" "
    change24h.textContent=" "
    change7d.textContent=" "
    change30d.textContent=" "
    const cryptoname=input.value
    fetch('/cur?currency='+cryptoname)
.then((response)=>{
    response.json()
    .then((data)=>{
        if(data.error)
        {
            name.textContent="No crypto currency with that name atm"
        }
        else 
        {
            name.textContent="Name: "+data.name
            price.textContent="Price: $"+data.price
            marketcap.textContent="MarketCap: $"+data.finalmarketcap
            change24h.textContent="Change in 24h: "+data.change24h+"%"
            change7d.textContent="Change in 7d: "+data.change7d+"%"
            change30d.textContent="Change in 30d: "+data.change30d+"%"
        }
        
    })
})
})




