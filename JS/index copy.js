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
const container = document.getElementById("container");
const cardsection = createMarkup('section', '',container);

const btnAll = createMarkup('button', "Tous", nav, [{name:"class", value:"btn-All"}]);
const btnHTML = createMarkup('button', "HTML", nav, [{name:"class", value:"btn-HTML"}]);
const btnCSS = createMarkup('button', "CSS", nav, [{name:"class", value:"btn-CSS"}]);
const btnJS = createMarkup('button', "JS", nav, [{name:"class", value:"btn-JS"}]);


/********************************************* */
/******************************************** */
/******************************************** */
/* create the 16 cards */



/* format 1 */
const article_html = createMarkup("article", "", cardsection, [{ name: "class", value: "border p-3 col-md-4" }]);
let article_title = createMarkup("h2", "0-Article HTML", article_html);
let article_p = createMarkup("p", "HTML-Lorem ipsum", article_html);

/*format 2 */
let card = createMarkup('article',`1-article HTML`, cardsection,[{name: "class", value: "borderart-HTML"},]);
let cardtext = createMarkup('p',"HTML-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
//card = createMarkup('article',`article sur les HTML`, cardsection,[{name: "class", value: "articleart-HTML"},]);
//cardtext = createMarkup('p',"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`2-article sur les HTML`, cardsection,[{name: "class", value: "article art-HTML"},]);
cardtext = createMarkup('p',"HTML-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`3-article sur les CSS`, cardsection,[{name: "class", value: "article art-CSS"},]);
cardtext = createMarkup('p',"CSS-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`4-article sur le JS`, cardsection,[{name: "class", value: "article art-JS"},]);
cardtext = createMarkup('p',"JS-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`5-article sur le JS`, cardsection,[{name: "class", value: "art-JS"},]);
cardtext = createMarkup('p',"JS-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);
card = createMarkup('article',`6-article sur le JS`, cardsection, [{name: "class", value: "art-JS"}]);
cardtext = createMarkup('p',"JS-Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quasi...", card);


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
