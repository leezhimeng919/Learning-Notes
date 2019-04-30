function addCabinetFlag(equipment){
	
	getModelUInfo(equipment,function(UNum,deviceNum,equipment){
		var cabinetInfo=equipment.value
		//var Name=equipment.Name
		var text=getTextLableNew({
			  UNum:UNum,
			  deviceNum:deviceNum,
			  cabinetInfo:cabinetInfo,
			 // sensorNormal:true,
			  //paddingBothSide:0
		}).mCanvas;
		//text.position.x=equipment.x;
		//text.position.y=equipment.y;
		//text.position.z=equipment.z;

		//text.scale.set(0.0002,0.0002,0.0002);
		
		//scene.add(text);
//		if(callback!=null)
	//	callback(text);
		//if (equipment.textModel!= null) {
			
		//	scene.remove(equipment.textModel);
	//	}
		//equipment.textModel = text;
	//	equipment.textModel = text;
		//console.log(equipment.textModel2)
	})
}