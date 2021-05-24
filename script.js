$(function() {
    let images = [
        $hrefImg1 = $('a#red').attr('href'),
        $hrefImg2 = $('a#green').attr('href'),
        $hrefImg3 = $('a#blue').attr('href')
    ];

    // array that holds buttons
    let buttons = [ $('#red'), $('#green'), $('#blue')];
    
    // control value to make the sliding cyclic
    let index = 0;      

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
        $('.active').removeClass('active');
        console.log('removing...');
        if (index < 3) {
            console.log('automaticSliding called...');
            $tempSlideImg = '<img id="tempSlider" src="./images/' + images[index] + '.png" />';
            $('div#slider').append($tempSlideImg);
            buttons[index].addClass('active');
            index += 1;
        } else {
            index = 0;
        }
    }
    timer();
});