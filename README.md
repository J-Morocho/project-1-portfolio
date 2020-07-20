# Project Overview

## Hosted Project  
https://project-1-portfolio.herokuapp.com/

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 2| Mobile core HTML and CSS | Complete
|Day 3| Desktop core HTML and CSS| Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete


## Project Description
This project is built to display my projects as well as show off what i have learned during the first two weeks at General Assembly. The website design follows a minimalist aesthetic with blue accent colors. It is sectioned off into About, Projects, and Contact pages. The project page will use CSS Grid specifically to create a "mosaic" of some projects/content i've worked on. The nav bar will be dynamic and will update as the user progresses through the page. This functionality will extend into the mobile and tablet versions as well. Tablet and mobile versions make use of a "hamburger" menu that will be placed in the lower right corner of the device to make user interaction easier.

Component Inspiration:

-[Contact Form](https://www.ventureharbour.com/wp-content/uploads/2017/04/Screen-Shot-2017-04-01-at-18.45.15.png?cld_params=dpr_2.0,f_auto,q_auto)  
-[Project Section](https://www.webfx.com/blog/images/assets/cdn.sixrevisions.com/0261-21_minimalist_portfolio_webdesign_inspiration_touch.jpg)  
-[Mobile Menu Bar](https://www.rezo-zero.com/fr/)   
-[Scroll Bar](https://www.stevenmengin.com/)  

Design/Aesthetic Inspiration:  
-[Simple White Boxes](https://www.webfx.com/blog/images/assets/cdn.sixrevisions.com/0261-02_minimalist_portfolio_webdesign_inspiration_elevenmade.jpg)  
-[CSS Grid](https://www.webfx.com/blog/images/assets/cdn.sixrevisions.com/0261-21_minimalist_portfolio_webdesign_inspiration_touch.jpg)  

## Google Sheet

-[Projects Sheet](https://docs.google.com/spreadsheets/d/1T9156QzG1d079lkMnl279c1ygoPHE6fsD6Apx0j7d6g/edit?usp=sharing)

## Wireframes

**Mobile**  

- [Mobile](https://res.cloudinary.com/jcloud3zf/image/upload/v1594579636/project1-portfolio/mobile-mockup_hv4sve.png)  
Components layed out in a column. Contact form is tight and takes up the whole screen. There is a blue bar at the bottom which moves to the right as the user scrolls down the screen. Projects page contains cards containing projects. When the card is clicked it will take the user to the repo where the project is hosted. There is a nav bar menu that turns blue once clicked. Upon being clicked a menu slides in from the right.  

**Tablet**  
- [Tablet](https://res.cloudinary.com/jcloud3zf/image/upload/v1594586117/project1-portfolio/tablet-mockup_o2hoju.png)  
Sections begin to breath a bit more by arranging themselves in columns. The scroll bar disappears and only the nav bar remains. The contact form is no longer takes up the entire screen. The text inputs inside begin to spread apart.   
   
**Desktop**
  
- [Desktop](https://res.cloudinary.com/jcloud3zf/image/upload/v1594576221/project1-portfolio/full-desktop1_wfbvvk.png)  The content is spaced out. The project section takes on a mosaic layout. The round nav bar icon present on mobile and tablet layout disappears. A progressive scroll bar takes it's place. 


## Time/Priority Matrix 

[View Matrix](https://res.cloudinary.com/jcloud3zf/image/upload/v1594594589/project1-portfolio/time-priority-matrix_yji7gp.png)  


**Mobile**  

- Use CSS grid on home/about section  
- On mobile there is a nav bar icon in the lower right hand corner of the device  
- Once clicked the icon becomes blue and a menu slides in from the right. It contains links to the page sections
- Next to the nav bar icon there is a bar that progresses from far left to the right edge of the device as the user scrolls down the page.  
- The contact page is tight and takes up the majority of the screen  
- The project section has cards that are arranged in a column. Projects are pulled in from a "database" and displayed.

**Tablet**  
- There is greater spacing in the home/about section. Images have shifted out from under any text and into the right side of the device  
- The scroll bar that was present on mobile is now gone. Instead the nav bar icon remains. Functionality remains the same.   
-The projects section is expanded and now includes extra content   
-Contact page is also expanded  

**Desktop**  

- About me section expands further. About text wraps to the left of any images.  
- A dynamic scroll bar is include. Corresponding text is highlighted once user reaches a section on the page.  
- Content in project section layed out as a "mosaic"   


### PostMVP 

- Responsive skills section  
- Experience section  
- Fade in effects

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Mobile/Tablet wireframe| 4hr | 6hr| 6hr|
| Desktop wireframe| 2hr| 3hr| 3 hr|  
| Mobile nav icon | M | 1hr | .70hr | .70hr|
| Mobile scroll bar progression | M | 3hr | 3hr | 3hr|
| Mobile nav slide in | H | 3hr | 5hr | 5hr|
| Adding contact form | H | 1.5hr| 1.76hr | 1.76hr |
| Styling google contact form| L | 1hr | .56hr| .56hr|
| Projects section CSS Grid layout | H | 4hr | 6hr | 6hr|
| Responsive projects section | H | 2hrs| 4hr | 4hr |
| Fixed nav bar on desktop | H | 1.5hr | .5hr | .5hr|
| Desktop scroll bar highlight | H | 3hr | 3hr | 3hr|
| Using API display projects | H | 4hr | 3hr | 3hr |
| Deploying web app| H | 3hr | 1hr | 1hr |
| Web app testing | H | 1.5hr | 3hr | 3hr |
| Total | - | 31.5hrs| 37.52hrs | 37.52hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Skills section flexbox | L | 2hr | -hr | -hr|
| Text highlight on hover | L | .5hr | -hr | -hr|
| Experience flex box| M | 3hr| -hr| -hr|
| Fade in sections | M | 2hr | -hr | -hr|
| Total | H | 7.5hrs| -hrs | -hrs |

## Additional Libraries 

jQuery


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```js
function increaseBarLength(){
    
    $('.bar').css('height', $(this).scrollTop()*.2 + 60)
  }
  
  $(window).scroll(increaseBarLength)

```
After struggling for hours on another function involving scrollTop() I was able to make use of it for an important component on my webpage.

## Issues and Resolutions
#### SAMPLE.....
**ERROR**: Uncaught Error: Syntax error, unrecognized expression [href=#project]
**RESOLUTION**: use template literal when trying to use the href attribute

