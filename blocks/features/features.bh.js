module.exports = function(bh) {
    bh.match('features', function(ctx) {
        ctx.tag('section');

        ctx.content([
            {
                block: 'container',
                content: [
                    {
                        block: 'features',
                        elem: 'header'
                    },
                    {
                        block: 'features',
                        elem: 'list'
                    }
                ]
            }
        ]);
    });
};
