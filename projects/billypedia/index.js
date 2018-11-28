/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-bio').css('color', 'gray');
        $('#section-quotes');
        // uncomment this to inspect all available data; delete when done //

        // EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        $('#image-billy').click(function(){
            $('#image-billy').hide();
        });
        $('#header-top-rated').click(function(){
            $('#image-billy').show();
        });
        // YOUR CODE ABOVE HERE //
   })
    .fail(function() { console.log('getJSON on discography failed!'); });
});
