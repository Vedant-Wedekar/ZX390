document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel .list .item');
    const nextBtn = document.querySelector('#next');
    const prevBtn = document.querySelector('#prev');
    const nextBtn1 = document.querySelector('#next-1');
    const prevBtn1 = document.querySelector('#prev-1');
    const backBtn = document.querySelector('#back');
    const backBtn1 = document.querySelector('#back-1');
    const detailViews = document.querySelectorAll('.carousel .list .item .detail');
    let currentIndex = 1;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
            item.style.zIndex = (index === currentIndex) ? 10 : 1;
            item.style.opacity = (index === currentIndex) ? 1 : 0;
        });
    }

    function showDetail(index) {
        items.forEach((item, i) => {
            item.querySelector('.detail').style.transform = (i === index) ? 'translateX(0)' : 'translateX(100%)';
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    nextBtn1.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
        showDetail(currentIndex);
    });

    prevBtn1.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
        showDetail(currentIndex);
    });

    backBtn.addEventListener('click', () => {
        document.querySelector('.arrows').style.display = 'none';
        document.querySelector('.arrows-1').style.display = 'flex';
    });

    backBtn1.addEventListener('click', () => {
        document.querySelector('.arrows').style.display = 'flex';
        document.querySelector('.arrows-1').style.display = 'none';
    });

    updateCarousel();
});
