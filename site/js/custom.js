

///parallax effect on bg
const main_banners = document.querySelectorAll(".parallax-banner");
var banners_offsets = [];
var banners_rates = [];

if(main_banners.length){ 
  main_banners.forEach((banner,index) => {
    banners_offsets.push(0);
    banners_rates.push(0.5);
    bannerPosition = banner.getBoundingClientRect().top+scrollTop
    if(banner.dataset.offset) banners_offsets[index] = parseInt(banner.dataset.offset);
    if(banner.dataset.rate) banners_rates[index] = parseFloat(banner.dataset.rate);
    if ($( window ).width() > 991.98) banner.style.backgroundPosition="0px " + (-1*(banners_offsets[index]))+"px";
    else  banner.style.backgroundPosition="0px 0px";
  });
}

$('body').scroll(function(e){
    //  add fixed header when scroll
    var scrollTop = $('body').scrollTop();
    if(scrollTop > 180){
        $('.top-bottom').addClass('fixed-top');
    } else {
        $('.top-bottom').removeClass('fixed-top');
    }

    scrollBanner();
});



$(window).resize(function(e){
    scrollBanner();
    hasReset = false;
});

  var hasReset = false;
  var scrollTop = 0;
  function scrollBanner(){
    if(hasReset && window.innerWidth < 991.98) return
    scrollTop = $('body').scrollTop();
    
    if(main_banners.length  ){
        main_banners.forEach((banner,index) => {
            bannerPosition = banner.getBoundingClientRect().top+scrollTop;
            if (window.innerWidth > 991.98)  banner.style.backgroundPosition="0px " + (scrollTop*banners_rates[index]-(banners_offsets[index]))+"px";
            else  {
                banner.style.backgroundPosition="0px 0px";    
                hasReset = true;
            }    
        });
    }
  }
