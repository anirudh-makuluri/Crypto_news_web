console.log('news.js')


const author=document.querySelector('#author')
const title=document.querySelector('#title')
const description=document.querySelector('#description')
const url=document.querySelector('#url')
const urltoimage=document.querySelector('#urltoimage')
const publishedat=document.querySelector('#publishedat')
const content=document.querySelector('#content')
const newstile=document.querySelector('#newstile')


fetch('/news').then((response)=>{
    response.json().then((data)=>{
        for(var i=1;i<=15;i++)
        {
            const dtitle=document.createElement('a')
            dtitle.id="title"
            dtitle.href=data.articles[i].url
            dtitle.textContent=data.articles[i].title
            const durl=document.createElement('img')
            durl.id="urltoimage"
            durl.src=data.articles[i].urlToImage
            //console.log(i+')'+data.articles[i].urlToImage)
            const ddes=document.createElement('p')
            ddes.id="description"
            ddes.textContent=data.articles[i].description
            const line=document.createElement('p')
            line.textContent="_________________________________________________________________________________________________________________________________"
            if(data.articles[i].urlToImage!=null)
           { 
            newstile.appendChild(dtitle)
            newstile.appendChild(document.createElement('br'))
            newstile.appendChild(durl)
            newstile.appendChild(document.createElement('br'))
            newstile.appendChild(ddes)
            newstile.appendChild(document.createElement('br'))
            newstile.appendChild(line)
           }
        }
    })
})