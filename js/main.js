/****************************** functions ******************************/
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

const renderFooter = () => {
  let content = `
			<div class="row pt-3">
				<div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center">
					<p class="mb-0 text-center text-md-start">PADI Dive Center S#19636</p>
				</div>
				<div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center footer__redesSociales">
					<a href="https://www.instagram.com/buceo_atlantida/" target="_blank" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
					<a href="https://www.facebook.com/BuceoAtlantida/" target="_blank" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
					<a href="https://twitter.com/buceoDS" target="_blank" aria-label="Twitter"><i class="bi bi-twitter"></i></a>
					<a href="https://www.youtube.com/channel/UCoyCRFvtQJpkyWX3rAUg5Ig" target="_blank" aria-label="Youtube"><i class="bi bi-youtube"></i></a>
				</div>
			</div>
			<div class="row">
				<div class="col"><hr /></div>
			</div>
			<div class="row">
				<div class="col-9 col-md-10 footer__datosContacto">
					<a href="https://goo.gl/maps/vCSu5ATBH3A2" target="_blank">CLUB JOSE HERNANDEZ - Bragado 5950 - Mataderos - C.A.B.A. - Argentina</a>
					<p class="mb-0">Tel.: (+54)11.4939.6268 / (+54)11.5979.0203</p>
					<p class="mb-0">info@divingschool.com.ar</p>
				</div>
				<div class="col-3 col-md-2 d-flex justify-content-end align-items-center footer__logoPadi">
					<a href="https://www.padi.com/" target="_blank"><img src="/img/common/logo-padi-transp-black.png" alt="PADI" title="PADI" height="60px" /></a>
				</div>
			</div>
			<div class="row">
				<div class="col"><hr /></div>
			</div>
			<div class="row">
				<div class="col pb-5 footer__derechos">
					<p class="pb-1">
						Copyright &copy ${year} - <a href="https://www.instagram.com/nacho.fj/" target="_blank">[ Nacho FJ ]</a> - Todas las fotografías utilizadas en esta página son propiedad exclusiva de Atlantida Diving School, el uso no autorizado de
						las mismas está penado por la ley.
					</p>
				</div>
			</div>`;

  document.getElementsByTagName("footer")[0].className = "container-fluid footer";
  document.getElementsByTagName("footer")[0].innerHTML = content;
};

const renderWhatsappIcon = () => {
  let content = `<a href="https://api.whatsapp.com/send?phone=5491159790203" target="_blank"><img src="/img/common/logo-whatsapp.png" alt="WhatsApp" /></a>`;
  document.getElementById("whatsapp").innerHTML = content;
};

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

const images = [];
const year = new Date().getFullYear();

const isIndex = document.getElementById("index") !== null;

renderNavbar(isIndex);

renderFooter();
renderWhatsappIcon();
renderDates();

const homeViajes = document.getElementById("homeViajes");
if (homeViajes !== null) {
  renderHomeViajes();
}

const viajesViajes = document.getElementById("viajesViajes");
if (viajesViajes !== null) {
  renderViajesViajes();
}
