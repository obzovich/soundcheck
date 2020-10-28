// $(document).ready(function(){ 
// 	$('.spoiler-title').click(function(){ 
// 		$(this).parent().children('div.spoiler-content').toggle('fast');
// 		return false;
// 		});
// 	$('#form-close').click(function(){ 
// 		$("#spoiler-content").slideUp();
// 	});
// });


$(document).ready(function(){ 
	$('.spoiler-title').click(function(){ 
				let krest = $('#what_inc_krest');
				if(krest.hasClass('closed_krest'))
					{
					//если есть класс клозед крест
					krest.removeClass('closed_krest'); //уберем класс клозед
					krest.addClass('opened_krest'); //добавим класс опенед
					$('#spoiler-content').slideDown('slow'); //покажем описание
					$('div.opened_krest')
 					.html('<i class="fas fa-times"></i>');
					}
			else
					{
					//если нету класс клозед крест (значит есть опен крест считаем)
					krest.removeClass('opened_krest'); //уберем класс опенед
					krest.addClass('closed_krest'); //добавим класс клозед
					$('#spoiler-content').slideUp('slow'); //спрячем описание
					$('div.closed_krest')
 					.html('<i class="fas fa-ellipsis-h"></i>');
					}
			})
	});

$(document).ready(function(){ 
	$('.spoiler-title2').click(function(){ 
				let krest = $('#what_inc_krest2');
				if(krest.hasClass('closed_krest'))
					{
					//если есть класс клозед крест
					krest.removeClass('closed_krest'); //уберем класс клозед
					krest.addClass('opened_krest'); //добавим класс опенед
					$('#spoiler-content2').slideDown('slow'); //покажем описание
					$('div.opened_krest')
 					.html('<i class="fas fa-times"></i>');
					}
			else
					{
					//если нету класс клозед крест (значит есть опен крест считаем)
					krest.removeClass('opened_krest'); //уберем класс опенед
					krest.addClass('closed_krest'); //добавим класс клозед
					$('#spoiler-content2').slideUp('slow'); //спрячем описание
					$('div.closed_krest')
 					.html('<i class="fas fa-ellipsis-h"></i>');
					}
			})
	});

$(document).ready(function(){ 
	$('.spoiler-title3').click(function(){ 
				let krest = $('#what_inc_krest3');
				if(krest.hasClass('closed_krest'))
					{
					//если есть класс клозед крест
					krest.removeClass('closed_krest'); //уберем класс клозед
					krest.addClass('opened_krest'); //добавим класс опенед
					$('#spoiler-content3').slideDown('slow'); //покажем описание
					$('div.opened_krest')
 					.html('<i class="fas fa-times"></i>');
					}
			else
					{
					//если нету класс клозед крест (значит есть опен крест считаем)
					krest.removeClass('opened_krest'); //уберем класс опенед
					krest.addClass('closed_krest'); //добавим класс клозед
					$('#spoiler-content3').slideUp('slow'); //спрячем описание
					$('div.closed_krest')
 					.html('<i class="fas fa-ellipsis-h"></i>');
					}
			})
	});


$(document).ready(function(){ 
	$('.spoiler-title4').click(function(){ 
				let krest = $('#what_inc_krest4');
				if(krest.hasClass('closed_krest'))
					{
					//если есть класс клозед крест
					krest.removeClass('closed_krest'); //уберем класс клозед
					krest.addClass('opened_krest'); //добавим класс опенед
					$('#spoiler-content4').slideDown('slow'); //покажем описание
					$('div.opened_krest')
 					.html('<i class="fas fa-times"></i>');
					}
			else
					{
					//если нету класс клозед крест (значит есть опен крест считаем)
					krest.removeClass('opened_krest'); //уберем класс опенед
					krest.addClass('closed_krest'); //добавим класс клозед
					$('#spoiler-content4').slideUp('slow'); //спрячем описание
					$('div.closed_krest')
 					.html('<i class="fas fa-ellipsis-h"></i>');
					}
			})
	});


$(document).ready(function(){ 
	$('.spoiler-block--include--1').click(function(){ 
				let krest = $('#what_inc_krest5');
				if(krest.hasClass('closed_krest'))
					{
					//если есть класс клозед крест
					krest.removeClass('closed_krest'); //уберем класс клозед
					krest.addClass('opened_krest'); //добавим класс опенед
					$('#spoiler-content5').slideDown('slow'); //покажем описание
					$('div.opened_krest')
 					.html('<i class="fas fa-times"></i>');
					}
			else
					{
					//если нету класс клозед крест (значит есть опен крест считаем)
					krest.removeClass('opened_krest'); //уберем класс опенед
					krest.addClass('closed_krest'); //добавим класс клозед
					$('#spoiler-content5').slideUp('slow'); //спрячем описание
					$('div.closed_krest')
 					.html('<i class="fas fa-ellipsis-h"></i>');
					}
			})
	});


$(document).ready(function(){ 
	$('.spoiler-block--include--2').click(function(){ 
				let krest = $('#what_inc_krest6');
				if(krest.hasClass('closed_krest'))
					{
					//если есть класс клозед крест
					krest.removeClass('closed_krest'); //уберем класс клозед
					krest.addClass('opened_krest'); //добавим класс опенед
					$('#spoiler-content6').slideDown('slow'); //покажем описание
					$('div.opened_krest')
 					.html('<i class="fas fa-times"></i>');
					}
			else
					{
					//если нету класс клозед крест (значит есть опен крест считаем)
					krest.removeClass('opened_krest'); //уберем класс опенед
					krest.addClass('closed_krest'); //добавим класс клозед
					$('#spoiler-content6').slideUp('slow'); //спрячем описание
					$('div.closed_krest')
 					.html('<i class="fas fa-ellipsis-h"></i>');
					}
			})
	});


$(document).ready(function(){ 
	$('.spoiler-block--include--3').click(function(){ 
				let krest = $('#what_inc_krest7');
				if(krest.hasClass('closed_krest'))
					{
					//если есть класс клозед крест
					krest.removeClass('closed_krest'); //уберем класс клозед
					krest.addClass('opened_krest'); //добавим класс опенед
					$('#spoiler-content7').slideDown('slow'); //покажем описание
					$('div.opened_krest')
 					.html('<i class="fas fa-times"></i>');
					}
			else
					{
					//если нету класс клозед крест (значит есть опен крест считаем)
					krest.removeClass('opened_krest'); //уберем класс опенед
					krest.addClass('closed_krest'); //добавим класс клозед
					$('#spoiler-content7').slideUp('slow'); //спрячем описание
					$('div.closed_krest')
 					.html('<i class="fas fa-ellipsis-h"></i>');
					}
			})
	});


$(document).ready(function(){ 
	$('.spoiler-block--include--4').click(function(){ 
				let krest = $('#what_inc_krest8');
				if(krest.hasClass('closed_krest'))
					{
					//если есть класс клозед крест
					krest.removeClass('closed_krest'); //уберем класс клозед
					krest.addClass('opened_krest'); //добавим класс опенед
					$('#spoiler-content8').slideDown('slow'); //покажем описание
					$('div.opened_krest')
 					.html('<i class="fas fa-times"></i>');
					}
			else
					{
					//если нету класс клозед крест (значит есть опен крест считаем)
					krest.removeClass('opened_krest'); //уберем класс опенед
					krest.addClass('closed_krest'); //добавим класс клозед
					$('#spoiler-content8').slideUp('slow'); //спрячем описание
					$('div.closed_krest')
 					.html('<i class="fas fa-ellipsis-h"></i>');
					}
			})
	});


$(document).ready(function(){ 
	$('.spoiler-block--include--5').click(function(){ 
				let krest = $('#what_inc_krest9');
				if(krest.hasClass('closed_krest'))
					{
					//если есть класс клозед крест
					krest.removeClass('closed_krest'); //уберем класс клозед
					krest.addClass('opened_krest'); //добавим класс опенед
					$('#spoiler-content9').slideDown('slow'); //покажем описание
					$('div.opened_krest')
 					.html('<i class="fas fa-times"></i>');
					}
			else
					{
					//если нету класс клозед крест (значит есть опен крест считаем)
					krest.removeClass('opened_krest'); //уберем класс опенед
					krest.addClass('closed_krest'); //добавим класс клозед
					$('#spoiler-content9').slideUp('slow'); //спрячем описание
					$('div.closed_krest')
 					.html('<i class="fas fa-ellipsis-h"></i>');
					}
			})
	});

$(document).ready(function(){ 
	$('.spoiler-block--include--6').click(function(){ 
				let krest = $('#what_inc_krest10');
				if(krest.hasClass('closed_krest'))
					{
					//если есть класс клозед крест
					krest.removeClass('closed_krest'); //уберем класс клозед
					krest.addClass('opened_krest'); //добавим класс опенед
					$('#spoiler-content10').slideDown('slow'); //покажем описание
					$('div.opened_krest')
 					.html('<i class="fas fa-times"></i>');
					}
			else
					{
					//если нету класс клозед крест (значит есть опен крест считаем)
					krest.removeClass('opened_krest'); //уберем класс опенед
					krest.addClass('closed_krest'); //добавим класс клозед
					$('#spoiler-content10').slideUp('slow'); //спрячем описание
					$('div.closed_krest')
 					.html('<i class="fas fa-ellipsis-h"></i>');
					}
			})
	});


$(document).ready(function(){ 
	$('.spoiler-block--include--7').click(function(){ 
				let krest = $('#what_inc_krest11');
				if(krest.hasClass('closed_krest'))
					{
					//если есть класс клозед крест
					krest.removeClass('closed_krest'); //уберем класс клозед
					krest.addClass('opened_krest'); //добавим класс опенед
					$('#spoiler-content11').slideDown('slow'); //покажем описание
					$('div.opened_krest')
 					.html('<i class="fas fa-times"></i>');
					}
			else
					{
					//если нету класс клозед крест (значит есть опен крест считаем)
					krest.removeClass('opened_krest'); //уберем класс опенед
					krest.addClass('closed_krest'); //добавим класс клозед
					$('#spoiler-content11').slideUp('slow'); //спрячем описание
					$('div.closed_krest')
 					.html('<i class="fas fa-ellipsis-h"></i>');
					}
			})
	});


$(document).ready(function(){ 
	$('.spoiler-block--include--8').click(function(){ 
				let krest = $('#what_inc_krest12');
				if(krest.hasClass('closed_krest'))
					{
					//если есть класс клозед крест
					krest.removeClass('closed_krest'); //уберем класс клозед
					krest.addClass('opened_krest'); //добавим класс опенед
					$('#spoiler-content12').slideDown('slow'); //покажем описание
					$('div.opened_krest')
 					.html('<i class="fas fa-times"></i>');
					}
			else
					{
					//если нету класс клозед крест (значит есть опен крест считаем)
					krest.removeClass('opened_krest'); //уберем класс опенед
					krest.addClass('closed_krest'); //добавим класс клозед
					$('#spoiler-content12').slideUp('slow'); //спрячем описание
					$('div.closed_krest')
 					.html('<i class="fas fa-ellipsis-h"></i>');
					}
			})
	});


$(document).ready(function(){ 
	$('.spoiler-block--include--9').click(function(){ 
				let krest = $('#what_inc_krest13');
				if(krest.hasClass('closed_krest'))
					{
					//если есть класс клозед крест
					krest.removeClass('closed_krest'); //уберем класс клозед
					krest.addClass('opened_krest'); //добавим класс опенед
					$('#spoiler-content13').slideDown('slow'); //покажем описание
					$('div.opened_krest')
 					.html('<i class="fas fa-times"></i>');
					}
			else
					{
					//если нету класс клозед крест (значит есть опен крест считаем)
					krest.removeClass('opened_krest'); //уберем класс опенед
					krest.addClass('closed_krest'); //добавим класс клозед
					$('#spoiler-content13').slideUp('slow'); //спрячем описание
					$('div.closed_krest')
 					.html('<i class="fas fa-ellipsis-h"></i>');
					}
			})
	});