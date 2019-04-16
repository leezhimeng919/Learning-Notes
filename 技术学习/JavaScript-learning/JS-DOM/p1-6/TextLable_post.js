function getTextLableCol(){
                 let lableWidth=100;
                 let lableHeight=100;
                 let marginTopT=0;
                 let marginTopL=0;

                 let trangleBaseLineLength=20;
                 let triangleHeight=16;
                 let rectTHeight=42;
                 
                 let paddingBothSide=0;  
                 let frameColor='rgba(92,140,169,0.6)';
                 let titleColor='rgba(92,140,169,0.6)';
                // let normalColor='rgba(144,147,163,0.3)';
               //  let abnormalColor='rgba(144,147,163,0.3)';
               //  paddingBothSide=args.paddingBothSide;
                
                 let UNum="U位数：16";
                 let deviceNum="设备数：6"
                 let cabinetInfo="A区1号柜"
              //  sensorName=args.sensorName?args.sensorName:"sensor";
   
              //   let geometry=new THREE.PlaneGeometry( lableWidth, lableHeight, 1, 1 );
                 let mCanvas=document.createElement('canvas');
                 mCanvas.width=lableWidth;
                 mCanvas.height=lableHeight;
                 let mContext=mCanvas.getContext('2d');
                    // let text=args.text?args.text:defaultText;
                   //  let state=args.state?args.state:defaultText;
                 // 161,251,251
                   //  let stateColor=args.sensorNormal?normalColor:abnormalColor;
                     //半透明背景
                     mContext.fillStyle=frameColor;
                     mContext.fillRect(0,0,lableWidth,lableHeight-triangleHeight);
                     
                       //外部轮廓
                     mContext.beginPath();
                     mContext.moveTo(0,0);
                     mContext.lineTo(lableWidth,0);
                     mContext.lineTo(lableWidth,lableHeight-triangleHeight);
                     mContext.lineTo(lableWidth/2+trangleBaseLineLength/2,lableHeight-triangleHeight);
                     mContext.lineTo(lableWidth/2,lableHeight);
                     mContext.lineTo(lableWidth/2-trangleBaseLineLength/2,lableHeight-triangleHeight);
                     mContext.lineTo(0,lableHeight-triangleHeight);
                     mContext.lineTo(0,0);
                     mContext.closePath();
                     mContext.lineWidth=2;
                     mContext.strokeStyle ='rgba(161,251,251,0.4)';
                     mContext.stroke();

                     //底部尖角
                     mContext.beginPath();
                     mContext.moveTo(lableWidth/2-trangleBaseLineLength/2,lableHeight-triangleHeight);
                     mContext.lineTo(lableWidth/2+trangleBaseLineLength/2,lableHeight-triangleHeight);
                     mContext.lineTo(lableWidth/2,lableHeight);
                     mContext.lineTo(lableWidth/2-trangleBaseLineLength/2,lableHeight-triangleHeight);
                     mContext.closePath();
                     mContext.fillStyle = frameColor;
                     mContext.fill();
                     mContext.font="normal bolder 10px arial";

                     mContext.fillStyle='#ffffff';
                     mContext.fillText(UNum,marginTopL+lableWidth/5,marginTopT+6*rectTHeight/5);

                     mContext.fillStyle=titleColor;
                     mContext.fillRect(2,2,lableWidth-4,lableHeight/3);

                     mContext.fillStyle='#ffffff';
                     mContext.fillText(deviceNum,marginTopL+lableWidth/5,marginTopT+8.5*rectTHeight/5);   

                     mContext.fillStyle='#ffffff';
                     mContext.fillText(cabinetInfo,marginTopL+lableWidth/5,marginTopT+2.5*rectTHeight/5);   
               //  let texture=new THREE.Texture(mCanvas);
               //  let marterial=new THREE.MeshBasicMaterial({map:texture});
               ////  marterial.transparent = true;
               //  texture.needsUpdate=true;
               //  let mesh=new THREE.Mesh(geometry,marterial);

               var b=document.getElementById("hahaha");
               b.appendChild(mCanvas);
                // return {mesh,texture};
              }