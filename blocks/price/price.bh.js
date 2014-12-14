module.exports = function(bh) {
    bh.match('price', function(ctx) {
        ctx.tag('section');
        ctx.content(
            [
                {
                    block: 'container',
                    content: {
                        block: 'price-table'
                    }
                }

            ]
        );
    });
};
