module.exports = function(bh) {
    bh.match('research', function(ctx) {
        ctx.tag('section');

        ctx.content({
            block: 'container',
            mix: { block: 'clearfix' },
            content: [
                {
                    block: 'research',
                    elem: 'img',
                    content: {
                        block: 'img',
                        url: '/blocks/research/clock.png'
                    }

                },
                {
                    block: 'research',
                    elem: 'description',
                    content: [
                        {
                            block: 'title',
                            mix: { block: 'research', elem: 'title' },
                            mods: { size: 's' },
                            content: 'Эффект <br> на 24 часа!'
                        },
                        {
                            block: 'research',
                            elem: 'text',
                            tag: 'p',
                            content: 'Британские ученые провели исследования и доказали, что положительный' +
                            ' эффект от использования приложения длится целые сутки!'
                        },
                        {
                            block: 'link',
                            mix: { block: 'research', elem: 'link' },
                            url: '#',
                            content: 'Узнать больше об исследовании'
                        }
                    ]
                }
            ]
        });
    });
};
