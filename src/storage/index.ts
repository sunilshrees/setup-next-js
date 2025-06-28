import Cookies from "js-cookie";
import { encrypt, descrypt } from "@/utils/encryption";

export const storageUtil = {
  set: (key: string, value: any, expiresDays = 7) => {
    const encrypted = encrypt({ key: key, data: value });
    Cookies.set(key, encrypted, {
      expires: expiresDays,
      secure: true,
      sameSite: "Strict",
    });
  },

  get: (key: string) => {
    const originalValue = Cookies.get(key);
    if (originalValue) {
      try {
        const data = descrypt({ token: originalValue, key: key });
        return JSON.parse(data);
      } catch (error) {
        console.error("Error decrypting cookie:", error);
      }
    }
    return null;
  },

  remove: (key: string) => {
    Cookies.remove(key);
  },
};
