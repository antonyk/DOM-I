const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"]);

// My Code
let nav = document.querySelectorAll('.container nav a');
for (i = 0; i < nav.length; i++) {
  nav[i].textContent = siteContent["nav"]["nav-item-" + (i+1)];
}

document.querySelector('header img').setAttribute("src", siteContent["nav"]["img-src"]);

// dom is awesome
document.querySelector('.cta .cta-text h1').innerHTML = siteContent['cta']['h1'].replace(/ /g, "<br> ");

// button text
document.querySelector('.cta .cta-text button').textContent = siteContent['cta']['button'];

// cta image
document.querySelector('#cta-img').src = siteContent['cta']['img-src'];

// features
document.querySelector('.top-content :first-child h4').textContent = siteContent['main-content']['features-h4'];
document.querySelector('.top-content :first-child p').textContent = siteContent['main-content']['features-content'];

// about
document.querySelector('.top-content :last-child h4').textContent = siteContent['main-content']['about-h4'];
document.querySelector('.top-content :last-child p').textContent = siteContent['main-content']['about-content'];

// middle image
document.querySelector('#middle-img').src = siteContent['main-content']['middle-img-src'];

// features
document.querySelector('.bottom-content :first-child h4').textContent = siteContent['main-content']['services-h4'];
document.querySelector('.bottom-content :first-child p').textContent = siteContent['main-content']['services-content'];

// product
document.querySelector('.bottom-content :nth-child(2) h4').textContent = siteContent['main-content']['product-h4'];
document.querySelector('.bottom-content :nth-child(2) p').textContent = siteContent['main-content']['product-content'];

// vision
document.querySelector('.bottom-content :last-child h4').textContent = siteContent['main-content']['vision-h4'];
document.querySelector('.bottom-content :last-child p').textContent = siteContent['main-content']['vision-content'];

// contact
document.querySelector('section.contact h4').textContent = siteContent['contact']['contact-h4'];

let contItems = document.querySelectorAll('section.contact p');
contItems[0].textContent = siteContent['contact']['address'];
contItems[1].textContent = siteContent['contact']['phone'];
contItems[2].textContent = siteContent['contact']['email'];

// footer
document.querySelector('footer p').textContent = siteContent['footer']['copyright'];

// for (let i = 0; i < contItems.length; i++) {
//   contItems[i].textContent = siteContent['contact'][i];
// }


// let top = document.querySelectorAll('.top-content')
// for (i = 0; i < top.length; i++) {
//   top[0].querySelector('h4').textContent = siteContent['main-content']
// }

// let parser = new DOMParser();
// let newT = parser.parseFromString(newH1, 'text/html').body.innerHTML;
// ctaTxt.prepend(newT);

// let newH1Html = function(str) {
//   let parser = new DOMParser();
//   let doc = parser.parseFromString(str, 'text/html');
// }

