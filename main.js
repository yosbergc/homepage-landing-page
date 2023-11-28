const menuMobileContainer = document.querySelector('.menuMobile');
const fondoOscuro = document.querySelector('.fondoOscuro');
const hamburgerIcon = document.querySelector('.hamburgerIcon');
const closeMenuIcon = document.querySelector('.closeMenuIcon');
const featuresMenu = document.querySelector('.features-menu');
const featuresDiv = document.querySelector('.features');
const companyMenu = document.querySelector('.companyMenu');
const companyDiv = document.querySelector('.company');
const heroSectionImage = document.querySelector('.hero-section-image');
const featuresMenuMobile = document.querySelector('.features-menu-mobile');
const featuresMobile = document.querySelector('.featuresMobile');
const companyMenuMobile = document.querySelector('.companyMenuMobile');
const companyMobile = document.querySelector('.companyMobile');

featuresMenuMobile.addEventListener('click', showFeaturesMobile);
companyMenuMobile.addEventListener('click', showCompanyMobile);
hamburgerIcon.addEventListener('click', showMenu);
closeMenuIcon.addEventListener('click', closeMenu);
featuresMenu.addEventListener('click', showFeatures);
companyMenu.addEventListener('click', showCompany);
window.addEventListener('load', changeImg);
window.addEventListener('resize', changeImg)
function changeImg() {
    if (window.innerWidth >= 1280) {
        heroSectionImage.setAttribute('src','images/image-hero-desktop.png')
    }
}
function showCompanyMobile() {
    if (companyMobile.classList.contains('hide')) {
        companyMobile.classList.remove('hide');
    } else {
        companyMobile.classList.add('hide');
    }
}
function showCompany() {
    if (companyDiv.classList.contains('hide')) {
        companyDiv.classList.remove('hide');
    } else {
        companyDiv.classList.add('hide');
    }
}
function showFeaturesMobile() {
    if (featuresMobile.classList.contains('hide')) {
        featuresMobile.classList.remove('hide');
    } else {
        featuresMobile.classList.add('hide');
    }
}
function showFeatures() {
    if (featuresDiv.classList.contains('hide')) {
        featuresDiv.classList.remove('hide');
    } else {
        featuresDiv.classList.add('hide');
    }
    
}
function closeMenu() {
    menuMobileContainer.classList.add('hide');
    fondoOscuro.classList.add('hide');
}
function showMenu() {
    menuMobileContainer.classList.remove('hide');
    fondoOscuro.classList.remove('hide');
}