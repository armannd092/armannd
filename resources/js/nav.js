//$('.navbar>li>a').on('click', function() { $('.navbar-collapse').collapse('hide'); })
$('ul.nav li.active').hover(function(){
    $('div.collapse').toggleClass(' show')
});