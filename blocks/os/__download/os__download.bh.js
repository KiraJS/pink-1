module.exports = function(bh) {
    bh.match('os__download', function() {
        return (
            {
                block: 'link',
                mix: { block: 'os', elem: 'download' },
                content: 'Скачать приложение',
                url: '#'
            }
        );
    });
};
