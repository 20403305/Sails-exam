/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
      // action - read
      enquiry: async function (req, res) {

        var thatPerson = await Person.findOne({ markid: 1 });

        if (!thatPerson) return res.notFound();

        return res.view('person/enquiry', { person: thatPerson });
    },

    // json function
    enquiries: async function (req, res) {

        var everyones = await Person.find();

        return res.json(everyones);
    },

};

