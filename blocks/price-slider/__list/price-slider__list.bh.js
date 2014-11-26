module.exports = function(bh) {
    bh.match('price-slider__list', function(ctx) {
        ctx.tag('ul');
        ctx.content(
            [
                {
                    elem: 'item',
                    content: [
                        {
                            elem: 'header',
                            content: [
                                { elem: 'title', content: 'Базовый' },
                                {
                                    block: 'title',
                                    tag: 'p',
                                    mods: { theme: 'white' },
                                    content: '1,99'
                                }
                            ]
                        },
                        {
                            elem: 'features',
                            content: [
                                {
                                    elem: 'feature',
                                    mods: { included: 'yes' },
                                    content: 'Розовый фильтр'
                                },
                                {
                                    elem: 'feature',
                                    mods: { included: 'no' },
                                    content: 'Смайлики'
                                },
                                {
                                    elem: 'feature',
                                    mods: { included: 'no' },
                                    content: 'Комментарии'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'item',
                    content: [
                        {
                            elem: 'header',
                            content: [
                                { elem: 'title', content: 'Стандарт' },
                                {
                                    block: 'title',
                                    tag: 'p',
                                    mods: { theme: 'white' },
                                    content: '2,99'
                                }
                            ]
                        },
                        {
                            elem: 'features',
                            content: [
                                {
                                    elem: 'feature',
                                    mods: { included: 'yes' },
                                    content: 'Розовый фильтр'
                                },
                                {
                                    elem: 'feature',
                                    mods: { included: 'yes' },
                                    content: 'Смайлики'
                                },
                                {
                                    elem: 'feature',
                                    mods: { included: 'no' },
                                    content: 'Комментарии'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'item',
                    content: [
                        {
                            elem: 'header',
                            content: [
                                { elem: 'title', content: 'Премиум' },
                                {
                                    block: 'title',
                                    tag: 'p',
                                    mods: { theme: 'white' },
                                    content: '3,99'
                                }
                            ]
                        },
                        {
                            elem: 'features',
                            content: [
                                {
                                    elem: 'feature',
                                    mods: { included: 'yes' },
                                    content: 'Розовый фильтр'
                                },
                                {
                                    elem: 'feature',
                                    mods: { included: 'yes' },
                                    content: 'Смайлики'
                                },
                                {
                                    elem: 'feature',
                                    mods: { included: 'yes' },
                                    content: 'Комментарии'
                                }
                            ]
                        }
                    ]
                }
            ]
        );
    });
};
