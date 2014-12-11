module.exports = function(bh) {
    bh.match('contact', function() {
        return {
            block: 'footer',
            mix: { block: 'contact' },
            content: [
                {
                    block: 'container',
                    cls: 'vcard',
                    content: [
                        {
                            block: 'title',
                            mix: { block: 'contact', elem: 'header' },
                            content: 'Остались вопросы? Свяжитесь с нами!'
                        },
                        {
                            block: 'contact',
                            elem: 'phone'
                        },
                        {
                            block: 'contact',
                            elem: 'email'
                        },
                        {
                            block: 'contact',
                            elem: 'address'
                        }
                    ]
                },
                {
                    block: 'map'
                }
            ]
        };
    });
};
