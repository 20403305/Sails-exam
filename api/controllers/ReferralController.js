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
        var whereClause = {};
        if (req.wantsJSON) {

            if (!req.body.name) return res.json("please input your name");

            var user = await Referral.findOne({ name: req.body.name });

            if (user) return res.status(401).json("Username have been used");

            // 默认搜索从句（条件）为空



            if (req.body.referral1) {
                var Referral1 = await Referral.findOne({ id: req.body.referral1 });

                if (!Referral1) return res.json("Referral 1 don't exist");
                // console.log(Referral1)
                // whereClause.Referral1 = Referral1;
            }

            if (req.body.referral2) {

                var Referral2 = await Referral.findOne({ id: req.body.referral2 });

                if (!Referral2) return res.json("Referral 2 don't exist");
                // whereClause.Referral2 = Referral2;
            }

            if (req.body.referral3) {
                var Referral3 = await Referral.findOne({ id: req.body.referral3 });

                if (!Referral3) return res.json("Referral 3 don't exist");
                // whereClause.Referral3 = Referral3;
            }

            var signup_username = req.body.name;

            var newmember = await Referral.createEach([
                { name: signup_username, credits: 500 }
                // etc.
            ]).fetch();

            // whereClause.newmember = newmember[0];
            // console.log(newmember)


            if (req.body.referral1) {
                var updatedcurr_credits = await Referral.updateOne(Referral1.id).set({ credits: Referral1.credits + 100 });
                if (!updatedcurr_credits) return res.status(404).json("Server error! bug");

                var newmember = await Referral.findOne({ id: newmember[0].id });
                var updatedcurr_credits = await Referral.updateOne(newmember.id).set({ credits: newmember.credits + 100 });
                console.log(updatedcurr_credits)
                if (!updatedcurr_credits) return res.status(404).json("Server error! bug");
                var Referral1 = await Referral.findOne({ id: req.body.referral1 });
                whereClause.Referral1 = Referral1;
            }

            if (req.body.referral2) {
                var updatedcurr_credits = await Referral.updateOne(Referral2.id).set({ credits: Referral2.credits + 100 });
                if (!updatedcurr_credits) return res.status(404).json("Server error! bug");

                var newmember = await Referral.findOne({ id: newmember.id });
                var updatedcurr_credits = await Referral.updateOne(newmember.id).set({ credits: newmember.credits + 100 });
                console.log(updatedcurr_credits)
                if (!updatedcurr_credits) return res.status(404).json("Server error! bug");
                var Referral2 = await Referral.findOne({ id: req.body.referral2 });
                whereClause.Referral2 = Referral2;
            }

            if (req.body.referral3) {
                var updatedcurr_credits = await Referral.updateOne(Referral3.id).set({ credits: Referral3.credits + 100 });
                if (!updatedcurr_credits) return res.status(404).json("Server error! bug");

                var newmember = await Referral.findOne({ id: newmember.id });
                var updatedcurr_credits = await Referral.updateOne(newmember.id).set({ credits: newmember.credits + 100 });
                // var updatedcurr_credits = await Referral.updateOne(newmember[0].id).set({ credits: newmember[0].credits + 100 });
                if (!updatedcurr_credits) return res.status(404).json("Server error! bug");
                console.log(updatedcurr_credits)
                var Referral3 = await Referral.findOne({ id: req.body.referral3 });
                whereClause.Referral3 = Referral3;
            }

            var newmember = await Referral.findOne({ id: newmember.id });
            whereClause.newmember = newmember;

            var show_info = 'Create Success!\n';
            for (var i in whereClause){
                show_info += whereClause[i].id+'Name : '+whereClause[i].name+'Credits :'+whereClause[i].credits+'\n';
                // console.log(whereClause[i].id)
            }
            console.log(show_info)

            // return res.status(201).json({ id: eat.id });
            return res.json(show_info);

        } else {
            return res.redirect('/');			// for normal request
        }
    },



};

