import { mountLink, HOST } from "./link.js";

export const mountHeader = () => {
  const homeLink = mountLink("Home", HOST);
  const detailsLink = mountLink("Details", HOST + "/detail.html");

  const header = document.createElement("header");
  header.appendChild(homeLink);
  header.appendChild(detailsLink);
  header.style.cssText = `
        display: flex;
        gap: 20px;
        background-color: #d1d1d1;
        padding: 20px;
        `;

  return header;
};
