module.exports = function(bh) {
    bh.match('price-table__header', function(ctx) {
        ctx.tag('header');
        ctx.content([
            {
                elem: 'title',
                content: ctx.param('title')
            },
            {
                block: 'title',
                tag: 'p',
                mods: { theme: 'white' },
                content: ctx.param('price')
            }
        ]);
    });
};
