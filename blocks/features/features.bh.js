module.exports = function(bh) {
    bh.match('features', function(ctx) {
        ctx.tag('section');
    });
};
