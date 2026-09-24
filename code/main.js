document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".square_menu a");
    const currentUrl = window.location.pathname.split("/").pop();
    //Нахждение ссылки и получение текущего файла

    //Перебирание строк
    menuLinks.forEach(link => {

        //Удаление старого класса и получение имени из арибута href
        link.classList.remove('active');
        const linkUrl = link.getAttribute('href');

        //При совпадение имён пункт становится активным
        if (currentUrl === linkUrl) {
            link.classList.add('active')
        }

    });
});