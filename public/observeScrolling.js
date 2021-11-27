const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const header = entry.target.querySelector('h3');

    if (entry.isIntersecting) {
	     header.classList.add('scroll-animation');;
    }
  });
});

for(const elem of document.querySelectorAll('.footer-col')){

observer.observe(elem);
}