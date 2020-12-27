/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

const Enquiry = require("../api/models/Enquiry");

module.exports.bootstrap = async function () {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  if (await Person.count() > 0) {
    return generateEnquiry();
  }

  await Person.createEach([
    { markid: 1, jishu: 0 }
    // etc.
  ]);

  return generateEnquiry();


  async function generateEnquiry() {
    // error: TypeError: Enquiry.count is not a function
    if (await User.count() > 0) {
      return;
    }

    await User.createEach([
      { emailAddress: "123456@like.com", preferstart: "16:00", preferend: "17:00", clientenquiry: "more earier more better" }
      // etc.
    ]);


  };

}
