function createMarkup(markup_name, text, parent, attribute) {
    const markup = document.createElement(markup_name);
    markup.textContent = text;
    parent.appendChild(markup);
    if (attribute && attribute.hasOwnProperty("name") && attribute.hasOwnProperty("value")) {
      markup.setAttribute(attribute.name, attribute.value);
    }
    return markup;
}

/* create the nav balise at the top */
const header = document.createElement('header');
document.body.appendChild(header);
const nav = createMarkup('nav', '', header);

/* create the section where the cards will be displayed */
const main = document.createElement('main');
document.body.appendChild(main);
const cardsection = createMarkup('section', '',main);

/*create the buttons inside the nav balise */
/*const subjectlist = ["Tous", "HTML", "CSS", "JS"];
let btntxt = "";
for (let i in subjectlist) {
    btntxt = subjectlist [i];
    const button = createMarkup('button', btntxt, nav,[{name:"class", value:"nav-button"}]);
}*/
const btnAll = createMarkup('button', "Tous", nav, [{name:"class", value:"btn-All"}]);
const btnHTML = createMarkup('button', "HTML", nav, [{name:"class", value:"btn-HTML"}]);
const btnCSS = createMarkup('button', "CSS", nav, [{name:"class", value:"btn-CSS"}]);
const btnJS = createMarkup('button', "JS", nav, [{name:"class", value:"btn-JS"}]);


/********************************************* */
/******************************************** */
/******************************************** */
/* create the 16 cards */

let card = createMarkup('article',`article sur le JS`, cardsection, [{name: "class", value: "art-JS"}]);
let cardtext = createMarkup('p',"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
//const article_html = createMarkup("article", "", section, [
//    { name: "class", value: "article html" },
//  ]);
//let article_title = createMarkup("h2", "Article sur le HTML", article_html);
//let article_p = createMarkup("p", "", article_html);

const article_html = createMarkup("article", "", cardsection, [
    { name: "class", value: "article html" },
  ]);
let article_title = createMarkup("h2", "Article sur le HTML", article_html);
let article_p = createMarkup("p", "", article_html);

card = createMarkup('article',`article sur les HTML`, cardsection,[{name: "class", value: "art-HTML"},]);
cardtext = createMarkup('p',"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
//card = createMarkup('article',`article sur les HTML`, cardsection,[{name: "class", value: "articleart-HTML"},]);
//cardtext = createMarkup('p',"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`article sur les HTML`, cardsection,[{name: "class", value: "article art-HTML"},]);
cardtext = createMarkup('p',"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`article sur les CSS`, cardsection,[{name: "class", value: "article art-CSS"},]);
cardtext = createMarkup('p',"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`article sur le JS`, cardsection,[{name: "class", value: "article art-JS"},]);
cardtext = createMarkup('p',"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`article2 sur le JS`, cardsection,[{name: "class", value: "art-JS"},]);
cardtext = createMarkup('p',"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);

/* function test - a supprimer  */
function articleHtml() {
    const article_html = createMarkup("article", "", section, [
      { name: "class", value: "article html" },
    ]);
    let article_title = createMarkup("h2", "Article sur le HTML", article_html);
    let article_p = createMarkup("p", "", article_html);
  }


/* event click on nav buttons */
btnAll.onclick = manageBtnAllClick;
btnHTML.onclick = manageBtnHTMLClick;
btnCSS.onclick = manageBtnCSSClick;
btnJS.onclick = manageBtnJSClick;

function hideAll () {
    const cards= document.querySelectorAll("article");
    cards.forEach((card) => {
        card.hidden = true;
    }); 
}

function ShowAll () {
    const cards= document.querySelectorAll("article");
    cards.forEach((card) => {
        card.hidden = false;
    }); 
}
function ShowHTML () {
    const cards= document.querySelectorAll("article.art-HTML");
    cards.forEach((card) => {
        card.hidden = false;
    }); 
}
function ShowCSS () {
    const cards= document.querySelectorAll("article.art-CSS");
    cards.forEach((card) => {
        card.hidden = false;
    }); 
}
function ShowJS () {
    const cards= document.querySelectorAll("article.art-JS");
    cards.forEach((card) => {
        card.hidden = false;
    }); 
}

function manageBtnAllClick(event) {
  console.log(`clic sur le bouton Tous`);
  ShowAll();
}
function manageBtnHTMLClick(event) {
    console.log(`clic sur le bouton HTML`);
    hideAll();
    ShowHTML();
}
function manageBtnCSSClick(event) {
    console.log(`clic sur le bouton CSS`);
    hideAll();
    ShowCSS();
    //ShowAll();
}
function manageBtnJSClick(event) {
    console.log(`clic sur le bouton JS`);
    hideAll();
    ShowJS();
    ShowAll();
}