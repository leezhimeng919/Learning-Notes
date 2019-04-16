import execjs
import requests
import json

def getSignatureString():
    jsstr = ReadJs()
    ctx = execjs.compile(jsstr)
    signature =json.dumps(ctx.call("getSignature"))
    #print (signature)
    return signature

def ReadJs():
    jsfile = open("./../javascript/getSignature.js","r")
    codeline = jsfile.readline()
    codestr=""
    while codeline:
        codestr =codestr +codeline
        codeline =jsfile.readline()
    return codestr

def getCode():
    url="https://oauth.eptingche.cn/silent/auth/get_code"
    client_id = "4QFsuiiL3kIVc2OH"
    dict_json =json.loads(getSignatureString())
    content = {"client_id": client_id, "ts": dict_json['ts'], "signature": dict_json['signature']}
    result = requests.post(url, data=content)
    response_dic = result.text
    success_object =json.loads(response_dic)
    return success_object

def getToken():
    url = "https://oauth.eptingche.cn/silent/auth/access_token"
    client_id = "4QFsuiiL3kIVc2OH"
    tokenParam =getCode()
    content = {"client_id": client_id, "scope": tokenParam['content']['scope'], "code": tokenParam['content']['code'],"app_id":tokenParam['content']['app_id']}
    result = requests.post(url, data=content)
    response_dic = result.text
    token_object = json.loads(response_dic)
    print (token_object['content']['access_token'])

getToken()