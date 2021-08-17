"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: async (ctx) => {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, [
        { messages: [{ id: "No authorization header was found" }] },
      ]);
    }

    let diary = await strapi.query("diary").findOne({ user: user.id });

    //create a new diary if we don't have one
    if (diary == null) {
      diary = await strapi.query("diary").create({ user: user.id, pages: [] });
    } else {
      let pages = await strapi.query("page").find({ diary: diary.id });
      diary.pages = pages;
    }

    return ctx.send(diary);
  },
};
