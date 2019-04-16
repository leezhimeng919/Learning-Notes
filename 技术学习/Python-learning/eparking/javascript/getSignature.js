/**
 * Created by chengliang on 2019/3/21.
 */

let Crypto = require("./../node_modules/crypto.js");
const client_id="4QFsuiiL3kIVc2OH";
const secret="hWSWLQ3Fwv1T19pac8z7RxzZxbiAffNrbGBn";
const ts=((new Date()).valueOf().toString()).substr(0,10);
console.log("ts"+ts);
const signStr ="client_id="+client_id+"&ts="+ts+"&secret="+secret;
console.log("singStr:"+signStr);

function tokenObject(id,ts,signature){
    this.client_id = id;
    this.ts = ts;
    this.signature =signature;
}

function getSignature() {
    let singString1 = encodeURIComponent(signStr);
    let signature = md5encode(singString1);
    console.log("signature:"+signature);
    let token = new tokenObject(client_id,ts,signature);
    console.log('tokenObject:'+token.ts);
    return token;
}

 function md5encode(word) {
     return Crypto.md5(word).toString();
 }

 getSignature()