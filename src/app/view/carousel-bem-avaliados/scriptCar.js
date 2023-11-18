//garantia que o evento vai acontecer para todos os cards de carroseis que atenderem os requisitos de classes:
document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper1");
    const carousel = document.querySelector(".carouselProducts1");
    const firstCardWidth = carousel.querySelector(".card1").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper1 i");
    const carouselChildrens = [...carousel.children];

    let isDragging = false,
        isAutoPlay = true,
        startX, startScrollLeft, timeoutId;

    let cardPerView = 4;

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    // Função para adicionar ouvinte de evento a um botão específico
    const addButtonListener = (btn) => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    }


    
    // Adicione os ouvintes de evento a todos os botões  ---> comandos e execuções + transições
    arrowBtns.forEach(addButtonListener);

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }

    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (cardPerView * firstCardWidth);
            carousel.classList.remove("no-transition");
        } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - (cardPerView * firstCardWidth)) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = cardPerView * firstCardWidth;
            carousel.classList.remove("no-transition");
        }
    
        clearTimeout(timeoutId);
        if (!wrapper.matches(":hover")) autoPlay();
    }
    

    const autoPlay = () => {
        if (window.innerWidth < 1000 || !isAutoPlay) return;
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    }

    //function de autoPLay ou rolagem infinita sozinha
    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
});