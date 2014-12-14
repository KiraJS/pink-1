module.exports = function(bh) {
    bh.match('footer', function(ctx) {
        ctx.tag('footer');
        ctx.content({
            block: 'container',
            cls: 'clearfix',
            content:[
                {
                    block: 'footer',
                    elem: 'column',
                    content: {
                        block: 'logo',
                        mods: { theme: 'black' }
                    }
                },
                ['social', 'copyright'].map(function(f) {
                    return {
                        block: 'footer',
                        elem: 'column',
                        content:
                            { block: f }

                    };
                })
            ]
        });
    });
};
