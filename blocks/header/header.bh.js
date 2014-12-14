module.exports = function(bh) {
    bh.match('header', function(ctx) {
        ctx.tag('header');

        ctx.content([
            {
                block: 'container',
                mix: { block: 'clearfix' },
                content: [
                    { block: 'logo', mods: { theme: 'white' } },
                    { block: 'main-menu' }
                ]
            }
        ]);
    });
};
