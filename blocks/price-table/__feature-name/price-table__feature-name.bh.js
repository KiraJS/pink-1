module.exports = function(bh) {
    bh.match('price-table__feature-name', function(ctx) {
        ctx.tag('ul');
    });
};
