/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close Mobile Menu */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   DARK MODE
========================================= */

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon =
        themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});


/* Load Saved Theme */

if (
    localStorage.getItem("theme") === "dark"
) {

    document.body.classList.add("dark");

    const icon =
        themeBtn.querySelector("i");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}


/* =========================================
   BACK TO TOP
========================================= */

const backTop =
    document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================
   TEAM PROFILE DATA
========================================= */

const teamMembers = {

    member1: {

        name: "সদস্যের নাম",

        designation:
            "Founder / Coordinator",

        workplace:
            "বর্তমান কর্মস্থলের নাম",

        image:
            "images/team1.jpg",

        quote:
            "সুস্থ জীবনযাপন শুরু হোক প্রতিদিনের ছোট ছোট ভালো অভ্যাস থেকে।"

    },


    member2: {

        name: "সদস্যের নাম",

        designation:
            "Team Member",

        workplace:
            "বর্তমান কর্মস্থলের নাম",

        image:
            "images/team2.jpg",

        quote:
            "নিয়মিত হাঁটাহাঁটি আমাদের জীবনকে আরও সক্রিয় ও সুন্দর করতে পারে।"

    },


    member3: {

        name: "সদস্যের নাম",

        designation:
            "Team Member",

        workplace:
            "বর্তমান কর্মস্থলের নাম",

        image:
            "images/team3.jpg",

        quote:
            "নিজে সুস্থ থাকুন, অন্যকেও সুস্থ থাকার জন্য উৎসাহিত করুন।"

    }

};


/* =========================================
   OPEN TEAM PROFILE
========================================= */

function openProfile(memberId) {

    const member =
        teamMembers[memberId];

    if (!member) return;


    document.getElementById("profileImage").src =
        member.image;

    document.getElementById("profileName").textContent =
        member.name;

    document.getElementById("profileDesignation").textContent =
        member.designation;

    document.getElementById("profileWorkplace").textContent =
        member.workplace;

    document.getElementById("profileQuote").textContent =
        member.quote;


    document
        .getElementById("profileModal")
        .classList.add("show");

    document.body.style.overflow = "hidden";

}


/* =========================================
   CLOSE TEAM PROFILE
========================================= */

function closeProfile() {

    document
        .getElementById("profileModal")
        .classList.remove("show");

    document.body.style.overflow = "";

}


/* Click Outside Modal */

document
    .getElementById("profileModal")
    .addEventListener("click", function(e) {

        if (e.target === this) {

            closeProfile();

        }

    });


/* =========================================
   GALLERY LIGHTBOX
========================================= */

function openImage(imageSrc) {

    const lightbox =
        document.getElementById("imageLightbox");

    const image =
        document.getElementById("lightboxImage");

    image.src = imageSrc;

    lightbox.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeImage() {

    document
        .getElementById("imageLightbox")
        .classList.remove("show");

    document.body.style.overflow = "";

}


/* =========================================
   ESC KEY
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeImage();

        closeProfile();

    }

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".goal-card, .team-card, .news-card, .gallery-item"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    revealObserver.observe(element);

});