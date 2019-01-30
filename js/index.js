// Your code goes here
const nav = document.querySelector('.main-navigation')

function randomInt(max){
    return Math.floor(Math.random() * Math.floor(max)) + 1
}

// 1 Disco Nav
window.addEventListener('scroll', () => {
    nav.style.backgroundColor = `rgb(${randomInt(255)}, ${randomInt(255)}, ${randomInt(255)})`
})

// 2 change FunBus to Disco Bus on click

const welcomeH2AndImg = document.querySelector('.intro').querySelectorAll('h2, img')
// TODO: change discobus IMG
welcomeH2AndImg[1].addEventListener('click', ()=>{
    welcomeH2AndImg[1].textContent = 'Welcome To Disco Bus!'
    welcomeH2AndImg[0].src = '/img/fun-bus.png'
})

// 3 onhover Reveal DiscoBus
welcomeH2AndImg[0].addEventListener('mouseover', (e) => {
    e.currentTarget.src = '/img/fun-bus.png'
})

// 3 onMouseOut back to original photo
welcomeH2AndImg[0].addEventListener('mouseout', (e) => {
    e.currentTarget.src = '/img/fun-bus.jpg'
})

// 4 
window.addEventListener('keydown', (e) => {
    if(e.code === 'Digit5'){
        //show funbus
       let img = document.createElement('img')
       img.src = '/img/fun-bus.jpg'
       document.querySelector('body').appendChild(img)
    }
})

// 5 Add discoBalls
// TODO: add dicoball img
document.querySelector('body').addEventListener('click', (e) =>{
    let img = document.createElement('img')
    img.src = '/img/discoball.png'
    img.style.position = 'absolute'
    img.style.width = '100px'
    img.style.height = '100px'
    img.style.left = `${e.screenX - 50}px`
    img.style.top = `${e.screenY - 130}px`
    e.currentTarget.appendChild(img)
})

// 6 alert copy
const paragraphs = document.querySelectorAll('p')
paragraphs.forEach( p => {
    p.addEventListener('copy', () => {
        alert('STOP! Lets Dance')
    })
})

// 7 double click
const btns = document.querySelectorAll('.btn')
btns.forEach( btn => {
    btn.addEventListener('dblclick', (e)=>{
        e.currentTarget.style.backgroundColor = `rgb(${randomInt(255)}, ${randomInt(255)}, ${randomInt(255)})`
    })
})

// 8
welcomeH2AndImg[1].addEventListener('drag', () => {
    // alert('what a drag')
    document.querySelector('body').style.backgroundColor = 'black'
})

// 9
welcomeH2AndImg[1].addEventListener('dragend', () => {
    document.querySelector('body').style.background = 'none'
})

// 10
const otherimgs = document.querySelectorAll('.img-content')

otherimgs.forEach( img => {
    img.addEventListener('mouseenter', (e) => {
       e.currentTarget.children[0].style.borderRadius = '50%'
    })
    img.addEventListener('mouseleave', (e) => {
        e.currentTarget.children[0].style.borderRadius = '5%'
     })
})


// Last two tasks
const links = document.querySelectorAll('a')

nav.addEventListener('click', (e) => {
    e.currentTarget.style.backgroundColor = 'blue'
})

links.forEach( link => {
    link.addEventListener('click', (e) => {
        e.stopPropagation()
        e.preventDefault()
    })
})