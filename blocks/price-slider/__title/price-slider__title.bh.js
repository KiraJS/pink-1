module.exports = function(bh) {
    bh.match('price-slider__title', function(ctx) {
        return {
            block: 'title',
            mix: { block: 'price-slider', elem: 'title' },
            mods: { size: 's', theme: 'white' },
            content: ctx.content()
        };
    });
};
