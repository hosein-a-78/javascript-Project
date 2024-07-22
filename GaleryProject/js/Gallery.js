// .... Header Slide .... //
const headerEl = document.getElementById('header');
// .... Header Btn .... //
const headerBtns = document.querySelectorAll('#header .btn:not(.btn_back)');
const btnAll = document.getElementById('all');
// .... images .... //
const images = document.querySelectorAll('.box img');
// .... modal .... //
const modalEl = document.querySelector('.modal');
const modalChilds = document.querySelectorAll('.modal :nth-child(n)');
const modalImage = document.querySelector('.modal-img');
// .... modal btn .... //
const btnClose = document.querySelector('.btn_close')
const btnPerv = document.querySelector('.btn_perv')
const btnNext = document.querySelector('.btn_next')


// .... Header Slide .... //
const headerSlide = () => {
    let scrollNow = window.scrollY;
    window.addEventListener('scroll', () => {
        const scrollPrimary = window.screenY;

        if (headerEl.offsetHeight < scrollPrimary) {
            headerEl.style.transform = 'translateY(-100%)';
        } else {
            headerEl.style.transform = 'translateY(0%)';
        }
        scrollNow = scrollPrimary;
    })
}

const headerFix = () => {
    window.addEventListener('scroll', () => {
        headerEl.style.transform = 'translateY(0%)';
    })
}

// .... By Responsive .... //
if (window.innerWidth <= 768) {
    headerSlide();
} else {
    headerFix();
}

// .... By Resize .... //
window.addEventListener('resize', () => {
    window.innerWidth <= 768 ? headerSlide() : headerFix();
})

// .... Show Modal .... //
for (const img of images) {
    img.addEventListener('click', () => {
        modalEl.classList.add('modal-show')
        modalImage.setAttribute('src', img.getAttribute('src'));
        modalImage.parentElement.setAttribute('href', img.getAttribute('src'))
    })
}

// .... Hide Modal .... //
const hideModal = () => {
    modalEl.classList.remove('modal-show')
};
modalEl.addEventListener('click', () => {
    hideModal();
})
btnClose.addEventListener('click', () => {
    hideModal();
})

// .... Keyboard .... //
window.addEventListener('keyup', (e) => {
    e.key === 'Escape' ? hideModal() : false;
})

// .... Debug .... //
for (const modalChild of modalChilds) {
    modalChild.addEventListener('click', (e) => {
        e.stopPropagation();
    })
}

// .... Show Images .... //
const showImage = (img) => {
    //change img
    modalImage.style.opacity = '0';
    setTimeout(() => {
        modalImage.setAttribute('src', img.getAttribute('src'));
        modalImage.parentElement.setAttribute('href', img.getAttribute('src'));
        modalImage.style.opacity = '1';
    }, 100);

}

// .... Change Images .... //
const changeImage = (array) => {
    array.forEach((img, index) => {
        img.addEventListener('click', () => {
            //Prev Image
            const pervImg = () => {
                --index;
                index < 0 ? index = array.length - 1 : false;
                showImage(array[index]);
            };

            //next Image
            const nextImg = () => {
                ++index;
                index === array.length ? index = 0 : false;
                showImage(array[index]);
            };

            // btn perv/next
            btnPerv.addEventListener('click', () => {
                pervImg();
            });
            btnNext.addEventListener('click', () => {
                nextImg();
            })
            // Keyboard
            window.addEventListener('keyup', (e) => {
                e.key === 'ArrowRight' ? nextImg() : false;
                e.key === 'ArrowLeft' ? pervImg() : false;
            })

        })
    })
};
// .... All images Next/Perv .... //
changeImage(images);

// .... .... //
