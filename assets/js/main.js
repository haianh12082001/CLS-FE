$(document).ready(function () {
    $(".articles-hot").slick({
        arrows: false,
		dots: true,
		infinite: true,
		speed: 300,
        cssEase: "linear",
        centerMode: !0,
        centerPadding: "370px",
        slidesToShow: 1,
      });

    $(".fag-item .name").click(function(){
        $(this).toggleClass("active");
        $(this).siblings('.collapse').toggleClass("show")
    });

    $('#eye').click(function(){
        if($(this).hasClass('fa-eye-slash')){
            $(this).removeClass('fa-eye-slash');
          
            $(this).addClass('fa-eye');
          
            $('#password').attr('type','text');
        }else{
            $(this).removeClass('fa-eye');
          
            $(this).addClass('fa-eye-slash');  
            
            $('#password').attr('type','password');
        }
        
    })

    
})