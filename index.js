let json = `{
    "header" :{
        "logo": "./images/Logo.svg",
        "nav":[
            {
                "name": "Shop",
                "link" : ""
                
            },
            {
                "name": "Brands",
                "link": ""
                
            },
            {
                "name": "Contact Us",
                "link": ""
            }],
        "signup":"true"
    },
    "products":[
        {
            "name" : "Exquisite Watches",
            "subtext" : "Gold Luxury, Choose Us",
            "image" : "./images/gold.svg",
            "description" : "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch"
        },
        {
          "name": "Dainty Timepieces",
          "subtext": "Silver Luxury, Choose Us",
          "image": "./images/black.svg",
          "description" : "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece"
        },
        {
          "name": "Elegant Timepieces",
          "subtext": "Choose Luxury, Choose Us",
          "image": "./images/green.svg",
          "description" : "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch"
        },
        {
          "name": "Refined Timepieces",
          "subtext": "Choose Luxury, Choose Us",
          "image": "./images/red.svg",
          "description" :"Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece"
        }
    ],
    "socials" : [
      {
        "name": "Facebook",
        "link": "./images/fb.svg"
      },
      {
        "name": "Twitter",
        "link": "./images/twitter.svg"
      },
      {
        "name": "Youtube",
        "link": "./images/youtube.svg"
      }
    ]
}`;

let data = JSON.parse(json)
console.log(data)

//Loading Header
let header = document.querySelector('.header')

function loadHeader(){
    let html = ` <img class="logo" src="${data.header.logo}"/>
    <div class="navList">
    <ul style="list-style: none;" class="nav">
        <li>${data.header.nav[0].name}</li>
        <li>${data.header.nav[1].name}</li>
        <li>${data.header.nav[2].name}</li>
    </ul>
    <button class="auth">Sign up</button>
    </div>`;
    header.innerHTML = html
}
loadHeader()

let productDescription = document.querySelector(".product-description");

function displayProductDescription(){
    let html = `
        <div class="title">${data.products[1].name}</div>
        <div class="subtext">
            <div class="section-1">${
              data.products[1].subtext.split(",")[0]
            }, </div>
            <div class="section-2">${
              data.products[1].subtext.split(",")[1]
            }</div>
        </div>
        <p class="description">${data.products[1].description}</p>
    `;
    productDescription.innerHTML = html
}
displayProductDescription()

let carousel = new Splide(".splide", {
  width: "600px",
  // height: '640px',
  heightRatio: 640 / 500,
  pagination: "hidden",
  classes: {
    arrows: "splide__arrows",
    // arrow: "splide__arrow arrows",
    prev: "splide__arrow splide__arrow--prev",
    next: "splide__arrow splide__arrow--next",
  },
  breakpoints: {
    990: {
      width: "400px",
      // height: '496px',
      heightRatio: 640 / 500,
    },
  },
});
		carousel.mount();

		carousel.on('move', (e) => {
			let index = e;
			updateContent(index, data.sectionBlocks);

		});



// document.addEventListener("DOMContentLoaded", function () {
//   var splide = new Splide(".splide", {
//     type: "loop",
//     perPage: 1,
//   });
//   splide.mount();

//   loadHeader()
// }
// );
