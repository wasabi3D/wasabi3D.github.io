const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.list-item');
  
      if (entry.isIntersecting) {
        square.classList.add('fade-anim');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('fade-anim');
    });
});

window.onload = function(){
    for(el in Array.from(document.getElementsByClassName('.histd'))){
        observer.observe(el);
    }
}