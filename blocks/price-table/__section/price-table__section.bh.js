module.exports = function(bh) {
    bh.match('price-table__section', function(ctx) {
        ctx.tag('section');
    });
};
