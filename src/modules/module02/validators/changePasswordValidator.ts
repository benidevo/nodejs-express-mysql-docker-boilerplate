import { celebrate, Joi, Segments } from "celebrate";

export default celebrate({
  [Segments.BODY]: {
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().required()
  },
});
