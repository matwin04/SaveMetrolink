import '@mdi/font/css/materialdesignicons.css';
import "./style.css";
import {links} from "./links.js";

document.querySelector("#app").innerHTML = `
  <div class="page">

    <div class="header">
      <span class="mdi mdi-alert-circle-outline header-icon"></span>
      <h1>Save Metrolink</h1>
      <p>Toolkit to speak out against OCTA funding cuts</p>
    </div>

    <div class="links">
      ${links.map(link => `
        <a class="link-card" href="${link.url}">
          <span class="mdi ${link.icon} link-icon"></span>
          <span>${link.title}</span>
        </a>
      `).join("")}
    </div>

  </div>
`;