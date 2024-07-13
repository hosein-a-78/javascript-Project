// .... Header Slide .... //
const headerEl = document.getElementById('header');
// .... Header Btn .... //
// .... images .... //
// .... modal .... //
// .... modal btn .... //


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