(function()
{
    $('#contact-form').validate();
    $('.contact-header-row').gmap3({
        marker:{
          address: "46 Caronia Square Toronto ON M1B 2Z8",
          data: "Plick Candoo - Home Renovation"            
        },
        map:{
          options:{
              scrollwheel: false,
            zoom: 14
          }
        }
    });
})()