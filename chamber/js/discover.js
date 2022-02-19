const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 0,   
    rootMargin: "0px 0px 200px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) { //if it isn't intersecting
            return;
        } else { //when it is intersecting, load image
          preloadImage(entry.target);
          imgObserver.unobserve(entry.target); //once we have preloaded we want to stop observing
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})

