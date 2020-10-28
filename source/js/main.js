    $('.hero__slider').owlCarousel({
    margin:60,
    nav:false,
    dots:true,
    responsive:{
        300:{
            items:1
        }
    }
    });

    $('.special-offer--slider').owlCarousel({
    margin:60,
    nav:true,
    responsive:{
        300:{
            items:1
        },
        769:{
            items:2
        }
    }
    });

    $('.feedback__slider').owlCarousel({
    center:true,
    margin:60,
    nav:false,
    responsive:{
        300:{
            items:1
        }
    }
    });

$(document).ready(function() {
    $('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    loop:true,
    slideMargin: 50,
    thumbItem: 9
    }); 
  });

  $(document).ready(function(){
    $(".header__search").click(function () {
            $(".header__menu").css("display", "none");
            $(".header__search-input").show("slow");
        })
            
            $(".header__search-input-close").click(function () {
            $(".header__search-input").css("display", "none");
            $(".header__menu").slideDown("fast");
        })

});

$( function() {
    $( "#datepicker" ).datepicker();
  } );

  $( function() {
    $( "#datepicker2" ).datepicker();
  } );


$(document).ready(function(){
    $(".openokno").click(function(){
    $(".blockcentr").slideToggle("2000");
    if($("div").hasClass("blockall"))
    $(".blockall").remove();
    else
    $(".tytoknoall").append('<div class="blockall"></div>');
    });
    $(".tytoknoall").click(function(){
    $(".blockcentr").slideToggle("2000");
    $(".blockall").remove();
    });    });