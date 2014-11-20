var $ = require( 'common:static/lib/jquery/jquery.js' ),
    backbone = require( 'travel:static/lib/backbone/backbone.js' );

console.log( 'travel: tip module' );

exports.init = function() {
    alert( 'called from travel: mod/tip' );
};
