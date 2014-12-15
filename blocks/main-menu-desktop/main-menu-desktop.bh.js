module.exports = function(bh) {
    bh.match('main-menu-desktop', function(ctx) {
        ctx.content([
            {
                elem: 'list'
            }
        ]);
    });
};
