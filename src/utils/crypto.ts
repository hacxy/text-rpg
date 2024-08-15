import CryptoJS from 'crypto-js';
import { Player } from '../store';
import { SECRET } from '../constants';

// Encrypt
export const encrypt = (data: Player) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET).toString();
};

// Decrypt
export const decrypt = (ciphertext: string) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
