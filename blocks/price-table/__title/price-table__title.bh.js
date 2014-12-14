module.exports = function(bh) {
    bh.match('price-table__title', function(ctx) {
        return {
            block: 'title',
            mix: { block: 'price-table', elem: 'title' },
            mods: { size: 's', theme: 'white' },
            content: ctx.content()
        };
    });
};
