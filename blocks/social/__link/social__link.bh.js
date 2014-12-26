module.exports = function(bh) {
    bh.match('social__link', function(ctx) {
        return {
            block: 'link',
            mix: {
                block: 'social',
                elem: 'link',
                mods: ctx.mods(),
            },
            url: ctx.param('url')
        };
    });
};
