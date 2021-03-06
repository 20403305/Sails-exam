/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
 'GET /page-count': 'PersonController.pagecount',
 'POST /page-count': 'PersonController.pagecount',

//  'GET /enquiry': 'EnquiryController.enquiry',
//  'POST /enquiry': 'EnquiryController.enquiry',
//  'GET /enquiries': 'EnquiryController.enquiries',

 'GET /enquiry': 'UserController.enquiry',
 'POST /enquiry': 'UserController.enquiry',
 'GET /enquiries': 'UserController.enquiries',

 'GET /items': 'ShopController.items',
//  'POST /item/:id': 'ShopController.items',
 'POST /item/:id': 'ShopuserController.redeem',
//  'GET /shopping-cart': 'ShopController.shoppingcart',
'GET /shopping-cart': 'ShopuserController.shoppingcart',

// 'GET /new-member': 'MemberController.createmember',
// 'POST /new-member': 'MemberController.createmember',

'GET /new-member': 'ReferralController.createmember',
'POST /new-member': 'ReferralController.createmember',

'GET /product': 'ProductController.vaginate',
};
