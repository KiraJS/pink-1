module.exports = function(bh) {
    bh.match('os', function(ctx) {
        ctx.tag('section');

        ctx.content([
            {
                block: 'container',
                content: [
                    {
                        block: 'os',
                        elem: 'download'
                    },
                    [ 'ios', 'android', 'ms' ].map(function(os) {
                        return {
                            block: 'os',
                            elem: 'link',
                            mods: { os: os }
                        };
                    }),
                    {
                        block: 'os',
                        elem: 'text'
                    }
                ]
            }
        ]);
    });
};
