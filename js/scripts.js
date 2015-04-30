$ ( document ).ready ( function () {
    boxesCarousel ();
    productsTab ();
    parallax ();
    brandsCarousel ();
    sideNav();
} );
//=================================
function boxesCarousel () {
    var ww = $ ( window ).width ();
    if ( ww <= 640 ) {
        $ ( '#boxes-inner .box' ).addClass ( "tiny" );
        $ ( '#boxes-inner' ).owlCarousel ( {
            loop : true,
            margin : 15,
            dots : false,
            nav : false,
            responsive : {
                0 : {
                    items : 1
                },
                480 : {
                    items : 2
                },
                1000 : {
                    items : 3
                }
            }
        } );
    }
}
//=================================
function productsTab () {
    $ ( 'ul.tabs' ).tabs ();
    var current = 4;
    //====================
    $ ( "#products" ).swipe ( {
        swipe : function ( event, direction, distance, duration, fingerCount, fingerData ) {
            if ( direction == "right" ) {
                current --;
                current = Math.max ( 1, current );
            } else if ( direction == "left" ) {
                current ++;
                current = Math.min ( 4, current );
            }
            $ ( "#products .tab:nth-child(" + current + ")" ).find ( "a" ).trigger ( "click" );
        },
        allowPageScroll:"vertical"
    } );
}
//=================================
function parallax () {
    $ ( '.parallax' ).parallax ();
}
//=================================
function brandsCarousel () {
    $ ( '.brands-carousel' ).owlCarousel ( {
        loop : false,
        margin : 30,
        autoHeight : true,
        responsiveClass : true,
        dots : false,
        nav : false,
        mouseDrag : false,
        responsive : {
            0 : {
                margin : 10,
                items : 3
            },
            480 : {
                margin : 10,
                items : 4
            },
            640 : {
                items : 5
            }
        }
    } );
    var owl = $ ( '.brands-carousel' );
    $ ( "#brands .nav-left" ).on ( "click", function () {
        owl.trigger ( 'prev.owl.carousel' );
    } );
    $ ( "#brands .nav-right" ).on ( "click", function () {
        owl.trigger ( 'next.owl.carousel' );
    } );
}
//=================================
function sideNav() {
    $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 240
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );
}