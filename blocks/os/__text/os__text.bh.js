module.exports = function(bh) {
    bh.match('os__text', function(ctx) {
        ctx.tag('p'),
        ctx.content(
            'Доступно для iPhone, iPad, Android, Windows phone, Mac OS, Windows 8'
        );
    });
};
