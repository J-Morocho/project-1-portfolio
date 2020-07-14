let $navIcon = $('.nav-icon-round')
$('.menu').hide()
$navIcon.on('click', () => {
    $('.menu').slideToggle('slow', function(){
        $('.menu-list').show()
    })

    $navIcon.css('background-color', 'red')
})
