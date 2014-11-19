fis.config.merge( {
    namespace: 'travel',

    modules: {
        spriter: 'csssprites'
    },

    pack: {
        '/static/travel/test.js': [
            /a_require\.js/,
            /a_require_aysnc\.js/,
            /renderBox.js/
        ],
    },

    settings: {
        smarty: {
            left_delimiter: '{%',
            right_delimiter: '%}',
        },

        spriter: {
            csssprites: {
                margin: 30
            }
        }
    },

    roadmap: {
        ext: {
            less: 'css'
        }
    }
} );

fis.config.get( 'roadmap.path' ).unshift( {
    reg : /^\/widget\/(.*\.js)$/i,
    isMod : true,
    release : '/static/${namespace}/widget/$1'
}, {
    reg : /^\/static\/(.*\.js)$/i,
    isMod : true,
    release : '/static/${namespace}/mod/$1'
}, {
    reg : /^\/page\/(.*\.js)$/i,
    isMod : true,
    release : '/static/${namespace}/page/$1'
}, {
    reg: '**.css',
    useSprite: true
} );
