/**
 * ShopController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    // json function
    items: async function (req, res) {


        if (req.method == "GET") {
            var everyones = await Shop.find();
            return res.view('shop/list', { medicals: everyones });
        } else {


            if (req.wantsJSON) {

                var everyones = await Shop.find();

                return res.json(everyones);

            } else {
                return res.redirect('/');			// for normal request
            }
        }

    },


};

