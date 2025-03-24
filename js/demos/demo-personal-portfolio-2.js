/*
Name:           Demo Personal Portfolio 2
Written by:     Okler Themes - (http://www.okler.net)
Theme Version:  12.0.0
*/

(($ => {
    /*
	Locomotive
	*/
    if (typeof LocomotiveScroll !== 'undefined') {

		window.scrollTo(0,0);

		setTimeout(() => {

			const scroller = new LocomotiveScroll({
				el: document.querySelector("[data-scroll-container]"),
				smooth: true,
				mobile: {
					breakpoint: 0,
					smooth: true
				},
				tablet: {
					breakpoint: 0,
					smooth: true
				}
			});

			$('[data-hash]').off().on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				const anchor = $($(this).attr('href')).get(0);

				scroller.scrollTo(anchor);
			});

		}, 100);

		window.onbeforeunload = () => {
		    window.scrollTo(0,0);
		};

	} else {

		theme.fn.showErrorMessage('Failed to Load File', 'Failed to load: Locomotive Scroll - Include the following file(s): (vendor/locomotive-scroll/locomotive-scroll.min.js)');

	}
})).apply( this, [ jQuery ]);


/* -------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------- */
/* PARPADEO */
document.addEventListener("DOMContentLoaded", () => {
	const texto = document.getElementById('texto');

	// Configurar el Intersection Observer
	const observer = new IntersectionObserver((entries, observer) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  // Activar la animación al verlo
		  texto.classList.add('activo');
		  observer.unobserve(texto); // Dejar de observar después de la animación
		}
	  });
	}, { threshold: 0.5 }); // Se activa cuando al menos el 50% del texto sea visible

	observer.observe(texto); // Observar el texto
  });