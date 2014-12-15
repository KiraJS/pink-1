module.exports = function(bh) {
    bh.match('contact', function(ctx) {
        ctx.tag('section');
        ctx.content(
            [{
                block: 'container',
                cls: 'vcard',
                mix: { block: 'clearfix' },
                content: [
                    {
                        block: 'title',
                        mix: { block: 'contact', elem: 'header' },
                        content: 'Остались вопросы? <br> Свяжитесь с нами!'
                    },
                    {
                        block: 'contact',
                        elem: 'phone'
                    },
                    {
                        block: 'contact',
                        elem: 'email'
                    },
                    {
                        block: 'contact',
                        elem: 'address'
                    }
                ]
            },
            {
                block: 'map'
            }]
        );
    });
};
