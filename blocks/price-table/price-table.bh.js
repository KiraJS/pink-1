module.exports = function(bh) {
    bh.match('price-table', function(ctx) {
        ctx.mix( { block: 'clearfix' } );
        ctx.content( [
            {
                elem: 'section',
                content: {
                    elem: 'feature-name',
                    content: ['Розовый фильтр', 'Смайлики', 'Комментарии'].map(function(name) {
                        return {
                                elem: 'feature',
                                content: name
                            };
                    })
                }
            },
            {
                elem: 'section',
                title: 'База',
                price: '1,99 USD',
                features: [ [ 'Розовый фильтр', 'yes' ], [ 'Смайлики', 'no' ], [ 'Комментарии', 'no' ] ]
            },
            {
                elem: 'section',
                mods: { hit: 'yes' },
                title: 'Стандарт',
                price: '3,99 USD',
                features: [ [ 'Розовый фильтр', 'yes' ], [ 'Смайлики', 'yes' ], [ 'Комментарии', 'no' ] ]
            },
            {
                elem: 'section',
                title: 'Анлим',
                price: '9,99 USD',
                features: [ [ 'Розовый фильтр', 'yes' ], [ 'Смайлики', 'yes' ], [ 'Комментарии', 'yes' ] ]
            }
        ]);
    });
};
