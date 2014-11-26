module.exports = function(bh) {
    bh.match('price-slider__item', function(ctx) {
        ctx.tag('li');
    });
};
