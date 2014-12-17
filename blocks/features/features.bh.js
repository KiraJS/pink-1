module.exports = function(bh) {
    bh.match('features', function(ctx) {
        ctx.tag('section');

        ctx.content([
            {
                block: 'container',
                mix: { block: 'clearfix' },
                content: [
                    {
                        block: 'features',
                        elem: 'list'
                    },
                    {
                        block: 'features',
                        elem: 'img',
                        mods: { type: 'mobile' },
                        content:
                            {
                                block: 'img',
                                url: '/blocks/features/iphone.png'
                            }
                    }

                ]
            }
        ]);
    });
};
