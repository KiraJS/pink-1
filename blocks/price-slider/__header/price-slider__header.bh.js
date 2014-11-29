module.exports = function(bh) {
    bh.match('price-slider__header', function(ctx) {
        ctx.tag('header');
    });
};
