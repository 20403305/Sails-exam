/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
      // json function
      search: async function (req, res) {

        var everyones = await Product.find();

        return res.view('product/vaginate');
    },


};

