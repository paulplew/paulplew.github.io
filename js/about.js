import navigation from "./navigation.js";

(function($) {


    $('#main').append(`
      ${navigation()}
    `);

    $('.nav-about').addClass('selected');
})($);