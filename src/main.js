import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(HomePage),
        document.getElementById('main')
    );

    /*Animate Collapsible Logo+Menu Bar*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 130) {
            $('.menu_bar').css({
                top: '0'
            });
        }
        else {
            $('.menu_bar').css({
                top: '-70px'
            });
        }
    })

});
