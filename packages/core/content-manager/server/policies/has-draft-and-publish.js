'use strict';

const {
  contentTypes: { hasDraftAndPublish },
} = require('@strapi/utils');

module.exports = (ctx, { strapi }) => {
  const { model: modelUID } = ctx.params;

  const model = strapi.contentTypes[modelUID];

  return hasDraftAndPublish(model);
};
