module.exports = function(bh) {
    bh.match('os', function(ctx) {
        ctx.tag('section');
        ctx.content(
            [
                { elem: 'download' },
                [ 'ios', 'android', 'ms' ].map(function(os) {
                    return {
                        elem: 'link',
                        mods: { os: os }
                    };
                }),
                {
                    elem: 'text'
                }
            ]
        );
    });
};
