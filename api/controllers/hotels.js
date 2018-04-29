const {hotels} = require('../data/data.json');

module.exports = {
    getHotels: (req, res) => {
        res.json({hotels: hotels});
    },

    addHotel: (req, res) => {
        const { name } = req.body;
        hotels.push({
            name: name,
            id: hotels.length
        });
        res.json({
            'success': true,
            'msg': 'successfully added'
        });
    },

    updateHotel: (req, res) => {
        const id = req.params.id;
        const newName = req.body;

        hotels.forEach((hotel, i) => {
            if(hotel.id === Number(id)){
                hotel.name = newName;
            }
        });
        res.json({
            'success': true,
            'message': 'successfully updated'
        });
    },

    deleteHotel: (req, res) => {
        var id = req.params.id;
        hotels.forEach((hotel, i) => {
            if(hotel.id === Number(id)){
                hotels.splice(i, 1);
            }
        });
        res.json({
            'success': true,
            'message': 'successfully deleted'
        });
    }
}
