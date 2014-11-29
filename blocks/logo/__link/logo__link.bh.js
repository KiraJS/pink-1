module.exports = function(bh) {
    bh.match('logo__link', function() {
        return (
            {
                block: 'link',
                mix: { block: 'logo', elem: 'link' },
                content: 'Pink',
                url: '/'
            }
        );
    });
};
