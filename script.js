$(function() {
    let images = [
        $hrefImg1 = $('a#red').attr('href'),
        $hrefImg2 = $('a#green').attr('href'),
        $hrefImg3 = $('a#blue').attr('href')
    ];

    let index = 0;      // control value to make the sliding cyclic

    // the interval goes on infinitely and calls automaticSliding()
    function timer() {
        setInterval(function() {

            if ($('#tempSlider')) {
                $('#tempSlider').remove();
            }

            console.log('tic toc...');
            automaticSliding(index);               // uncomment to make timer start again
        }, 1000);
    }

    // changes the image shown
    function automaticSliding() {
        if (index < 3) {
            console.log('automaticSliding called...');
            $tempSlideImg = '<img id="tempSlider" src="./images/' + images[index] + '.png" />';
            $('div#slider').append($tempSlideImg);
            index += 1;
        } else {
            index = 0;
        }
    }
    timer();
});