var $ = require( 'common:static/lib/jquery/jquery.js' );

console.log( 'travel: widget -> news' );

$( '#news-view-btn' ).on( 'click', function() {
    alert( 'called from travel: widget/news' );
} );
