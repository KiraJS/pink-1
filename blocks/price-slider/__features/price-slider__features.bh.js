module.exports = function(bh) {
    bh.match('price-slider__features', function(ctx) {
        ctx.tag('ul');
        ctx.content(
            [
                {
                    elem: 'feature',
                    mods: { included: 'yes' },
                    content: 'Розовый фильтр'
                }
            ]
        );
    });
};
