module.exports = function(bh) {
    bh.match('page_type_index', function(ctx) {
        ctx.content([
            { block: 'header' },
            { block: 'intro' },
            { block: 'features' },
            { block: 'reviews' },
            { block: 'price' },
            { block: 'contact' }
        ]);
    });
};
