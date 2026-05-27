export default function renderHome() {
    const content = document.getElementById("content");

    const hero = document.createElement("div");
    hero.classList.add("hero");

    const h1 = document.createElement("h1");
    h1.textContent = "EMBER & OAK";
    hero.appendChild(h1);

    const tagline = document.createElement("p");
    tagline.textContent = "Wood-fired flavors, crafted with care";
    tagline.classList.add("tagline");
    hero.appendChild(tagline);

    const desc = document.createElement("p");
    desc.textContent = "Nestled in the heart of Portland, Ember & Oak celebrates the ancient art of cooking with fire. Every dish is built around seasonal ingredients from local farms, roasted and smoked over oak and cherry wood. Simple food, done right.";
    desc.classList.add("description");
    hero.appendChild(desc);

    const cta = document.createElement("button");
    cta.textContent = "View Our Menu";
    cta.classList.add("cta");
    hero.appendChild(cta);

    content.appendChild(hero);
}