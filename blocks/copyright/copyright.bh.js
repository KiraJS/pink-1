module.exports = function(bh) {
    bh.match('copyright', function(ctx) {
        ctx.content(
            {
                tag: 'p',
                content: 'Website by <img class="copyright__img" src="/blocks/copyright/author.png">' +
                ' for <img class="copyright__img" src="/blocks/copyright/academy.png">'
            }
        );
    });
};
