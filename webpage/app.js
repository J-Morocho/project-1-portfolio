let $navIcon = $('.nav-icon-round')
$navIcon.on('click' , () => {
    $navIcon.attr('class', 'nav-active')
})

let $toggledIcon = $('.nav-active')
$toggledIcon.on('click', () => {
    $toggledIcon.removeClass('nav-active')
})