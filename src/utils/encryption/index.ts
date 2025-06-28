import CryptoJS from "crypto-js";

export const encrypt = ({ data, key }: { key: string; data: any }) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
};

export const descrypt = ({ token, key }: { key: string; token: any }) => {
  const decrypt = CryptoJS.AES.decrypt(token, key);
  const originalData: any = decrypt.toString(CryptoJS.enc.Utf8);
  return originalData;
};
