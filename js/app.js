window.addEventListener('load', function () {
	console.log('el contenido ha cargado!');

	var imagenes = [];

	imagenes[0] = 'img/nyc1.jpg';
	imagenes[1] = 'img/nyc2.jpg';
	imagenes[2] = 'img/nyc3.jpg';

	var indiceImagenes = 0;
	var tiempo = 2000;

	function cambiarImagenes() {

		document.slider.src = imagenes[indiceImagenes];

		if (indiceImagenes < 2) {
			indiceImagenes++;
		} else {
			indiceImagenes = 0;
		}
	}

	setInterval(cambiarImagenes, tiempo);

});