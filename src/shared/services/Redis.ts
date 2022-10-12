import { default as Redis } from "ioredis";

import environment from "../../config/environment";

class Cache {
  client: any = null;

  constructor() {
    this.client = new Redis({
      host: environment.redisHost,
      port: parseInt(environment.redisPort),
    });
  }

  set(key: string, value: any, expiry = 3600) {
    this.client.set(key, JSON.stringify(value), "EX", expiry);
  }

  async get(key: string) {
    const value = await this.client.get(key);
    return value ? JSON.parse(value) : null;
  }

  delete(key: string) {
    this.client.del(key);
  }
}

export default Cache;
