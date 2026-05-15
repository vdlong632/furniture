import Cookies from 'js-cookie';

export const ACCESS_TOKEN_KEY = 'accessToken';
export const LAST_ROOM_PATH = 'lastRoomPath';
export const REFRESH_TOKEN_KEY = 'refreshToken';
const config = {
  secure: import.meta.env.MODE !== 'development'
};

/**
 * @return TokenStorage service
 */
export class StorageServices {
  /**
   * @returns function handle set token in cookies
   */
  setAccessToken(accessToken: string, key = ACCESS_TOKEN_KEY) {
    Cookies.set(key, accessToken, config);
  }

  /**
   * @returns function handle get token in cookies
   */
  getAccessToken(key = ACCESS_TOKEN_KEY): string | undefined {
    return Cookies.get(key);
  }

  /**
   * @returns function handle remove token in cookies
   */
  removeAccessToken(key = ACCESS_TOKEN_KEY) {
    return Cookies.remove(key);
  }
  /**
   * @returns function handle set token in cookies
   */
  setRefreshToken(accessToken: string) {
    Cookies.set(REFRESH_TOKEN_KEY, accessToken, config);
  }

  /**
   * @returns function handle get token in cookies
   */
  getRefreshToken(): string | undefined {
    return Cookies.get(REFRESH_TOKEN_KEY);
  }

  /**
   * @returns function handle remove token in cookies
   */
  removeRefreshToken() {
    return Cookies.remove(REFRESH_TOKEN_KEY);
  }
  /**
   * @returns function handle set token in cookies
   */
  setLastRoomPath(path: string) {
    Cookies.set(LAST_ROOM_PATH, JSON.stringify(path), config);
  }

  /**
   * @returns function handle get token in cookies
   */
  getLastRoomPath(): string {
    return Cookies.get(LAST_ROOM_PATH) ? JSON.parse(Cookies.get(LAST_ROOM_PATH) as string) : '';
  }

  /**
   * @returns function handle remove token in cookies
   */
  removeLastRoomPath() {
    return Cookies.remove(LAST_ROOM_PATH);
  }
}
