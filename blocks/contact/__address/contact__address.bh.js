module.exports = function(bh) {
    bh.match('contact__address', function(ctx) {
        ctx.content([
            {
                block: 'contact',
                elem: 'title',
                content: 'Приезжайте в гости:'
            },
            {
                block: 'link',
                cls: 'address',
                mix: {
                    block: 'contact',
                    elem: 'link'
                },
                content: 'Санкт-Петербург, Невский проспект, д. 20'
            }
        ]);
    });
};
