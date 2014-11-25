module.exports = function(bh) {
    bh.match('price', function(ctx) {
        ctx.tag('section');
    });
};
