import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  encryptionPassword: string = "Gagri^2020";

  encrypt(data) {
    if (data != null || data != undefined) {
      var conversionEncryptOutput = CryptoJS.AES.encrypt(data.trim(), this.encryptionPassword.trim()).toString();
      return conversionEncryptOutput;
    }
  }

  decrypt(data) {
    if (data != null || data != undefined) {
      var conversionDecryptOutput = CryptoJS.AES.decrypt(data.trim(), this.encryptionPassword.trim()).toString(CryptoJS.enc.Utf8);
      return conversionDecryptOutput;
    }
  }
}
