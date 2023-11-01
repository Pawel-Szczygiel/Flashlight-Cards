const init = () => {
    let cards = document.querySelectorAll('.card');
    
    cards.forEach(card => card.addEventListener('mousemove', e => {
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;
       
        card.style.setProperty('--left', `${x}px`);
        card.style.setProperty('--top', `${y}px`);
    }))
}


document.addEventListener('DOMContentLoaded', init);
