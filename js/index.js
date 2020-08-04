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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.querySelectorAll('nav a');
navLinks.forEach((el, i) => {
  el.textContent = siteContent['nav']['nav-item-' + i];
})

let cta = document.getElementsByClassName('cta')[0];
cta.querySelector('h1').innerHTML = siteContent['cta']['h1'].replaceAll(/ /g, '<br> ');
cta.querySelector('button').textContent = siteContent['cta']['button'];
cta.querySelector('img').setAttribute('src', siteContent['cta']['img-src']);

let bodyText = document.querySelectorAll('.text-content');
let bodyDiv = ['features', 'about', 'services', 'product', 'vision'];
bodyDiv.forEach((section, i) => {
  bodyText[i].querySelector('h4').textContent = siteContent['main-content'][section + '-h4'];
  bodyText[i].querySelector('p').textContent = siteContent['main-content'][section + '-content'];
});

document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

let contact = document.getElementsByClassName('contact')[0];
contact.querySelector('h4').textContent = siteContent['contact']['contact-h4'];

let contactFields = contact.querySelectorAll('p');
contactFields[0].textContent = siteContent['contact']['address'];
contactFields[1].textContent = siteContent['contact']['phone'];
contactFields[2].textContent = siteContent['contact']['email'];

document.querySelector('footer p').textContent = siteContent['footer']['copyright'];
