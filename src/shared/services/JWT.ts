import { sign, verify } from "jsonwebtoken";
import environment from "../../config/environment";
import AppError from "../../shared/utils/AppError";

class JwtClient {
  private accessTokenSecret: string;
  private refreshTokenSecret: string;

  constructor() {
    this.accessTokenSecret = environment.jwtAccessTokenSecret;
    this.refreshTokenSecret = environment.jwtRefreshTokenSecret;
  }

  generateAccessToken(payload: any) {
    return sign(payload, this.accessTokenSecret, { expiresIn: "3h" });
  }

  generateRefreshToken(payload: any) {
    payload.type = "refresh";
    return sign(payload, this.refreshTokenSecret, { expiresIn: "7d" });
  }

  verifyAccessToken(token: string): any {
    return verify(token, this.accessTokenSecret);
  }

  verifyRefreshToken(token: any) {
    if (token.type !== "refresh") {
      throw new AppError("Invalid token type", 401);
    }
    return verify(token, this.refreshTokenSecret);
  }
}

export default JwtClient;
