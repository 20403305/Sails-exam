/**
 * ShopController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    // json function
    shoppingcart: async function (req, res) {

        var everyones = await Shop.find();

        return res.json(everyones);
    },

    // json function
    items: async function (req, res) {

        var everyones = await Shop.find();

        return res.view('shop/list', { medicals: everyones });
    },


};

