const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });

}

const navChangeColor = () => {

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 500) {
            $(".nav-link").addClass("on-scroll");
            $(".burger").addClass('on-scroll-burger');
        }
        else if ($(window).scrollTop() > 600 && $(window).width < 768) {
            $(`.nav-links`).css('background-color', 'red');
            $(".burger").addClass('on-scroll-burger');
        }
        else {
            $(".nav-link").removeClass("on-scroll")
            $(".burger").removeClass('on-scroll-burger');
        }

    });
}

const callApps = () => {
    navSlide();
    navChangeColor();
}

callApps();