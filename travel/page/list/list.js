var $ = require( 'common:static/lib/jquery/jquery.js' );

console.log( 'travel: page -> list' );

$( '#ajax-btn' ).on( 'click', function() {
    $.get( '/ajax/list/php', function( data ) {
        var data = JSON.parse( data );
        alert( '本地模拟接口数据 ' + data.data.cid );
    } );
} );

