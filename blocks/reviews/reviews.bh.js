module.exports = function(bh) {
    bh.match('reviews', function(ctx) {
        ctx.tag('section');
    });
};
