export default function renderMenu() {
    const content = document.getElementById("content");

    const h1 = document.createElement("h1");
    h1.textContent = "Our Menu";
    content.appendChild(h1);

    const hearth = document.createElement("div");
    content.appendChild(hearth);

    const hearthInfo = document.createElement("h2");
    hearthInfo.textContent = "Appetizers from the hearth";
    hearth.appendChild(hearthInfo);
    const bread = document.createElement("p");
    bread.textContent = "Smoked Brisket Flatbread";
    const breadPrice = document.createElement("p");
    breadPrice.textContent = "£8";
    hearth.appendChild(bread);
    hearth.appendChild(breadPrice);
}