const getFileName = () => {
	let absolutePath = document.URL;
	let relativePath = absolutePath.substring(absolutePath.lastIndexOf("/") + 1);
	return relativePath;
};

const getNavbarLinks = () => {
	navbarLinks.push(new NavbarLink("Inicio", "index.html", "./"));
	navbarLinks.push(new NavbarLink("Cursos", "cursos.html", "./pages/"));
	navbarLinks.push(new NavbarLink("El Buda", "buda.html", "./pages/"));
	navbarLinks.push(new NavbarLink("Viajes", "viajes.html", "./pages/"));
	navbarLinks.push(new NavbarLink("Nosotros", "nosotros.html", "./pages/"));
	navbarLinks.push(new NavbarLink("Contacto", "contacto.html", "./pages/"));
};

const renderNavbar = () => {
	let content = `
        <nav class="navbar navbar-expand-md navbar-dark">
            <div class="container-fluid position-relative">`;
	home
		? (content += `
                <a class="navbar-brand" href="./index.html"><img src="./img/common/logoMenu.jpg" alt="Logo Atlantida Diving School" height="40px" /></a>`)
		: (content += `
                <a class="navbar-brand" href="../index.html"><img src="../img/common/logoMenu.jpg" alt="Logo Atlantida Diving School" height="40px" /></a>`);
	content += `
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav">`;
	if (home) {
		for (let i = 0; i < navbarLinks.length; i++) {
			content += `<li class="nav-item"><a class="nav-link px-3" href="${navbarLinks[i].folder}${navbarLinks[i].file}">${navbarLinks[i].label}</a></li>`;
		}
	} else {
		for (let i = 0; i < navbarLinks.length; i++) {
			i === 0
				? (content += `<li class="nav-item"><a class="nav-link px-3" href=".${navbarLinks[i].folder}${navbarLinks[i].file}">${navbarLinks[i].label}</a></li>`)
				: (content += `<li class="nav-item"><a class="nav-link px-3" href="./${navbarLinks[i].file}">${navbarLinks[i].label}</a></li>`);
		}
	}
	content += `    </ul>
                </div>
            </div>
        </nav>`;

	document.getElementsByTagName("header")[0].className = "sticky-top";
	document.getElementsByTagName("header")[0].innerHTML = content;
};

const renderFooter = () => {
	let content = `
			<div class="row pt-3">
				<div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center">
					<p class="mb-0 text-center text-md-start">PADI Dive Center S#19636</p>
				</div>
				<div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center footer__redesSociales">
					<a href="https://www.instagram.com/buceo_atlantida/" target="_blank"><i class="bi bi-instagram"></i></a>
					<a href="https://www.facebook.com/BuceoAtlantida/" target="_blank"><i class="bi bi-facebook"></i></a>
					<a href="https://twitter.com/buceoDS" target="_blank"><i class="bi bi-twitter"></i></a>
					<a href="https://www.youtube.com/channel/UCoyCRFvtQJpkyWX3rAUg5Ig" target="_blank"><i class="bi bi-youtube"></i></a>
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
				<div class="col-3 col-md-2 d-flex justify-content-end align-items-center footer__logoPadi">`;

	home
		? (content += `
                	<a href="https://www.padi.com/" target="_blank"><img src="./img/common/logo-padi-transp-black.png" alt="PADI" title="PADI" height="60px" /></a>`)
		: (content += `
                	<a href="https://www.padi.com/" target="_blank"><img src="../img/common/logo-padi-transp-black.png" alt="PADI" title="PADI" height="60px" /></a>`);

	content += `	
				</div>
			</div>
			<div class="row">
				<div class="col"><hr /></div>
			</div>
			<div class="row">
				<div class="col pb-5 footer__derechos">
					<p class="pb-1">
						Copyright &copy ${anio} - <a href="https://www.instagram.com/nacho.fj/" target="_blank">[ Nacho FJ ]</a> - Todas las fotografías utilizadas en esta página son propiedad exclusiva de Atlantida Diving School, el uso no autorizado de
						las mismas está penado por la ley.
					</p>
				</div>
			</div>`;

	document.getElementsByTagName("footer")[0].className = "container-fluid footer";
	document.getElementsByTagName("footer")[0].innerHTML = content;
};

const renderWhatsapp = () => {
	let content = "";

	home
		? (content += `
                	<a href="https://api.whatsapp.com/send?phone=5491159790203" target="_blank"><img src="./img/common/logo-whatsapp.png" alt="WhatsApp" /></a>`)
		: (content += `
                	<a href="https://api.whatsapp.com/send?phone=5491159790203" target="_blank"><img src="../img/common/logo-whatsapp.png" alt="WhatsApp" /></a>`);

	document.getElementById("whatsapp").innerHTML = content;
};

class NavbarLink {
	constructor(label, file, folder) {
		this.label = label;
		this.file = file;
		this.folder = folder;
	}
}

const navbarLinks = [];
let home = getFileName() === "index.html";
const anio = new Date().getFullYear();

getNavbarLinks();
renderNavbar();
renderFooter();
renderWhatsapp();
