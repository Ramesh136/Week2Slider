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
            "background": "linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)",
            "subtext" : "Gold Luxury, Choose Us",
            "image" : "./images/gold.svg",
            "price": "$499",
            "description" : "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch"
        },
        {
          "name": "Dainty Timepieces",
          "background": "linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)",
          "subtext": "Silver Luxury, Choose Us",
          "image": "./images/black.svg",
          "price": "$469",
          "description" : "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece"
        },
        {
          "name": "Elegant Timepieces",
          "background": "linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%)",
          "subtext": "Choose Luxury, Choose Us",
          "image": "./images/green.svg",
          "price": "$529",
          "description" : "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch"
        },
        {
          "name": "Refined Timepieces",
          "background": "linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%)",
          "subtext": "Choose Luxury, Choose Us",
          "image": "./images/red.svg",
          "price": "$599",
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

let body = document.querySelector('body')
body.style.background =
  "linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)";
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

function displayProductDescription(index=0){
    console.log(index)
    let html = `
        <div class="title fade-in">${data.products[index].name}</div>
        <div class="subtext">
            <div class="section-1 fade-in">${
              data.products[index].subtext.split(",")[0]
            }, </div>
            <div class="section-2 fade-in">${
              data.products[index].subtext.split(",")[1]
            }</div>
        </div>
        <p class="description fade-in">${data.products[index].description}</p>
        <div class="price fade-in">${data.products[index].price}</div>
    `;
    productDescription.innerHTML = html
}
displayProductDescription()

let carousel = new Splide(".splide", {
  width: "600px",
  type:"loop",
  // height: '640px',
  heightRatio: 640 / 500,
  pagination: "hidden",
  gap: "200px",
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
	UpdateContent(index);
});

function UpdateContent (index){
    displayProductDescription(index)
    let body = document.querySelector("body");
    body.style.background =data.products[index].background

}



