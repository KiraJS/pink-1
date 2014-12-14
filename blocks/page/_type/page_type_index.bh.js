module.exports = function(bh) {
    bh.match('page_type_index', function(ctx) {
        ctx.content([
            { block: 'header' },
            { block: 'intro' },
            { block: 'os' },
            { block: 'features', elem: 'header' },
            { block: 'features' },
            { block: 'research' },
            { block: 'reviews' },
            { block: 'price' },
            { block: 'contact' },
            { block: 'footer' }
        ]);
    });
};
