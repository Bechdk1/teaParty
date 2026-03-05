export const header = document.createElement("header");
header.className = "relative shadow-xl";

const img = document.createElement("img");
img.src = "../Teaparty/teaparty_assets/Image-Hero-Front.jpg";
img.className = "block w-full";

const h1 = document.createElement("h1");
h1.textContent = "Tea Party";
h1.className =
  "text-white text-[max(6rem,10vw)] absolute top-[3vw] left-[3vw] font-customGoogle";

const navBar = document.createElement("nav");
navBar.className = "w-full bg-[#4a3520]";

const navHeader = document.createElement("div");
navHeader.className = "flex justify-end items-center px-4 py-3 lg:hidden";

const burger = document.createElement("button");
burger.textContent = "☰";
burger.className = "text-white text-3xl";
navHeader.append(burger);

const ulElm = document.createElement("ul");
ulElm.className = "hidden lg:flex gap-40 justify-end mr-24 p-4";

const liAbout = document.createElement("li");
const aAbout = document.createElement("a");
aAbout.textContent = "ABOUT US";
aAbout.href = "aboutUs";
liAbout.append(aAbout);

const liBrands = document.createElement("li");
const aBrands = document.createElement("a");
aBrands.textContent = "BRANDS";
aBrands.href = "brands";
liBrands.append(aBrands);

const liHowTo = document.createElement("li");
const aHowTo = document.createElement("a");
aHowTo.textContent = "HOW TO";
aHowTo.href = "howTo";
liHowTo.append(aHowTo);

const liJoin = document.createElement("li");
const aJoin = document.createElement("a");
aJoin.textContent = "JOIN US";
aJoin.href = "joinUs";
liJoin.append(aJoin);

aAbout.className = "text-white transition-colors hover:text-[#c4c9a8]";
aBrands.className = "text-white transition-colors hover:text-[#c4c9a8]";
aHowTo.className = "text-white transition-colors hover:text-[#c4c9a8]";
aJoin.className = "text-white transition-colors hover:text-[#c4c9a8]";

let menuOpen = false;
burger.addEventListener("click", () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    ulElm.className = "flex flex-col items-center gap-6 py-4";
    burger.textContent = "✕";
  } else {
    ulElm.className = "hidden lg:flex gap-40 justify-end mr-24 p-4";
    burger.textContent = "☰";
  }
});

ulElm.append(liAbout, liBrands, liHowTo, liJoin);
navBar.append(navHeader, ulElm);
header.append(img, h1, navBar);
