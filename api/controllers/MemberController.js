/**
 * MemberController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
      // json function
      createmember: async function (req, res) {

        var everyones = await Person.find();

        return res.view('member/signup', { person: everyones });
    },


};

