module.exports = function(bh) {
    bh.match('img', function(ctx) {
        ctx.tag('img');
        ctx.attr('src', ctx.param('url'));
    });
};
