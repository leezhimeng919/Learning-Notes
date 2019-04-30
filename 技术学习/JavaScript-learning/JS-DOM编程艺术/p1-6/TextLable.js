  function getTextLableNew(args){
                 let lableWidth=150;
                 let lableHeight=100;
                 let marginTopT=20;
                 let trangleBaseLineLength=20;
                 let triangleHeight=16;
                 let rectTHeight=36;
                 let paddingBothSide=0;  
                 let frameColor='rgba(144,147,163,0.3)';
                 let defaultText="异常";

              //   let geometry=new THREE.PlaneGeometry( lableWidth, lableHeight);
                 let mCanvas=document.createElement('canvas');
                 mCanvas.width=lableWidth;
                 mCanvas.height=lableHeight;
                 let mContext=mCanvas.getContext('2d');
                     let UNum=args.UNum?args.UNum:defaultText;
                     let deviceNum=args.deviceNum?args.deviceNum:defaultText;
                     let cabinetInfo=args.cabinetInfo?args.cabinetInfo:defaultText;
                    // let stateColor=args.sensorNormal?normalColor:abnormalColor;
                     //°ëÍ¸Ã÷±³¾°
                     mContext.fillStyle=frameColor;
                     mContext.fillRect(10,10,lableWidth,lableHeight-triangleHeight);
                     //Íâ²¿ÂÖÀª
                     mContext.beginPath();
                     mContext.moveTo(10,10);
                     mContext.lineTo(lableWidth,10);
                     mContext.lineTo(lableWidth,lableHeight-triangleHeight);
                     mContext.lineTo(10,lableHeight-triangleHeight);
                     mContext.closePath();
                     mContext.lineWidth=4;
                     mContext.strokeStyle = frameColor;
                     mContext.stroke();
                     //µ×²¿¼â½Ç
                     mContext.beginPath();
                     mContext.moveTo(lableWidth/2-trangleBaseLineLength/2,lableHeight-triangleHeight);
                     mContext.lineTo(lableWidth/2+trangleBaseLineLength/2,lableHeight-triangleHeight);
                     mContext.lineTo(lableWidth/2,lableHeight);
                     mContext.lineTo(lableWidth/2-trangleBaseLineLength/2,lableHeight-triangleHeight);
                     mContext.closePath();
                     
                     mContext.fillStyle = frameColor;
                     mContext.fill();
                     
                     mContext.font="normal bolder 20px arial";
                     mContext.fillStyle='#ffffff';
                     mContext.fillText(UNum,paddingBothSide,marginTopT+4*rectTHeight/5);
                     
                    //mContext.fillStyle=stateColor;
                    //mContext.fillRect(lableWidth/2-10-paddingBothSide,3*rectTHeight/5,lableWidth/2-10,rectTHeight);
                     
                     mContext.fillStyle='#ffffff';
                     mContext.fillText(deviceNum,lableWidth/2-paddingBothSide,2*rectTHeight/5+rectTHeight);
                     
                     mContext.fillStyle='#ffffff';
                     mContext.fillText(cabinetInfo,lableWidth/2-paddingBothSide,2*rectTHeight/5+rectTHeight);
                     
               //  let texture=new THREE.Texture(mCanvas);
              //   let marterial=new THREE.MeshBasicMaterial({map:texture});
              //   marterial.transparent = true;
               //  texture.needsUpdate=true;
               //  let mesh=new THREE.Mesh(geometry,marterial);
                 return {mCanvas};
              //  return(mCanvas);
              }