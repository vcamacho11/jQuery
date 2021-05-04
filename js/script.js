$(document).ready(function(){
    $('#show-me').click(function(){
        $('#new-buttons').addClass('show');
    });
    $('#get-started').click(function(){
        $('#blue-block').removeClass('bg-primary');
        $('#blue-content').removeClass('text-white');
    });
    setTimeout(function(){
        $('#shop-button').fadeIn(500);
    }, 3000);
    
    console.log('script loaded');
})