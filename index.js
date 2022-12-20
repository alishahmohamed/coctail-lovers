const popular = document.querySelector('#popular .disp')
const neww = document.querySelector('#new .disp')
const local = document.querySelector('#local .disp')

const hide=document.querySelector(".hide")
hide.style.display="none"

const hideCard=document.querySelector(".hideCard")
hideCard.style.display="block"
const card=document.querySelector(".card")

const btn=document.querySelector("#btn")
const button = document.createElement('a');
    button.className = 'btn btn-outline-dark';
    button.textContent = 'Login';
    card.appendChild(button)

button.addEventListener("click",() =>{
      document.body.style.backgroundImage="none"
     
      if(hide.style.display==="none"){
            hide.style.display="block"
            
      }
      if(hideCard.style.display==="block"){
            hideCard.style.display="none"
      }
})


function fetchData(){}
      fetch("https://api.jsonbin.io/v3/b/639abf61dfc68e59d568ac85")
      .then(response => response.json())
      .then(data =>{
            const cocktail = data.record.cocktails 
            console.log(cocktail);
       
            cocktail.forEach(cocktail => {
                  switch (cocktail.category) {
                        case 'popular':
                              popular.appendChild(createHtml(cocktail))
                              break;
                        case 'new':
                              neww.appendChild(createHtml(cocktail))
                              break;
                        case 'local':
                              local.appendChild(createHtml(cocktail))
                              break;
                        default:
                              break;
                  }
      })
});
     

fetchData()
function createHtml(data){

      const div = document.createElement('div')
      div.className='card'
      const html = `
            <img src="${data.image}" alt="${data.name}">
            <h4>${data.name}</h4>
      `
      div.innerHTML = html
      const i = document.createElement('i')
      i.className='fas fa-heart'
      i.addEventListener('click', () => {
            i.classList.toggle('active')
      })
      div.appendChild(i)
      return div
}

fetchData()
 fetch("https://api.jsonbin.io/v3/b/639abf61dfc68e59d568ac85")
.then(response => response.json())
.then(data=>{
      const cocktail = data.record.cocktails
      cocktail.forEach(cocktail => {
            switch (cocktail.category) {
                 
            }
      });
})

document.getElementById('search').addEventListener('keyup', (e) => {
      const search = e.target.value.toLowerCase()
      const cards = document.querySelectorAll('.card')
      cards.forEach(card => {
            const name = card.querySelector('h4').textContent.toLowerCase()
            if(name.includes(search)){
                  card.style.display = 'block'
            }else{
                  card.style.display = 'none'
            }
      })
 })