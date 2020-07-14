let $navIcon = $('.nav-icon-round')
$('.menu').hide()
$navIcon.on('click', () => {
    $('.menu').slideToggle('slow', function(){
        $('.menu-list').show()
    })
})

let $toggledIcon = $('.nav-active')
$toggledIcon.on('click', () => {
    $toggledIcon.removeClass('nav-active')
})
