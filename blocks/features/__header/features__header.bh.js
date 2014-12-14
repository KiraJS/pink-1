module.exports = function(bh) {
    bh.match('features__header', function(ctx) {
        ctx.tag('section');

        ctx.content({
            block: 'container',
            content: [
                {
                    block: 'title',
                    tag: 'p',
                    content: 'Устали от серости мегаполиса?'
                },
                {
                    block: 'title',
                    tag: 'p',
                    content: 'Нам есть, что вам предложить!'
                }
            ]
        });
    });
};
