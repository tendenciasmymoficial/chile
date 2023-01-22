$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('opcion[category="all"]').addClass('selected');

	// FILTRANDO PRODUCTOS  ============================================

	$('.opcion').click(function(){
		var catProduct = $(this).attr('category');

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.opcion').removeClass('selected');
		$(this).addClass('selected');


		// OCULTANDO PRODUCTOS =========================
		$('.new__card').css('transform', 'scale(0)');
		function hideProduct(){
			$('.new__card').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.new__card[category="'+catProduct+'"]').show();
			$('.new__card[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.opcion[category="all"]').click(function(){
		function showAll(){
			$('.new__card').show();
			$('.new__card').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});