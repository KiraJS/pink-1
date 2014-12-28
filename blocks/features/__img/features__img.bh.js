module.exports = function(bh) {
    bh.match('features__img', function(ctx) {
        ctx.content(
            {
                block: 'img',
                url: ctx.param('url')
            }
        );
    });
};
