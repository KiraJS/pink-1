module.exports = function(bh) {
    bh.match('intro', function(ctx) {
        ctx.tag('section');
        ctx.content([
            {
                block: 'header'
            },
            {
                block: 'container',
                content: [
                    {
                        block: 'title',
                        mods: { theme: 'white' },
                        tag: 'p',
                        content: 'Взгляните на жизнь иначе!'
                    }
                ]
            }
        ]);
    });
};
