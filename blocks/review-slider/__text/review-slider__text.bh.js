module.exports = function(bh) {
    bh.match('review-slider__text', function(ctx) {
        ctx.tag('p');
    });
};
