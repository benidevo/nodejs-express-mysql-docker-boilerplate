import { celebrate, Joi, Segments } from "celebrate";

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    role: Joi.string()
      .valid("ADMIN", "STAFF", "SUPER STAFF", "STAKEHOLDER")
      .required(),
  }),
});
