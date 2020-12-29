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

        return res.view('product/vaginate', { layout: 'layouts/vue_layout' });
    },

    // action - vaginate
    vaginate: async function (req, res) {

        if (req.wantsJSON) {

            var limit = Math.max(req.query.limit, 2) || 2;
            var offset = Math.max(req.query.offset, 0) || 0;

            var someProducts = await Product.find({
                limit: limit,
                skip: offset
            });

            return res.json(someProducts);

        } else {

            var count = await Product.count();
            return res.view('product/vaginate', { numOfRecords: count, layout: 'layouts/vue_layout' });
        }
    },


};

