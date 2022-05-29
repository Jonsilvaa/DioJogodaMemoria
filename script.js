const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard;
let secondCard;
let lockBoard = false;

function flipCard()
{
    if(lockBoard) return;
    if(this===firstCard) return;

    this.classList.toggle('flip');

    if(!hasFlippedCard)
    {
        hasFlippedCard=true;
        firstCard=this;
        return;
    }

    secondCard = this;
    hasFlippedCard=false;

    checkForMath()
}

cards.forEach((card)=>{
    card.addEventListener('click',flipCard);
})


function checkForMath()
{
    if(firstCard.dataset.card === secondCard.dataset.card )
    {
        disableCards();
        return;
    }
        
    unflipCards();

}

function disableCards()
{
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);

}

function unflipCards()
{
    lockBoard=true;
    setTimeout(()=>{firstCard.classList.remove('flip');secondCard.classList.remove('flip'); lockBoard=false;}, 1500);
}
