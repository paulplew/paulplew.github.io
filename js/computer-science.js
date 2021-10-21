import navigation from "./navigation.js";

(function($) {
    $('#main').append(`${navigation()}`);
    $('.nav-computer-science').addClass('selected');
})($);