const popular = document.querySelector('#popular .disp')
const neww = document.querySelector('#new .disp')
const local = document.querySelector('#local .disp')
function fetchData(){
    return fetch('https://my-json-server.typicode.com/alishahmohamed/coctail-lovers/cocktails')
    .then(response => response.json())
    .then(json => json)
}
function createHtml(data){
    const div = document.createElement('div')
    div.className='card'
    const html = `
          <img src="${data.image}" alt="${data.name}">
          <h4>${data.name}</h4>
          div.innerHTML = html
          const i = document.createElement('i')
          i.className='fas fa-heart'
          i.addEventListener('click', () => {
                i.classList.toggle('active')
          })
          div.appendChild(i)
          return div
    }
    

    `}