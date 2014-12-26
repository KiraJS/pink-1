module.exports = function(bh) {
    bh.match('price-table__feature', function(ctx) {
        ctx.tag('li');
    });
};
