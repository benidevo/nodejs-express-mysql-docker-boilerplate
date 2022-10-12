import { Joi, Segments, celebrate } from "celebrate";

export default celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).default(10),
    is_active: Joi.boolean().default(true),
  }),
});
