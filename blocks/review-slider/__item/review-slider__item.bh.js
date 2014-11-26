module.exports = function(bh) {
    bh.match('review-slider__item', function(ctx) {
        ctx.tag('li');
    });
};
