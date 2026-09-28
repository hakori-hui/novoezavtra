document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".square_menu a");
    const marker = document.querySelector(".square_menu .nav-marker");
    //Нахждение маркера и получение текущего файла

    if (!marker) return;

    let currentUrl = window.location.pathname.split("/").pop();
    if (currentUrl === "") currentUrl = "index.html";

    let activeLink = null;

    //поиск активной ссылки
    menuLinks.forEach(link => {
        const linkUrl = link.getAttribute('href');
        if (currentUrl === linkUrl) {
            activeLink = link;
            link.classList.add('active');
        }
    });

    if(activeLink) {
        const linkTop = activeLink.offsetTop;
        const linkHeight = activeLink.offsetHeight;

        marker.style.height = `${linkHeight}px`;
        
        const lastTop = sessionStorage.getItem("nav-last-top");

        if(lastTop && lastTop !== String(linkTop)) {
            marker.style.transition = "none";
            marker.style.top = `${lastTop}px`

            setTimeout(() => {
                marker.style.transition = "top 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
                marker.style.top = `${linkTop}px`
            }, 10);
        } else {
            marker.style.top = `${linkTop}px`;
        }
        window.addEventListener("beforeunload", () => {
            sessionStorage.setItem("nav-last-top", lastTop);
        });
    }
});