import '@mdi/font/css/materialdesignicons.css';
import "./style.css";
import {links} from "./links.js";
import {articles} from "./articles.js";
document.querySelector("#app").innerHTML = `
  <div class="page">

    <div class="header">
      
      <h1>Save Metrolink</h1>
      <p>Links to help speak out against OCTA funding cuts to Metrolink</p>
    </div>

    <div class="links">
        <h2>
            <span class="mdi mdi-information"></span> Important Info
        </h2>
        ${links.map(link => `
        <a class="link-card" href="${link.url}">
          <span class="mdi ${link.icon} link-icon"></span>
          <span>${link.title}</span>
        </a>
      `).join("")}
    </div>
    <div class="links">
     <h2>Articles</h2>
     ${articles.map(article => `
        <a class="link-card" href="${article.url}">
          <span class="mdi ${article.icon} link-icon"></span>
          <h4 class="link-card-title">${article.title}</h4>
          <div class="link-card-subtitle">${article.publisher}</div>
          
        </a>`).join("")}
</div>

  </div>
`;