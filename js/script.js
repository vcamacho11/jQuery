$(document).ready(function(){
    $('#show-me').click(function(){
        $('#new-buttons').addClass('show');
    });
    $('#get-started').click(function(){
        $('#blue-block').removeClass('bg-primary');
        $('#blue-content').removeClass('text-white');
    });
    $('#shop-button').fadeIn(500)
    console.log('script loaded');
})