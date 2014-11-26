module.exports = function(bh) {
    bh.match('intro', function(ctx) {
        ctx.tag('section');
        ctx.content([
            {
                block: 'container',
                content: [
                    {
                        block: 'title',
                        mods: { theme: 'white' },
                        tag: 'p',
                        content: 'Взгляните на жизнь иначе!'
                    },
                    {
                        block: 'link',
                        mix: { block: 'os', elem: 'donwload' },
                        url: 'http://itunes.apple.com',
                        content: 'Скачать приложение'
                    },
                    {
                        block: 'os',
                        content: [
                            [ 'ios', 'ms', 'android' ].map(function(os) {
                                return {
                                    elem: 'link',
                                    mods: { os: os }
                                };
                            }),
                            {
                                elem: 'text'
                            }
                        ]
                    }
                ]
        }]);
    });
};
