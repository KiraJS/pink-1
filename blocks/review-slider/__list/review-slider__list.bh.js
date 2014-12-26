module.exports = function(bh) {
    bh.match('review-slider__list', function(ctx) {
        ctx.tag('ul');
        ctx.content([
            {
                elem: 'item',
                content: [
                    {
                        elem: 'title',
                        content: 'Николай Петров'

                    },
                    {
                        elem: 'text',
                        content: '25 лет, водитель трамвая'
                    },
                    {
                        elem: 'text',
                        content: '«Это приложение перевернуло мой мир и ' +
                        'позволило по-новому взглянуть на привчные сервые вещи! ' +
                        'А еще я познакомился со своей будущей женой в комментариях к выложенной фотографии!»'
                    }
                ]
            },
            // {
            //     elem: 'item',
            //     content: [
            //         {
            //             elem: 'title',
            //             content: 'Иван Иванов'
            //         },
            //         {
            //             elem: 'text',
            //             content: 'Review'
            //         }
            //     ]
            // }
        ]);
    });
};
