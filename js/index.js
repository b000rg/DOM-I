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

let navItems = document.querySelectorAll('nav a');
navItems.forEach((item, index) => {
  item.textContent = siteContent.nav['nav-item-' + index];
  item.style.color = 'green';
});

document.querySelector('.cta h1').textContent = siteContent.cta.h1;
document.querySelector('.cta button').textContent = siteContent.cta.button;
document.querySelector('.cta img').setAttribute('src', siteContent.cta["img-src"]);

let sections = ['features', 'about', 'services', 'product', 'vision'];
let mainContentHeadings = document.querySelectorAll('.text-content h4');
let mainContentContent = document.querySelectorAll('.text-content p');
mainContentHeadings.forEach((item, index) => {
  item.textContent = siteContent['main-content'][sections[index] + '-h4'];
});
mainContentContent.forEach((item, index) => {
  item.textContent = siteContent['main-content'][sections[index] + '-content'];
});

document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

let contact = document.getElementsByClassName('contact')[0];
contact.getElementsByTagName('h4')[0].textContent = siteContent.contact['contact-h4'];

let contactFields = ['address', 'phone', 'email'];
contact.querySelectorAll('p').forEach((item, index) => {
  item.textContent = siteContent.contact[contactFields[index]];
});

document.querySelector('footer p').textContent = siteContent.footer.copyright;

// adds two new items to nav
let home = document.createElement('a');
home.setAttribute('href', '#');
home.textContent = "Home";
home.style.color = 'green';

let team = document.createElement('a');
team.setAttribute('href', '#');
team.textContent = "Our Team";
team.style.color = 'green';

let nav = document.getElementsByTagName('nav')[0];
nav.children.item(0).prepend(home);
nav.appendChild(team);
