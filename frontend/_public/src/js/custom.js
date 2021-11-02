/* JS für die Alternative Lieferadresse */
$('#Lieferadresse-weicht-ab').change(function(){
    if($(this).is(":checked")) {
        $('#jf-lieferadresse-form').addClass('d-block');
    } else {
        $('#jf-lieferadresse-form').removeClass('d-block');
    }
});


/* Rezept anzeigen und ausblenden */
$('.show-rezept').click(function() {
    $(this).text(function(i, text){
        return text === "Rezept anzeigen" ? "Rezept ausblenden" : "Rezept anzeigen";
    })
});






$('a[href^=#]').on('click', function(e){
    var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop:$(href).offset().top
    },'slow');
    e.preventDefault();
});
