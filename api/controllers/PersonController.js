/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    // json function
    pagecount: async function (req, res) {


        if (req.method == "GET") {
            var thatPerson = await Person.findOne({ markid: 1 });

            if (!thatPerson) return res.notFound();

            var updatedPerson = await Person.updateOne({ markid: 1 }).set({ jishu: thatPerson.jishu + 1 });

            if (!updatedPerson) return res.notFound();

            // return res.view('person/read', { person: thatPerson });
            return res.view('person/read', { person: updatedPerson });

            // var everyones = await Person.find();

            // return res.json(everyones);
        } else {


            if (req.wantsJSON) {

                var updatedPerson = await Person.updateOne({ markid: 1 }).set({ jishu: 0 });

                if (!updatedPerson) return res.notFound();
                return res.json('OK now is ' + updatedPerson.jishu);

            } else {
                return res.redirect('/');			// for normal request
            }

        }
    },




};

