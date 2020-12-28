/**
 * ShopuserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    redeem: async function (req, res) {
        if (req.wantsJSON) {

            // var thatUser = await Shopuser.findOne({ name: "Jack" });
            var thatUser = await Shopuser.findOne({ name: "Jack" }).populate("coupons");

            for (x=0;x<thatUser.coupons.length;x++){
                if (thatUser.coupons[x].id == req.params.id) return res.json("you have already redeem it,can't not redeem again, add failed");

            }

            if (thatUser.coupons.length > 2) return res.json("you have already 3 Item , that is upper limit, add failed");   // conflict
            //添加到Redeemed coupons
            await Shopuser.addToCollection(thatUser.id, "coupons").members(req.params.id);


            return res.json("Redeem Success");	    // for ajax request
            // return res.json(Object.keys(thatUser));	    // for ajax request
        } else {
            return res.redirect("/");
        }
    },

    // json function
    shoppingcart: async function (req, res) {

        var user = await Shopuser.findOne({ name: "Jack" }).populate("coupons");

        // if (!user) return res.json("None medicine");

        // return res.json(user);
        return res.view('shop/shoppingcart', { medicals: user });
    },

};

