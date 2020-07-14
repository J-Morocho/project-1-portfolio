
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
    })