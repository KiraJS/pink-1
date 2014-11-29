module.exports = function(bh) {
    bh.match('features__title', function(ctx) {
        return {
            block: 'title',
            mix: { block: 'features', elem: 'title' },
            mods: { size: 's' },
            content: ctx.content()
        };
    });
};
