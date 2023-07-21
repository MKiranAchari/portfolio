const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const myCarouselElement = document.querySelector('#myCarousel')

let observer = new IntersectionObserver((entries, observer) => {
    entries.filter(e => e.isIntersecting).forEach(entry => {
        entry.target.classList.add("scrolled");
        observer.unobserve(entry.target);
    });
});
document.querySelectorAll('section')
    .forEach(e => {
        observer.observe(e)
    });
function sendfeed(){
    alert("save the data in the system")
}