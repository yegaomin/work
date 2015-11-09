$(document).ready(function (){
	var book_default={
		beishu:3,
	}
	$('#book #left').click(function(){
		$('.book_zhe').html('')
		var div_html=$(this).find('.content').html();
		var el=$('<div/>').addClass('new_contain').html(div_html);
		var img_width=$(this).find('.content').find('img').width();
		$('body').css('overflow','hidden');

		el.children().draggable();
		$('.book_zhe').append(el);
		$('.new_contain').find('img').css('width',img_width*book_default.beishu);
		$('.book_zhe').show();
		$('.book_guanbi').show();
	})

	
$('#book #left').click(function(){
		alert(4)
	})
	$('#book #right').click(function(){
		$('.book_zhe').html('');
		var div_html=$(this).find('.content').html();
		var el=$('<div/>').addClass('new_contain').html(div_html);
		var img_width=$(this).find('.content').find('img').width();
		$('body').css('overflow','hidden');

		el.children().draggable();
		$('.book_zhe').append(el);
		$('.new_contain').find('img').css('width',img_width*book_default.beishu);
		$('.book_zhe').show();
		$('.book_guanbi').show();


	})
	$('.book_guanbi').click(function(){
		$('.book_zhe').hide();
		$('.book_guanbi').hide();
	})
})