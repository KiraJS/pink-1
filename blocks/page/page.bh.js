module.exports = function(bh) {
    bh.match('page', function(ctx) {
        ctx.param('styles', [{
            block: 'page',
            elem: 'css',
            url: ctx.mod('type') + '.ap.css'
        },
        {
            block: 'page',
            elem: 'css',
            url: 'http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=latin,cyrillic'
        },
        ]);
        ctx.param('head', [
          ctx.param('head'),
          { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } }
        ], true);
    });
};
