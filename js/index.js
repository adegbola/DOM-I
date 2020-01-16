const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const nav = document.querySelectorAll("a");
nav.forEach(element => {
  element.style.color = "green";
});

const navs = document.querySelector("nav");
navs.append("Sign-Up");
navs.prepend("Blog");

const aTags = document.querySelectorAll("a");
aTags[0].textContent = siteContent["nav"]["nav-item-1"];
aTags[1].textContent = siteContent["nav"]["nav-item-2"];
aTags[2].textContent = siteContent["nav"]["nav-item-3"];
aTags[3].textContent = siteContent["nav"]["nav-item-4"];
aTags[4].textContent = siteContent["nav"]["nav-item-5"];
aTags[5].textContent = siteContent["nav"]["nav-item-6"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

const h1Text = document.querySelector("h1");
h1Text.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

const h4s = document.querySelectorAll("h4");
h4s[0].textContent = siteContent["main-content"]["features-h4"];
h4s[1].textContent = siteContent["main-content"]["about-h4"];
h4s[2].textContent = siteContent["main-content"]["services-h4"];
h4s[3].textContent = siteContent["main-content"]["product-h4"];
h4s[4].textContent = siteContent["main-content"]["vision-h4"];

const txtContent = document.getElementsByTagName("p");
txtContent[0].textContent = siteContent["main-content"]["features-content"];
txtContent[1].textContent = siteContent["main-content"]["about-content"];
txtContent[2].textContent = siteContent["main-content"]["services-content"];
txtContent[3].textContent = siteContent["main-content"]["product-content"];
txtContent[4].textContent = siteContent["main-content"]["vision-content"];

const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

const contactSection = document.querySelector(".contact");
contactSection.children[0].textContent = siteContent["contact"]["contact-h4"];
contactSection.children[1].textContent = siteContent["contact"]["address"];
contactSection.children[2].textContent = siteContent["contact"]["phone"];
contactSection.children[3].textContent = siteContent["contact"]["email"];

const footerSection = document.getElementsByTagName("footer");
footerSection[0].textContent = siteContent["footer"]["copyright"];
