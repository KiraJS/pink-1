module.exports = function(bh) {
    bh.match('price-table__section', function(ctx) {
        ctx.tag('section');
        ctx.content([
            {
                elem: 'header',
                title: ctx.param('title'),
                price: ctx.param('price'),
            },
            {
                elem: 'features',
                features: ctx.param('features')
            }
        ]);
    });
};
