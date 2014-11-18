var $ = require( 'common:static/lib/jquery/jquery.js' ),
    slide = require( 'common:static/mod/slide/slide.js' );

console.log( 'travel: page -> index' );

$( '#call-commod-btn' ).on( 'click', function() {
    slide.init();
    //slide.add();
} );
