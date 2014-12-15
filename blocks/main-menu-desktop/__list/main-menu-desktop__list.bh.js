module.exports = function(bh) {
    bh.match('main-menu-desktop__list', function(ctx) {
        ctx.tag('ul');
        ctx.content(
            [
                {
                    content: 'Информация',
                    url: '/info'
                },
                {
                    content: 'Возможности',
                    url:'/feature'
                },
                {
                    content: 'Отзывы',
                    url: '/review'
                },
                {
                    content: 'Стоимость',
                    url: '/cost'
                }
            ].map(function(link) {
                return {
                    elem: 'item',
                    content: {
                        elem: 'link',
                        content: link.content,
                        url: link.url
                    }
                };
            })
        );
    });
};
