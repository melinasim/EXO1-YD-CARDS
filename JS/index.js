function createMarkup(markup_name, text, parent, attribute) {
    const markup = document.createElement(markup_name);
    markup.textContent = text;
    parent.appendChild(markup);
    if (attribute && attribute.hasOwnProperty("name") && attribute.hasOwnProperty("value")) {
      markup.setAttribute(attribute.name, attribute.value);
    }
    return markup;
}

const container = document.getElementById("container");
/* create the nav balise at the top */
const header = createMarkup('header', '',container);
const nav = createMarkup('nav', '', header);
/* create the section where the cards will be displayed */
const cardsection = createMarkup('section', '',container);

const btnAll = createMarkup('button', "Tous", nav, [{name:"class", value:"btn-All"}]);
const btnHTML = createMarkup('button', "HTML", nav, [{name:"class", value:"btn-HTML"}]);
const btnCSS = createMarkup('button', "CSS", nav, [{name:"class", value:"btn-CSS"}]);
const btnJS = createMarkup('button', "JS", nav, [{name:"class", value:"btn-JS"}]);

/* create the 16 cards */

let card = createMarkup('article',`HTML0article HTML`, cardsection,[{name: "class", value: "article html"},]);
let cardtext = createMarkup('p',"HTML-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup("article","HTML1-article sur les HTML", cardsection,[{name: "class", value: "article html"},]);
cardtext = createMarkup('p',"HTML-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup("article","HTML2-article sur les HTML", cardsection,[{name: "class", value: "article html"},]);
cardtext = createMarkup('p',"HTML-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup("article","HTML3-article sur les HTML", cardsection,[{name: "class", value: "html"},]);
cardtext = createMarkup('p',"HTML-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`HTML4-article HTML`, cardsection,[{name: "class", value: "html"},]);
cardtext = createMarkup('p',"HTML-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`HTML5-article HTML`, cardsection,[{name: "class", value: "html"},]);
cardtext = createMarkup('p',"HTML-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`HTML6-article HTML`, cardsection,[{name: "class", value: "html"},]);
cardtext = createMarkup('p',"HTML-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);

card = createMarkup('article',`CSS1-article CSS`, cardsection,[{name: "class", value: "css"},]);
cardtext = createMarkup('p',"CSS-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`CSS2-article CSS`, cardsection,[{name: "class", value: "css"},]);
cardtext = createMarkup('p',"CSS-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`CSS3-article CSS`, cardsection,[{name: "class", value: "css"},]);
cardtext = createMarkup('p',"CSS-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`CSS4-article CSS`, cardsection,[{name: "class", value: "css"},]);
cardtext = createMarkup('p',"CSS-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);

card = createMarkup('article',`JS1-article sur le JS`, cardsection,[{name: "class", value: "js"},]);
cardtext = createMarkup('p',"JS-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`JS2-article sur le JS`, cardsection,[{name: "class", value: "js"},]);
cardtext = createMarkup('p',"JS-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`JS3-article sur le JS`, cardsection, [{name: "class", value: "js"}]);
cardtext = createMarkup('p',"JS-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`JS4-article sur le JS`, cardsection, [{name: "class", value: "js"}]);
cardtext = createMarkup('p',"JS-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`JS5-article sur le JS`, cardsection, [{name: "class", value: "js"}]);
cardtext = createMarkup('p',"JS-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
//const data_article = createMarkup("article", "", container, [{ name: "class", value: `html` },]);
//let articleTitle = createMarkup("h2", "10-article sur HTML", data_article); 
//let articleData1 = createMarkup("p", `lorem ipsum`, data_article);

/* event click on nav buttons */
btnAll.onclick = manageBtnAllClick;
btnHTML.onclick = manageBtnHTMLClick;
btnCSS.onclick = manageBtnCSSClick;
btnJS.onclick = manageBtnJSClick;


function hideAll () {
    const cards= document.querySelectorAll("article");
    console.log(cards.length);
    cards.forEach((card) => {
        card.hidden = true;
    }); 
}

function showAll () {
    const cards= document.querySelectorAll("article");
    console.log(cards.length);
    cards.forEach((card) => {
        card.hidden = false;
    }); 
}
function showHTML () {
    const cards = document.querySelectorAll("html");
    console.log(cards.length);
    cards.forEach((card) => {
        card.hidden = false;
    }); 
}
function showCSS () {
    const cards= document.querySelectorAll("article.art-CSS");
    console.log(cards.length);
    cards.forEach((card) => {
        card.hidden = false;
    }); 
}
function showJS () {
    const cards= document.querySelectorAll("article.art-JS");
    console.log(cards.length);
    cards.forEach((card) => {
        card.hidden = false;
    }); 
}

function manageBtnAllClick(event) {
    console.log(`clic sur le bouton Tous`);
    showAll();
}
function manageBtnHTMLClick(event) {
    console.log(`clic sur le bouton HTML`);
    hideAll();
    showHTML();
}
function manageBtnCSSClick(event) {
    console.log(`clic sur le bouton CSS`);
    hideAll();
    showCSS();
}
function manageBtnJSClick(event) {
    console.log(`clic sur le bouton JS`);
    showJS();
}
