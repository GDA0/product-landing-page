const form = document.querySelector(".needs-validation");

form.addEventListener(
	"submit",
	(event) => {
		if (!form.checkValidity()) {
			event.preventDefault();
			event.stopPropagation();
		}

		form.classList.add("was-validated");
	},
	false
);

const navbarCollapse = document.querySelector(".navbar-collapse");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
			toggle: false,
		});
		bsCollapse.hide();
	});
});
