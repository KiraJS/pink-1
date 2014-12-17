module.exports = function(bh) {
    bh.match('price-table', function(ctx) {
        ctx.mix( { block: 'clearfix' } );
        ctx.content( [
            {
                elem: 'section',
                content: {
                    elem: 'feature-name',
                    content: ['розовый фильтр', 'смайлики', ' комментарии'].map(function(name) {
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
                price: '1,99',
                features: [ 'yes', 'no', 'no' ]
            },
            {
                elem: 'section',
                mods: { hit: 'yes' },
                title: 'Стандарт',
                price: '3,99',
                features: [ 'yes', 'yes', 'no' ]
            },
            {
                elem: 'section',
                title: 'Анлим',
                price: '9,99',
                features: [ 'yes', 'yes', 'yes' ]
            }
        ]);
    });
};
