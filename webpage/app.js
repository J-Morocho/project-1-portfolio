
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
                url: entry.gsx$url.$t
             }
        })

        console.log(projects)
    })



function createProjectCard(project) {
    const $card = $('<div>').addClass('proj-card')
    const $proDivider = $('<div>').addClass('project-divider')
    const $projHeader = $('<div>').addClass('project-header')
    const $h3 = $('<h3>')
    const $projectName = $h3.addClass('project-name').append($('<p>').text(project.name))
    const $projectLinks = $h3.addClass('project-links')
    $('#projects-container-flex').append($card)
    console.log('card made')
}


function displayMenu() {
    $('.menu').attr('id', 'active')
    
}

$('.hamburger').on('click', displayMenu)
