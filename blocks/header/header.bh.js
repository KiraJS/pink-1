module.exports = function(bh) {
    bh.match('header', function(ctx) {
        ctx.tag('header');

        ctx.content([
            { block: 'logo' },
            { block: 'main-menu' }
        ]);
    });
};
