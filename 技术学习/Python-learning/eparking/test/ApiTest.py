import requests
import json
import threading

url = "https://api.eptingche.cn/v2/gateway"
app_id = "4QFsuiiL3kIVc2OH"
format = "json"
charset = "utf-8"
timestamp = "1553148083"
token = "416135fe8c1556cfa44457d640e579ea15198third"

def getStationList():
    method="et_common.station.lists"
    biz_content='{"appid":"4QFsuiiL3kIVc2OH","page":"1","pagesize":"20"}'
    content={"app_id":app_id,"method":method,"format":format,"charset":charset,"timestamp":timestamp,"token":token,"biz_content":biz_content}
    result = requests.post(url,data=content);
    response_dic = result.text
    print (response_dic)
    print (result.status_code)
    return

def getDeviceList():
    method = "et_common.device.lists"
    biz_content = '{"appid":"4QFsuiiL3kIVc2OH","station_id":"2642","direction":"in"}'
    content = {"app_id": app_id, "method": method, "format": format, "charset": charset, "timestamp": timestamp,
               "token": token, "biz_content": biz_content}
    result = requests.post(url, data=content);
    response_dic = result.text
    print (response_dic)
    print (result.status_code)
    return

def getContractList():
    method = "et_common.contract.lists"
    biz_content = '{"appid":"4QFsuiiL3kIVc2OH","station_id":"2642"}'
    content = {"app_id": app_id, "method": method, "format": format, "charset": charset, "timestamp": timestamp,
               "token": token, "biz_content": biz_content}
    result = requests.post(url, data=content);
    response_dic = result.text;
    print (response_dic)
    print (result.status_code)
    return


getStationList()
getDeviceList()
getContractList()