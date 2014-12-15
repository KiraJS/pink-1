module.exports = function(bh) {
    bh.match('price-table__header', function(ctx) {
        ctx.tag('header');
    });
};
