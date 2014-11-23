module.exports = function(bh) {
    bh.match('intro', function(ctx) {
        ctx.tag('section');
    });
};
