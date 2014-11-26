module.exports = function(bh) {
    bh.match('review-slider__title', function(ctx) {
        return {
            block: 'title',
            mix: { block: 'review-slider', elem: 'title' },
            mods: { size: 's' },
            content: ctx.content()
        };
    });
};
