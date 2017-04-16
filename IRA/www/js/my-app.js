// Initialize your app
var myApp = new Framework7({

        material: true,
        
        pushState: true,

        onAjaxStart: function (xhr) {
            myApp.showIndicator();
        },

        onAjaxComplete: function (xhr) {
            myApp.hideIndicator();
        }

    });

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    // dynamicNavbar: true
    domCache: true,
});

/*
myApp.onPageInit('detail_location', function(e) {

    var mySwiper1 = myApp.swiper('.swiper-1', {
        pagination:'.swiper-1 .swiper-pagination',
        spaceBetween: 50
    });

});

*/

// Callbacks to run specific code for specific pages, for example for About page:
$$(document).on('pageInit', function (e) {
    //do anything here
});

$$(document).on('pageInit', '.page[data-page="detail_location"]', function() {
    //do anything here
    var mySwiper1 = myApp.swiper('.swiper-1', {
        pagination:'.swiper-1 .swiper-pagination',
        spaceBetween: 50
    });

});

$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    //do anything here
    var page = e.detail.page;

    /*
    var page = e.detail.page;

    var peopleName = ['1', '2', '3'];

    var count = peopleName.length;

    var listHTML = '<ul>';
    
    for(var i = 0; i < count; i++) {
        listHTML += '<li>'  +
                      '<label class="label-radio item-content">' +
                        '<input type="radio" name="my-radio" value="' + peopleName[i] +'">' +
                        '<div class="item-media">' +
                          '<i class="icon icon-form-radio"></i>' +
                        '</div>' +
                        '<div class="item-inner">' +
                          '<div class="item-title">' + peopleName[i] +'</div>' +
                        '</div>' +
                      '</label>' +
                    '</li>';
    }

    listHTML += '</ul>';

    $$(page.container).find('.list-block').append(listHTML);
    */

});





