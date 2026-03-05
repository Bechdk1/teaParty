import { header } from "./header.js";
import { main } from "./mainContent.js";

const body = document.getElementById("body");
body.append(header, main);

body.classList = "bg-[#c4c9a8] box-border";
