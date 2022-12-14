const popular = document.querySelector('#popular .disp')
const neww = document.querySelector('#new .disp')
const local = document.querySelector('#local .disp')
function fetchData(){
    return fetch('https://my-json-server.typicode.com/alishahmohamed/coctail-lovers/cocktails')
    .then(response => response.json())
    .then(json => json)
}