module.exports = function(bh) {
    bh.match('features__list', function(ctx) {
        ctx.tag('ul');

        ctx.content([
            {
                elem: 'item',
                content: [
                    { elem: 'title', content: 'Поднимает настроение' },
                    {
                        elem: 'text',
                        content: 'Приложение позволит вам победить осеннюю хандру ' +
                        'и депрессию буквлаьно в несколько кликов!'
                    }
                ]
            },
            {
                elem: 'item',
                content: [
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
