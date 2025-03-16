// create an HTML template element
const template = document.createElement("template");

template.innerHTML = `
<style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    .navbar {
      width: 25rem;
      height: 100vh;
      /* background: #e6fcf5; */
      background: #F6F6F6;
      border-radius: 18px;

      /* border-right: 1px solid #d0e8e0; */
      position: fixed;
      left: -240px;
      transition: all 0.5s ease;
    }

    .nav-title {
      padding: 2rem;
    }

    .main-nav {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      margin-left: 2.5rem;
      list-style-type: none;
      /* align-items: center; */
    }

    .main-nav-link:link, 
    .main-nav-link:active, 
    .main-nav-link:visited {
      font-size: 1.4rem;
      color: #000;
      text-decoration: none;
    }

    .main-nav-link:hover {
      text-decoration: underline;
    }
    #check {
      display: none;
    }

    label #btn,
    label #cancel {
      position: fixed;
      left: 5px;
      top: 17px;
      cursor: pointer;
      color: #7c7c7c;
      border-radius: 5px;
      margin: 15px;
      font-size: 29px;
      background-color: #F6F6F6;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
        inset -7px -7px 10px 0px rgba(0, 0, 0, 0.1),
        3.5px 3.5px 20px 0px rgba(0, 0, 0, 0.1), 2px 2px 5px 0px rgba(0, 0, 0, 0.1);
      height: 45px;
      width: 45px;
      text-align: center;
      text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
      line-height: 45px;
      transition: all 0.5s ease;
      z-index: 9999;
      font-style: normal;
    }

    label #cancel {
      opacity: 0;
      visibility: hidden;
    }

    #check:checked ~ .navbar {
      left: 0;
    }

    #check:checked ~ main {
      margin-left: 260px;
    }

    #check:checked ~ label #btn {
      margin-left: 245px;
      opacity: 0;
      visibility: hidden;
    }

    #check:checked ~ label #cancel {
      margin-left: 260px;
      opacity: 1;
      visibility: visible;
    }
</style>

<input type="checkbox" id="check">
<label for="check">
    <i class="fas fa-bars" id="btn">⍈</i>
    <i class="fas fa-times" id="cancel">⍇</i>
</label>
<nav class="navbar">

    <h1 class="nav-title">singularity</h1>

    <ul class="main-nav">
        <li><a href="/blog" class="main-nav-link">Accueil</a></li>
        <li><a href="/blog/blog.html" class="main-nav-link">Blog</a></li>
        <li><a href="/blog/types-d-attaques.html" class="main-nav-link">Type d'attaques</a></li>
        <li><a href="/blog/comment-ca-fonctionne.html" class="main-nav-link">Comment ça fonctionne</a></li>

        <li><a href="/blog/conseils.html" class="main-nav-link">Conseils pour ma compagne</a></li>

        <li><a href="/blog/lexique.html" class="main-nav-link">Lexique</a></li>
        <li><a href="/blog/ressources.html" class="main-nav-link">Ressources</a></li>



    </ul>
</nav>
`;
// create a navBar class, and clone the content of the template into it
class navBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
// define a custom element called 'nav-bar' using the navBar class
customElements.define("nav-bar", navBar);

// DROPDOWN
function toggleDropdown(id) {
  var dropdown = document.getElementById(id);
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

// SEARCH BAR

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const items = document.querySelectorAll(".main-notions li");

  searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();

    items.forEach((item) => {
      const boldElement = item.querySelector("b");
      if (boldElement) {
        const word = boldElement.textContent.toLowerCase();
        item.style.display = word.includes(searchValue) ? "" : "none";
      }
    });
  });
});
