fis.config.merge( {
    namespace: 'travel',

    modules: {
        spriter: 'csssprites'
    },

    pack: {
        '/static/pkg/travel.css': [
            /^\/widget\/.*\.(css|less)/i,
            /^\/static\/.*\.(css|less)/i,
        ],

        '/static/pkg/travel.js': [
            /^\/static\/(lib|mod)\/.*\.js/i,
            /^\/widget\/.*\.js/i
        ]
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
    }
} );

fis.config.get( 'roadmap.path' ).unshift(
    {
        reg: /^\/widget\/(.*\.(js|css))$/i,
        isMod: true,
        useSprite: true,
        release: '/static/${namespace}/widget/$1'
    },
    {
        reg: /^\/static\/(.*\.(js|css))$/i,
        isMod: true,
        useSprite: true,
        release: '/static/${namespace}/$1'
    },
    {
        reg: /^\/page\/(.*\.(js|css))$/i,
        isMod: true,
        release: '/static/${namespace}/page/$1'
    }
);
