module.exports = function(bh) {
    bh.match('title', function(ctx) {
        ctx.tag('h3');
    });
};
