fis.config.merge( {
    namespace: 'common',

    pack: {
        '/static/pkg/common.css': [
            /.*\.(css|less)$/i
        ],

        '/static/pkg/common.js': [
            /^\/static\/(lib|mod)\/.*\.js/i,
            /^\/widget\/.*\.js/i,
            /^\/page\/.*\.js/i
        ]
    },

    deploy: {
        rd: {
            receiver: "http://rd.fis.com/receiver.php",
            to: "/home/work/www"
        },
        qa: {
            receiver: "http://qa.fis.com/receiver.php",
            to: "/home/word/www"
        }
    }
} );

fis.config.get( 'roadmap.path' ).unshift(
    {
        reg: /^\/widget\/(.*\.(js|css))$/i,
        isMod: true,
        useSprite: true,
        release : '/static/${namespace}/widget/$1'
    },
    {
        reg: /^\/static\/(lib|mod)\/(.*\.(js|css))$/i,
        isMod: true,
        useSprite: true,
        release: '/static/${namespace}/$1/$2'
    },
    {
        reg: /^\/page\/(.*\.(js|css))$/i,
        isMod: true,
        useSprite: true,
        release: '/static/${namespace}/page/$1'
    }
);

