export const main = document.createElement("main");
main.className = "bg-[#faf7f0] sm:w-full center mx-auto h-auto lg:w-[90%]";

// SECTION 1
const section1 = document.createElement("section");
section1.className = "h-auto";

const h1 = document.createElement("h1");
h1.textContent = "Passion and Pride";
h1.className = "font-customGoogle text-8xl px-[2vw] pt-[2vw] text-[#7a8c2c]";

const figure = document.createElement("figure");
figure.className = "grid grid-cols-1 sm:grid-cols-2 items-center px-[2vw]";
const figcap = document.createElement("figcaption");
figcap.className = "";

const article = document.createElement("article");
article.className = "flex flex-col gap-3";

const p1 = document.createElement("p");
p1.textContent =
  "Working in the world of tea are what drive our constant evolution, and what have allowed us to offer the framework of service and care that this highly appreciated product with over 2,000 years of history deserves.";
p1.className = "text-2xl hyphens-auto";

const p2 = document.createElement("p");
p2.textContent =
  "Since 1990 our knowledge and experience has been geared to the quality of our products, which we treat with respect and meticulousness.";
p2.className = "text-2xl hyphens-auto";

const figImg = document.createElement("img");
figImg.src = "../Teaparty/teaparty_assets/coffee.svg";
figImg.className = "w-3/4 mx-auto";

article.append(p1, p2);
figcap.append(article);
figure.append(figcap, figImg);

section1.append(h1, figure);

// SECTION 2
const section2 = document.createElement("section");

const h2 = document.createElement("h1");
h2.textContent = "About Us";
h2.className = "font-customGoogle text-8xl p-[2vw] text-[#7a8c2c]";

const aboutGrid = document.createElement("div");
aboutGrid.className = "grid grid-cols-1 sm:grid-cols-2 gap-2";

const aboutCards = [
  { title: "The Team", sub: "Meet our dedicated team", img: "About-us-1.jpg" },
  {
    title: "The Brand",
    sub: "TeaParty brands and mixtures",
    img: "About-us-2.jpg",
  },
  {
    title: "The Company",
    sub: "Company information and Mission",
    img: "About-us-3.jpg",
  },
  {
    title: "The Costumers",
    sub: "About the Sippers and Dippers",
    img: "About-us-4.jpg",
  },
];

aboutCards.forEach(({ title, sub, img }) => {
  const card = document.createElement("a");
  card.href = "#";
  card.className =
    "relative overflow-hidden block transition-transform hover:brightness-110 hover:scale-[99%]";

  const cardImg = document.createElement("img");
  cardImg.src = `../Teaparty/teaparty_assets/${img}`;
  cardImg.className = "w-full brightness-65";

  const textDiv = document.createElement("div");
  textDiv.className = "absolute top-0 left-0 z-10 p-4";

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = title;
  cardTitle.className = "font-customGoogle text-6xl text-[#7a8c2c]";

  const cardSub = document.createElement("p");
  cardSub.textContent = sub;
  cardSub.className = "text-2xl text-white";

  textDiv.append(cardTitle, cardSub);
  card.append(cardImg, textDiv);
  aboutGrid.append(card);
});

section2.append(h2, aboutGrid);

// SECTION 3
const section3 = document.createElement("section");

const h3 = document.createElement("h1");
h3.textContent = "Our Brands";
h3.className = "font-customGoogle text-8xl p-[2vw] text-[#7a8c2c]";

const brandsGrid = document.createElement("div");
brandsGrid.className = "grid grid-cols-2 lg:grid-cols-3 gap-2";

const brandCards = [
  "Brands-Green.jpg",
  "Brands-Black.jpg",
  "Brands-Herbal.jpg",
  "Brands-Rooibos.jpg",
  "Brands-White.jpg",
  "Brands-Organic.jpg",
];

brandCards.forEach((img) => {
  const card = document.createElement("a");
  card.href = "#";
  card.className = "relative overflow-hidden block";

  const cardImg = document.createElement("img");
  cardImg.src = `../Teaparty/teaparty_assets/${img}`;
  cardImg.className = "w-full";

  card.append(cardImg);
  brandsGrid.append(card);
});

section3.append(h3, brandsGrid);

// SECTION 4
const section4 = document.createElement("section");
const h4 = document.createElement("h1");
h4.textContent = "How to prepare tea";
h4.className = "font-customGoogle text-8xl p-[2vw] text-[#c7691d]";

const h4Inner = document.createElement("h1");
h4Inner.textContent = "Make a nice cup of tea";
const divP4 = document.createElement("p");
divP4.textContent = "Choose your brand and learn how to prepare";

const artDesc = document.createElement("article");
artDesc.append(h4Inner, divP4);

const dropdown = document.createElement("select");

const divMenu = document.createElement("div");
divMenu.append(artDesc, dropdown);
divMenu.className = "";

const section4inner = document.createElement("section");

const brandsArray = [
  {
    img: "Brands-Green.jpg",
    headline: "Green Tea",
    p1: "Choose your brand and learn how to prepare.",
    p2: "",
    p3: "",
    p4: "",
  },
  {
    img: "Brands-Black.jpg",
    headline: "Black Tea",
    p1: "Choose your brand and learn how to prepare.",
    p2: "",
    p3: "",
    p4: "",
  },
  {
    img: "Brands-Herbal.jpg",
    headline: "Herbal Tea",
    p1: "Choose your brand and learn how to prepare.",
    p2: "",
    p3: "",
    p4: "",
  },
  {
    img: "Brands-Rooibos.jpg",
    headline: "Rooibos",
    p1: "Choose your brand and learn how to prepare.",
    p2: "",
    p3: "",
    p4: "",
  },
  {
    img: "Brands-White.jpg",
    headline: "White Tea",
    p1: "Choose your brand and learn how to prepare.",
    p2: "",
    p3: "",
    p4: "",
  },
  {
    img: "Brands-Organic.jpg",
    headline: "Organic Tea",
    p1: "Choose your brand and learn how to prepare.",
    p2: "",
    p3: "",
    p4: "",
  },
];

dropdown.addEventListener("change", (e) =>
  brandsArray.forEach((element) => {
    if (element.headline === e.target.value) {
      section4inner.innerHTML = generateCard(element);
    }
  }),
);

function generateCard(brandsArray) {
  let cardContent = `
  <figure><img src="${brandsArray.img}"</img>
  <figcaption><article>
  <h1>${brandsArray.headline}</h1>
  <p>${brandsArray.p1}</p>
  <p>${brandsArray.p2}</p>
  <p>${brandsArray.p3}</p>
  <p>${brandsArray.p4}</p>
  </arcticle></figcaption></figure>`;
  return cardContent;
}

section4.append(h4, divMenu);

main.append(section1, section2, section3, section4);
