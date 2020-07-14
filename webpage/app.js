let $navIcon = $('.nav-icon-round')
$('.menu').hide()
$navIcon.on('click', () => {
    $('.menu').slideToggle('slow', function(){
        $('.menu-list').show()
    })

    $navIcon.css('background-color', 'red')
})

// when contact-form flex width is greater than 960px hide

