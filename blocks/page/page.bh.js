module.exports = function(bh) {
    bh.match('page', function(ctx) {
        ctx.param('styles', {
            block: 'page',
            elem: 'css',
            url: ctx.mod('type') + '.css'
        });
    });
};
