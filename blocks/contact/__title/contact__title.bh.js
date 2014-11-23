module.exports = function(bh) {
    bh.match('contact__title', function(ctx) {
        return {
            block: 'title',
            mods: { size: 's' },
            mix: { block: 'contact', elem: 'title' },
            content: ctx.content()
        };
    });
};
