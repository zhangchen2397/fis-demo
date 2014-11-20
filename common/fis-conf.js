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
        test: {
            receiver: "http://samczhang.kf0309.3g.qq.com/zhangchen/receiver.php",
            to: "/home/zhangchen/www"
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

