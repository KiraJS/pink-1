module.exports = function(bh) {
    bh.match('features__list', function(ctx) {
        ctx.tag('ul');
        ctx.mix({ block: 'clearfix' });
        ctx.content([
            {
                elem: 'item',
                content: [
                    {
                        elem: 'img',
                        content:
                            {
                                block: 'img',
                                url: '/blocks/features/iphone1.png'
                            }
                    },
                    { elem: 'title', content: 'Поднимает настроение' },
                    {
                        elem: 'text',
                        content: 'Приложение позволит вам победить осеннюю хандру ' +
                        'и депрессию буквально в несколько кликов!'
                    }
                ]
            },
            {
                elem: 'item',
                content: [
                    {
                        elem: 'img',
                        content:
                            {
                                block: 'img',
                                url: '/blocks/features/iphone2.png'
                            }
                    },
                    { elem: 'title', content: 'Меняет мир вокруг' },
                    {
                        elem: 'text',
                        content: 'Сделайте снимок и украсьте его смайликом или текстовой подписью, чтобы усилить эффект'
                    }
                ]
            },
            {
                elem: 'item',
                content: [
                    {
                        elem: 'img',
                        content:
                            {
                                block: 'img',
                                url: '/blocks/features/iphone3.png'
                            }
                    },
                    { elem: 'title', content: 'Заводит новых друзей' },
                    {
                        elem: 'text',
                        content: 'Ставьте лайки, комментируйте, делитесь фотографиями с друзьями и заводите новых'
                    }
                ]
            }
        ]);
    });
};
