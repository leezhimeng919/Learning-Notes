import time
import hashlib

def getSignature():
    client_id ="4QFsuiiL3kIVc2OH"
    secret = "hWSWLQ3Fwv1T19pac8z7RxzZxbiAffNrbGBn"
    currentTime = time.time()
    ts = int(currentTime)
    #ts = 1552531953;
    print (ts)
    signStr = "client_id="+str(client_id)+"&ts="+str(ts)+"&secret="+str(secret)
    signature = hashlib.md5(signStr)
    signature1=signature.hexdigest()
    print (signature1)
    return

getSignature()