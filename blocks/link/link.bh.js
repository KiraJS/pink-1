module.exports = function(bh) {
    bh.match('link', function(ctx) {
        ctx.tag('a');
        ctx.attr('href', ctx.param('url'));
    });
};
