import { Joi, Segments, celebrate } from "celebrate";

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    otp: Joi.string().required().min(6).max(6),
    password: Joi.string().required().min(6).max(16),
  }),
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required().uuid(),
  }),
});
