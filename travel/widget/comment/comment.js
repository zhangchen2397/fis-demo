var $ = require( 'common:static/lib/jquery/jquery.js' );

console.log( 'travel: widget -> comment' );

$( '#cmt-view-btn' ).on( 'click', function() {
    alert( 'called from trvar:widget/comment' );
} );