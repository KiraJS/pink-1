module.exports = function(bh) {
    bh.match('footer', function(ctx) {
        ctx.tag('footer');
    });
};
