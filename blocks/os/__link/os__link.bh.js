module.exports = function(bh) {
    bh.match('os__link', function(ctx) {
        return {
            block: 'link',
            mix: {
                block: 'os',
                elem: 'link',
                mods: ctx.mods(),
            },
            url: ctx.param('url')
        };
    });
};
