const cardarray=[
    {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
]
cardarray.sort(()=>0.5-Math.random())
const griddisplay=document.querySelector('#grid')
const resultdisplay=document.querySelector('#result')
let cardchosen=[]
console.log(griddisplay)
let cardchosenid=[]
const cardwon=[]
function createboard(){
    for(let i=0; i < cardarray.length ;i++){
        const card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcard)
        griddisplay.appendChild(card)
    }
}
createboard()


function checkMatch(){
    const cards=document.querySelectorAll('img')
    const optiononeid=cardchosenid[0]
    const optiontwoid=cardchosenid[1]
    console.log(cards)
    console.log('check for a match!')
    if(optiononeid==optiontwoid){
      cards[optiononeid].setAttribute('src','images/blank.png')
      cards[optiontwoid].setAttribute('src','images/blank.png')
      alert('you clicked the same image!')
    }
        


    if(cardchosen[0]==cardchosen[1]){
        alert('you found a match!')
        cards[optiononeid].setAttribute('src','images/white.png')
        cards[optiontwoid].setAttribute('src','images/white.png')
        cards[optiononeid].removeEventListener('click',flipcard)
        cards[optiontwoid].removeEventListener('click',flipcard)

        cardwon.push(cardchosen)
    }
    else{
      cards[optiononeid].setAttribute('src','images/blank.png')
      cards[optiontwoid].setAttribute('src','images/blank.png')
      alert('sorry try again!')
    }
    resultdisplay.textContent=cardwon.length
    cardchosen=[]
    cardchosenid=[]
    if(cardwon.length==(cardarray.length)/2){
      resultdisplay.textContent='congratulations you found them all!!'
    }
    
}


function flipcard(){
    console.log(cardarray)
    const cardid=this.getAttribute('data-id') 
    cardchosen.push(cardarray[cardid].name)
    cardchosenid.push(cardid)
    console.log('clicked',cardid)
    console.log(cardchosen)
    console.log(cardchosenid)
    this.setAttribute('src',cardarray[cardid].img)
    if(cardchosen.length==2){
        setTimeout(checkMatch,500)
    }
}












