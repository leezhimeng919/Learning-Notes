
var MODEL_TYPE_HKFAMMETER = 31;
var MODEL_TYPE_PX61AMMETER = 32;
var MODEL_TYPE_WATERSENSOR = 33;
var MODEL_TYPE_SMOGSENSOR = 34;
var MODEL_TYPE_WENSHISENSOR = 35;
var MODEL_TYPE_GUARD = 36;
var MODEL_TYPE_AIRCOND = 37;
var MODEL_TYPE_UPSHEADCABINETS= 39;//头柜
var MODEL_TYPE_UPS = 38;
var MODEL_TYPE_CAMERA=40;

var CABINET =3

var AREA_A = 0;
var AREA_B = 1;
var AREA_C = 2;

var ALARM_COLORS = ["#959595", "#2C6EB7", "#6CBE79", "#F4BA19", "#E83D18"];

//devices[i] = [我是什么设备(-3：路由器，-2：交换机，-1:防火墙，0：服务器，1：机柜，2：门),所属区(0-2),所属机柜(0-12，包括空调设为空),机柜中的位置(由下至上0-12)]

var equipmentConfig=[
                     
	
                     [MODEL_TYPE_WATERSENSOR,755000025,1.57,-0.05,0.014,0.033],
                     
                    // [MODEL_TYPE_SMOGSENSOR,3,3.14,-0.03,0.13,-0.03],//左下
                    // [MODEL_TYPE_SMOGSENSOR,3,3.14,0.05,0.13,-0.03],//右上
                    // [MODEL_TYPE_SMOGSENSOR,3,3.14,0.14,0.13,-0.03],//右上
                    // [MODEL_TYPE_SMOGSENSOR,3,3.14,0.2,0.13,-0.03],//右上

                    
                     [MODEL_TYPE_WENSHISENSOR,755000032,4.71,0.1,0.08,-0.03],//1
                     [MODEL_TYPE_WENSHISENSOR,755000038,4.71,-0.01,0.08,-0.03],//2
                     [MODEL_TYPE_WENSHISENSOR,755000040,4.71,-0.15,0.08,-0.03],//3

                     [MODEL_TYPE_AIRCOND,755000045,0,-0.08,0.13,-0.01],//ezsy
                     [MODEL_TYPE_AIRCOND,755000034,0,-0.08,0.13,-0.06],//爱默生pex
                   
                     [MODEL_TYPE_UPSHEADCABINETS,755000036,0,0.12,0.13,-0.06],//头柜B   01
                     
                     [MODEL_TYPE_UPS,755000030,0,0.12,0.10,-0.11],//1
                     [MODEL_TYPE_UPS,755000027,0,-0.08,0.10,-0.11],//2
                   
                     [MODEL_TYPE_GUARD,755000043,0,0.22,0,-0.03],//1
                     [MODEL_TYPE_GUARD,755000016,0,0.18,0,-0.03],//1
                     
                     [MODEL_TYPE_CAMERA,755000155,-1.57,0.2,0.03,-0.1],//155
                     [MODEL_TYPE_CAMERA,755000156,0,0.15,0.03,-0.1],//156
                     [MODEL_TYPE_CAMERA,755000154,-1.57,-0.14,0.03,-0.1],//154
                     [MODEL_TYPE_CAMERA,755000157,0,-0.07,0.03,-0.1],//157
                     [MODEL_TYPE_CAMERA,755000153,0,-0.05,0.03,-0.03],//153
                     [MODEL_TYPE_CAMERA,755000152,0,0,0.03,0.08],//152

                     [CABINET,'1A01',0, 0.125,0.10,0,'A区1号柜'],
                     [CABINET,'1A02',0, 0.107,0.09,0,'A区2号柜'],
                     [CABINET,'1A03',0, 0.089,0.10,0,'A区3号柜'],
                     [CABINET,'1A04',0, 0.072,0.09,0,'A区4号柜'],
                     [CABINET,'1A05',0, 0.054,0.10,0,'A区5号柜'],
                     [CABINET,'1A06',0, 0.037,0.09,0,'A区6号柜'],
                     [CABINET,'1A07',0, 0.019,0.10,0,'A区7号柜'],
                     [CABINET,'1A08',0, 0.000,0.09,0,'A区8号柜'],
                     [CABINET,'1A09',0,-0.016,0.10,0,'A区9号柜'],
                     
                     [CABINET,'1B01',0, 0.107,0.10,-0.06,'B区1号柜'],
                     [CABINET,'1B02',0, 0.089,0.09,-0.06,'B区2号柜'],
                     [CABINET,'1B03',0, 0.072,0.10,-0.06,'B区3号柜'],
                     [CABINET,'1B04',0, 0.054,0.09,-0.06,'B区4号柜'],
                     [CABINET,'1B05',0, 0.037,0.10,-0.06,'B区5号柜'],
                     [CABINET,'1B06',0, 0.019,0.09,-0.06,'B区6号柜'],
                     [CABINET,'1B07',0, 0.000,0.10,-0.06,'B区7号柜'],
                     [CABINET,'1B08',0,-0.016,0.09,-0.06,'B区8号柜']
                     
                   //  [CABINET,54227,0,0,0.1,0,"23",'1'],
                     //[CABINET,54228,0,0,0.2,0,"31",'2'],
                    // [CABINET,54229,0,0,0.3,0,"31",'3'],
                    // [CABINET,54230,0,0,0.4,0,"31",'4'],
                    // [CABINET,54231,0,0,0.5,0,"31",'5']
                    
      				  ];


function Equipment(modelType,resourceId,oriented,x,y,z,value) {
	this.modelType = modelType;
	this.resourceId = resourceId;
	this.oriented = oriented;
	this.textModel = null;
	this.textModel2 = null;
	this.x=x;
	this.y=y;
	this.z=z;
	this.value=value;
	this.model=null;

};


var equipment=[]

for ( var i in equipmentConfig) {
	equipment[i] = new Equipment(
			equipmentConfig[i][0], 
			equipmentConfig[i][1],
			equipmentConfig[i][2],
			equipmentConfig[i][3],
			equipmentConfig[i][4],
			equipmentConfig[i][5],
			equipmentConfig[i][6]
			
			);
}

function getEquipmentByResourceId (resourceId) {
	for (var i in equipment) {
		if (equipment[i].resourceId == resourceId) {
			return equipment[i];
		}
	}
	return null;
}

