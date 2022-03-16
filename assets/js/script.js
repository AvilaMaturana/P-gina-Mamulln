$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});


$(document).ready(function() {
        
	/* activate the carousel */
	$("#modal-carousel").carousel({interval:false});
 
	/* change modal title when slide changes */
	$("#modal-carousel").on("slid.bs.carousel",       function () {
		 $(".modal-title")
		 .html($(this)
		 .find(".active img")
		 .attr("title"));
	});
 
	/* when clicking a thumbnail */
	$(".row .thumbnail").click(function(){
	 var content = $(".carousel-inner");
	 var title = $(".modal-title");
   
	 content.empty();  
	 title.empty();
   
	   var id = this.id;  
	  var repo = $("#img-repo .item");
	  var repoCopy = repo.filter("#" + id).clone();
	  var active = repoCopy.first();
   
	 active.addClass("active");
	 title.html(active.find("img").attr("title"));
	   content.append(repoCopy);
 
	 // show the modal
	   $("#modal-gallery").modal("show");
   });
 
 });