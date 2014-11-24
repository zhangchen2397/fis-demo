fis.config.merge( {
    namespace: 'travel',

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

    modules: {
        spriter: 'csssprites'
    },

    settings: {
        spriter: {
            csssprites: {
                margin: 30
            }
        }
    },

    roadmap: {
        domain: 'http://img1.qq.com:8080, http://img2.qq.com:8080'
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
