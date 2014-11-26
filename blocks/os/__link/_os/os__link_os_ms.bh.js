module.exports = function(bh) {
  bh.match('os__link_os_ms', function(ctx) {
        ctx.param('url', 'http://microsoft.com');
    });
};
