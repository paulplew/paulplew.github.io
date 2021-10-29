import navigation from "./navigation.js";

(function($) {
    $('#main').append(`${navigation()}`);
    $('.nav-design').addClass('selected');
})($);