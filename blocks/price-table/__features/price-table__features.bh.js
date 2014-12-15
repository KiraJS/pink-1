module.exports = function(bh) {
    bh.match('price-table__features', function(ctx) {
        ctx.tag('ul');
    });
};
