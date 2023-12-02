let paragraph = document.getElementById('paragraph')
paragraph.innerText = "hello world"
let sign = document.getElementById('sign')
paragraph.style.display = 'none'
sign.addEventListener('click', function(){
    paragraph.innerText = 'wewlcome'
    paragraph.style.display = 'block'
} )