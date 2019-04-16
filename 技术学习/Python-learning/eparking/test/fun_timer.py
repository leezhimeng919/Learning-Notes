//定时器
import sys
import threading
import ApiTest.py

def fun_timer():
    print ("hello timer")
    global timer
    timer = threading.Timer(100,fun_timer)
    timer.start()

    timer.threading.Timer(1,fun_timer)
    timer.start()

    def fun_timer():
        print ("hello timer")
        global timer
        timer = threading.Timer(60, getStationList)
        timer.start()

    if __name__ == "__main__":
        timer = threading.Timer(60, getStationList)
        timer.start()

    fun_timer();