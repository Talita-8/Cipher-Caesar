import { Header } from "../components/header.js";
import { listenerButton } from "./menu.js";

const headerArea = document.querySelector("#header");
headerArea.innerHTML = Header;

document
  .querySelectorAll(".header-button")
  .forEach((button) => listenerButton(button));
