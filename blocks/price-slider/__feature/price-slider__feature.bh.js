module.exports = function(bh) {
    bh.match('price-slider__feature', function(ctx) {
        ctx.tag('li');
    });
};
