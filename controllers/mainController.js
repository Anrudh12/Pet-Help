

const mainController = {

    home: (req, res) => {
        res.render('./index', {products});
    },
    aboutUs: (req, res) => {
        res.render('./aboutUs'); 
    
    },
    sucursales: (req, res) => {
        res.render('./sucursales');
    }
};

module.exports = mainController;*/
