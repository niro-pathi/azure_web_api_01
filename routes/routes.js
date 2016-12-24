'use strict';
module.exports = function() {
    var store = [
        {
            name: 'toy',
            price: '2'
        }
    ]

    return [
            {
            method: 'GET',
            path: '/store/',
            config : {
                handler: function(req, reply){
                    reply({'store':store, 'responseCode':0});
                }
            }
        }
    ];
}();