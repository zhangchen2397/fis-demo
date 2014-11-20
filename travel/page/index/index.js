var $ = require( 'common:static/lib/jquery/jquery.js' ),
    slide = require( 'common:static/mod/slide/slide.js' ),
    tip = require( 'travel:static/mod/tip/tip.js' );

console.log( 'travel: page -> index' );

$( '#call-commod-btn' ).on( 'click', function() {
    slide.init();
} );

$( '#call-curmod-btn' ).on( 'click', function() {
    tip.init();
} );
