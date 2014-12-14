module.exports = function(bh) {
    bh.match('reviews', function(ctx) {
        ctx.tag('section');
        ctx.content({
            block: 'container',
            content: { block: 'review-slider' }
        });
    });
};
