module.exports = function(bh) {
    bh.match('features__text', function(ctx) {
        ctx.tag('p');
    });
};
