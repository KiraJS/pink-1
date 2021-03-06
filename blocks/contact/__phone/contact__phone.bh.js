module.exports = function(bh) {
    bh.match('contact__phone', function(ctx) {
        ctx.content([
            {
                block: 'contact',
                elem: 'title',
                content: 'Звоните:'
            },
            {
                block: 'link',
                cls: 'tel',
                mix: {
                    block: 'contact',
                    elem: 'link'
                },
                url: 'tel:+78001000900',
                content: '8 (800) 1000 900'
            }
        ]);
    });
};
