/**
 * ReferralController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    // json function
    createmember: async function (req, res) {

        if (req.method == "GET") return res.view('member/signup');
    
        if (!req.body.name) return res.json("please input your name");
    
        var user = await Member.findOne({ name: req.body.name });
    
        if (user) return res.status(401).json("Username have been used");
    
        var signup_username = req.body.name;
    
        await User.createEach([
          { username: signup_username, credits: 500 },
          // etc.
        ]);
    
        // return res.status(201).json({ id: eat.id });
        return res.json("Success Create!");
      },
    
    

};

