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

    let pages = await strapi.query("diary").find({ diary: diary.id });

    return ctx.send(pages);
  },

  create: async (ctx) => {
    let axios = require("axios");

    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, [
        { messages: [{ id: "No authorization header was found" }] },
      ]);
    }

    const data = ctx.request.body;

    //get and analyze the diary entry
    let content = data.content;

    let sentiment = await axios.post(
      "https://sentim-api.herokuapp.com/api/v1/",
      { text: content }
    );
    sentiment = sentiment.data.result.type.toLowerCase(); // can be negative, neutral, positive

    //get an activity
    let activity = await axios.get(
      "http://www.boredapi.com/api/activity?price=0.0"
    );
    activity = activity.data.activity;

    //get advice
    let advice = await axios.get("https://api.adviceslip.com/advice");
    advice = advice.data.slip.advice;

    //fetch the diary and create a new page in it
    let diary = await strapi.query("diary").findOne({ user: user.id });

    let newPageData = {
      diary: diary.id,
      content,
      sentiment,
      advice,
      activity,
    };

    let newPage = await strapi.query("page").create(newPageData);

    return ctx.send(newPage);
  },
};
