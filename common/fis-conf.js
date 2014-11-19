fis.config.merge( {
    namespace: 'common',
    deploy: {
        test: {
            receiver: "http://samczhang.kf0309.3g.qq.com/zhangchen/receiver.php",
            to: "/home/zhangchen/www"
        }
    }
} );

fis.config.get( 'roadmap.path' ).unshift( {
    reg : /^\/widget\/(.*\.js)$/i,
    isMod : true,
    release : '/static/${namespace}/widget/$1'
}, {
    reg : /^\/static\/(lib|mod)\/(.*\.js)$/i,
    isMod : true,
    release : '/static/${namespace}/$1/$2'
}, {
    reg : /^\/page\/(.*\.js)$/i,
    isMod : true,
    useSprite: true,
    release : '/static/${namespace}/page/$1'
} );

