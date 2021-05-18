const path=require('path')
const express=require('express')
const hbs=require('hbs')
const request=require('request')
const jsdom=require('jsdom')
const { json } = require('express')


const port=process.env.PORT||3030
const app= express()
const viewspath=path.join(__dirname,'../templates/views')
const partialspath=path.join(__dirname,'../templates/partials')
const pathdir=path.join(__dirname,'../public')

app.set('view engine','hbs')
app.set('views',viewspath)
app.use(express.static(pathdir))
hbs.registerPartials(partialspath)












app.get('/cur',(req,res)=>{
    const currency=req.query.currency

    const url='https://api.lunarcrush.com/v2?data=assets&key=hvp5ismajydbm1j7f4hry&symbol='+currency
    request({url,json:true},(error,{body}=response)=>{
        if(body.error)
        {
            res.send({
                error:body.error
            })
        }
        else
        {
            const name=body.data[0].name
            const price=body.data[0].price
            const finalprice=numberWithCommas(price)
            const marketcap=parseInt(body.data[0].market_cap)
            const finalmarketcap=numberWithCommas(marketcap)
            const change24h=body.data[0].percent_change_24h
            const change7d=body.data[0].percent_change_7d
            const change30d=body.data[0].percent_change_30d
            res.send({
            name,price,finalmarketcap,change24h,change7d,change30d
        })
        }
        })
})

app.get('/news',(req,res)=>{
const url='https://newsapi.org/v2/everything?q=cryptocurrency&from=2021-04-17&sortBy=publishedAt&apiKey=d4b039e2469c4de6907dc546dee204c6'
request({url,json:true},(error,{body}=response)=>{
    res.send(body)

})
})

app.get('/',(req,res)=>{
    res.render('index',{
        title:'Home'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help'
    })
})
app.get('/demo',(req,res)=>{
    res.render('demo',{
        title:'Help'
    })
})


app.listen(port,()=>{
    console.log('server running on port:'+port)
})

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}