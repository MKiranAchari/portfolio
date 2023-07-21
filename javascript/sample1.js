const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const myCarouselElement = document.querySelector('#myCarousel')
const scriptURL = 'https://script.google.com/macros/s/AKfycbyoQPDaaR1YTUFjkU7weJ_Y9uCTE7hoOK_5yUQVjE8EjVuEIRBh/exec'
const form = document.forms['submit-to-google-sheet']

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
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
