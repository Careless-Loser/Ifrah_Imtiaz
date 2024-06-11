const allcontainer = gsap.utils.toArray(".container-item");
const venueImageWrap = document.querySelector(".container-img-wrap");
const venueImage = document.querySelector(".container-img");

function initcontainer() {
    allcontainer.forEach((link) => {
        link.addEventListener("mouseenter", venueHover);
        link.addEventListener("mouseleave", venueHover);
        link.addEventListener("mousemove", moveVenueImage);
        link.addEventListener("click", handleClick);
    });
}

// Moving image
function moveVenueImage(e) {
    const xpos = e.clientX;
    const ypos = e.clientY;
    gsap.to(venueImageWrap, {
        x: xpos,
        y: ypos,
        duration: 0.5,
    });
}

// Handle click event
function handleClick(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
        window.location.href = href;
    }
}

// Number enlarged
function venueHover(e) {
    const targetImage = e.target.dataset.img;

    if (e.type === "mouseenter") {
        gsap.set(venueImage, {
            backgroundImage: `url(${targetImage})`,
        });
        gsap.to(venueImageWrap, {
            autoAlpha: 1,
            duration: 0.5,
        });
    } else if (e.type === "mouseleave") {
        gsap.to(venueImageWrap, {
            autoAlpha: 0,
            duration: 0.5,
        });
    }
}

function init() {
    initcontainer();
    gsap.to(".blog-title", {
        opacity: 1,
        duration: 1,
        delay: 0.5
    });
}

window.addEventListener("load", init);

const tl = gsap.timeline();

tl.from(".navbar > div", {
    opacity: 0,
    y: 60,
    ease: "expo.inOut",
    duration: 1.6,
    delay: 0.6,
});

tl.from(".site-logo", {
    opacity: 0,
    y: 40,
    ease: "expo.inOut",
    duration: 1.6,
}, "-=1.6");

tl.staggerFrom(".site-menu > div", {
    opacity: 0,
    y: 60,
    ease: "power2.out",
    duration: 1,
}, 0.2);

tl.staggerFrom(".header > div", {
    opacity: 0,
    y: 60,
    ease: "power2.out",
    duration: 1,
}, 0.2, "-=1.4");
