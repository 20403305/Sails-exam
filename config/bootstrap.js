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
const Member = require("../api/models/Member");

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
      return generateShop();
    }

    await User.createEach([
      { emailAddress: "123456@like.com", preferstart: "16:00", preferend: "17:00", clientenquiry: "more earier more better" }
      // etc.
    ]);

    return generateShop();
  };


  async function generateShop() {
    // error: TypeError: Enquiry.count is not a function
    if (await Shop.count() > 0) {
      return generateShopuser();
    }

    await Shop.createEach([
      { product: "Trilipix"},
      { product: "Australian Gold"},
      { product: "azithromycin"},
      { product: "PROMETHAZINE DM"},
      { product: "PROLONG 101"},
      { product: "Pollens - Grasses, Brome, Smooth Bromus inermis"},
      { product: "Chemstar Antibac"},
      { product: "Phenytoin Sodium"},
      { product: "Lorazepam"},
      { product: "Gabapentin"}
      // etc.
    ]);

    return generateShopuser();
  };

  async function generateShopuser() {

    if (await Shopuser.count() > 0) {
      return generateMember();
    }

    await Shopuser.createEach([
      { name: "Jack"}

      // etc.
    ]);

    return generateMember();

  }

  async function generateMember() {

    // if (await Member.count() > 0) {
      if (await Referral.count() > 0) {
      return;
    }

    await Referral.createEach([
      { name: "Kirby Ritzman", credits: 500},
      { name: "Betteann Kykel", credits: 500},
      { name: "Nickey Hallatt", credits: 500},
      { name: "Tarrah Ibotson", credits: 500},
      { name: "Andrea Landsborough", credits: 500},
      { name: "Kamila Gowdie", credits: 500},
      { name: "Kimbra Wilcox", credits: 500},
      { name: "Sigrid Glencross", credits: 500},
      { name: "Selinda Oxenbury", credits: 500},
      { name: "Lara Hallin", credits: 500}
      // etc.
    ]);

  }








}
