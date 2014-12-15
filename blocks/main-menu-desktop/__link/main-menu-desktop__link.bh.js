module.exports = function(bh) {
    bh.match('main-menu-desktop__link', function(ctx) {
        return {
            block: 'link',
            mix: {
                block: 'main-menu-desktop',
                elem: 'link',
                mods: ctx.mods(),
            },
            url: ctx.param('url'),
            content: ctx.content()
        };
    });
};
