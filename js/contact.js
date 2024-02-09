(function()
{
    $('#contact-form').validate();
    $('.contact-header-row').gmap3({
        marker:{
          address: "7143 Madiera Rd Mississauga ON L4T 3A7",
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