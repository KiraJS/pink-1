module.exports = function(bh) {
    bh.match('main-menu__link', function(ctx) {
        return {
            block: 'link',
            mix: {
                block: 'main-menu',
                elem: 'link',
                mods: ctx.mods(),
            },
            url: ctx.param('url'),
            content: ctx.content()
        };
    });
};
