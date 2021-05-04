$(document).ready(function(){
    $('#show-me').click(function(){
        $('#new-buttons').addClass('show');
    });
    $('#get-started').click(function(){
        $('#blue-block').removeClass('bg-primary');
        $('#blue-content').removeClass('text-white');
    })
    console.log('script loaded');
})