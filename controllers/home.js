module.exports.inicio = (req, res) => {
        res.render('index', {
            title: 'Ubuntu Installation Guide',
            pagina: 'Home'
        });
}