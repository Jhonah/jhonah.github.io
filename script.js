let themeButton = document.querySelector('.page-footer__theme-button');
let pageFooter = document.querySelector('.page-footer');
themeButton.onclick = function () {    
    pageFooter.classList.toggle('page-footer_cyan-theme');
    pageFooter.classList.toggle('page-footer_light-theme');
}
