module.exports = function(bh) {
    bh.match('copyright', function(ctx) {
        ctx.content(
            {
                tag: 'p',
                content: [
                    'Website by',
                    {
                        block: 'img',
                        mix: { block: 'copyright', elem: 'img' },
                        url: '/blocks/copyright/author.png'
                    },
                    'for',
                    {
                        block: 'img',
                        mix: { block: 'copyright', elem: 'img' },
                        url: '/blocks/copyright/academy.png'
                    }
                ]
            }
        );
    });
};
