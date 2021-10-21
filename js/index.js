import navigation from "./navigation.js";

(function($) {


    $('#main').append(`
      ${navigation()}
    `);

    $('.nav-home').addClass('selected');
})($);