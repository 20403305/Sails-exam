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
            // 默认搜索从句（条件）为空
            var whereClause = {};
            // https://sailsjs.com/documentation/concepts/models-and-orm/query-language#contains
            // 如何进行模糊搜索？
            if (req.query.product) whereClause.product = { contains: req.query.product };


            if (req.query.sale && req.query.sale== "true") whereClause.sale = req.query.sale ;

            var limit = Math.max(req.query.limit, 2) || 2;
            var offset = Math.max(req.query.offset, 0) || 0;

            var thoseProducts = await Product.find({
                where: whereClause,
                limit: limit,
                skip: offset
            });

            var howmanyProducts = await Product.find({
                where: whereClause
            });
            var count = Object.keys(howmanyProducts).length;

            return res.json({thoseProducts,count});

            // var limit = Math.max(req.query.limit, 2) || 2;
            // var offset = Math.max(req.query.offset, 0) || 0;

            // var someProducts = await Product.find({
            //     limit: limit,
            //     skip: offset
            // });

            // return res.json(someProducts);


        } else {

            var count = await Product.count();
            return res.view('product/vaginate', { numOfRecords: count, layout: 'layouts/vue_layout' });
        }
    },


};

