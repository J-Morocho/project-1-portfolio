
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
        let n = 0;
        projects.forEach(project => createProjectCard(project))
        projects.forEach(project => {
            placeOnGrid(n, project);
            n+=1;
        });
    });



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


// css grid stuff

function placeOnGrid(n, project) {
    // if n is odd append to grid0
    // if n is even append to grid1
    // Project image goes into larger square. 
    const $projectsContainerFlex = $('#projects-container-flex');
    const $projectDivider = $('<div>').addClass('project-divider');
    const $projHeader = $('<div>').addClass('project-header');
    const $projectName = $('<h3>').addClass('project-name').append($('<p>').text(project.title));
    const $projectLinks = $('<h3>').addClass('project-links').append([$('<a>').attr('href', project.url).text("Demo"), $('<a>').attr('href', project.code).text("Code")]);
    const $projectImage = $('<img>').attr('src', project.image).css('width', '100%');
    $projHeader.append([$projectName, $projectLinks]);

    // append projectDivider, projectHeader, projectImage to outer div used in grid
    // **testodd-t is a placeholder name will be changed later
    const $testoddi = $('<div>').addClass('testeven-t').text("hi")
    const $testeveni = $('<div>').addClass('testodd-i').text('BRUH')
    if (n%2 === 0) {
        let $divLargeBlock = $('<div>').addClass('testeven-i').append([$projectDivider, $projHeader, $projectImage]);
        const $grid0 = $('<div>').addClass("grid0").append([$divLargeBlock, $testoddi])
        $projectsContainerFlex.append($grid0)
        console.log('odd', n)
    } else {
        let $divLargeBlock = $('<div>').addClass('testingodd-i').text("hmm")
        const $grid1 = $('<div>').addClass("grid1").append($('<div>').addClass('teven-i').text('text'))
        $projectsContainerFlex.append($grid1)
    }

} 







// progressive scroll
// Many thanks to Suresh Sigera for helping me out with this portion of my code.
// grab all side-menu elements in the side-nav 
let lastId,
$sideMenu = $('.side-menu'),
$topMenuHeight = $sideMenu.outerHeight()+1, // height of the side menu

$menuItems = $sideMenu.find('a'), // find a tags of the list items. Array
// from the a tags do function on them
scrollItems = $menuItems.map(function(){
    let item = $($(this).attr('href')); // give the a tabs an href of blank for now
    if (item.length) { // if there is a scroll item then return it.
        return item;
    }
});

// bind click handler to menu items
$menuItems.click(function(e){
    let href = $(this).attr("href")
    
    let offsetTop = href === "#" ? 0 : $(this).offset().top - $topMenuHeight+1; 
    $('html, body').stop().animate({
        scrollTop: offsetTop,
    }, 850);
    e.preventDefault();
});

// on scroll set distance from top to 
// be the height of the bar + height of the menu
// ERROR IS HERE...
$(window).scroll(function(){
    // Get container scroll position
    let fromTop = $(this).scrollTop()+$topMenuHeight;

    // Get id of current scroll item
    let cur = scrollItems.map( function(){
      if ($(this).offset().top < fromTop) {
        return this;
      }
    });

    // Get the id of the current element
    cur = cur[cur.length-1];
    let id = cur && cur.length ? cur[0].id : "";
    
    if (lastId !== id) {
        
        lastId = id;
        // Set/remove active class
        $menuItems
          .parent().removeClass("nav-active")
          .end().filter(`[href="#${id}"]`).parent().addClass("nav-active");
    }                   
 });

 function increaseBarLength(){
    
    $('.bar').css('height', $(this).scrollTop()*.2)
  }
  
  $(window).scroll(increaseBarLength)

