module.exports = function(bh) {
    bh.match('review-slider', function(ctx) {
        ctx.content(
            { elem: 'list' }
        );
    });
};
