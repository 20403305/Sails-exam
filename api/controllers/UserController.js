/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
      // action - read
      enquiry: async function (req, res) {

        if (req.method == "GET") return res.view('user/enquiry');

        if (req.wantsJSON) {
            var eat = await User.create(req.body).fetch();


            if ( req.body.preferstart > "17:00") return res.json("The time > 17:00, you will be contacted the day after tomorrow");
            if ( req.body.preferstart < "17:00") return res.json("The time < 17:00, you will be contacted tomorrow");
            return res.json("Create Success");
        } else {
            return res.redirect('/');			// for normal request
        }

        // if (!req.body.username || !req.body.password) return res.badRequest();

        // var user = await User.findOne({ username: req.body.username });

        // if (!user) return res.status(401).json("User not found");

        // var match = await sails.bcrypt.compare(req.body.password, user.password);
        // if (!match) return res.status(401).json("Wrong Password");



        // var thatPerson = await User.findOne({ emailAddress: "123456@like.com" });

        // if (!thatPerson) return res.notFound();

        // return res.view('user/enquiry', { person: thatPerson });
    },

    // json function
    enquiries: async function (req, res) {

        var everyones = await User.find();

        return res.json(everyones);
    },

};

