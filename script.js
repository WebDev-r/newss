window.addEventListener('load',fetched('india'))

function fetched(query){
fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${query}&freshness=Day&textFormat=Raw&safeSearch=Off`,{
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': 'a3b970f302msh2f7df4a0c9be985p179c03jsn36cd9b3ac0f7',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
})
.then((respond)=>{

        return respond.json()
})
.then((respond)=>{
  var data=respond.value
  var cardCont=document.querySelector('.card-container')
  cardCont.innerHTML="";
  data.forEach(elements => {
    if(elements.image.thumbnail.contentUrl==null){return}
    var cloneCard=document.querySelector('.temp-card').content.cloneNode(true)
    filldata(elements,cloneCard)
    cardCont.appendChild(cloneCard)
  })
})
.catch((error)=>{
  console.log(error)
})
function filldata(element,cardclone){
  cardclone.querySelector('.image').src=element.image.thumbnail.contentUrl
  cardclone.querySelector('.title').innerHTML=element.name
  cardclone.querySelector('.description').innerHTML=element.description
}
}
function clicked(id)
{
  fetched(id)
}
document.querySelector('.education').addEventListener('click',()=>{
  fetched('education')}
  );
document.querySelector('.technology').addEventListener('click',()=>{fetched('technology')});
document.querySelector('.sports').addEventListener('click',()=>{fetched('sports')});
document.querySelector('.btn').addEventListener('click',()=>{
  fetched(document.querySelector('.input-box').value)
})