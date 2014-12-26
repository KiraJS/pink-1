module.exports = function(bh) {
    bh.match('social', function(ctx) {
        ctx.content(
        ['twitter', 'facebook', 'youtube'].map(function(social) {
                return {
                    block: 'social',
                    elem: 'link',
                    mods: { social: social }
                };
            })
        );
    });
};
