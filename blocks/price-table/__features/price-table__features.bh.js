module.exports = function(bh) {
    bh.match('price-table__features', function(ctx) {
        ctx.tag('ul');
        ctx.content(
            ctx.param('features').map(function(f) {
                return {
                    block: 'price-table',
                    elem: 'feature',
                    mods: { included: f }
                };
            })
        );
    });
};
