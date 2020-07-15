
// when contact-form flex width is greater than 960px hide
// my projects sheet
//https://docs.google.com/spreadsheets/d/1T9156QzG1d079lkMnl279c1ygoPHE6fsD6Apx0j7d6g/edit#gid=0
//url to fetch from https://spreadsheets.google.com/feeds/list/1T9156QzG1d079lkMnl279c1ygoPHE6fsD6Apx0j7d6g/od6/public/values?alt=json
const url = "https://spreadsheets.google.com/feeds/list/1T9156QzG1d079lkMnl279c1ygoPHE6fsD6Apx0j7d6g/od6/public/values?alt=json"
fetch(url)
    .then(response => response.json())
    .then(data => {
        const projects = data.feed.entry.map( entry => {
            return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t,
                code: entry.gsx$code.$t,
             }
        })
        projects.forEach(project => createProjectCard(project))
    })



function createProjectCard(project) {
    const $card = $('<div>').addClass('proj-card')
    const $projectDivider = $('<div>').addClass('project-divider')
    const $projHeader = $('<div>').addClass('project-header')
    const $projectName = $('<h3>').addClass('project-name').append($('<p>').text(project.title))
    const $projectLinks = $('<h3>').addClass('project-links').append([$('<a>').attr('href', project.url).text("Demo"), $('<a>').attr('href', project.code).text("Code")])
    const $projectImage = $('<div>').attr('class', 'project-image').append( $('<img id="prj-img">').attr('src', project.image))
    $projHeader.append([$projectName, $projectLinks])

    $('#projects-container-flex').append($card.append([$projectDivider, $projHeader, $projectImage]))
}


function displayMenu() {
    $('.menu').toggleClass('active')
    $('.hamburger').toggleClass('active')
    $('.nav-dot').toggleClass('dot-active')
    
}

$('.hamburger').on('click', displayMenu)


// progressive scroll

// grab all side-menu elements in the side-nav 
let lastId,
$sideMenu = $('.side-menu')
$topMenuHeight = $sideMenu.outerHeight()+1 // height of the side menu
console.log($topMenuHeight)

// get the list items
$menuItems = $sideMenu.find('a') // find a tags of the list items. Array
// from the a tags do function on them
scrollItems = $menuItems.map(function(){
    let item = $($(this).attr('href')); // give the a tabs an href of blank for now
    console.log(item)
});
