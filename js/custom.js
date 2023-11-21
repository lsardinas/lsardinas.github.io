(function() {
    
    $('#home-slider').bxSlider({        
        mode: 'fade',
        auto: true,
        pager:false,
        pause: 8000,
        speed: 1000        
    });
    
    $('#work-slider').bxSlider({
        mode: 'fade',
        auto: true,
        pager:true,
        pause: 8000,
        speed: 1000
    });

    $('.card').hover(
        function(){
            $this = $(this);                    
            $this.find('.card-image').addClass('hovered');
        },
        function() { 
            $this = $(this);                    
            $this.find('.card-image').removeClass('hovered');
        }
    );
        
    window.sr = ScrollReveal({easing: 'linear', mobile:false, vFactor: 0.10});
    if(sr.isSupported())
    {
        sr.reveal('.animated');
    }
})()