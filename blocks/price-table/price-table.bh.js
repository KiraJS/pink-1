module.exports = function(bh) {
    bh.match('price-table', function(ctx) {
        ctx.mix( { block: 'clearfix' } );
        ctx.content( [
            {
                elem: 'section',
                content: {
                    elem: 'features',
                    content: ['Розовый фильтр', 'Смайлики', 'Комментарии'].map(function(name) {
                        return {
                            block: 'price-table',
                            elem: 'feature',
                            content: name
                        };
                    })
                }
            },
            [['База', '1,99 USD', ['yes', 'no', 'no'] ],
            [ 'Стандарт', '3,99 USD', ['yes', 'yes', 'no'], 'hit' ],
            [ 'Анлим', '9,99 USD', ['yes', 'yes', 'yes'] ]].map(function(price) {
                return {
                    elem: 'section',
                    content: [
                        {
                            elem: 'header',
                            mix: { block: price[3] },
                            content: [
                                { elem: 'title', content: price[0] },
                                {
                                    block: 'title',
                                    tag: 'p',
                                    mods: { theme: 'white' },
                                    content: price[1]
                                }
                            ]
                        },
                        {
                            elem: 'features',
                            content: [
                                price[2].map(function(included) {
                                    return {
                                        block: 'price-table',
                                        elem: 'feature',
                                        mods: { included: included }
                                    };
                                })
                            ]
                        }
                    ]
                };
            })
        ]);
    });
};
