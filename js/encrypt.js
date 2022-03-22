String.prototype.encrypt = function (salt) {
  const key = CryptoJS.enc.Hex.parse(salt).toString();
  const key2 = CryptoJS.enc.Hex.parse(key).toString();
  const plaintext = this.toString();

  const hash = CryptoJS.AES.encrypt(plaintext, key, key2);
  return hash;
};

String.prototype.decrypt = function (salt) {
  const key = CryptoJS.enc.Hex.parse(salt).toString();
  const key2 = CryptoJS.enc.Hex.parse(key).toString();
  const encryptText = this.toString();

  const plaintext = CryptoJS.AES.decrypt(encryptText, key, key2).toString(
    CryptoJS.enc.Utf8
  );

  if (plaintext.length < 1) {
    return false;
  } else {
    return plaintext;
  }
};
