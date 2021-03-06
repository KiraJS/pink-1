module.exports = function(bh) {
    bh.match('contact__email', function(ctx) {
        ctx.content([
            {
                block: 'contact',
                elem: 'title',
                content: 'Пишите:'
            },
            {
                block: 'link',
                cls: 'email',
                mix: {
                    block: 'contact',
                    elem: 'link'
                },
                url: 'mailto:hello@pinkapp.ru',
                content: 'hello@pinkapp.ru'
            }
        ]);
    });
};
