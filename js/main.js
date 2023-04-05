/****************************** functions ******************************/

/*----- render navbar -----*/
const renderNavbar = (isIndex) => {
  let content = `
    <nav class="header__nav">
      <div class="header__nav--brand">
        <a href="${isIndex ? NAVBAR_LINKS[0].pathIndex : NAVBAR_LINKS[0].pathNotIndex}">
          <img src="${isIndex ? "./" : "../"}img/common/logoMenu.jpg" alt="Logo Atlantida Diving School" />
        </a>
      </div>
      <div id="navToggler" class="header__nav--toggler">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="navLinks" class="header__nav--links">
        <ul>`;

  NAVBAR_LINKS.forEach((el) => {
    content += `<li>
                  <a href="${isIndex ? el.pathIndex : el.pathNotIndex}">${el.label}</a>
                </li>`;
  });

  content += `
        </ul>
      </div>
    </nav>`;

  document.getElementsByTagName("header")[0].className = "header";
  document.getElementsByTagName("header")[0].innerHTML = content;
};

/*----- render footer -----*/
const renderFooter = (isIndex) => {
  let content = `
    <div class="footer__row">
      <div class="footer__row--diveCenter">
        <p>PADI Dive Center S#19636</p>
      </div>
      <div class="footer__row--socialNetworks">
        <a href="${INSTAGRAM_LINK}" target="_blank" aria-label="Instagram">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="${FACEBOOK_LINK}" target="_blank" aria-label="Facebook">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="${TWITTER_LINK}" target="_blank" aria-label="Twitter">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="${YOUTUBE_LINK}" target="_blank" aria-label="Youtube">
          <i class="bi bi-youtube"></i>
        </a>
      </div>
    </div>
    <hr />
    <div class="footer__row">
      <div class="footer__row--contact">
        <a href="${GOOGLE_MAPS_LINK}" target="_blank">
          <p>CLUB JOSE HERNANDEZ - Bragado 5950 - Mataderos - C.A.B.A. - Argentina</p>
        </a>
        <p>Tel.: (+54)11.4939.6268 / (+54)11.5979.0203</p>
        <p>info@divingschool.com.ar</p>
      </div>
      <div class="footer__row--logoPadi">
        <a href="https://www.padi.com/" target="_blank">
          <img src="${isIndex ? "./" : "../"}img/common/logo-padi-transp-black.png" alt="PADI" title="PADI" />
        </a>
      </div>
    </div>
    <hr />
    <div class="footer__row">
      <div class="footer__row--legal">
        <p>
          Copyright &copy ${year} - <a href="https://www.instagram.com/nacho.fj/" target="_blank">[ Nacho FJ ]</a> -
          Todas las fotografías utilizadas en esta página son propiedad exclusiva de Atlantida Diving School, el uso
          no autorizado de las mismas está penado por la ley.
        </p>
      </div>
    </div>
  `;

  document.getElementsByTagName("footer")[0].className = "footer";
  document.getElementsByTagName("footer")[0].innerHTML = content;
};

/*----- render Whatsapp Icon -----*/
const renderWhatsappIcon = (isIndex) => {
  let content = `<a href="${WHATSAPP_LINK}" target="_blank"><img src="${
    isIndex ? "./" : "../"
  }img/common/logo-whatsapp.png" alt="WhatsApp" /></a>`;

  document.getElementById("whatsapp").innerHTML = content;
};

/*----- render Dates -----*/
const renderDates = () => {
  let element = document.getElementsByClassName("currentYear");

  if (element.length > 0) {
    for (let i = 0; i < element.length; i++) {
      element[i].innerHTML = year;
    }
  }

  element = document.getElementsByClassName("yearsSince1986");

  if (element.length > 0) {
    for (let i = 0; i < element.length; i++) {
      element[i].innerHTML = year - 1986;
    }
  }
};

/*----- navbar Toogler -----*/
document.addEventListener("DOMContentLoaded", () => {
  const navToggler = document.getElementById("navToggler");
  const navLinks = document.getElementById("navLinks");

  document.getElementById("navToggler").addEventListener("click", () => {
    navToggler.classList.toggle("header__nav--togglerActive");
    navLinks.classList.toggle("header__nav--linksVisibility");
  });
});

const getImagesViajes = () => {
  //2022
  images.push(
    new Image("/img/viajes/202206-angra-dos-reis.jpg", "Angra Dos Reis Brasil", "Angra Dos Reis / Brasil", "")
  );
  images.push(new Image("/img/viajes/202204-ilha-bela.jpg", "Ilha Bela Brasil", "", ""));
  images.push(new Image("/img/viajes/202203-cantera-ezeiza.jpg", "Cantera Ezeiza Argentina", "", ""));
  //2021
  images.push(new Image("/img/viajes/202112-cantera-tandil-2.jpg", "Cantera Tandil Argentina", "", ""));
  images.push(new Image("/img/viajes/202112-cantera-tandil-1.jpg", "Cantera Tandil Argentina", "", ""));
  images.push(new Image("/img/viajes/202112-angra-dos-reis.jpg", "Angra Dos Reis Brasil", "", ""));
  images.push(new Image("/img/viajes/202110-las-grutas.jpg", "Las Grutas Argentina", "", ""));
  images.push(
    new Image("/img/viajes/202110-cantera-tandil.jpg", "Cantera Tandil Argentina", "Cantera Tandil / Argentina", "")
  );
  images.push(new Image("/img/viajes/202104-las-grutas.jpg", "Las Grutas Argentina", "", ""));
  images.push(new Image("/img/viajes/202103-cantera-tandil.jpg", "Cantera Tandil Argentina", "", ""));
  images.push(new Image("/img/viajes/202102-cantera-tandil.jpg", "Cantera Tandil Argentina", "", ""));
};

const renderHomeViajes = () => {
  getImagesViajes();
  let content = "";
  let limitFor = 0;
  images.length >= 6 ? (limitFor = 6) : (limitFor = images.length);
  for (let i = 0; i < limitFor; i++) {
    content += `
			<div class="col-sm-6 col-lg-4 p-3">
				<img src="${images[i].src}" alt="${images[i].alt}" />
			</div>
			`;
  }
  homeViajes.innerHTML = content;
};

const renderViajesViajes = () => {
  getImagesViajes();
  let content = "";
  for (let i = 0; i < images.length; i++) {
    content += `
      <div class="col-md-6 col-xl-4 p-4 d-flex align-items-stretch">
        <div class="card" style="width: 100%">
          <img src="${images[i].src}" class="card-img-top" alt="${images[i].alt}" />
          <div class="card-body">
            <h3 class="card-title">${images[i].titleCard}</h3>
            <div class="text-center py-4">
              <a class="btnATL btnATL--verde" href="${images[i].hrefFacebook}">Ver álbum<i class="bi bi-facebook"></i></a>
            </div>
          </div>
        </div>
      </div>`;
  }
  viajesViajes.innerHTML = content;
};

/****************************** main ******************************/
class Image {
  constructor(src, alt, titleCard, hrefFacebook) {
    this.src = src;
    this.alt = alt;
    this.titleCard = titleCard;
    this.hrefFacebook = hrefFacebook;
  }
}

const NAVBAR_LINKS = [
  { label: "Inicio", pathIndex: "./index.html", pathNotIndex: "../index.html" },
  { label: "Cursos", pathIndex: "./pages/cursos.html", pathNotIndex: "./cursos.html" },
  /* { label: "El Buda", pathIndex: "./pages/buda.html", pathNotIndex: "./buda.html" }, */
  { label: "Viajes", pathIndex: "./pages/viajes.html", pathNotIndex: "./viajes.html" },
  { label: "Nosotros", pathIndex: "./pages/nosotros.html", pathNotIndex: "./nosotros.html" },
  { label: "Contacto", pathIndex: "./pages/contacto.html", pathNotIndex: "./contacto.html" },
];

const INSTAGRAM_LINK = "https://www.instagram.com/buceo_atlantida/";
const FACEBOOK_LINK = "https://www.facebook.com/BuceoAtlantida/";
const TWITTER_LINK = "https://twitter.com/buceoDS";
const YOUTUBE_LINK = "https://www.youtube.com/channel/UCoyCRFvtQJpkyWX3rAUg5Ig";
const GOOGLE_MAPS_LINK = "https://goo.gl/maps/vCSu5ATBH3A2";
const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5491159790203";

const images = [];
const year = new Date().getFullYear();

const isIndex = document.getElementById("index") !== null;

renderNavbar(isIndex);
renderFooter(isIndex);
renderWhatsappIcon(isIndex);
renderDates();

const homeViajes = document.getElementById("homeViajes");
if (homeViajes !== null) {
  renderHomeViajes();
}

const viajesViajes = document.getElementById("viajesViajes");
if (viajesViajes !== null) {
  renderViajesViajes();
}
