const openMenuMobileBtn = document.querySelector('.bar-mobile');
const barMenuMobile = document.querySelector('.bar_menu-mobile');
const closeBarMenuMobile = document.querySelector('.close_bar-mobile');
const barContainer = document.querySelector('.bar_container');
const body = document.body;


openMenuMobileBtn.addEventListener('click', function(){
    barMenuMobile.classList.add('open_bar-mobile');
    body.classList.add('hidden_scroll');
});
closeBarMenuMobile.addEventListener('click', function()
{
   

    if(barMenuMobile.classList.contains('open_bar-mobile'))
    {
        barMenuMobile.classList.remove('open_bar-mobile');
    }
    
    if(body.classList.contains('hidden_scroll'))
    {
        body.classList.remove('hidden_scroll');
    }

});
barMenuMobile.addEventListener('click',function(){
    if(barMenuMobile.classList.contains('open_bar-mobile'))
    {
        barMenuMobile.classList.remove('open_bar-mobile');
    }
    if(body.classList.contains('hidden_scroll'))
    {
        body.classList.remove('hidden_scroll');
    }

    


})
barContainer.addEventListener('click', function(e){
     e.stopPropagation();
    
});

//  click icon sản phẩm moblie nav
document.querySelector('.menu_mobile-icon').addEventListener('click', function(e){
    document.querySelector('.menu_mobile_submenu').classList.toggle('open_bar-mobile');
    
});
// click 
