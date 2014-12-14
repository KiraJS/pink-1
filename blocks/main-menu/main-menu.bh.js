module.exports = function(bh) {
    bh.match('main-menu', function(ctx) {
        ctx.content(
            [{
                block: 'main-menu',
                elem: 'icon',
                tag: 'span'
            },
            {
                elem: 'list'
            }
            ]

        );
    });
};
