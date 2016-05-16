//Infinite Diamond Mod ver 3.1

//変数
var TumeRenderType=Renderer.createHumanoidRenderer();
var SlayerRenderType=Renderer.createHumanoidRenderer();
var Slayer2RenderType=Renderer.createHumanoidRenderer();

var tume=[];
var mugenzombie=[];
var mugenskelton=[];
var mugencreeper=[];
var mugenblaze=[];
var maou=[];
var slayer=[];
var slayer2=[];
var mugenender=[];
var mugenspider=[];
var magumaman=[];

var slayerxp=0;
var tumeexplo=false;
var tumexp=0;
var narukami=0;
var sgui=0;
var lang=0;
var langselect=0;
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var buttonset=false;
var buttonset1=false;
var buttonset2=false;
var buttonset3=false;
var buttonset4=false;
var start=0;
var buttonset5=false;
var aice1=0;
var aice=0;
var sexplod=0;
var kin=0 
var dash=0;
var sei=0;
var df=1;
var effect=false;
var count=0;
var count1=0;
var count2=0;
var count3=0;
var count4=0;
var count5=0;
var count6=0;
var count7=0;
var count8=0;
var count9=0;
var count10=0;
var count11=0;
var count12=0;
var count13=0;
var count14=0;
var count15=0;
var count16=0;
var count17=0;
var count18=0;
var count19=0;
var count20=0;
var count21=0;
var count22=0;
var count23=0;
var count24=0;
var count25=0;
var count26=0;
var count27=0;
var Mugenzombie;
var Mugenskeleton;
var Mugencreeper;
var Mugenblaze;
var Mugenblaze2;
var modName="Infinite Diamond Mod";
var ダイヤの剣=276;
var 鉄の剣=267;
var 金の剣=283;
var 木の剣=268;
var レッドストーン=331;
var 石炭=263;
var ダイヤ=264;
var 鉄インゴット=265;
var 金インゴット=266;
var 木材=5;//白樺=ダメージ値２、松=ダメージ値１
var 原木=17;
var 棒=280;
var 染料=351;//ラピスラズリ=ダメージ値4

//追加アイテム&ブロックID
//ID変える時はここの数字だけ変えてください
var レッドストーンの剣=3696;
var ラピスラズリの剣=3697;
var エメラルドの剣=3698;
var 無限ダイヤ=3699;
var 無限ダイヤの剣=3700;
var ラピスラズリの棒=3701;
var レッドストーンの棒=3702;
var 金の棒=3703;
var 鉄の棒=3704;
var ダイヤの棒=3705;
var エメラルドの棒=3706;
var 無限ダイヤの棒=3707;
var 無限ダイヤの剣改=3708;
var ダイヤの剣改=3709;
var 鉄の剣改=3710;
var 金の剣改=3711;
var レッドストーンの剣改=3712;
var ラピスラズリの剣改=3713;
var エメラルドの剣改=3714;
var 宝剣インフィニティソード=3715;
var 無限ゾンビのスポーンエッグ=3716;
var 石炭の棒=3717;
var 石炭の剣=3718;
var 雷の石=3719;
var 雷槍ケラウノス=3720;
var 神剣インフィニティソード改=3721;
var 真ラピスラズリの剣=3722;
var 氷の石=3723;
var 氷の杖=3724;
var 刀=3725;
var 黒刀=3726;
var 妖刀村正=3727;
var 黒の杖=3728;
var ダイヤの粉=3729;
var 妖気に満ちたポーション=3730;
var ブドウ=3731;
var オレンジ=3732;
var ガラスのコップ=3733;
var ブドウジュース=3734;
var オレンジジュース=3735;
var ワイングラス=3736;
var 赤ワイン=3737;
var 無限ダイヤのヘルメット=3738;
var 無限ダイヤのチェストプレート=3739;
var 無限ダイヤのレギンス=3740;
var 無限ダイヤのブーツ=3741;
var 鉛インゴット=3742;
var メイス=3743;
var 強化メイス=3744;
var 無限の星=3745;
var 無限スケルトンのスポーンエッグ=3746;
var 無限クリーパーのスポーンエッグ=3747;
var 無限の矢=3748;
var 無限の原子核=3749;
var 生命の源=3750;
var 無限ブレイズのスポーンエッグ=3751;
var 炎の宝玉=3752;
var 聖なる宝玉=3753;
var 聖剣エクスカリバー=3754;
var 無限ブレイズのスポーンエッグ子分=3755;
var 魔王の魂=3772;
var 魔王のスポーンエッグ=3773;
var 魔王のヘルメット=3774;
var 魔王のチェストプレート=3775;
var 魔王のレギンス=3776;
var 魔王のブーツ=3777;
var 全ての食材のもと=3782;
var 無限ダイヤの粉=3783;
var 鉛のヘルメット=3810;
var 鉛のチェストプレート=3811;
var 鉛のレギンス=3812;
var 鉛のブーツ=3813;
var ダイヤの盾=3814;
var 鉄の盾=3815;
var 金の盾=3816;
var レッドストーンの盾=3817;
var ラピスラズリの盾=3818;
var エメラルドの盾=3819;
var 無限ダイヤの盾=3820;
var 真ダイヤの剣=3821;
var 真鉄の剣=3822;
var 真金の剣=3823;
var 真レッドストーンの剣=3824;
var 真エメラルドの剣=3825;
var 真無限ダイヤの剣=3826;
var 浮游する爪のスポーンエッグ=3828;
var クローエンペラーのスポーンエッグ=3829;
var 無限スパイダーのスポーンエッグ=3830;
var 無限エンダーマンのスポーンエッグ=3831;
var マグマーマンのスポーンエッグ=3832;

var 無限ダイヤ鉱石=248;
var 鉛鉱石=249;
var 儀式=246;
var チャンクブロック=247;

//コラボアイテム
var 神剣ナルカミ=3827;

//SAOmodアイテム
var クリスタライトインゴット=916;
var レジェンダリーインゴット=938;

/*空きID
気にしないでください。ただのメモです(´･ω･｀)
221,224,225,223,222,220,199,197,235,233,232,231,230,218,219*/

//テンプレ
/*
SaveDataCreator by.くうかい
*/
var Save={single:function(key,data){File.write(String(key),String(data));},multi:function(key,data){if(Array.isArray(data)){var temp="";for(var loop1=0;loop1<data.length;loop1++){if(Array.isArray(data[loop1])){for(var loop2=0;loop2<data[loop1].length;loop2++){if(Array.isArray(data[loop1][loop2])){for(var loop3=0;loop3<data[loop1].length;loop3++){temp=temp+data[loop1][loop2][loop3]+":three:";}}else{temp=temp+data[loop1][loop2];}temp=temp+":two:";}}else{temp=temp+data[loop1];}temp=temp+":one:";}File.write(String(key),String(temp));}else{print("配列以外です(´・ω・｀)");}}};
var Load={single:function(key){var data=File.read(String(key));return data;},multi:function(key){var temp1=File.read(String(key));if(temp1.indexOf(":one:")!=-1){var data=new Array();temp1=temp1.split(":one:");for(var loop1=0;loop1<temp1.length;loop1++){if(temp1[loop1].indexOf(":two:")!=-1){data[loop1]=new Array();var temp2=temp1[loop1];temp2=temp2.split(":two:");for(var loop2=0;loop2<temp2.length;loop2++){if(temp2[loop2].indexOf(":three:")!=-1){data[loop1][loop2]=new Array();var temp3=temp2[loop2];temp3=temp3.split(":three:");for(var loop3=0;loop3<temp3.length;loop3++){data[loop1][loop2][loop3]=temp3[loop3];}}else{data[loop1][loop2]=temp2[loop2];}}}else{data[loop1]=temp1[loop1];}}}else{var data='¥0';}print(data);return data;}};
var Remove={single:function(key){File.delete(String(key))},multi:function(key){if(Array.isArray(key)){for(var loop1=0;loop1<key.length;loop1++){File.delete(String(key[loop1]))}}else{print("配列以外です(´・ω・｀)");}}};
var File={directory:new android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/",check:function(fileDirectory){return new java.io.File(fileDirectory).exists();},write:function(fileName,data){worldDirectory=Level.getWorldDir();if(worldDirectory==null){var fullDirectory=File.directory+"minecraftpe/"+modName+"/"+fileName+".sdck";if(!(File.check(fullDirectory))){File.create(File.directory+"minecraftpe/"+modName,fileName+".sdck");}var baseFile=new java.io.File(fullDirectory);var bufferedWriter=new java.io.BufferedWriter(new java.io.FileWriter(baseFile,false));bufferedWriter.write(data);bufferedWriter.close();}else{var fullDirectory=File.directory+"minecraftWorlds/"+worldDirectory+"/"+modName+"/"+fileName+".sdck";if(!(File.check(fullDirectory))){File.create(File.directory+"minecraftWorlds/"+worldDirectory+"/"+modName,fileName+".sdck");}var baseFile=new java.io.File(fullDirectory);var bufferedWriter=new java.io.BufferedWriter(new java.io.FileWriter(baseFile,false));bufferedWriter.write(data);bufferedWriter.close();}},create:function(folder,fileName){try{var createFile=new java.io.File(folder+"/"+fileName);createFile.createNewFile();}catch(error){var createDirectory=new java.io.File(folder);createDirectory.mkdirs();var createFile=new java.io.File(folder+"/"+fileName);createFile.createNewFile();}},read:function(fileName){worldDirectory=Level.getWorldDir();if(worldDirectory==null){var fullDirectory=File.directory+"minecraftpe/"+modName+"/"+fileName+".sdck";}else{var fullDirectory=File.directory+"minecraftWorlds/"+worldDirectory+"/"+modName+"/"+fileName+".sdck";}if(!(File.check(fullDirectory))){return '¥0';}var baseFile=new java.io.File(fullDirectory);var BufferedReader=new java.io.BufferedReader(new java.io.FileReader(baseFile));var readData=BufferedReader.readLine();BufferedReader.close();return readData;},delete:function(fileName){worldDirectory=Level.getWorldDir();if(worldDirectory==null){var fullDirectory=File.directory+"minecraftpe/"+modName+"/"+fileName+".sdck";}else{var fullDirectory=File.directory+"minecraftWorlds/"+worldDirectory+"/"+modName+"/"+fileName+".sdck";}if(File.check(fullDirectory)){new java.io.File(fullDirectory).delete();}}};


/***ChunkGeneratedHook***/
Block.defineBlock(チャンクブロック,"岩盤",[["bedrock",0]],0,0,0);
Block.setDestroyTime(チャンクブロック,-1);
var Chunkin={NX:null,NZ:null,SX:null,SZ:null,count:0};
function Chunk(){
	if(Chunkin.count<=5){
		Chunkin.count++;
	}else{
		var chunkpx=getPlayerX();
		var chunkpz=getPlayerZ();
		var chunkx=Math.floor(chunkpx/16)*16;
		var chunkz=Math.floor(chunkpz/16)*16;
		if(Chunkin.NX==null){
			Chunkin.SX=Math.floor(chunkpx);
			Chunkin.SZ=Math.floor(chunkpz);
			Chunkin.NX=Math.floor((chunkpx-Chunkin.SX)/16);
			Chunkin.NZ=Math.floor((chunkpz-Chunkin.SZ)/16);
		}else{
			if(Math.floor((chunkpx-Chunkin.SX)/16)!==Chunkin.NX||Math.floor((chunkpz-Chunkin.SZ)/16)!==Chunkin.NZ){
				var DX=GetgfDistance();
				for(var i=-DX;i<DX;i++){
					for(var ii=-DX;ii<DX;ii++){
						var sbid=getTile(chunkx+16*i,0,chunkz+16*ii);
						var ebid=getTile(chunkx+16*i+15,0,chunkz+16*ii+15);
						if(sbid!==0&&ebid!==0){
							if(sbid!==チャンクブロック&&ebid!==チャンクブロック){
								ChunkGeneratedHook(chunkx+16*i,chunkz+16*ii,chunkx+16*i+15,chunkz+16*ii+15);
								setTile(chunkx+16*i,0,chunkz+16*ii,チャンクブロック,0);
							}
						}
					}
				}
			}
			Chunkin.NX=Math.floor((chunkpx-Chunkin.SX)/16);
			Chunkin.NZ=Math.floor((chunkpz-Chunkin.SZ)/16);
		}
		Chunkin.count=0;
	}
}

function GetgfDistance(){
	var chupx=Math.floor(getPlayerX());
	var chupz=Math.floor(getPlayerZ());
	var chux1=Math.floor(chupx/16)*16;
	var distancenumber;
	for(var i=16;i>0;i--){
		if(getTile(chux1+16*(i+1)+1,0,chupz)!==0){
			distancenumber=i;
			break;
		}
	}
	return distancenumber;
}

function OreGenerate(x,z,ID,Damage,chunk,count,probability,HMax,HMin){
	var oremass=[[[0,0,0],[0,0,1],[1,0,0],[1,1,1]],[[0,0,0],[0,0,1],[1,0,0],[1,0,1],[1,1,1]],[[0,0,0],[0,1,0],[0,1,1],[1,1,0],[1,1,1]],[[0,0,0],[0,0,1],[1,0,0],[1,0,1],[0,1,0],[0,1,1],[1,1,0],[1,1,1]],[[0,0,0],[0,1,0],[0,1,1],[1,1,0],[1,1,1],[1,2,1]],[[0,0,0],[0,0,1],[1,1,0],[1,1,1],[1,2,0]],[[0,0,0],[0,0,1],[1,0,0],[1,0,1],[1,1,0],[1,1,1],[2,1,0],[2,1,1]]];
	if(Math.floor(Math.random()*(chunk-1))===0){
		var orecount=count+Math.floor(Math.random()*probability)-Math.floor(probability/2);
		var SST=HMin+Math.floor(Math.random()*(HMax-HMin));
		for(var oregn=0;oregn<orecount;oregn++){
			var randpos={X:Math.floor(Math.random()*15),Z:Math.floor(Math.random()*15)};
			var oremassrand=Math.floor(Math.random()*(oremass.length));
			for(var oregn2=0;oregn2<oremass[oremassrand].length;oregn2++){
				setTile(x+randpos.X+oremass[oremassrand][oregn2][0],SST+oremass[oremassrand][oregn2][1],z+randpos.Z+oremass[oremassrand][oregn2][2],ID,Damage);
			}
		}
	}	
}

function Throw(x1,y1,z1,x2,y2,z2,v,entid,fire){
	var rad= -1*Math.atan2(z2-z1,x2-x1);
	var Vx=v*Math.cos(rad);
	var Vz=v*Math.sin(rad);
	var g=0.07840000092983246;
	var l=Math.abs(Math.sqrt((x2-x1) * (x2-x1)+(z2-z1) * (z2-z1)));
	var tobu=Level.spawnMob(x1,y1,z1,entid);
	if(entid==80){
		g=0.058;
	}
	if(fire==1){
		var ball=Level.spawnMob(x1,y1,z1,94)
		Entity.setRenderType(tobu,38);
		Entity.rideAnimal(ball,tobu);
		Entity.setVelX(ball,Vx);
		Entity.setVelY(ball,(y2-y1) * v/l +g*l/(2*v));
		Entity.setVelZ(ball,-1*Vz);
		Entity.setVelX(tobu,Vx);
		Entity.setVelY(tobu,(y2-y1) * v/l +g*l/(2*v));
		Entity.setVelZ(tobu,-1*Vz);
	}
	if(fire==0){
		Entity.setVelX(tobu,Vx);
		Entity.setVelY(tobu,(y2-y1) * v/l +g*l/(2*v));
		Entity.setVelZ(tobu,-1*Vz);
	}
}



//自作関数
function addlightninghook(entity){
	var ent=Entity.getEntityTypeId(entity);
	var ex=Entity.getX(entity);
	var ey=Entity.getY(entity);
	var ez=Entity.getZ(entity);
	var tile=Level.getTile(ex,ey-1,ez);
	var data=Level.getData(ex,ey-1,ez);
	if(ent==93){
		lightningHook(ex,ey,ez,tile,data,entity);
	}
}

function setc(itemId,category,dmg){
	if(1<=itemId<=4096){
		if(dmg>=0){
			if(1<=category<=4){
				Player.addItemCreativeInv(itemId,1,dmg);
				Item.setCategory(itemId,category);
			}
		}
	}
}

function setWeapons(ID, attack, dmg, ent, fire, lightning, nockback, explodeon, explodefire) {
    if (Player.getCarriedItem() == ID) {
        var hp = Entity.getHealth(ent);
        if (hp > attack) {
            Entity.setHealth(ent, hp - attack)
        }
        if (hp < attack && hp > 1) {
            Entity.setHealth(ent, 1)
        }
       if(Level.getGameMode()==0){
        var slot = Player.getSelectedSlotId();
        var enchant = Player.getEnchantments(slot);
        Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
        if (Player.getCarriedItemData() == dmg) {
            Entity.setCarriedItem(Player.getEntity(), 0, 0, 0);
            Level.playSoundEnt(getPlayerEnt(), "random.break", 500, 1)
        }
        if (enchant !== null) {
            for (var en = 0; en < enchant.length; en++) {
                Player.enchant(slot, enchant[en].type, enchant[en].level)
            }
        }
     }
        Item.setMaxDamage(ID, dmg);
        if (fire >= 1) {
            Entity.setFireTicks(ent, fire)
        }
        if (explodeon >= 1) {
            explode(Entity.getX(ent), Entity.getY(ent), Entity.getZ(ent), explodeon, explodefire)
        }
        if (lightning >= 1) {
            Entity.setRenderType(Level.spawnMob(Entity.getX(ent), Entity.getY(ent), Entity.getZ(ent), 69), 41);
            Entity.rideAnimal(Level.spawnMob(Entity.getX(ent), Entity.getY(ent), Entity.getZ(ent), 93), Level.spawnMob(Entity.getX(ent), Entity.getY(ent), Entity.getZ(ent), 69));
            Entity.addEffect(Player.getEntity(), 12, 0.1, 1, false, false)
        }
        if (nockback >= 1) {
            var yaw = Entity.getYaw(Player.getEntity()) % 360;
            var pitch = Entity.getPitch(Player.getEntity()) % 360;
            var Vx = -1 * Math.sin(yaw * Math.PI / 180) * Math.cos(pitch * Math.PI / 180);
            var Vy = -1 * Math.sin(pitch * Math.PI / 180);
            var Vz = Math.cos(yaw * Math.PI / 180) * Math.cos(pitch * Math.PI / 180);
            Entity.setVelX(ent, nockback * Vx);
            Entity.setVelY(ent, nockback * Vy);
            Entity.setVelZ(ent, nockback * Vz)
        }
    }
}

function down(amount){
if(Level.getGameMode()==0){
Entity.setCarriedItem(Player.getEntity(),Player.getCarriedItem(),Player.getCarriedItemCount()-amount,0);
 }
}

/***必殺技処理***/
//聖なる雷
function addGUI(){
    ctx.runOnUiThread(
        new java.lang.Runnable({
            run:function(){
                try{
                  var c = new android.widget.Button(a);
                    c.setText("聖なる雷");
                   var d = new android.view.View.OnClickListener(){
                        onClick:function(){             
sei=1;
Player.setLevel(Player.getLevel()-5);
                        }
                    }
                    c.setOnClickListener(d);
                    ga=new android.widget. PopupWindow(c,250,150);
                    ga.showAtLocation(ctx.getWindow().getDecorView(),android. view.Gravity.RIGHT|android.view.Gravity.TOP,0,330);
                }catch(f){
                    clientMessage(f);
                }
            }
        })
    )
}

//ダッシュ切り
function addGUI1(){
    ctx.runOnUiThread(
        new java.lang.Runnable({
            run:function(){
                try{
                  var c = new android.widget.Button(a);
                    c.setText("ダッシュ切り");
                   var d = new android.view.View.OnClickListener(){
                        onClick:function(){
                            dash=1;
Player.setLevel(Player.getLevel()-30);
                        }
                    }
                    c.setOnClickListener(d);
                    gb=new android.widget. PopupWindow(c,250,150);
                    gb.showAtLocation(ctx.getWindow().getDecorView(),android. view.Gravity.RIGHT|android.view.Gravity.TOP,0,180);
                }catch(f){
                    clientMessage(f);
                }
            }
        })
    )
}

//鋼の魂
function addGUI2(){
    ctx.runOnUiThread(
        new java.lang.Runnable({
            run:function(){
                try{
                  var c = new android.widget.Button(a);
                    c.setText("鋼の魂");
                   var d = new android.view.View.OnClickListener(){
                        onClick:function(){
Player.setLevel(Player.getLevel()-10);
Entity.addEffect(Player.getEntity(),5,400,1);
Entity.addEffect(Player.getEntity(),1,400,1);
                        }
                    }
                    c.setOnClickListener(d);
                    gc=new android.widget. PopupWindow(c,250,150);
                    gc.showAtLocation(ctx.getWindow().getDecorView(),android. view.Gravity.RIGHT|android.view.Gravity.BOTTOM,0,0);
                }catch(f){
                    clientMessage(f);
                }
            }
        })
    )
}

//ギャンブル･エッジ
function addGUI3(){
    ctx.runOnUiThread(
        new java.lang.Runnable({
            run:function(){
                try{
                  var c = new android.widget.Button(a);
                    c.setText("ギャンブル･エッジ");
                   var d = new android.view.View.OnClickListener(){
                        onClick:function(){
                            kin=1;
Player.setLevel(Player.getLevel()-10);
                        }
                    }
                    c.setOnClickListener(d);
                    gd=new android.widget. PopupWindow(c,250,150);
                    gd.showAtLocation(ctx.getWindow().getDecorView(),android. view.Gravity.RIGHT|android.view.Gravity.BOTTOM,0,0);
                }catch(f){
                    clientMessage(f);
                }
            }
        })
    )
}

//スーパーエクスプロード
function addGUI4(){
    ctx.runOnUiThread(
        new java.lang.Runnable({
            run:function(){
                try{
                  var c = new android.widget.Button(a);
                    c.setText("スーパーエクスプロード");
                   var d = new android.view.View.OnClickListener(){
                        onClick:function(){
                            sexplod=1;
Player.setLevel(Player.getLevel()-20);
Entity.addEffect(Player.getEntity(),11,80,4,false,false);
                        }
                    }
                    c.setOnClickListener(d);
                    ge=new android.widget. PopupWindow(c,250,150);
                    ge.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.BOTTOM,0,0);
                }catch(f){
                    clientMessage(f);
                }
            }
        })
    )
}

//アイスバリア
function addGUI5(){
	ctx.runOnUiThread(
		new java.lang.Runnable({
			run:function(){
				try{
					var c=new android.widget.Button(a);
					c.setText("アイスバリア");
					c.setOnClickListener(
						new android.view.View.OnClickListener(){
							onClick:function(){
								aice=1;
								Player.setLevel(Player.getLevel()-5);
							}
						}
					);
					gf=new android.widget. PopupWindow(c,250,150);
					gf.showAtLocation(ctx.getWindow().getDecorView(),android. view.Gravity.RIGHT|android.view.Gravity.BOTTOM,0,0);
				}catch(f){
                    clientMessage(f);
                }
            }
        })
    )
}


//GUI消す
function closeGUI(){
	ctx.runOnUiThread(
		new java.lang.Runnable({
			run:function(){
				try{
					ga.dismiss();
				}catch(er){
					clientMessage(er);
				}
			}
		})
	);
}

function closeGUI1(){
	ctx.runOnUiThread(
		new java.lang.Runnable({
			run:function(){
				try{
					gb.dismiss();
				}catch(er){
					clientMessage(er);
				}
			}
		})
	);
}

function closeGUI2(){
	ctx.runOnUiThread(
		new java.lang.Runnable({
			run:function(){
				try{
					gc.dismiss();
				}catch(er){
					clientMessage(er);
				}
			}
		})
	);
}

function closeGUI3(){
	ctx.runOnUiThread(
		new java.lang.Runnable({
			run:function(){
				try{
					gd.dismiss();
				}catch(er){
					clientMessage(er);
				}
			}
		})
	);
}

function closeGUI4(){
	ctx.runOnUiThread(
    	new java.lang.Runnable({
			run:function(){
				try{
					ge.dismiss();
				}catch(er){
					clientMessage(er);
				}
			}
		})
	);
}

function closeGUI5(){
	ctx.runOnUiThread(
		new java.lang.Runnable({
			run: function(){
				try{
					gf.dismiss();
				}catch(er){
					clientMessage(er);
				}
			}
		})
	);
}

function addLightning(x,y,z){
	Entity.setRenderType(Level.spawnMob(x,y,z,69),41);
	Entity.rideAnimal(Level.spawnMob(x,y,z,93),Level.spawnMob(x,y,z,69));
}

/***コマンド追加***/
function procCmd(Cmd){
	var Cmd=Cmd.split(" ");
	//hard 0
	if(Cmd[0]=="hard"&&Cmd[1]=="0"){
		if(df!==2){
			sgui=1;
			df=2;
			clientMessage("§cハードモードになりました");
		}else{
			clientMessage("§c既にハードモードです");
		}
	}
	//hard 1
	if(Cmd[0]=="hard"&&Cmd[1]=="1"){
		if(df!==3){
			sgui=1;
			df=3;
			clientMessage("§cスーパーハードモードになりました");
		}else{
			clientMessage("§c既にスーパーハードモードです");
		}
	}
	//easy
	if(Cmd=="easy"){
		if(df!==0){
			sgui=1;
			df=0;
			clientMessage("§eイージーモードになりました");
		}else{
			clientMessage("§e既にイージーモードです");
		}
	}
	//normal
	if(Cmd=="normal"){
		if(df!==1){
			sgui=1;
			df=1;
			clientMessage("§eノーマルモードになりました");
		}else{
			clientMessage("§e既にノーマルモードです");
		}
	}
	//which
	if(Cmd=="which"){
		if(df==2){
			clientMessage("§c現在ハードモードです");
		}else if(df==0){
			clientMessage("§e現在イージーモードです");
		}else if(df==1){
			clientMessage("§e現在ノーマルモードです");
		}else if(df==3){
			clientMessage("§c現在スーパーハードモードです");
		}
	}
	//start
	if(Cmd[0]=="start"){
		if(Cmd[1]=="on"){
			start=0;
			clientMessage("スタートメッセージをONにました");
		}
		if(Cmd[1]=="off"){
			start=1;
			clientMessage("スタートメッセージをOFFにしました");
		}
	}
	//modehelp
	if(Cmd[0]=="modehelp"){
		if(Cmd[1]=="1"||Cmd[1]==null){
			clientMessage("§6Infinite Diamond Modコマンド一覧"+" §f1/2");
			clientMessage("§6|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
			clientMessage("§c/hard 1"+"\n難易度をスーパーハードモードにします。");
			clientMessage("§c/hard 0"+"\n難易度をハードにします。");
			clientMessage("§e/normal"+"\n難易度をノーマルモードにします。");
			clientMessage("§e/easy"+"\n難易度をイージーモードにします。");
			clientMessage("§6|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
		}
		if(Cmd[1]=="2"){
			clientMessage("§6Infinite Diamond Modコマンド一覧"+" §f2/2");
			clientMessage("§6|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
			clientMessage("§a/which"+"\n難易度を確かめます。");
			clientMessage("§a/modehelp"+"\nInfinite Diamond Modのコマンドヘルプを表示します。");
clientMessage("§a/start <on or off>"+"\nゲームスタート時のチャットのon offを切り替えます");
			clientMessage("§a/special <数字>"+"\n必殺技のヘルプを表示します");
			clientMessage("§6|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
		}
	}
	//special
	if(Cmd[0]=="special"){
		if(Cmd[1]==null||Cmd[1]==1){
			clientMessage("§6必殺技ヘルプ" +" §f1/3");
			clientMessage("§a||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
			clientMessage("§7真 鉄の剣"+"\n§a「鋼の魂」"+"\nエンチャントレベル10以上でボタン表示\n押すと一定時間攻撃力上昇のエフェクトと移動速度上昇のエフェクトが付きます\n"+"\n§e真 金の剣"+"\n§a「ギャンブル･エッジ」"+"\nエンチャントレベル10以上でボタン表示\n押した後攻撃すると確率で1ダメージか100ダメージを与えます");
			clientMessage("§a||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
		}
		if(Cmd[1]==2){
			clientMessage("§6必殺技ヘルプ" +" §f2/3");
			clientMessage("§a||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
			clientMessage("§c真 レッドストーンの剣"+"\n§a「スーパーエクスプロード」"+"\nエンチャントレベル20以上でボタン表示\n押すと3秒後に超爆発を起こします\n"+"\n§9真 ラピスラズリの剣"+"\n§a「アイスバリア」"+"\nエンチャントレベル5以上でボタン表示\n押すと自分の回りに一定時間氷のバリアを張ります");
			clientMessage("§a||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
		}
		if(Cmd[1]==3){
			clientMessage("§6必殺技ヘルプ" +" §f3/3");
			clientMessage("§a||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
			clientMessage("§6聖剣 エクスカリバー"+"\n§a「聖なる雷」"+"\nエンチャントレベル5以上でボタン表示\n押した後に地面タップで大量の雷を落とす\n"+"\n§a「ダッシュ切り」"+"\nエンチャントレベル25以上でボタン表示\n押した後に攻撃すると相手に向かって突っ込む\nその際相手に30ダメージを与える");
			clientMessage("§a||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
		}
	}
}

/**レンダラー**/
//浮遊する爪
function addTumeRenderType(renderer){
	var model=renderer.getModel();
	var head=model.getPart("head").clear();
	var body=model.getPart("body").clear();
	var rArm=model.getPart("rightArm").clear();
	var lArm=model.getPart("leftArm").clear();
	var rLeg=model.getPart("rightLeg").clear();
	var lLeg=model.getPart("leftLeg").clear();

//レンダラーリセット
	head.clear();
	body.clear();
	rArm.clear();
	lArm.clear();
	rLeg.clear();
	lLeg.clear();

//テクスチャ指定
	head.setTextureOffset(-21,54,true);
	rArm.setTextureOffset(0,0,true);
	lArm.setTextureOffset(-54,28,true);

//頭
	head.addBox(-2,-8,-4,2,2,8);
	head.addBox(-1.5,-6.8,-4.8,1.5,1.5,1.5);

//右腕
	rArm.addBox(-3,-2,-4,2,2,8);
	rArm.addBox(-1.7,-1.5,-4.8,1,1,1);

//左腕
	lArm.addBox(-1,-2,-4,2,2,8);
	lArm.addBox(-1.2,-1.5,-4.8,1,1,1);
}

//クローエンペラー
function addDonSlayerRenderType(renderer){
	var model=renderer.getModel();
	var head=model.getPart("head").clear();
	var body=model.getPart("body").clear();
	var rArm=model.getPart("rightArm").clear();
	var lArm=model.getPart("leftArm").clear();
	var rLeg=model.getPart("rightLeg").clear();
	var lLeg=model.getPart("leftLeg").clear();
	
//レンダラーリセット
	head.clear();
	body.clear();
	rArm.clear();
	lArm.clear();
	rLeg.clear();
	lLeg.clear();
	
//テクスチャ指定
	head.setTextureOffset(0,0,true);
	body.setTextureOffset(64,0,true);
	
//テクスチャサイズ
	head.setTextureSize(63,32);
	body.setTextureSize(16,32);
	
//上の爪
	head.addBox(-16,-196,-70,32,32,160);
	head.addBox(-12,-188,-80,24,24,24);
	head.addBox(-9,-182,-86,18,18,18);
	head.addBox(-6,-176,-90,12,12,12);
	head.addBox(-4,-171,-94,8,8,8);
	head.addBox(-3,-168,-98,6,6,6);
	head.addBox(-2,-165,-101,4,4,4);
	head.addBox(-1,-162,-102,2,2,2);
	
//右の爪
	head.addBox(68,-86,-70,32,32,160);
	head.addBox(64,-78,-80,24,24,24);
	head.addBox(61,-72,-86,18,18,18);
	head.addBox(58,-66,-90,12,12,12);
	head.addBox(56,-61,-94,8,8,8);
	head.addBox(55,-58,-98,6,6,6);
	head.addBox(54,-55,-101,4,4,4);
	head.addBox(53,-52,-102,2,2,2);
	
//左の爪
	head.addBox(-100,-86,-70,32,32,160);
	head.addBox(-87,-78,-80,24,24,24);
	head.addBox(-79,-72,-86,18,18,18);
	head.addBox(-71,-66,-90,12,12,12);
	head.addBox(-65,-61,-94,8,8,8);
	head.addBox(-61,-58,-98,6,6,6);
	head.addBox(-58,-55,-101,4,4,4);
	head.addBox(-55,-52,-102,2,2,2);
	
//後ろの柱
	body.addBox(-16,-230,180,30,230,30);
	body.addBox(68,-230,130,30,230,30);
	body.addBox(-100,-230,130,30,230,30);
	body.addBox(152,-230,80,30,230,30);
	body.addBox(-184,-230,80,30,230,30);
	body.addBox(172,-230,0,30,230,30);
	body.addBox(-204,-230,0,30,230,30);
}

//クローエンペラー第二形態
function addDonSlayer2RenderType(renderer){
	var model=renderer.getModel();
	var head=model.getPart("head").clear();
	var body=model.getPart("body").clear();
	var rArm=model.getPart("rightArm").clear();
	var lArm=model.getPart("leftArm").clear();
	var rLeg=model.getPart("rightLeg").clear();
	var lLeg=model.getPart("leftLeg").clear();
	
//レンダラーリセット
	head.clear();
	body.clear();
	rArm.clear();
	lArm.clear();
	rLeg.clear();
	lLeg.clear();
	
//テクスチャ指定
	head.setTextureOffset(0,0,true);
	body.setTextureOffset(16,16,true);
	
//上の爪
	head.addBox(-16,-196,-70,32,32,160);
	head.addBox(-12,-188,-80,24,24,24);
	head.addBox(-9,-182,-86,18,18,18);
	head.addBox(-6,-176,-90,12,12,12);
	head.addBox(-4,-171,-94,8,8,8);
	head.addBox(-3,-168,-98,6,6,6);
	head.addBox(-2,-165,-101,4,4,4);
	head.addBox(-1,-162,-102,2,2,2);
	
//右の爪
	head.addBox(68,-86,-70,32,32,160);
	head.addBox(64,-78,-80,24,24,24);
	head.addBox(61,-72,-86,18,18,18);
	head.addBox(58,-66,-90,12,12,12);
	head.addBox(56,-61,-94,8,8,8);
	head.addBox(55,-58,-98,6,6,6);
	head.addBox(54,-55,-101,4,4,4);
	head.addBox(53,-52,-102,2,2,2);
	
//左の爪
	head.addBox(-100,-86,-70,32,32,160);
	head.addBox(-87,-78,-80,24,24,24);
	head.addBox(-79,-72,-86,18,18,18);
	head.addBox(-71,-66,-90,12,12,12);
	head.addBox(-65,-61,-94,8,8,8);
	head.addBox(-61,-58,-98,6,6,6);
	head.addBox(-58,-55,-101,4,4,4);
	head.addBox(-55,-52,-102,2,2,2);
	
//後ろの柱
	body.addBox(-16,-230,180,30,230,30);
	body.addBox(68,-230,130,30,230,30);
	body.addBox(-100,-230,130,30,230,30);
	body.addBox(152,-230,80,30,230,30);
	body.addBox(-184,-230,80,30,230,30);
	body.addBox(172,-230,0,30,230,30);
	body.addBox(-204,-230,0,30,230,30);
}


addTumeRenderType(TumeRenderType);
addDonSlayerRenderType(SlayerRenderType);
addDonSlayer2RenderType(Slayer2RenderType);

/*****json風アイテム追加*****/
//アイテム追加
var item=[
//無限ダイヤ
	{
		"name":"無限ダイヤ",
		"ID":無限ダイヤ,
		"texture":"mugenD",
		"group":0,
		"stack":64,
		"category":2
	},
//レッドストーンの棒
	{
		"name":"レッドストーンの棒",
		"ID":レッドストーンの棒,
		"texture":"redS_stick",
		"group":0,
		"stack":64,
		"category":2,
	},
//ラピスラズリの棒
	{
		"name":"ラピスラズリの棒",
		"ID":ラピスラズリの棒,
		"texture":"lapis_stick",
		"group":0,
		"stack":64,
		"category":2
	},
//金の棒
	{
		"name":"金の棒",
		"ID":金の棒,
		"texture":"gold_stick",
		"group":0,
		"stack":64,
		"category":2
	},
//鉄の棒
	{
		"name":"鉄の棒",
		"ID":鉄の棒,
		"texture":"iron_stick",
		"group":0,
		"stack":64,
		"category":2
	},
//ダイヤの棒
	{
		"name":"ダイヤの棒",
		"ID":ダイヤの棒,
		"texture":"dia_stick",
		"group":0,
		"stack":64,
		"category":2
	},
//無限ダイヤの棒
	{
		"name":"無限ダイヤの棒",
		"ID":無限ダイヤの棒,
		"texture":"mugenD_stick",
		"group":0,
		"stack":64,
		"category":2
	},
//石炭の棒
	{
		"name":"石炭の棒",
		"ID":石炭の棒,
		"texture":"coal_stick",
		"group":0,
		"stack":64,
		"category":2
	},
//エメラルドの棒
	{
		"name":"エメラルドの棒",
		"ID":エメラルドの棒,
		"texture":"emerald_stick",
		"group":0,
		"stack":64,
		"category":2
	},
//雷の石
	{
		"name":"雷の石",
		"ID":雷の石,
		"texture":"lightning_stone",
		"group":0,
		"stack":64,
		"category":2
	},
//ダイヤの粉
	{
		"name":"ダイヤの粉",
		"ID":ダイヤの粉,
		"texture":"diamond_powder",
		"group":0,
		"stack":64,
		"category":4
	},
//妖気に満ちたポーション
	{
		"name":"妖気に満ちたポーション",
		"ID":妖気に満ちたポーション,
		"texture":"youki",
		"group":0,
		"stack":64,
		"category":4
	},
//ガラスのコップ
	{
		"name":"ガラスのコップ",
		"ID":ガラスのコップ,
		"texture":"garasu_koppu",
		"group":0,
		"stack":64,
		"category":4
	},
//ワイングラス
	{
		"name":"ワイングラス",
		"ID":ワイングラス,
		"texture":"wain_gurasu",
		"group":0,
		"stack":64,
		"category":4
	},
//鉛インゴット
	{
		"name":"鉛インゴット",
		"ID":鉛インゴット,
		"texture":"namari_ing",
		"group":0,
		"stack":64,
		"category":2
	},
//無限の星
	{
		"name":"無限の星",
		"ID":無限の星,
		"texture":"mugenstar",
		"group":0,
		"stack":64,
		"category":2
	},
//無限の矢
	{
		"name":"無限の矢",
		"ID":無限の矢,
		"texture":"mugenya",
		"group":0,
		"stack":64,
		"category":2
	},
//無限の原始核
	{
		"name":"無限の原子核",
		"ID":無限の原子核,
		"texture":"mugenkaku",
		"group":0,
		"stack":64,
		"category":2
	},
//生命の源
	{
		"name":"生命の源",
		"ID":生命の源,
		"texture":"minamoto",
		"group":0,
		"stack":64,
		"category":2
	},
//炎の宝玉
	{
		"name":"炎の宝玉",
		"ID":炎の宝玉,
		"texture":"honoo",
		"group":0,
		"stack":64,
		"category":2
	},
//聖なる宝玉
	{
		"name":"聖なる宝玉",
		"ID":聖なる宝玉,
		"texture":"hougyoku",
		"group":0,
		"stack":64,
		"category":2
	},
//無限ゾンビ出現
	{
		"name":"無限ゾンビ出現",
		"ID":無限ゾンビのスポーンエッグ,
		"texture":"spawn_mugenzombie",
		"group":0,
		"stack":64,
		"category":3
	},
//無限スケルトン出現
	{
		"name":"無限スケルトン出現",
		"ID":無限スケルトンのスポーンエッグ,
		"texture":"spawn_mugenskeleton",
		"group":0,
		"stack":64,
		"category":3
	},
//無限クリーパー出現
	{
		"name":"無限クリーパー出現",
		"ID":無限クリーパーのスポーンエッグ,
		"texture":"spawn_mugencreeper",
		"group":0,
		"stack":64,
		"category":3
	},
//無限スパイダー出現
	{
		"name":"無限スパイダー出現",
		"ID":無限スパイダーのスポーンエッグ,
		"texture":"spawn_egg",
		"group":11,
		"stack":64,
		"category":3
	},
//無限エンダーマン出現
	{
		"name":"無限エンダーマン出現",
		"ID":無限エンダーマンのスポーンエッグ,
		"texture":"spawn_egg",
		"group":7,
		"stack":64,
		"category":3
	},
//無限ブレイズ出現
	{
		"name":"§6無限ブレイズ出現",
		"ID":無限ブレイズのスポーンエッグ,
		"texture":"spawn_mugenblaze",
		"group":0,
		"stack":64,
		"category":3
	},
//子分の無限ブレイズ出現させる
	{
		"name":"無限ブレイズ出現",
		"ID":無限ブレイズのスポーンエッグ子分,
		"texture":"spawn_mugenblaze",
		"group":0,
		"stack":64,
		"category":3
	},
//魔王出現
	{
		"name":"魔王出現",
		"ID":魔王のスポーンエッグ,
		"texture":"spawn_egg",
		"group":19,
		"stack":64,
		"category":3
	},
//浮游する爪出現
	{
		"name":"浮游する爪出現",
		"ID":浮游する爪のスポーンエッグ,
		"texture":"spawn_egg",
		"group":12,
		"stack":64,
		"category":3
	},
//クローエンペラー出現
	{
		"name":"クローエンペラー出現",
		"ID":クローエンペラーのスポーンエッグ,
		"texture":"spawn_egg",
		"group":12,
		"stack":64,
		"category":3
	},
//マグマーマン出現
	{
		"name":"マグマーマン出現",
		"ID":マグマーマンのスポーンエッグ,
		"texture":"spawn_egg",
		"group":7,
		"stack":64,
		"category":3
	},
//魔王の魂
	{
		"name":"魔王の魂",
		"ID":魔王の魂,
		"texture":"maoutamasii",
		"group":0,
		"stack":64,
		"category":2
	},
//全ての食材のもと
	{
		"name":"全ての食材のもと",
		"ID":全ての食材のもと,
		"texture":"godfood",
		"group":0,
		"stack":64,
		"category":2
	},
//無限ダイヤの粉
	{
		"name":"無限ダイヤの粉",
		"ID":無限ダイヤの粉,
		"texture":"mugenD_kona",
		"group":0,
		"stack":64,
		"category":4
	}
];

//武器の追加
var sword=[
//レッドストーンの剣
 {
  "name":"レッドストーンの剣",
  "ID":レッドストーンの剣,
  "texture":"Redstorn_Sword",
  "group":0,
  "stack":1,
  "attack":6,
  "data":180,
  "category":3,
 },
//ラピスラズリの剣 
 {
  "name":"ラピスラズリの剣",
  "ID":ラピスラズリの剣,
  "texture":"Lapis Lzuli_Sword",
  "group":0,
  "stack":1,
  "attack":7,
  "data":258,
  "category":3
 },
//エメラルドの剣
 {
  "name":"エメラルドの剣",
  "ID":エメラルドの剣,
  "texture":"emerald_sword",
  "group":0,
  "stack":1,
  "attack":8,
  "data":874,
  "category":3
 },
//無限ダイヤの剣
 {
  "name":"無限ダイヤの剣",
  "ID":無限ダイヤの剣,
  "texture":"mugenD_Sword",
  "group":0,
  "stack":1,
  "attack":11,
  "data":1869,
  "category":3
 },
//無限ダイヤの剣改
 {
  "name":"§4無限ダイヤの剣 改",
  "ID":無限ダイヤの剣改,
  "texture":"mugenD_sword_kai",
  "group":0,
  "stack":1,
  "attack":17,
  "data":3738,
  "category":3
 },
//ダイヤの剣改
 {
  "name":"§bダイヤの剣 改",
  "ID":ダイヤの剣改,
  "texture":"dia_sword_kai",
  "group":0,
  "stack":1,
  "attack":15,
  "data":3124,
  "category":3
 },
//鉄の剣改
 {
  "name":"§7鉄の剣 改",
  "ID":鉄の剣改,
  "texture":"iron_sword_kai",
  "group":0,
  "stack":1,
  "attack":12,
  "data":502,
  "category":3
 },
//金の剣改
 {
  "name":"§e金の剣 改",
  "ID":金の剣改,
  "texture":"gold_sword_kai",
  "group":0,
  "stack":1,
  "attack":9,
  "data":66,
  "category":3
 },
//レッドストーンの剣改
 {
  "name":"§cレッドストーンの剣 改",
  "ID":レッドストーンの剣改,
  "texture":"redS_sword_kai",
  "group":0,
  "stack":1,
  "attack":11,
  "data":306,
  "category":3,
  "explode":1,
  "expfire":false
 },
//ラピスラズリの剣改
 {
  "name":"§9ラピスラズリの剣 改",
  "ID":ラピスラズリの剣改,
  "texture":"lapis_sword_kai",
  "group":0,
  "stack":1,
  "attack":13,
  "data":516,
  "category":3
 },
//エメラルドの剣改
 {
  "name":"§aエメラルドの剣 改",
  "ID":エメラルドの剣改,
  "texture":"emerald_sword_kai",
  "group":0,
  "stack":1,
  "attack":14,
  "data":1748,
  "category":3
 },
//宝剣インフィニティソード
 {
  "name":"§6宝剣 インフィニティソード",
  "ID":宝剣インフィニティソード,
  "texture":"infinite_sword",
  "group":0,
  "stack":1,
  "attack":19,
  "data":5000,
  "category":3,
  "fire":15,
  "light":1
 },
//石炭の剣
 {
  "name":"石炭の剣",
  "ID":石炭の剣,
  "texture":"coal_sword",
  "group":0,
  "stack":1,
  "attack":5,
  "data":46,
  "category":3
 },
//雷槍ケラウノス
 {
  "name":"§b雷槍 ケラウノス",
  "ID":雷槍ケラウノス,
  "texture":"lightning_spear",
  "group":0,
  "stack":1,
  "attack":9,
  "data":498,
  "category":3,
  "light":1
 },
//神剣インフィニティソード改
 {
  "name":"§6神剣 インフィニティソード 改",
  "ID":神剣インフィニティソード改,
  "texture":"infinite_sword",
  "group":1,
  "stack":1,
  "attack":21,
  "data":5200,
  "category":3,
  "light":1,
  "fire":15
 },
//真ダイヤの剣
 {
  "name":"§b真 ダイヤの剣",
  "ID":真ダイヤの剣,
  "texture":"shin_dia_sword",
  "group":0,
  "stack":1,
  "attack":18,
  "data":2890,
  "category":3
 },
//真鉄の剣
 {
  "name":"§f真 鉄の剣",
  "ID":真鉄の剣,
  "texture":"shin_iron_sword",
  "group":0,
  "stack":1,
  "attack":14,
  "data":680,
  "category":3
 },
//真金の剣
 {
  "name":"§e真 金の剣",
  "ID":真金の剣,
  "texture":"shin_gold_sword",
  "group":0,
  "stack":1,
  "attack":10,
  "data":380,
  "category":3
 },
//真レッドストーンの剣
 {
  "name":"§c真 レッドストーンの剣",
  "ID":真レッドストーンの剣,
  "texture":"shin_red_sword",
  "group":0,
  "stack":1,
  "attack":15,
  "data":750,
  "category":3,
  "explode":2,
  "expfire":false
 },
//真ラピスラズリの剣
 {
  "name":"§9真 ラピスラズリの剣",
  "ID":真ラピスラズリの剣,
  "texture":"shin_lapis_sword",
  "group":0,
  "stack":1,
  "attack":15,
  "data":739,
  "category":3
 },
//真エメラルドの剣
 {
  "name":"§a真 エメラルドの剣",
  "ID":真エメラルドの剣,
  "texture":"shin_eme_sword",
  "group":0,
  "stack":1,
  "attack":17,
  "data":1005,
  "category":3
 },
//真無限ダイヤの剣
 {
  "name":"§6真 無限ダイヤの剣",
  "ID":真無限ダイヤの剣,
  "texture":"shin_mugenD_sword",
  "group":0,
  "stack":1,
  "attack":19,
  "data":3000,
  "category":3
 },
//黒の杖
 {
  "name":"黒の杖",
  "ID":黒の杖,
  "texture":"kurotue",
  "group":0,
  "stack":1,
  "category":3
 },
//刀
 {
  "name":"刀",
  "ID":刀,
  "texture":"katana",
  "group":0,
  "stack":1,
  "attack":9,
  "data":543,
  "category":3
 },
//黒刀
 {
  "name":"黒刀",
  "ID":黒刀,
  "texture":"katana",
  "group":1,
  "stack":1,
  "attack":14,
  "data":869,
  "category":3
 },
//妖刀村正
 {
  "name":"妖刀 村正",
  "ID":妖刀村正,
  "texture":"katana",
  "group":2,
  "stack":1,
  "attack":17,
  "data":1078,
  "category":3
 },
//メイス
 {
  "name":"メイス",
  "ID":メイス,
  "texture":"meisu",
  "group":0,
  "stack":1,
  "attack":8,
  "data":523,
  "category":3
 },
//強化メイス
 {
  "name":"強化メイス",
  "ID":強化メイス,
  "texture":"meisu",
  "group":0,
  "stack":1,
  "attack":14,
  "data":540,
  "category":3
 },
//聖剣エクスカリバー
 {
  "name":"§6聖剣 エクスカリバー",
  "ID":聖剣エクスカリバー,
  "texture":"ekusukaribaa",
  "group":0,
  "stack":1,
  "attack":24,
  "data":6890,
  "category":3,
  "fire":15
 },
//神剣ナルカミ
 {
  "name":"§6神剣 ナルカミ",
  "ID":神剣ナルカミ,
  "texture":"narukami",
  "group":0,
  "stack":1,
  "category":3,
  "fire":15,
  "nock":2,
  "attack":23,
  "data":5830,
 }
];

//防具追加
var armor=[
//無限ダイヤのヘルメット
 {
  "name":"無限ダイヤのヘルメット",
  "ID":無限ダイヤのヘルメット,
  "icon":"mugendia1",
  "group":0,
  "texture":"mugendia_1.png",
  "defense":3,
  "data":2000,
  "aid":0
 },
//無限ダイヤのチェストプレート
 {
  "name":"無限ダイヤのチェストプレート",
  "ID":無限ダイヤのチェストプレート,
  "icon":"mugendia2",
  "group":0,
  "texture":"mugendia_1.png",
  "defense":8,
  "data":2000,
  "aid":1
 },
//無限ダイヤのレギンス
 {
  "name":"無限ダイヤのレギンス",
  "ID":無限ダイヤのレギンス,
  "icon":"mugendia3",
  "group":0,
  "texture":"mugendia_2.png",
  "defense":6,
  "data":2000,
  "aid":2
 },
//無限ダイヤのブーツ
 {
  "name":"無限ダイヤのブーツ",
  "ID":無限ダイヤのブーツ,
  "icon":"mugendia4",
  "group":0,
  "texture":"mugendia_1.png",
  "defense":3,
  "data":2000,
  "aid":3
 },
//魔王のヘルメット
 {
  "name":"魔王のヘルメット",
  "ID":魔王のヘルメット,
  "icon":"maou_h",
  "group":0,
  "texture":"maous_1.png",
  "defense":4,
  "data":1500,
  "aid":0
 },
//魔王のチェストプレート
 {
  "name":"魔王のチェストプレート",
  "ID":魔王のチェストプレート,
  "icon":"maou_c",
  "group":0,
  "texture":"maous_1.png",
  "defense":9,
  "data":1500,
  "aid":1
 },
//魔王のレギンス
 {
  "name":"魔王のレギンス",
  "ID":魔王のレギンス,
  "icon":"maou_r",
  "group":0,
  "texture":"maous_2.png",
  "defense":7,
  "data":1500,
  "aid":2
 },
//魔王のブーツ
 {
  "name":"魔王のブーツ",
  "ID":魔王のブーツ,
  "icon":"maou_b",
  "group":0,
  "texture":"maous_1.png",
  "defense":4,
  "data":1500,
  "aid":3
 },
//鉛のヘルメット
 {
  "name":"鉛のヘルメット",
  "ID":鉛のヘルメット,
  "icon":"namari_h",
  "group":0,
  "texture":"namari_1.png",
  "defense":2,
  "data":300,
  "aid":0
 },
//鉛のチェストプレート
 {
  "name":"鉛のチェストプレート",
  "ID":鉛のチェストプレート,
  "icon":"namari_c",
  "group":0,
  "texture":"namari_1.png",
  "defense":6,
  "data":300,
  "aid":1
 },
//鉛のレギンス
 {
  "name":"鉛のレギンス",
  "ID":鉛のレギンス,
  "icon":"namari_r",
  "group":0,
  "texture":"namari_2.png",
  "defense":5,
  "data":300,
  "aid":2
 },
//鉛のブーツ
 {
  "name":"鉛のブーツ",
  "ID":鉛のブーツ,
  "icon":"namari_b",
  "group":0,
  "texture":"namari_1.png",
  "defense":1.5,
  "data":300,
  "aid":3
 }
];

//食べ物追加
var food=[
//ブドウ
 	{
		"name":"ブドウ",
		"ID":ブドウ,
		"texture":"budou",
		"group":0,
		"reco":6
	},
//オレンジ
	{
		"name":"オレンジ",
		"ID":オレンジ,
		"texture":"orenzi",
		"group":0,
		"reco":6
	},
//ブドウジュース
	{
		"name":"ブドウジュース",
		"ID":ブドウジュース,
		"texture":"budou_juusu",
		"group":0,
		"reco":8
	},
//オレンジジュース
	{
		"name":"オレンジジュース",
		"ID":オレンジジュース,
		"texture":"orenzi_juusu",
		"group":0,
		"reco":7
	},
//赤ワイン
	{
		"name":"赤ワイン",
		"ID":赤ワイン,
		"texture":"wain",
		"group":0,
		"reco":10
	},
];


//盾追加
var shield=[
//ダイヤの盾
 {
  "name":"ダイヤの盾",
  "ID":ダイヤの盾,
  "texture":"dia_tate",
  "group":0,
  "defense":3,
  "data":400,
  "bash":3
 },
//鉄の盾
 {
  "name":"鉄の盾",
  "ID":鉄の盾,
  "texture":"iron_tate",
  "group":0,
  "defense":1.5,
  "data":60,
  "bash":1
 },
//金の盾
 {
  "name":"金の盾",
  "ID":金の盾,
  "texture":"gold_tate",
  "group":0,
  "defense":0.5,
  "data":30,
  "bash":8
 },
//レッドストーンの盾
 {
  "name":"レッドストーンの盾",
  "ID":レッドストーンの盾,
  "texture":"red_tate",
  "group":0,
  "defense":2,
  "data":80,
  "bash":2
 },
//ラピスラズリの盾
 {
  "name":"ラピスラズリの盾",
  "ID":ラピスラズリの盾,
  "texture":"lapis_tate",
  "group":0,
  "defense":2.5,
  "data":100,
  "bash":4
 },
//エメラルドの盾
 {
  "name":"エメラルドの盾",
  "ID":エメラルドの盾,
  "texture":"eme_tate",
  "group":0,
  "defense":2.8,
  "data":130,
  "bash":2
 },
//無限ダイヤの盾
 {
  "name":"無限ダイヤの盾",
  "ID":無限ダイヤの盾,
  "texture":"mugen_tate",
  "group":0,
  "defense":3.5,
  "data":600,
  "bash":3
 }
];

//コラボアイテム
var col=[
//レジェンダリーインゴット
 {
  "name":"レジェンダリーインゴット",
  "ID":レジェンダリーインゴット,
  "texture":"regendo",
  "group":0,
  "stack":64,
 },
//クリスタライトインゴット
 {
  "name":"クリスタライトインゴット",
  "ID":クリスタライトインゴット,
  "texture":"kurisuto",
  "group":0,
  "stack":64,
 }
];

try{
//ブロック追加
	Block.defineBlock(無限ダイヤ鉱石,"無限ダイヤ鉱石",[["mugenD_ore",0],["mugenD_ore",0],["mugenD_ore",0],["mugenD_ore",0],
["mugenD_ore",0],["mugenD_ore",0]],4,true,0);

	Block.defineBlock(儀式,"儀式",[["gisiki",2],["gisiki",1],["gisiki",0],["gisiki",0],["gisiki",0],["gisiki",0],["gisiki",2],["gisiki",1],["gisiki",0],["gisiki",0],["gisiki",0],["gisiki",0],["gisiki",2],["gisiki",1],["gisiki",0],["gisiki",0],["gisiki",0],["gisiki",0],["gisiki",2],["gisiki",1],["gisiki",0],["gisiki",0],["gisiki",0],["gisiki",0],["gisiki",2],["gisiki",1],["gisiki",0],["gisiki",0],["gisiki",0],["gisiki",0],["maou_gisiki",2],["maou_gisiki",0],["maou_gisiki",1],["maou_gisiki",1],["maou_gisiki",1],["maou_gisiki",1],["maou_gisiki",2],["maou_gisiki",0],["maou_gisiki",1],["maou_gisiki",1],["maou_gisiki",1],["maou_gisiki",1],["maou_gisiki",2],["maou_gisiki",0],["maou_gisiki",1],["maou_gisiki",1],["maou_gisiki",1],["maou_gisiki",1],["maou_gisiki",2],["maou_gisiki",0],["maou_gisiki",1],["maou_gisiki",1],["maou_gisiki",1],["maou_gisiki",1],["maou_gisiki",2],["maou_gisiki",0],["maou_gisiki",1],["maou_gisiki",1],["maou_gisiki",1],["maou_gisiki",1],["glowing_obsidian",0],["stonebrick",3],["glowing_obsidian",0],["glowing_obsidian",0],["glowing_obsidian",0],["glowing_obsidian",0]],2,true,0);

	Block.defineBlock(鉛鉱石,"鉛鉱石",[["namari",0],["namari",0],["namari",0],["namari",0],["namari",0],["namari",0]],4,true,0);


/*****json風コード処理*****/
//アイテム追加
	for(var i=0;i<item.length;i++){
		ModPE.setItem(item[i]["ID"],item[i]["texture"],item[i]["group"],item[i]["name"],item[i]["stack"]);
	setc(item[i]["ID"],item[i]["category"],0);
	}

//武器の追加
	for(var s=0;s<sword.length;s++){
		ModPE.setItem(sword[s]["ID"],sword[s]["texture"],sword[s]["group"],sword[s]["name"],sword[s]["stack"]);
		Item.setHandEquipped(sword[s]["ID"],true);
		setc(sword[s]["ID"],sword[s]["category"],0);
		Item.setEnchantType(sword[s]["ID"],EnchantType.weapon,1);
	}

//防具追加
	for(var r=0;r<armor.length;r++){
	Item.defineArmor(armor[r]["ID"],armor[r]["icon"],armor[r]["group"],armor[r]["name"],armor[r]["texture"],armor[r]["defense"],armor[r]["data"],armor[r]["aid"]);
	setc(armor[r]["ID"],3,0);
	}

//食べ物追加
	for(var f=0;f<food.length;f++){
		ModPE.setFoodItem(food[f]["ID"],food[f]["texture"],food[f]["group"],food[f]["reco"],food[f]["name"],64);
		setc(food[f]["ID"],4,0)
	}

//盾追加
	for(var s=0;s<shield.length;s++){
		ModPE.setItem(shield[s]["ID"],shield[s]["texture"],shield[s]["group"],shield[s]["name"],1);
		setc(shield[s]["ID"],3,0);
		Item.setMaxDamage(shield[s]["ID"],shield[s]["data"]);
	}

//コラボアイテム
	for(var co=0;co<col.length;co++){
		ModPE.setItem(col[co]["ID"],col[co]["texture"],col[co]["group"],col[co]["name"],col[co]["stack"]);
	}

}catch(e){
	print("先にテクスチャを適用してください");
}


//攻撃力&耐久値&特殊機能設定
function setWeapon(victim){
	for(var w=0;w<sword.length;w++){
		setWeapons(sword[w]["ID"],sword[w]["attack"],sword[w]["data"],victim,sword[w]["fire"],sword[w]["light"],sword[w]["nock"],sword[w]["explode"],sword[w]["expfire"]);
	}
}

//シールドバッシュ
function shieldBash(victim){
	for(var s=0;s<shield.length;s++){
		if(Player.getCarriedItem()==shield[s]["ID"]){
			var yaw=Entity.getYaw(Player.getEntity())%360;
			var pitch=Entity.getPitch(Player.getEntity())%360; 
			var Vx=-1*Math.sin(yaw*Math.PI/180)*Math.cos(pitch*Math.PI/180);
			var Vz=Math.cos(yaw*Math.PI/180)*Math.cos(pitch*Math.PI/180);
			Entity.setVelX(victim,shield[s]["bash"]*Vx);
			Entity.setVelZ(victim,shield[s]["bash"]*Vz);
		}
	}
}
		

//盾の耐久値
function shieldData(){
	for(var s=0;s<shield.length;s++){
		if(Player.getCarriedItem()==shield[s]["ID"]){
			if(Level.getGameMode()==0){
				Entity.setCarriedItem(Player.getEntity(),Player.getCarriedItem(),Player.getCarriedItemCount(),Player.getCarriedItemData()+1);
				if(Player.getCarriedItemData()==shield[s]["data"]){
					Entity.setCarriedItem(Player.getEntity(),0,0,0);
					Level.playSoundEnt(getPlayerEnt(),"random.break",500,1);
				}
			}
		}
	}
}

//盾の防御力
function shieldDefense(){
	for(var s=0;s<shield.length;s++){
		if(Player.getCarriedItem()==shield[s]["ID"]){
			Entity.addEffect(Player.getEntity(),11,10,shield[s]["defense"],false,false);
		}
	}
}

/***かまどレシピ追加***/
//無限ダイヤ
Item.addFurnaceRecipe(無限ダイヤ鉱石,無限ダイヤ,0);

//鉛
Item.addFurnaceRecipe(鉛鉱石,鉛インゴット,0);

/***ブロックレシピ追加***/
//儀式
Item.addShapedRecipe(儀式,1,0,[
 "aaa",
 "aba",
 "aca"],["a",369,0,"b",生命の源,0,"c",無限ダイヤ,0]);

/***アイテムレシピ追加***/
//レッドストーンの剣
Item.addShapedRecipe(レッドストーンの剣,1,0,[
 " a ",
 " a ",
 " b "],["a",331,0,"b",280,0]);

//ラピスラズリの剣
Item.addShapedRecipe(ラピスラズリの剣,1,0,[
 " a ",
 " a ",
 " b "],["a",351,4,"b",280,0]);

//エメラルドの剣
Item.addShapedRecipe(エメラルドの剣,1,0,[
 " a ",
 " a ",
 " b "],["a",388,0,"b",280,0]);

//無限ダイヤの剣
Item.addShapedRecipe(無限ダイヤの剣,1,0,[
 " a ",
 " a ",
 " b "],["a",無限ダイヤ,0,"b",280,0]);

//石炭の剣
Item.addShapedRecipe(石炭の剣,1,0,[
 " a ",
 " a ",
 " b "],["a",263,0,"b",280,0]);

//ダイヤの棒
Item.addShapedRecipe(ダイヤの棒,2,0,[
 " a",
 " a"],["a",264,0]);

//鉄の棒
Item.addShapedRecipe(鉄の棒,2,0,[
 " a",
 " a"],["a",265,0]);

//金の棒
Item.addShapedRecipe(金の棒,2,0,[
 " a",
 " a"],["a",266,0]);

//レッドストーンの棒
Item.addShapedRecipe(レッドストーンの棒,2,0,[
 " a",
 " a"],["a",331,0]);

//ラピスラズリの棒
Item.addShapedRecipe(ラピスラズリの棒,2,0,[
 " a",
 " a"],["a",351,4]);

//石炭の棒
Item.addShapedRecipe(石炭の棒,2,0,[
 " a",
 " a"],["a",263,0]);

//エメラルドの棒
Item.addShapedRecipe(エメラルドの棒,2,0,[
 " a",
 " a"],["a",388,0]);

//無限ダイヤの棒
Item.addShapedRecipe(無限ダイヤの棒,2,0,[
 " a",
 " a"],["a",無限ダイヤ,0]);

//ダイヤの剣改
Item.addShapedRecipe(ダイヤの剣改,1,0,[
 " a ",
 "bcb",
 " d "],["a",264,0,"b",263,0,"c",276,0,"d",ダイヤの棒,0]);

//鉄の剣改
Item.addShapedRecipe(鉄の剣改,1,0,[
 " a ",
 "bcb",
 " d "],["a",265,0,"b",263,0,"c",267,0,"d",鉄の棒,0]);

//金の剣改
Item.addShapedRecipe(金の剣改,1,0,[
 " a ",
 "bcb",
 " d "],["a",266,0,"b",263,0,"c",283,0,"d",金の棒,0]);

//レッドストーンの剣改
Item.addShapedRecipe(レッドストーンの剣改,1,0,[
 " a ",
 "bcb",
 " d "],["a",331,0,"b",263,0,"c",レッドストーンの剣,0,"d",レッドストーンの棒,0]);

//ラピスラズリの剣改
Item.addShapedRecipe(ラピスラズリの剣改,1,0,[
 " a ",
 "bcb",
 " d "],["a",351,4,"b",263,0,"c",ラピスラズリの剣,0,"d",ラピスラズリの棒,0]);

//エメラルドの剣改
Item.addShapedRecipe(エメラルドの剣改,1,0,[
 " a ",
 "bcb",
 " d "],["a",388,0,"b",263,0,"c",エメラルドの剣,0,"d",エメラルドの棒,0]);

//無限ダイヤの剣改
Item.addShapedRecipe(無限ダイヤの剣改,1,0,[
 " a ",
 "bcb",
 " d "],["a",無限ダイヤ,0,"b",263,0,"c",無限ダイヤの剣,0,"d",無限ダイヤの棒,0]);

//宝剣インフィニティソード
Item.addShapedRecipe(宝剣インフィニティソード,1,0,[
 "abc",
 "def",
 "ghi"],["a",ダイヤの棒,0,"b",無限ダイヤの剣,0,"c",無限ダイヤの棒,0,"d",267,0,"e",276,0,"f",283,0,"g",レッドストーンの剣,0,"h",エメラルドの剣,0,"i",ラピスラズリの剣,0]);

//雷の石
Item.addShapedRecipe(雷の石,1,0,[
 " a ",
 "aba",
 " a "],["a",266,0,"b",無限ダイヤ,0]);

//雷槍ケラウノス
Item.addShapedRecipe(雷槍ケラウノス,1,0,[
 " ab",
 " ca",
 "d  "],["a",264,0,"b",雷の石,0,"c",ダイヤの棒,0,"d",280,0]);

//神剣インフィニティソード改
Item.addShapedRecipe(神剣インフィニティソード改,1,0,[
 " a ",
 "bcb",
 " d "],["a",雷槍ケラウノス,0,"b",263,0,"c",宝剣インフィニティソード,0,"d",鉄の棒,0]);

//真ラピスラズリの剣
Item.addShapedRecipe(真ラピスラズリの剣,1,0,[
 " a ",
 "bcb",
 " d "],["a",351,4,"b",266,0,"c",ラピスラズリの剣改,0,"d",ラピスラズリの棒,0]);

//刀
Item.addShapedRecipe(刀,1,0,[
 "  a",
 " a ",
 "b  "],["a",265,0,"b",280,0]);

//黒刀
Item.addShapedRecipe(黒刀,1,0,[
 "  a",
 "bcb",
 "d  "],["a",265,0,"b",49,0,"c",刀,0,"d",石炭の棒,0]);

//ダイヤの粉
Item.addShapedRecipe(ダイヤの粉,2,0,[
 " a",
 "  "],["a",264,0]);

//妖気に満ちたポーション
Item.addShapedRecipe(妖気に満ちたポーション,1,0,[
 "aba",
 "aca",
 "aaa"],["a",49,0,"b",ダイヤの粉,0,"c",374,0]);

//妖刀村正
Item.addShapedRecipe(妖刀村正,1,0,[
 "  a",
 "bcb",
 "d  "],["a",無限ダイヤ,0,"b",妖気に満ちたポーション,0,"c",黒刀,0,"d",ダイヤの棒,0]);

//黒の杖
Item.addShapedRecipe(黒の杖,1,0,[
 "  a",
 " b ",
 "b  "],["a",49,0,"b",280,0]);

//ブドウ
Item.addShapedRecipe(ブドウ,2,0,[
 "aaa",
 "bbb",
 "ccc"],["a",295,0,"b",351,5,"c",351,15]);

//オレンジ
Item.addShapedRecipe(オレンジ,2,0,[
 "aaa",
 "bbb",
 "ccc"],["a",295,0,"b",351,14,"c",351,15]);

//ガラスのコップ
Item.addShapedRecipe(ガラスのコップ,7,0,[
 "a a",
 "a a",
 "aaa"],["a",20,0]);

//ブドウジュース
Item.addShapedRecipe(ブドウジュース,1,0,[
 "ab",
 "  "],["a",ガラスのコップ,0,"b",ブドウ,0]);

//オレンジジュース
Item.addShapedRecipe(オレンジジュース,1,0,[
 "ab",
 "  "],["a",オレンジ,0,"b",ガラスのコップ,0]);

//ワイングラス
Item.addShapedRecipe(ワイングラス,6,0,[
 "a a",
 "aaa",
 " a "],["a",20,0]);

//赤ワイン
Item.addShapedRecipe(3737,1,0,[
 " a ",
 " b ",
 " c "],["a",ブドウ,0,"b",372,0,"c",ワイングラス,0]);

//メイス
Item.addShapedRecipe(メイス,1,0,[
 " aa",
 " ba",
 "b  "],["a",鉛インゴット,0,"b",280,0]);

//強化メイス
Item.addShapedRecipe(強化メイス,1,0,[
 " aa",
 " ba",
 "c  "],["a",鉛インゴット,0,"b",メイス,0,"c",280,0]);

//聖なる宝玉
Item.addShapedRecipe(聖なる宝玉,1,0,[
 "ab",
 "  "],["a",無限ダイヤ,0,"b",炎の宝玉,0]);

//聖剣エクスカリバー
Item.addShapedRecipe(聖剣エクスカリバー,1,0,[
 " a ",
 "bcd",
 " a "],["a",無限の星,0,"b",無限の矢,0,"c",聖なる宝玉,0,"d",無限の原子核,0]);

/***防具のレシピ***/
//無限ダイヤのヘルメット
Item.addShapedRecipe(無限ダイヤのヘルメット,1,0,[
 "aaa",
 "a a",
 "   "],["a",無限ダイヤ,0]);

//無限ダイヤのチェストプレート
Item.addShapedRecipe(無限ダイヤのチェストプレート,1,0,[
 "a a",
 "aaa",
 "aaa"],["a",無限ダイヤ,0]);

//無限ダイヤのレギンス
Item.addShapedRecipe(無限ダイヤのレギンス,1,0,[
 "aaa",
 "a a",
 "a a"],["a",無限ダイヤ,0]);

//無限ダイヤのブーツ
Item.addShapedRecipe(無限ダイヤのブーツ,1,0,[
 "   ",
 "a a",
 "a a"],["a",無限ダイヤ,0]);

//魔王のヘルメット
Item.addShapedRecipe(魔王のヘルメット,1,0,[
 "aaa",
 "a a",
 "   "],["a",魔王の魂,0]);

//魔王のチェストプレート
Item.addShapedRecipe(魔王のチェストプレート,1,0,[
 "a a",
 "aaa",
 "aaa"],["a",魔王の魂,0]);

//魔王のレギンス
Item.addShapedRecipe(魔王のレギンス,1,0,[
 "aaa",
 "a a",
 "a a"],["a",魔王の魂,0]);

//魔王のブーツ
Item.addShapedRecipe(魔王のブーツ,1,0,[
 "   ",
 "a a",
 "a a"],["a",魔王の魂,0]);

//鉛のヘルメット
Item.addShapedRecipe(鉛のヘルメット,1,0,[
 "aaa",
 "a a",
 "   "],["a",鉛インゴット,0]);

//鉛のチェストプレート
Item.addShapedRecipe(鉛のチェストプレート,1,0,[
 "a a",
 "aaa",
 "aaa"],["a",鉛インゴット,0]);

//鉛のレギンス
Item.addShapedRecipe(鉛のレギンス,1,0,[
 "aaa",
 "a a",
 "a a"],["a",鉛インゴット,0]);

//鉛のブーツ
Item.addShapedRecipe(鉛のブーツ,1,0,[
 "   ",
 "a a",
 "a a"],["a",鉛インゴット,0]);

//神剣ナルカミ
Item.addShapedRecipe(神剣ナルカミ,1,0,[
 " a ",
 "bcb",
 " d "],["a",クリスタライトインゴット,0,"b",レジェンダリーインゴット,0,"c",無限ダイヤ,0,"d",レッドストーンの棒,0]);

//ダイヤの盾
Item.addShapedRecipe(ダイヤの盾,1,0,[
 "aaa",
 "aaa",
 " a "],["a",264,0]);

//無限ダイヤの盾
Item.addShapedRecipe(無限ダイヤの盾,1,0,[
 "aaa",
 "aaa",
 " a "],["a",3699,0]);

//鉄の盾
Item.addShapedRecipe(鉄の盾,1,0,[
 "aaa",
 "aaa",
 " a "],["a",265,0]);

//金の盾
Item.addShapedRecipe(金の盾,1,0,[
 "aaa",
 "aaa",
 " a "],["a",266,0]);

//レッドストーンの盾
Item.addShapedRecipe(レッドストーンの盾,1,0,[
 "aaa",
 "aaa",
 " a "],["a",331,0]);

//ラピスラズリの盾
Item.addShapedRecipe(ラピスラズリの盾,1,0,[
 "aaa",
 "aaa",
 " a "],["a",351,4]);

//エメラルドの盾
Item.addShapedRecipe(エメラルドの盾,1,0,[
 "aaa",
 "aaa",
 " a "],["a",388,0]);


function leaveGame(){
//セーブデータ作成
	Save.single("key1",df);
	Save.single("key2",dash);
	Save.single("key3",sei);
	Save.single("key4",kin);
	Save.single("key5",aice);
	Save.single("key6",aice1);
	Save.single("key7",sgui);
	Save.single("key8",start);

//GUI削除
	closeGUI();
	closeGUI1();
	closeGUI2();
	closeGUI3();
	closeGUI4();
	closeGUI5();
}

function newLevel(){
	//スタートメッセージ
	if(start==0){
		clientMessage("§6Infinite Diamond Mod ver3.0 ");
		clientMessage("ダウンロードありがとうございますm(_ _)m");
		clientMessage("このmodは主に、様々な武器や、数種類の強力なモンスターなどを追加します");
		clientMessage("このメッセージは、\n"+"§a/start off"+"\nで消すことができます。");
		clientMessage("このmodのコマンド一覧は、\n"+"§a/modehelp <数字>"+"\nで、表示します。");
	}

	//セーブデータ読み込み&削除
	Load.single("key1");
	Remove.single("key1");
	Load.single("key2");
	Remove.single("key2");
	Load.single("key3");
	Remove.single("key3");
	Load.single("key4");
	Remove.single("key4");
	Load.single("key5");
	Remove.single("key5");
	Load.single("key6");
	Remove.single("key6");
	Load.single("key7");
	Remove.single("key7");
	Load.single("key8");
	Remove.single("key8");

	//ブロックのクリエイティブ追加
	setc(無限ダイヤ鉱石,1,0);
	setc(鉛鉱石,1,0);
	setc(儀式,1,0);
	setc(儀式,1,5);
	
	//難易度選択
	selectLevel();
}


function selectLevel(){
//難易度選択
	if(sgui==0){
		ctx.runOnUiThread(
			new java.lang.Runnable({
				run:function(){
					try{
						var dialog=new android.app.Dialog(ctx);
						var layout=new android.widget.LinearLayout(ctx);
						var superhardbutton=new android.widget.Button(ctx);
						var hardbutton=new android.widget.Button(ctx);
						var normalbutton=new android.widget.Button(ctx);
						var easybutton=new android.widget.Button(ctx);
						dialog.setTitle("難易度選択");
						dialog.setContentView(layout);
						layout.setOrientation(android.widget.LinearLayout.VERTICAL);
						//スーパーハード
						superhardbutton.setText("スーパーハード");
						superhardbutton.setTextSize(30);
						superhardbutton.setTextColor(android.graphics.Color.RED);
						superhardbutton.setOnClickListener(
							new android.view.View.OnClickListener(){
								onClick:function(){
									sgui=1;
									df=3;
									new android.widget.Toast.makeText(ctx,"スーパーハードモードになりました",android.widget.Toast.LENGTH_LONG).show();
									dialog.dismiss();
								}
							}
						);
						layout.addView(superhardbutton);
						//ハードモード
						hardbutton.setText("ハードモード");
						hardbutton.setTextSize(30);
						hardbutton.setTextColor(android.graphics.Color.RED);
						hardbutton.setOnClickListener(
							new android.view.View.OnClickListener(){
								onClick:function(){
									sgui=1;
									df=2;
									new android.widget.Toast.makeText(ctx,"ハードモードになりました",android.widget.Toast.LENGTH_LONG).show();
									dialog.dismiss();
								}
							}
						);
						layout.addView(hardbutton);
						//ノーマルモード
						normalbutton.setText("ノーマルモード");
						normalbutton.setTextSize(30);
						normalbutton.setTextColor(android.graphics.Color.YELLOW);
						normalbutton.setOnClickListener(
							new android.view.View.OnClickListener(){
								onClick:function(){
									sgui=1;
									df=1;
									new android.widget.Toast.makeText(ctx,"ノーマルモードになりました",android.widget.Toast.LENGTH_LONG).show();
									dialog.dismiss();
								}
							}
						);
						layout.addView(normalbutton);
						//イージーモード
						easybutton.setText("イージーモード");
						easybutton.setTextSize(30);
						easybutton.setTextColor(android.graphics.Color.YELLOW);
						easybutton.setOnClickListener(
							new android.view.View.OnClickListener(){
								onClick:function(){
									sgui=1;
									df=0;
									new android.widget.Toast.makeText(ctx,"イージーモードになりました",android.widget.Toast.LENGTH_LONG).show();
									dialog.dismiss();
								}
							}
						);
						layout.addView(easybutton);
						dialog.show();
					}catch(e){
						clientMessage(e);
					}
				}
			})
		);
	}
}

function attackHook(attacker,victim){
	var hp=Entity.getHealth(victim);
	setWeapon(victim);
	shieldBash(victim);

//ダッシュ切り
	if(dash==1&&Player.getCarriedItem()==聖剣エクスカリバー){
		var yaw=Entity.getYaw(Player.getEntity())%360;
		var pitch=Entity.getPitch(Player.getEntity())%360; 
		var Vx=-1*Math.sin(yaw*Math.PI/180)*Math.cos(pitch*Math.PI/180);
		var Vz=Math.cos(yaw*Math.PI/180)*Math.cos(pitch*Math.PI/180);
		Entity.setVelX(getPlayerEnt(),5*Vx);
		Entity.setVelZ(getPlayerEnt(),5*Vz);
		dash=0;
		if(hp>40){
			Entity.setHealth(victim,hp-40);
		}
		if(hp<40&&hp>1){
			Entity.setHealth(victim,1);
		}
	}

//ギャンブル･エッジ
	if(kin==1&&Player.getCarriedItem()==真金の剣){
		switch(Math.floor(Math.random()*3)+1){
			case 1:
				Entity.setHealth(victim,hp-1);
			break;
			case 2:
				Entity.setHealth(victim,hp-1);
			break;
			case 3:
				if(hp>100){
					Entity.setHealth(victim,hp-100);
				}
				if(hp<100&&hp>1){
					Entity.setHealth(victim,1);
				}
			break;
		}
		kin=0;
	}
}

/***Mob追加***/
//無限ゾンビ
function spawnMugenzombie(x,y,z){
	var Mugenzombie=Level.spawnMob(x, y+1, z, EntityType.ZOMBIE, "mob/mugenzombie.png");
	Entity.addEffect(Mugenzombie,1,99999999,3);
	Entity.addEffect(Mugenzombie,5,99999999,3);
	Entity.addEffect(Mugenzombie,12,99999999,1);
	Entity.setMaxHealth(Mugenzombie,60);
	Entity.setHealth(Mugenzombie,60);
	Entity.setNameTag(Mugenzombie,"無限ゾンビ");
	mugenzombie.push(Mugenzombie);
}

//無限ゾンビX
function spawnMugenzombieX(x,y,z){
	var Mugenzombie=Level.spawnMob(x, y+1, z, EntityType.ZOMBIE, "mob/mugenzombie.png");
	Entity.addEffect(Mugenzombie,1,99999999,3);
	Entity.addEffect(Mugenzombie,5,99999999,3);
	Entity.addEffect(Mugenzombie,12,99999999,1);
	Entity.setMaxHealth(Mugenzombie,100);
	Entity.setHealth(Mugenzombie,100);
	Entity.setNameTag(Mugenzombie,"無限ゾンビ");
	mugenzombie.push(Mugenzombie);
}

//無限ゾンビXno
function spawnMugenzombieXno(x,y,z){
	var Mugenzombie=Level.spawnMob(x, y+1, z, EntityType.ZOMBIE, "mob/mugenzombie.png");
	Entity.addEffect(Mugenzombie,1,99999999,3);
	Entity.addEffect(Mugenzombie,5,99999999,3);
	Entity.addEffect(Mugenzombie,12,99999999,1);
	Entity.setMaxHealth(Mugenzombie,80);
	Entity.setHealth(Mugenzombie,80);
	Entity.setNameTag(Mugenzombie,"無限ゾンビ");
	mugenzombie.push(Mugenzombie);
}

//無限ゾンビXs
function spawnMugenzombieXs(x,y,z){
	var Mugenzombie=Level.spawnMob(x, y+1, z, EntityType.ZOMBIE, "mob/mugenzombie.png");
	Entity.addEffect(Mugenzombie,1,99999999,3);
	Entity.addEffect(Mugenzombie,5,99999999,3);
	Entity.addEffect(Mugenzombie,12,99999999,1);
	Entity.setMaxHealth(Mugenzombie,130);
	Entity.setHealth(Mugenzombie,130);
	Entity.setNameTag(Mugenzombie,"無限ゾンビ");
	mugenzombie.push(Mugenzombie);
}

//無限スケルトン
function spawnMugenskeleton(x,y,z){
	var Mugenskeleton=Level.spawnMob(x, y+1, z, EntityType.SKELETON, "mob/mugenskeleton.png");
	Entity.addEffect(Mugenskeleton,1,99999999,3);
	Entity.addEffect(Mugenskeleton,5,99999999,3);
	Entity.addEffect(Mugenskeleton,12,99999999,1);
	Entity.setMaxHealth(Mugenskeleton,55);
	Entity.setHealth(Mugenskeleton,55);
	Entity.setNameTag(Mugenskeleton,"無限スケルトン");
	ModPE.overrideTexture(34,"https://www.dropbox.com/s/spu90k5gab0aj3s/mugenskeleton.png?dl=1");
	mugenskelton.push(Mugenskeleton);
}

//無限スケルトンX
function spawnMugenskeletonX(x,y,z){
	var Mugenskeleton=Level.spawnMob(x, y+1, z, EntityType.SKELETON, "mob/mugenskeleton.png");
	Entity.addEffect(Mugenskeleton,1,99999999,3);
	Entity.addEffect(Mugenskeleton,5,99999999,3);
	Entity.addEffect(Mugenskeleton,12,99999999,1);
	Entity.setMaxHealth(Mugenskeleton,90);
	Entity.setHealth(Mugenskeleton,90);
	Entity.setNameTag(Mugenskeleton,"無限スケルトン");
	ModPE.overrideTexture(34,"https://www.dropbox.com/s/spu90k5gab0aj3s/mugenskeleton.png?dl=1");
	mugenskelton.push(Mugenskeleton);
}

//無限スケルトンXno
function spawnMugenskeletonXno(x,y,z){
	var Mugenskeleton=Level.spawnMob(x, y+1, z, EntityType.SKELETON, "mob/mugenskeleton.png");
	Entity.addEffect(Mugenskeleton,1,99999999,3);
	Entity.addEffect(Mugenskeleton,5,99999999,3);
	Entity.addEffect(Mugenskeleton,12,99999999,1);
	Entity.setMaxHealth(Mugenskeleton,70);
	Entity.setHealth(Mugenskeleton,70);
	Entity.setNameTag(Mugenskeleton,"無限スケルトン");
	ModPE.overrideTexture(34,"https://www.dropbox.com/s/spu90k5gab0aj3s/mugenskeleton.png?dl=1");
	mugenskelton.push(Mugenskeleton);
}

//無限スケルトンXs
function spawnMugenskeletonXs(x,y,z){
	var Mugenskeleton=Level.spawnMob(x, y+1, z, EntityType.SKELETON, "mob/mugenskeleton.png");
	Entity.addEffect(Mugenskeleton,1,99999999,3);
	Entity.addEffect(Mugenskeleton,5,99999999,3);
	Entity.addEffect(Mugenskeleton,12,99999999,1);
	Entity.setMaxHealth(Mugenskeleton,110);
	Entity.setHealth(Mugenskeleton,110);
	Entity.setNameTag(Mugenskeleton,"無限スケルトン");
	ModPE.overrideTexture(34,"https://www.dropbox.com/s/spu90k5gab0aj3s/mugenskeleton.png?dl=1");
	mugenskelton.push(Mugenskeleton);
}

//無限クリーパー
function spawnMugencreeper(x,y,z){
	var Mugencreeper=Level.spawnMob(x, y+1, z, EntityType.CREEPER, "mob/mugencreeper.png");
	Entity.addEffect(Mugencreeper,1,99999999,3);
	Entity.addEffect(Mugencreeper,5,99999999,3);
	Entity.addEffect(Mugencreeper,12,99999999,1);
	Entity.setMaxHealth(Mugencreeper,55);
	Entity.setHealth(Mugencreeper,55);
	Entity.setNameTag(Mugencreeper,"無限クリーパー");
	mugencreeper.push(Mugencreeper);
}

//無限クリーパーX
function spawnMugencreeperX(x,y,z){
	var Mugencreeper=Level.spawnMob(x, y+1, z, EntityType.CREEPER, "mob/mugencreeper.png");
	Entity.addEffect(Mugencreeper,1,99999999,3);
	Entity.addEffect(Mugencreeper,5,99999999,3);
	Entity.addEffect(Mugencreeper,12,99999999,1);
	Entity.setMaxHealth(Mugencreeper,90);
	Entity.setHealth(Mugencreeper,90);
	Entity.setNameTag(Mugencreeper,"無限クリーパー");
	mugencreeper.push(Mugencreeper);
}

//無限クリーパーXno
function spawnMugencreeperXno(x,y,z){
	var Mugencreeper=Level.spawnMob(x, y+1, z, EntityType.CREEPER, "mob/mugencreeper.png");
	Entity.addEffect(Mugencreeper,1,99999999,3);
	Entity.addEffect(Mugencreeper,5,99999999,3);
	Entity.addEffect(Mugencreeper,12,99999999,1);
	Entity.setMaxHealth(Mugencreeper,70);
	Entity.setHealth(Mugencreeper,70);
	Entity.setNameTag(Mugencreeper,"無限クリーパー");
	mugencreeper.push(Mugencreeper);
}

//無限クリーパーXs
function spawnMugencreeperXs(x,y,z){
	var Mugencreeper=Level.spawnMob(x, y+1, z, EntityType.CREEPER, "mob/mugencreeper.png");
	Entity.addEffect(Mugencreeper,1,99999999,3);
	Entity.addEffect(Mugencreeper,5,99999999,3);
	Entity.addEffect(Mugencreeper,12,99999999,1);
	Entity.setMaxHealth(Mugencreeper,110);
	Entity.setHealth(Mugencreeper,110);
	Entity.setNameTag(Mugencreeper,"無限クリーパー");
	mugencreeper.push(Mugencreeper);
}

//無限ブレイズ
function spawnMugenblaze(x,y,z){
	var Mugenblaze=Level.spawnMob(x, y+1, z, EntityType.BLAZE, "mob/mugenblaze.png");
	Entity.addEffect(Mugenblaze,1,99999999,4);
	Entity.addEffect(Mugenblaze,5,99999999,4);
	Entity.addEffect(Mugenblaze,12,99999999,1);
	Entity.setMaxHealth(Mugenblaze,85);
	Entity.setHealth(Mugenblaze,85);
	Entity.setNameTag(Mugenblaze,"§6無限ブレイズ");
	mugenblaze.push(Mugenblaze);
	count23++;
}

//無限ブレイズX
function spawnMugenblazeX(x,y,z){
	var Mugenblaze=Level.spawnMob(x, y+1, z, EntityType.BLAZE, "mob/mugenblaze.png");
	Entity.addEffect(Mugenblaze,1,99999999,4);
	Entity.addEffect(Mugenblaze,5,99999999,4);
	Entity.addEffect(Mugenblaze,12,99999999,1);
	Entity.setMaxHealth(Mugenblaze,130);
	Entity.setHealth(Mugenblaze,130);
	Entity.setNameTag(Mugenblaze,"§6無限ブレイズ");
	mugenblaze.push(Mugenblaze);
	count23++;
}

//無限ブレイズXno
function spawnMugenblazeXno(x,y,z){
	var Mugenblaze=Level.spawnMob(x, y+1, z, EntityType.BLAZE, "mob/mugenblaze.png");
	Entity.addEffect(Mugenblaze,1,99999999,4);
	Entity.addEffect(Mugenblaze,5,99999999,4);
	Entity.addEffect(Mugenblaze,12,99999999,1);
	Entity.setMaxHealth(Mugenblaze,100);
	Entity.setHealth(Mugenblaze,100);
	Entity.setNameTag(Mugenblaze,"§6無限ブレイズ");
	mugenblaze.push(Mugenblaze);
	count23++;
}

//無限ブレイズXs
function spawnMugenblazeXs(x,y,z){
	var Mugenblaze=Level.spawnMob(x, y+1, z, EntityType.BLAZE, "mob/mugenblaze.png");
	Entity.addEffect(Mugenblaze,1,99999999,4);
	Entity.addEffect(Mugenblaze,5,99999999,4);
	Entity.addEffect(Mugenblaze,12,99999999,1);
	Entity.setMaxHealth(Mugenblaze,150);
	Entity.setHealth(Mugenblaze,150);
	Entity.setNameTag(Mugenblaze,"§6無限ブレイズ");
	mugenblaze.push(Mugenblaze);
	count23++;
}

//無限ブレイズ子分
function spawnMugenblaze2(x,y,z){
	var Mugenblaze2=Level.spawnMob(x, y+1, z, EntityType.BLAZE, "mob/mugenblaze.png");
	Entity.addEffect(Mugenblaze2,1,99999999,3);
	Entity.addEffect(Mugenblaze2,5,99999999,3);
	Entity.addEffect(Mugenblaze2,12,99999999,1);
	Entity.setMaxHealth(Mugenblaze2,75);
	Entity.setHealth(Mugenblaze2,75);
	Entity.setNameTag(Mugenblaze2,"無限ブレイズ");
	mugenblaze.push(Mugenblaze2);
}

//無限ブレイズ子分X
function spawnMugenblaze2X(x,y,z){
	var Mugenblaze2=Level.spawnMob(x, y+1, z, EntityType.BLAZE,"mob/mugenblaze.png");
	Entity.addEffect(Mugenblaze2,1,99999999,3);
	Entity.addEffect(Mugenblaze2,5,99999999,3);
	Entity.addEffect(Mugenblaze2,12,99999999,1);
	Entity.setMaxHealth(Mugenblaze2,110);
	Entity.setHealth(Mugenblaze2,110);
	Entity.setNameTag(Mugenblaze2,"無限ブレイズ");
	mugenblaze.push(Mugenblaze2);
}

//無限ブレイズ子分Xno
function spawnMugenblaze2Xno(x,y,z){
	var Mugenblaze2=Level.spawnMob(x, y+1, z, EntityType.BLAZE, "mob/mugenblaze.png");
	Entity.addEffect(Mugenblaze2,1,99999999,3);
	Entity.addEffect(Mugenblaze2,5,99999999,3);
	Entity.addEffect(Mugenblaze2,12,99999999,1);
	Entity.setMaxHealth(Mugenblaze2,80);
	Entity.setHealth(Mugenblaze2,80);
	Entity.setNameTag(Mugenblaze2,"無限ブレイズ");
	mugenblaze.push(Mugenblaze2);
}

//無限ブレイズ子分X
function spawnMugenblaze2Xs(x,y,z){
	var Mugenblaze2=Level.spawnMob(x, y+1, z, EntityType.BLAZE, "mob/mugenblaze.png");
	Entity.addEffect(Mugenblaze2,1,99999999,3);
	Entity.addEffect(Mugenblaze2,5,99999999,3);
	Entity.addEffect(Mugenblaze2,12,99999999,1);
	Entity.setMaxHealth(Mugenblaze2,130);
	Entity.setHealth(Mugenblaze2,130);
	Entity.setNameTag(Mugenblaze2,"無限ブレイズ");
	mugenblaze.push(Mugenblaze2);
}

//魔王
function spawnMaou(x,y,z){
	var Maou=Level.spawnMob(x,y+1,z,EntityType.GHAST,"mob/maou.png");
	Entity.addEffect(Maou,5,99999999,20);
	Entity.addEffect(Maou,12,99999999,1);
	Entity.setMaxHealth(Maou,120);
	Entity.setHealth(Maou,120);
	Entity.setNameTag(Maou,"§l§5魔王");
	ModPE.overrideTexture(41,"https://www.dropbox.com/s/4unaurxmhto8cep/maou.png?dl=1");
	maou.push(Maou);
	count21++;
}

//魔王X
function spawnMaouX(x,y,z){
	var Maou=Level.spawnMob(x,y+1,z,EntityType.GHAST,"mob/maou.png");
	Entity.addEffect(Maou,5,99999999,20);
	Entity.addEffect(Maou,12,99999999,1);
	Entity.setMaxHealth(Maou,180);
	Entity.setHealth(Maou,180);
	Entity.setNameTag(Maou,"§l§5魔王");
	ModPE.overrideTexture(41,"https://www.dropbox.com/s/4unaurxmhto8cep/maou.png?dl=1");
	maou.push(Maou);
	count21++;
}

//魔王Xno
function spawnMaouXno(x,y,z){
	var Maou=Level.spawnMob(x, y+1, z, EntityType.GHAST,"mob/maou.png");
	Entity.addEffect(Maou,5,99999999,20);
	Entity.addEffect(Maou,12,99999999,1);
	Entity.setMaxHealth(Maou,140);
	Entity.setHealth(Maou,140);
	Entity.setNameTag(Maou,"§l§5魔王");
	ModPE.overrideTexture(41,"https://www.dropbox.com/s/4unaurxmhto8cep/maou.png?dl=1");
	maou.push(Maou);
	count21++;
}

//魔王Xs
function spawnMaouXs(x,y,z){
	var Maou=Level.spawnMob(x, y+1, z, EntityType.GHAST,"mob/maou.png");
	Entity.addEffect(Maou,5,99999999,20);
	Entity.addEffect(Maou,12,99999999,1);
	Entity.setMaxHealth(Maou,200);
	Entity.setHealth(Maou,200);
	Entity.setNameTag(Maou,"§l§5魔王");
	ModPE.overrideTexture(41,"https://www.dropbox.com/s/4unaurxmhto8cep/maou.png?dl=1");
	maou.push(Maou);
	count21++;
}

//浮游する爪
function spawnTume(x,y,z){
	var Tume=Level.spawnMob(x,y+1,z,EntityType.ZOMBIE,"mob/tume.png");
	Entity.setRenderType(Tume,TumeRenderType.renderType);
	Entity.setNameTag(Tume,"浮遊する爪");
	Entity.setMaxHealth(Tume,50);
	Entity.setHealth(Tume,50);
	Entity.addEffect(Tume,12,99999999,1);
	Entity.addEffect(Tume,5,999999999,3.5);
	Entity.addEffect(Tume,1,999999999,0.5);
	Entity.setArmor(Tume,0,0,0);
	Entity.setArmor(Tume,1,0,0);
	Entity.setArmor(Tume,2,0,0);
	Entity.setArmor(Tume,3,0,0);
	tume.push(Tume);
	count7++;
}

//浮游する爪X
function spawnTumeX(x,y,z){
	var TumeX=Level.spawnMob(x,y+1,z,EntityType.ZOMBIE,"mob/tume.png");
	Entity.setRenderType(TumeX,TumeRenderType.renderType);
	Entity.setNameTag(TumeX,"浮遊する爪");
	Entity.setMaxHealth(TumeX,80);
	Entity.setHealth(TumeX,80);
	Entity.addEffect(TumeX,12,99999999,1);
	Entity.addEffect(TumeX,5,999999999,3.5);
	Entity.addEffect(TumeX,1,999999999,0.5);
	Entity.setArmor(TumeX,0,0,0);
	Entity.setArmor(TumeX,1,0,0);
	Entity.setArmor(TumeX,2,0,0);
	Entity.setArmor(TumeX,3,0,0);
	tume.push(TumeX);
	count7++;
}

//浮游する爪Xno
function spawnTumeXno(x,y,z){
	var TumeXno=Level.spawnMob(x,y+1,z,EntityType.ZOMBIE,"mob/tume.png");
	Entity.setRenderType(TumeXno,TumeRenderType.renderType);
	Entity.setNameTag(TumeXno,"浮遊する爪");
	Entity.setMaxHealth(TumeXno,60);
	Entity.setHealth(TumeXno,60);
	Entity.addEffect(TumeXno,12,99999999,1);
	Entity.addEffect(TumeXno,5,999999999,3.5);
	Entity.addEffect(TumeXno,1,999999999,0.5);
	Entity.setArmor(TumeXno,0,0,0);
	Entity.setArmor(TumeXno,1,0,0);
	Entity.setArmor(TumeXno,2,0,0);
	Entity.setArmor(TumeXno,3,0,0);
	tume.push(TumeXno);
	count7++;
}

//浮游する爪Xs
function spawnTumeXs(x,y,z){
	var TumeXs=Level.spawnMob(x,y+1,z,EntityType.ZOMBIE,"mob/tume.png");
	Entity.setRenderType(TumeXs,TumeRenderType.renderType);
	Entity.setNameTag(TumeXs,"浮遊する爪");
	Entity.setMaxHealth(TumeXs,100);
	Entity.setHealth(TumeXs,100);
	Entity.addEffect(TumeXs,12,99999999,1);
	Entity.addEffect(TumeXs,5,999999999,3.5);
	Entity.addEffect(TumeXs,1,999999999,0.5);
	Entity.setArmor(TumeXs,0,0,0);
	Entity.setArmor(TumeXs,1,0,0);
	Entity.setArmor(TumeXs,2,0,0);
	Entity.setArmor(TumeXs,3,0,0);
	tume.push(TumeXs);
	count7++;
}

//クローエンペラー
function spawnSlayer(x,y,z){
	var Slayer=Level.spawnMob(x,y+1,z,EntityType.ZOMBIE,"mob/slayer.png");
	Entity.setRenderType(Slayer,SlayerRenderType.renderType);
	Entity.setMaxHealth(Slayer,700);
	Entity.setHealth(Slayer,700);
	Entity.addEffect(Slayer,12,99999999999,1,false,false);
	Entity.addEffect(Slayer,5,999999999999,4,false,false);
	Entity.addEffect(Slayer,1,99999999999,1,false,false);
	Entity.setCollisionSize(Slayer,5,5);
	Entity.setArmor(Slayer,0,0,0);
	Entity.setArmor(Slayer,1,0,0);
	Entity.setArmor(Slayer,2,0,0);
	Entity.setArmor(Slayer,3,0,0);
	slayer.push(Slayer);
	count9++;
}

//クローエンペラーX
function spawnSlayerX(x,y,z){
	var Slayer=Level.spawnMob(x,y+1,z,EntityType.ZOMBIE,"mob/slayer.png");
	Entity.setRenderType(Slayer,SlayerRenderType.renderType);
	Entity.setMaxHealth(Slayer,900);
	Entity.setHealth(Slayer,900);
	Entity.addEffect(Slayer,12,99999999999,1,false,false);
	Entity.addEffect(Slayer,5,999999999999,4,false,false);
	Entity.addEffect(Slayer,1,99999999999,1,false,false);
	Entity.setCollisionSize(Slayer,5,5);
	Entity.setArmor(Slayer,0,0,0);
	Entity.setArmor(Slayer,1,0,0);
	Entity.setArmor(Slayer,2,0,0);
	Entity.setArmor(Slayer,3,0,0);
	slayer.push(Slayer);
	count9++;
}

//クローエンペラーXno
function spawnSlayerXno(x,y,z){
	var Slayer=Level.spawnMob(x,y+1,z,EntityType.ZOMBIE,"mob/slayer.png");
	Entity.setRenderType(Slayer,SlayerRenderType.renderType);
	Entity.setMaxHealth(Slayer,800);
	Entity.setHealth(Slayer,800);
	Entity.addEffect(Slayer,12,99999999999,1,false,false);
	Entity.addEffect(Slayer,5,999999999999,4,false,false);
	Entity.addEffect(Slayer,1,99999999999,1,false,false);
	Entity.setCollisionSize(Slayer,5,5);
	Entity.setArmor(Slayer,0,0,0);
	Entity.setArmor(Slayer,1,0,0);
	Entity.setArmor(Slayer,2,0,0);
	Entity.setArmor(Slayer,3,0,0);
	slayer.push(Slayer);
	count9++;
}

//クローエンペラーXs
function spawnSlayerXs(x,y,z){
	var Slayer=Level.spawnMob(x,y+1,z,EntityType.ZOMBIE,"mob/slayer.png");
	Entity.setRenderType(Slayer,SlayerRenderType.renderType);
	Entity.setMaxHealth(Slayer,1000);
	Entity.setHealth(Slayer,1000);
	Entity.addEffect(Slayer,12,99999999999,1,false,false);
	Entity.addEffect(Slayer,5,999999999999,4,false,false);
	Entity.addEffect(Slayer,1,99999999999,1,false,false);
	Entity.setCollisionSize(Slayer,5,5);
	Entity.setArmor(Slayer,0,0,0);
	Entity.setArmor(Slayer,1,0,0);
	Entity.setArmor(Slayer,2,0,0);
	Entity.setArmor(Slayer,3,0,0);
	slayer.push(Slayer);
	count9++;
}

//クローエンペラー2
function spawnSlayer2(x,y,z){
	var Slayer2=Level.spawnMob(x,y+1,z,EntityType.BLAZE,"mob/slayer2.png");
	Entity.setRenderType(Slayer2,Slayer2RenderType.renderType);
	Entity.setMaxHealth(Slayer2,750);
	Entity.setHealth(Slayer2,750);
	Entity.addEffect(Slayer2,12,99999999999,1,false,false);
	Entity.addEffect(Slayer2,5,999999999999,4,false,false);
	Entity.addEffect(Slayer2,1,99999999999,1,false,false);
	Entity.setCollisionSize(Slayer2,5,5);
	Entity.setArmor(Slayer2,0,0,0);
	Entity.setArmor(Slayer2,1,0,0);
	Entity.setArmor(Slayer2,2,0,0);
	Entity.setArmor(Slayer2,3,0,0);
	slayer2.push(Slayer2);
	count13+=1;
}

//クローエンペラー2X
function spawnSlayer2X(x,y,z){
	var Slayer2=Level.spawnMob(x,y+1,z,EntityType.BLAZE,"mob/slayer2.png");
	Entity.setRenderType(Slayer2,Slayer2RenderType.renderType);
	Entity.setMaxHealth(Slayer2,950);
	Entity.setHealth(Slayer2,950);
	Entity.addEffect(Slayer2,12,99999999999,1,false,false);
	Entity.addEffect(Slayer2,5,999999999999,4,false,false);
	Entity.addEffect(Slayer2,1,99999999999,1,false,false);
	Entity.setCollisionSize(Slayer2,5,5);
	Entity.setArmor(Slayer2,0,0,0);
	Entity.setArmor(Slayer2,1,0,0);
	Entity.setArmor(Slayer2,2,0,0);
	Entity.setArmor(Slayer2,3,0,0);
	slayer2.push(Slayer2);
	count13+=1;
}

//クローエンペラー2Xno
function spawnSlayer2Xno(x,y,z){
	var Slayer2=Level.spawnMob(x,y+1,z,EntityType.BLAZE,"mob/slayer2.png");
	Entity.setRenderType(Slayer2,Slayer2RenderType.renderType);
	Entity.setMaxHealth(Slayer2,850);
	Entity.setHealth(Slayer2,850);
	Entity.addEffect(Slayer2,12,99999999999,1,false,false);
	Entity.addEffect(Slayer2,5,999999999999,4,false,false);
	Entity.addEffect(Slayer2,1,99999999999,1,false,false);
	Entity.setCollisionSize(Slayer2,5,5);
	Entity.setArmor(Slayer2,0,0,0);
	Entity.setArmor(Slayer2,1,0,0);
	Entity.setArmor(Slayer2,2,0,0);
	Entity.setArmor(Slayer2,3,0,0);
	slayer2.push(Slayer2);
	count13+=1;
}

//クローエンペラー2Xs
function spawnSlayer2Xs(x,y,z){
	var Slayer2=Level.spawnMob(x,y+1,z,EntityType.BLAZE,"mob/slayer2.png");
	Entity.setRenderType(Slayer2,Slayer2RenderType.renderType);
	Entity.setMaxHealth(Slayer2,1050);
	Entity.setHealth(Slayer2,1050);
	Entity.addEffect(Slayer2,12,99999999999,1,false,false);
	Entity.addEffect(Slayer2,5,999999999999,4,false,false);
	Entity.addEffect(Slayer2,1,99999999999,1,false,false);
	Entity.setCollisionSize(Slayer2,5,5);
	Entity.setArmor(Slayer2,0,0,0);
	Entity.setArmor(Slayer2,1,0,0);
	Entity.setArmor(Slayer2,2,0,0);
	Entity.setArmor(Slayer2,3,0,0);
	slayer2.push(Slayer2);
	count13+=1;
}

//無限スパイダー
function spawnMugenspider(x,y,z){
	var Mugenspider=Level.spawnMob(x,y+1,z,EntityType.SPIDER,"mob/mugenspider.tga");
	Entity.setMaxHealth(Mugenspider,40);
	Entity.setHealth(Mugenspider,40);
	Entity.setNameTag(Mugenspider,"無限スパイダー");
	Entity.addEffect(Mugenspider,12,9999999999,1,false,false);
	Entity.addEffect(Mugenspider,1.9999999999,3,false,false);
	Entity.addEffect(Mugenspider,5,9999999999,2,false,false);
	mugenspider.push(Mugenspider);
	count24++;
}

//無限スパイダーX
function spawnMugenspiderX(x,y,z){
	var Mugenspider=Level.spawnMob(x,y+1,z,EntityType.SPIDER,"mob/mugenspider.tga");
	Entity.setMaxHealth(Mugenspider,80);
	Entity.setHealth(Mugenspider,80);
	Entity.setNameTag(Mugenspider,"無限スパイダー");
	Entity.addEffect(Mugenspider,12,9999999999,1,false,false);
	Entity.addEffect(Mugenspider,1.9999999999,3,false,false);
	Entity.addEffect(Mugenspider,5,9999999999,2,false,false);
	mugenspider.push(Mugenspider);
	count24++;
}

//無限スパイダーXno
function spawnMugenspiderXno(x,y,z){
	var Mugenspider=Level.spawnMob(x,y+1,z,EntityType.SPIDER,"mob/mugenspider.tga");
	Entity.setMaxHealth(Mugenspider,60);
	Entity.setHealth(Mugenspider,60);
	Entity.setNameTag(Mugenspider,"無限スパイダー");
	Entity.addEffect(Mugenspider,12,9999999999,1,false,false);
	Entity.addEffect(Mugenspider,1.9999999999,3,false,false);
	Entity.addEffect(Mugenspider,5,9999999999,2,false,false);
	mugenspider.push(Mugenspider);
	count24++;
}

//無限スパイダーXs
function spawnMugenspiderXs(x,y,z){
	var Mugenspider=Level.spawnMob(x,y+1,z,EntityType.SPIDER,"mob/mugenspider.tga");
	Entity.setMaxHealth(Mugenspider,100);
	Entity.setHealth(Mugenspider,100);
	Entity.setNameTag(Mugenspider,"無限スパイダー");
	Entity.addEffect(Mugenspider,12,9999999999,1,false,false);
	Entity.addEffect(Mugenspider,1.9999999999,3,false,false);
	Entity.addEffect(Mugenspider,5,9999999999,2,false,false);
	mugenspider.push(Mugenspider);
	count24++;
}

//無限エンダーマン
function spawnMugenenderman(x,y,z){
	var Mugenenderman=Level.spawnMob(x,y+1,z,EntityType.ENDERMAN,"mob/mugenenderman.tga");
	Entity.setMaxHealth(Mugenenderman,120);
	Entity.setHealth(Mugenenderman,120);
	Entity.setNameTag(Mugenenderman,"無限エンダーマン");
	Entity.addEffect(Mugenenderman,12,9999999999,1,false,false);
	Entity.addEffect(Mugenenderman,1.9999999999,3,false,false);
	Entity.addEffect(Mugenenderman,5,9999999999,3,false,false);
	Entity.setTarget(Mugenenderman,getPlayerEnt());
	mugenender.push(Mugenenderman);
	count25++;
}


//無限エンダーマンX
function spawnMugenendermanX(x,y,z){
	var Mugenenderman=Level.spawnMob(x,y+1,z,EntityType.ENDERMAN,"mob/mugenenderman.tga");
	Entity.setMaxHealth(Mugenenderman,200);
	Entity.setHealth(Mugenenderman,200);
	Entity.setNameTag(Mugenenderman,"無限エンダーマン");
	Entity.addEffect(Mugenenderman,12,9999999999,1,false,false);
	Entity.addEffect(Mugenenderman,1.9999999999,3,false,false);
	Entity.addEffect(Mugenenderman,5,9999999999,3,false,false);
	Entity.setTarget(Mugenenderman,getPlayerEnt());
	mugenender.push(Mugenenderman);
	count25++;
}


//無限エンダーマンXno
function spawnMugenendermanXno(x,y,z){
	var Mugenenderman=Level.spawnMob(x,y+1,z,EntityType.ENDERMAN,"mob/mugenenderman.tga");
	Entity.setMaxHealth(Mugenenderman,160);
	Entity.setHealth(Mugenenderman,160);
	Entity.setNameTag(Mugenenderman,"無限エンダーマン");
	Entity.addEffect(Mugenenderman,12,9999999999,1,false,false);
	Entity.addEffect(Mugenenderman,1.9999999999,3,false,false);
	Entity.addEffect(Mugenenderman,5,9999999999,3,false,false);
	Entity.setTarget(Mugenenderman,getPlayerEnt());
	mugenender.push(Mugenenderman);
	count25++;
}


//無限エンダーマンXs
function spawnMugenendermanXs(x,y,z){
	var Mugenenderman=Level.spawnMob(x,y+1,z,EntityType.ENDERMAN,"mob/mugenenderman.tga");
	Entity.setMaxHealth(Mugenenderman,260);
	Entity.setHealth(Mugenenderman,260);
	Entity.setNameTag(Mugenenderman,"無限エンダーマン");
	Entity.addEffect(Mugenenderman,12,9999999999,1,false,false);
	Entity.addEffect(Mugenenderman,1.9999999999,3,false,false);
	Entity.addEffect(Mugenenderman,5,9999999999,3,false,false);
	Entity.setTarget(Mugenenderman,getPlayerEnt());
	mugenender.push(Mugenenderman);
	count25++;
}

//マグマーマン
function spawnMagumaman(x,y,z){
	var Magumaman=Level.spawnMob(x,y+1,z,EntityType.ENDERMAN,"mob/magumaman.tga");
	Entity.setMaxHealth(Magumaman,240);
	Entity.setHealth(Magumaman,240);
	Entity.setNameTag(Magumaman,"マグマーマン");
	Entity.addEffect(Magumaman,12,9999999999,1,false,false);
	Entity.addEffect(Magumaman,1.9999999999,3,false,false);
	Entity.addEffect(Magumaman,5,9999999999,4,false,false);
	Entity.setTarget(Magumaman,getPlayerEnt());
	magumaman.push(Magumaman);
	count26++;
}


//マグマーマンX
function spawnMagumamanX(x,y,z){
	var Magumaman=Level.spawnMob(x,y+1,z,EntityType.ENDERMAN,"mob/magumaman.tga");
	Entity.setMaxHealth(Magumaman,280);
	Entity.setHealth(Magumaman,280);
	Entity.setNameTag(Magumaman,"マグマーマン");
	Entity.addEffect(Magumaman,12,9999999999,1,false,false);
	Entity.addEffect(Magumaman,1.9999999999,3,false,false);
	Entity.addEffect(Magumaman,5,9999999999,4,false,false);
	Entity.setTarget(Magumaman,getPlayerEnt());
	magumaman.push(Magumaman);
	count26++;
}


//マグマーマンXno
function spawnMagumamanXno(x,y,z){
	var Magumaman=Level.spawnMob(x,y+1,z,EntityType.ENDERMAN,"mob/magumaman.tga");
	Entity.setMaxHealth(Magumaman,260);
	Entity.setHealth(Magumaman,260);
	Entity.setNameTag(Magumaman,"マグマーマン");
	Entity.addEffect(Magumaman,12,9999999999,1,false,false);
	Entity.addEffect(Magumaman,1.9999999999,3,false,false);
	Entity.addEffect(Magumaman,5,9999999999,4,false,false);
	Entity.setTarget(Magumaman,getPlayerEnt());
	magumaman.push(Magumaman);
	count26++;
}


//マグマーマンXs
function spawnMagumamanXs(x,y,z){
	var Magumaman=Level.spawnMob(x,y+1,z,EntityType.ENDERMAN,"mob/magumaman.tga");
	Entity.setMaxHealth(Magumaman,300);
	Entity.setHealth(Magumaman,300);
	Entity.setNameTag(Magumaman,"マグマーマン");
	Entity.addEffect(Magumaman,12,9999999999,1,false,false);
	Entity.addEffect(Magumaman,1.9999999999,3,false,false);
	Entity.addEffect(Magumaman,5,9999999999,4,false,false);
	Entity.setTarget(Magumaman,getPlayerEnt());
	magumaman.push(Magumaman);
	count26++;
}


/***AI関係***/
function tumeAI(){
	if(Level.getGameMode()!==1){
		if(count7>0){
			count8++;
			if(count8==10){
				for(var tu=0;tu<tume.length;tu++){
					var xx=Math.floor(Math.random()*20)-10;
					var yy=Math.floor(Math.random()*10)-5;
					var zz=Math.floor(Math.random()*20)-10;
					if(Entity.getX(tume[tu])<=getPlayerX()+xx&&Entity.getY(tume[tu])<=getPlayerY()+yy&&Entity.getZ(tume[tu])<=getPlayerZ()+zz){
						if(Math.floor(Math.random()*5)+1==4){
							Entity.setPosition(tume[tu],getPlayerX(),getPlayerY()+1,getPlayerZ());
						}
						if(Math.floor(Math.random()*10)+1==9){
							for(var texp=0;texp<2;texp++){
								explode(getPlayerX(),getPlayerY(),getPlayerZ(),2,false);
							}
						}
					}
				}
			}
			count8=0;
		}
	}
}

function mugenzombieAI(){
	if(Level.getGameMode()!==1){
		for(var mz=0;mz<mugenzombie.length;mz++){
			var xx=Math.floor(Math.random()*20)-10;
			var yy=Math.floor(Math.random()*10)-5;
			var zz=Math.floor(Math.random()*20)-10;
			if(Entity.getX(mugenzombie[mz])<=getPlayerX()+xx&&Entity.getY(mugenzombie[mz])<=getPlayerY()+yy&&Entity.getZ(mugenzombie[mz])<=getPlayerZ()+zz){
				switch(Math.floor(Math.random()*30)+1){
					case 1:
						Entity.setVelX(mugenzombie[mz],2);
					break;
					case 2:
						Entity.setVelX(mugenzombie[mz],-2);
					break;
					case 3:
						Entity.setVelZ(mugenzombie[mz],2);
					break;
					case 4:
						Entity.setVelZ(mugenzombie[mz],-2);
					break;
				}
			}
		}
	}
}

function mugenskeltonAI(){
	if(Level.getGameMode()!==1){
		for(var ms=0;ms<mugenskelton.length;ms++){
			var xx=Math.floor(Math.random()*20)-10;
			var yy=Math.floor(Math.random()*10)-5;
			var zz=Math.floor(Math.random()*20)-10;
			if(Entity.getX(mugenskelton[ms])<=getPlayerX()+xx&&Entity.getY(mugenskelton[ms])<=getPlayerY()+yy&&Entity.getZ(mugenskelton[ms])<=getPlayerZ()+zz){
				if(Math.floor(Math.random()*5)+1==4){
					var yaw=Entity.getYaw(mugenskelton[ms])%360;
					var pitch=Entity.getPitch(mugenskelton[ms])%360; 
					var Vx=-1*Math.sin(yaw*Math.PI/180)*Math.cos(pitch*Math.PI/180);
					var Vy=-1*Math.sin(pitch*Math.PI/180);
					var Vz=Math.cos(yaw*Math.PI/180)*Math.cos(pitch*Math.PI/180);
					var ya=Level.spawnMob(Entity.getX(mugenskelton[ms])-2*Math.sin(yaw*Math.PI/180)*Math.cos(pitch*Math.PI/180),Entity.getY(mugenskelton[ms])-2*Math.sin(pitch*Math.PI/180),Entity.getZ(mugenskelton[ms])+2*Math.cos(yaw*Math.PI/180)*Math.cos(pitch*Math.PI/180),80);
					var ya2=Level.spawnMob(Entity.getX(mugenskelton[ms])-2*Math.sin(yaw*Math.PI/180)*Math.cos(pitch*Math.PI/180),Entity.getY(mugenskelton[ms])*Math.sin(pitch*Math.PI/180),Entity.getZ(mugenskelton[ms])+2*Math.cos(yaw*Math.PI/180)*Math.cos(pitch*Math.PI/180),80);
					var ya3=Level.spawnMob(Entity.getX(mugenskelton[ms])-2*Math.sin(yaw*Math.PI/180)*Math.cos(pitch*Math.PI/180),Entity.getY(mugenskelton[ms])+2*Math.sin(pitch*Math.PI/180),Entity.getZ(mugenskelton[ms])+2*Math.cos(yaw*Math.PI/180)*Math.cos(pitch*Math.PI/180),80);
					Entity.setVelX(ya,8*Vx);
					Entity.setVelY(ya,8*Vy);
					Entity.setVelZ(ya,8*Vz);
					Entity.setVelX(ya2,8*Vx);
					Entity.setVelY(ya2,8*Vy);
					Entity.setVelZ(ya2,8*Vz);
					Entity.setVelX(ya3,8*Vx);
					Entity.setVelY(ya3,8*Vy);
					Entity.setVelZ(ya3,8*Vz);
				}
			}
		}
	}
}

function slayerAI(){
	if(Level.getGameMode()!==1){
		if(count9>0){
			new java.lang.Thread(function(){
				for(var sl=0;sl<slayer.length;sl++){
					var xx=Math.floor(Math.random()*40)-20;
					var yy=Math.floor(Math.random()*20)-10;
					var zz=Math.floor(Math.random()*40)-20;
					if(Entity.getX(slayer[sl])<=getPlayerX()+xx&&Entity.getY(slayer[sl])<=getPlayerY()+yy&&Entity.getZ(slayer[sl])<=getPlayerZ()+zz){
						Entity.addEffect(getPlayerEnt(),18,60,1,false,false);
						if(Math.floor(Math.random()*7)+1==4){
							addLightning(getPlayerX()+xx,getPlayerY()-1,getPlayerZ()+zz);
							addLightning(getPlayerX()+xx,getPlayerY()-1,getPlayerZ()+zz);
						}
						if(Math.floor(Math.random()*10)+1==9){
							ModPE.setGameSpeed(10);
						}
						if(Math.floor(Math.random()*4)+1==3){
							ModPE.setGameSpeed(20);
						}
						count10++;
						if(count10==10){
							if(Math.floor(Math.random()*7)+1==5){
								for(var sexp=0;sexp<2;sexp++){
									explode(getPlayerX(),getPlayerY(),getPlayerZ(),2,true);
								}
							}
							count10=0;
						}
						if(Math.floor(Math.random()*4)+1==1){
							count11++;
							if(count11==5||count11==6||count11==7||count11==8||count11==9||count11==10||count11==11||count11==12||count11==13||count11==14||count11==15||count11==16||count11==17||count11==18||count11==19||count11==20){
								Throw(Entity.getX(slayer[sl]),Entity.getY(slayer[sl])+17,Entity.getZ(slayer[sl]),getPlayerX(),getPlayerY()-1,getPlayerZ(),2,80,1);
							}
							if(count11==20){
								count11=0;
							}
						}
						if(Math.floor(Math.random()*12)+1==7){
							var px=getPlayerX();
							var py=getPlayerY();
							var pz=getPlayerZ();
							Entity.setVelX(Level.spawnMob(px-2,py-1,pz,80),3);
							Entity.setVelX(Level.spawnMob(px+2,py-1,pz,80),-3);
							Entity.setVelY(Level.spawnMob(px,py+2,pz,80),-3);
							Entity.setVelZ(Level.spawnMob(px,py-1,pz-2,80),3);
							Entity.setVelZ(Level.spawnMob(px,py-1,pz+2,80),-3);
						}
						if(Math.floor(Math.random()*15)+1==9){
							var yaw=Entity.getYaw(slayer[sl])%360;
							var pitch=Entity.getPitch(slayer[sl])%360; 
							var Vx=-1*Math.sin(yaw*Math.PI/180)*Math.cos(pitch*Math.PI/180);
							var Vz=Math.cos(yaw*Math.PI/180)*Math.cos(pitch*Math.PI/180);
							for(var light=1;light<=5;light++){
								addLightning(Entity.getX(slayer[sl])*Vx+light,getPlayerY(),Entity.getZ(slayer[sl])*Vz+light);
							}
						}
						if(Math.floor(Math.random()*12)+1==8){
							Entity.setVelY(slayer[sl],1);
						}
						if(Math.floor(Math.random()*10)+1==2){
							ModPE.setGameSpeed(30);
						}
						count19++;
						if(count19==100){
							var hp=Entity.getHealth(getPlayerEnt());
							if(hp>=4){
								Entity.setHealth(getPlayerEnt(),hp-4);
							}
							if(hp<4&&hp>1){
								Entity.setHealth(getPlayerEnt(),1);
							}
							count19=0;
							Level.playSoundEnt(getPlayerEnt(),"mob.blaze.death",500,1);
						}
					}
				}
			}).start();
		}
	}
}

function slayer2AI(){
	if(Level.getGameMode()!==1){
		if(count13>0){
			new java.lang.Thread(function(){
				for(var sl2=0;sl2<slayer2.length;sl2++){
					var xx=Math.floor(Math.random()*40)-20;
					var yy=Math.floor(Math.random()*20)-10;
					var zz=Math.floor(Math.random()*40)-20;
					if(Entity.getX(slayer2[sl2])<=getPlayerX()+xx&&Entity.getY(slayer2[sl2])<=getPlayerY()+yy&&Entity.getZ(slayer2[sl2])<=getPlayerZ()+zz){
						Entity.addEffect(getPlayerEnt(),18,60,1,false,false);
						if(Math.floor(Math.random()*7)+1==4){
							addLightning(getPlayerX()+xx,getPlayerY()-1,getPlayerZ()+zz);
							addLightning(getPlayerX()+xx,getPlayerY()-1,getPlayerZ()+zz);
						}
						if(Math.floor(Math.random()*10)+1==9){
							ModPE.setGameSpeed(10);
						}
						if(Math.floor(Math.random()*4)+1==3){
							ModPE.setGameSpeed(20);
						}
						count14++;
						if(count14==10){
							if(Math.floor(Math.random()*7)+1==5){
								for(var sexp=0;sexp<2;sexp++){
									explode(getPlayerX(),getPlayerY(),getPlayerZ(),2,true);
								}
							}
							count14=0;
						}
						if(Math.floor(Math.random()*4)+1==1){
							count15++;
							if(count15==5||count15==6||count15==7||count15==8||count15==9||count15==10||count15==11||count15==12||count15==13||count15==14||count15==15||count15==18||count15==19||count15==20){
								Throw(Entity.getX(slayer2[sl2]),Entity.getY(slayer2[sl2])+17,Entity.getZ(slayer2[sl2]),getPlayerX(),getPlayerY()-1,getPlayerZ(),2,80,1);
							}
							if(count15==20){
								count15=0;
							}
						}
						if(Math.floor(Math.random()*12)+1==7){
							var px=getPlayerX();
							var py=getPlayerY();
							var pz=getPlayerZ();
							Entity.setVelX(Level.spawnMob(px-2,py-1,pz,80),3);
							Entity.setVelX(Level.spawnMob(px+2,py-1,pz,80),-3);
							Entity.setVelY(Level.spawnMob(px,py+2,pz,80),-3);
							Entity.setVelZ(Level.spawnMob(px,py-1,pz-2,80),3);
							Entity.setVelZ(Level.spawnMob(px,py-1,pz+2,80),-3);
						}
						if(Math.floor(Math.random()*15)+1==9){
							var yaw=Entity.getYaw(slayer2[sl2])%360;
							var pitch=Entity.getPitch(slayer2[sl2])%360; 
							var Vx=-1*Math.sin(yaw*Math.PI/180)*Math.cos(pitch*Math.PI/180);
							var Vz=Math.cos(yaw*Math.PI/180)*Math.cos(pitch*Math.PI/180);
							for(var light=1;light<=5;light++){
								addLightning(Entity.getX(slayer2[sl2])*Vx+light,getPlayerY(),Entity.getZ(slayer2[sl2])*Vz+light);
							}
						}
						if(Math.floor(Math.random()*12)+1==8){
							Entity.setVelY(slayer2[sl2],1);
						}
						if(Math.floor(Math.random()*10)+1==2){
							ModPE.setGameSpeed(30);
						}
						count20++;
						if(count20==100){
							var hp=Entity.getHealth(getPlayerEnt());
							if(hp>=4){
								Entity.setHealth(getPlayerEnt(),hp-4);
							}
							if(hp<4&&hp>1){
								Entity.setHealth(getPlayerEnt(),1);
							}
							count20=0;
							Level.playSoundEnt(getPlayerEnt(),"mob.blaze.death",500,1);
						}
					}
				}
			}).start();
		}
	}
}

function maouAI(){
	if(Level.getGameMode()!==1){
		if(count21>0){
			for(var ma=0;ma<maou.length;ma++){
				var xx=Math.floor(Math.random()*20)-10;
				var yy=Math.floor(Math.random()*50)-25;
				var zz=Math.floor(Math.random()*20)-10;
				if(Entity.getX(maou[ma])<=getPlayerX()+xx&&Entity.getY(maou[ma])<=getPlayerY()+yy&&Entity.getZ(maou[ma])<=getPlayerZ()+zz){
					if(Math.floor(Math.random()*11)+1==4){
						Level.playSoundEnt(getPlayerEnt(),"mob.ghast.scream",500,1);
							setTile(getPlayerX(),getPlayerY(),getPlayerZ(),1,0);
							setTile(getPlayerX(),getPlayerY(),getPlayerZ()+1,1,0);
							setTile(getPlayerX(),getPlayerY(),getPlayerZ()+2,1,0);
							setTile(getPlayerX(),getPlayerY(),getPlayerZ()-1,1,0);
							setTile(getPlayerX(),getPlayerY(),getPlayerZ()-2,1,0);
							setTile(getPlayerX()+1,getPlayerY(),getPlayerZ(),1,0);
							setTile(getPlayerX()+2,getPlayerY(),getPlayerZ(),1,0);
							setTile(getPlayerX()-1,getPlayerY(),getPlayerZ(),1,0);
							setTile(getPlayerX()-2,getPlayerY(),getPlayerZ(),1,0);
							setTile(getPlayerX()+1,getPlayerY(),getPlayerZ()+1,1,0);
							setTile(getPlayerX()+2,getPlayerY(),getPlayerZ()+2,1,0);
							setTile(getPlayerX()-1,getPlayerY(),getPlayerZ()-1,1,0);
							setTile(getPlayerX()-2,getPlayerY(),getPlayerZ()-2,1,0);
							setTile(getPlayerX()+1,getPlayerY(),getPlayerZ()-1,1,0);
							setTile(getPlayerX()+1,getPlayerY(),getPlayerZ()-2,1,0);
							setTile(getPlayerX()+1,getPlayerY(),getPlayerZ()+2,1,0);
							setTile(getPlayerX()+2,getPlayerY(),getPlayerZ()-1,1,0);
							setTile(getPlayerX()+2,getPlayerY(),getPlayerZ()-2,1,0);
							setTile(getPlayerX()+2,getPlayerY(),getPlayerZ()+1,1,0);
							setTile(getPlayerX()-1,getPlayerY(),getPlayerZ()-2,1,0);
							setTile(getPlayerX()-1,getPlayerY(),getPlayerZ()+1,1,0);
							setTile(getPlayerX()-1,getPlayerY(),getPlayerZ()+2,1,0);
							setTile(getPlayerX()-2,getPlayerY(),getPlayerZ()-1,1,0);
							setTile(getPlayerX()-2,getPlayerY(),getPlayerZ()+1,1,0);
							setTile(getPlayerX()-2,getPlayerY(),getPlayerZ()+2,1,0);
							Level.playSoundEnt(getPlayerEnt(),"random.explode",500,1);
					}
				}
			}
		}
	}
}

function mugenblazeAI(){
	if(Level.getGameMode()!==1){
		if(count23>0){
			for(mb=0;mb<mugenblaze.length;mb++){
				var xx=Math.floor(Math.random()*20)-10;
				var yy=Math.floor(Math.random()*20)-10;
				var zz=Math.floor(Math.random()*20)-10;
				if(Entity.getX(mugenblaze[mb])<=getPlayerX()+xx&&Entity.getY(mugenblaze[mb])<=getPlayerY()+yy&&Entity.getZ(mugenblaze[mb])<=getPlayerZ()+zz){
					if(Math.floor(Math.random()*8)+1==4){
							var px=getPlayerX();
							var py=getPlayerY();
							var pz=getPlayerZ();
							Entity.setVelX(Level.spawnMob(px-2,py-1,pz,80),3);
							Entity.setVelX(Level.spawnMob(px+2,py-1,pz,80),-3);
							Entity.setVelY(Level.spawnMob(px,py+2,pz,80),-3);
							Entity.setVelZ(Level.spawnMob(px,py-1,pz-2,80),3);
							Entity.setVelZ(Level.spawnMob(px,py-1,pz+2,80),-3);
					}
				}
			}
		}
	}
}


function mugenspiderAI(){
	if(Level.getGameMode()!==1){
		if(count24>0){
			for(var ms=0;ms<mugenspider.length;ms++){
				var xx=Math.floor(Math.random()*20)-10;
				var yy=Math.floor(Math.random()*10)-5;
				var zz=Math.floor(Math.random()*20)-10;
				if(Entity.getX(mugenspider[ms])<=getPlayerX()+xx&&Entity.getY(mugenspider[ms])<=getPlayerY()+yy&&Entity.getZ(mugenspider[ms])<=getPlayerZ()+zz){
					if(Math.floor(Math.random()*8)+1==4){
						setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),30,0);
					}
					if(Math.floor(Math.random()*10)+1==6){
						addLightning(getPlayerX(),getPlayerY(),getPlayerZ());
					}
				}
			}
		}
	}
}

function mugenendermanAI(){
	if(Level.getGameMode()!==1){
		if(count25>0){
			for(var me=0;me<mugenender.length;me++){
				Entity.setTarget(mugenender[me],getPlayerEnt());
				var xx=Math.floor(Math.random()*20)-10;
				var yy=Math.floor(Math.random()*10)-5;
				var zz=Math.floor(Math.random()*20)-10;
				if(Entity.getX(mugenender[me])<=getPlayerX()+xx&&Entity.getY(mugenender[me])<=getPlayerY()+yy&&Entity.getZ(mugenender[me])<=getPlayerZ()+zz){
					if(Math.floor(Math.random()*5)+1==4){
						setTile(getPlayerX()-1,getPlayerY(),getPlayerZ(),2,0);
						setTile(getPlayerX()+1,getPlayerY(),getPlayerZ(),2,0);
						setTile(getPlayerX(),getPlayerY(),getPlayerZ()-1,2,0);
						setTile(getPlayerX(),getPlayerY(),getPlayerZ()+1,2,0);
					}
				}
			}
		}
	}
}

function magumamanAI(){
	if(Level.getGameMode()!==1){
		if(count26>0){
			for(var mag=0;mag<magumaman.length;mag++){
				Entity.setTarget(magumaman[mag],getPlayerEnt());
				var xx=Math.floor(Math.random()*20)-10;
				var yy=Math.floor(Math.random()*10)-5;
				var zz=Math.floor(Math.random()*20)-10;
				if(Entity.getX(magumaman[mag])<=getPlayerX()+xx&&Entity.getY(magumaman[mag])<=getPlayerY()+yy&&Entity.getZ(magumaman[mag])<=getPlayerZ()+zz){
					if(Math.floor(Math.random()*5)+1==4){
						setTile(getPlayerX(),getPlayerY()+3,getPlayerZ(),10,0);
					}
				}
			}
		}
	}
}

function modTick(){
/***AI関係***/
	tumeAI();
	mugenzombieAI();
	mugenskeltonAI();
	slayerAI();
	slayer2AI();
	maouAI();
	mugenblazeAI();
	mugenspiderAI();
	mugenendermanAI();
	magumamanAI();

/***無限ダイヤ装備のエフェクト***/
//頭
	if(Player.getArmorSlot(0)==無限ダイヤのヘルメット){
		Entity.addEffect(Player.getEntity(),13,10,1,false,false);
		Entity.addEffect(Player.getEntity(),16,10,1,false,false);
	}

//胴
if(Player.getArmorSlot(1)==無限ダイヤのチェストプレート){
		if(!effect){
			Entity.addEffect(Player.getEntity(),10,999999,1,false,false);
			effect=true;
		}
	}else{
		if(effect){
			Entity.removeEffect(Player.getEntity(),10); 
			effect=false;
		}
	}

//レギンス
	if(Player.getArmorSlot(2)==無限ダイヤのレギンス){
		Entity.addEffect(Player.getEntity(),12,10,1,false,false);
	}

//足
	if(Player.getArmorSlot(3)==無限ダイヤのブーツ){
		Entity.addEffect(Player.getEntity(),1,10,1,false,false);
	}

/***魔王装備のエフェクト***/
//頭
	if(Player.getArmorSlot(0)==魔王のヘルメット){
		Entity.addEffect(Player.getEntity(),13,10,1,false,false);
		Entity.addEffect(Player.getEntity(),16,10,1,false,false);
	}

//胴
if(Player.getArmorSlot(1)==魔王のチェストプレート){
		if(!effect){
			Entity.addEffect(Player.getEntity(),10,999999,1,false,false);
			effect=true;
		}
	}else{
		if(effect){
			Entity.removeEffect(Player.getEntity(),10); 
			effect=false;
		}
	}

//レギンス
	if(Player.getArmorSlot(2)==魔王のレギンス){
		Entity.addEffect(Player.getEntity(),12,10,1,false,false);
	}
	
//足
	if(Player.getArmorSlot(3)==魔王のブーツ){
		Entity.addEffect(Player.getEntity(),1,10,1,false,false);
	}
	
/***武器のエフェクト***/
//村正
	if(getCarriedItem()==妖刀村正){
		Entity.addEffect(Player.getEntity(),5,10,1,false,false);
		Entity.addEffect(Player.getEntity(),1,10,2,false,false);
		Entity.addEffect(Player.getEntity(),8,10,1,false,false);
		Entity.addEffect(Player.getEntity(),12,10,5,false,false);
		Entity.addEffect(Player.getEntity(),10,10,1,false,false);
		Entity.addEffect(Player.getEntity(),11,10,11,false,false);
		Entity.addEffect(Player.getEntity(),17,10,0.5,false,false);
	}
	
//エクスカリバー
	if(getCarriedItem()==聖剣エクスカリバー){
		Entity.addEffect(Player.getEntity(),1,10,2,false,false);
		Entity.addEffect(Player.getEntity(),8,10,1,false,false);
		Entity.addEffect(Player.getEntity(),12,10,5,false,false);
		Entity.addEffect(Player.getEntity(),5,10,3,false,false);
	}
	
//強化メイス
	if(Player.getCarriedItem()==強化メイス){
		Entity.addEffect(Player.getEntity(),11,150,0.1,true,true);
		Entity.addEffect(Player.getEntity(),5,150,1,true,true);
	}
	
//ナルカミ
	if(Player.getCarriedItem()==神剣ナルカミ){
		Entity.addEffect(Player.getEntity(),11,10,1,false,false);
		Entity.addEffect(Player.getEntity(),12,10,1,false,false);
		Entity.addEffect(Player.getEntity(),1,10,2,false,false);
		Entity.setMaxHealth(Player.getEntity(),30);
		narukami=1;
	}
	
	if(Player.getCarriedItem()!==神剣ナルカミ&&narukami==1){
		Entity.setMaxHealth(Player.getEntity(),20);
		Entity.setHealth(Player.getEntity(),20);
		narukami=0;
	}
	
//盾の防御力
	shieldDefense();
	
/***必殺技***/
	var item=getCarriedItem();
	var level=Player.getLevel();
//エクスカリバー
	if(item==聖剣エクスカリバー&&!buttonset&&level>=5){
		addGUI();
		buttonset=true;
	} else if(buttonset&&item!==聖剣エクスカリバー&&level>=5){
		closeGUI();
		buttonset=false;
	} else if(buttonset&&item==聖剣エクスカリバー&&level<=5){
		closeGUI();
		buttonset=true
	} else if(item==聖剣エクスカリバー&&!buttonset1&&level>=30){
		addGUI1();
		buttonset1=true;
	} else if(buttonset1&&item!==聖剣エクスカリバー&&level>=25){
		closeGUI1();
		buttonset1=false;
	} else if(buttonset1&&item==聖剣エクスカリバー&&level<=25){
		closeGUI1();
		buttonset1=false;
	}

//真鉄の剣
	if(item==真鉄の剣&&!buttonset2&&level>=10){
		addGUI2();
		buttonset2=true;
	}else if(item==真鉄の剣&&buttonset2&&level<10){
		closeGUI2();
		buttonset2=false;
	}else if(item!==真鉄の剣&&buttonset2){
		closeGUI2();
		buttonset2=false;
	}
	
//真金の剣
	if(item==真金の剣&&!buttonset3&&level>=10){
		addGUI3();
		buttonset3=true;
	}else if(item!==真金の剣&&buttonset3){
		closeGUI3();
		buttonset3=false;
	}else if(item==真金の剣&&buttonset3&&level<10){
		closeGUI3();
		buttonset3=false;
	}
	
//真レッドストーンの剣
	if(item==真レッドストーンの剣&&!buttonset4&&level>=20){
		addGUI4();
		buttonset4=true;
	}else if(item!==真レッドストーンの剣&&buttonset4){
		closeGUI4();
		buttonset4=false;
	}else if(item==真レッドストーンの剣&&buttonset&&level<20){
		closeGUI4();
		buttonset4=false;
	}
	
	if(sexplod==1){
		count2++;
		if(count2==60){
			explode(getPlayerX(),getPlayerY(),getPlayerZ(),20,true);
			count2=0;
			sexplod=0;
		}
	}
	
//真ラピスラズリの剣
	if(item==真ラピスラズリの剣&&!buttonset5&&level>=5){
		addGUI5();
		buttonset5=true;
	}else if(item!==真ラピスラズリの剣&&buttonset5){
		closeGUI5();
		buttonset5=false;
	}else if(item==真ラピスラズリの剣&&buttonset5&&level<5){
		closeGUI5();
		buttonset5=false;
	}
	
	if(aice1==1){
		count3++;
		if(count3==60){
			for(var q=0;q<=20;q++){
				setTile(gx-2,gy+2,gz-10+q,0,0);
				setTile(gx+2,gy+2,gz-10+q,0,0);
				setTile(gx-10+q,gy+2,gz-2,0,0);
				setTile(gx-10+q,gy+2,gz+2,0,0);
				count3=0;
				aice1=0;
			}
		}
	}

//ChunkGeneratedHook
	Chunk();
	
/***自然スポーン***/
if(Level.getDifficulty()!==0){
	if(df==2){
		count1++;
		if(count1==40){
		//無限ゾンビX
			if(Math.floor(Math.random()*6)+1<=1){ 
				var ax = Math.floor(Math.random()*50)-25;
				var ay = Math.floor(Math.random()*10)-5;
				var az = Math.floor(Math.random()*50)-25;
				if(getTile( getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az)==2 && Level.getBrightness( getPlayerX()+ax,getPlayerY()+ay+1,getPlayerZ()+az )<=7){
					spawnMugenzombieX(getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az);
				}
			}
		//無限スケルトンX
			if(Math.floor(Math.random()*5)+1<=1){ 
				var ax = Math.floor(Math.random()*50)-25;
				var ay = Math.floor(Math.random()*10)-5;
				var az = Math.floor(Math.random()*50)-25;
				if(getTile( getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az)==2 && Level.getBrightness( getPlayerX()+ax,getPlayerY()+ay+1,getPlayerZ()+az )<=5){
					spawnMugenskeletonX(getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az);
				}
			}
		//無限クリーパーX
			if(Math.floor(Math.random()*5)+1<=1){ 
				var ax = Math.floor(Math.random()*50)-25;
				var ay = Math.floor(Math.random()*10)-5;
				var az = Math.floor(Math.random()*50)-25;
				if(getTile( getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az)==2 && Level.getBrightness( getPlayerX()+ax,getPlayerY()+ay+1,getPlayerZ()+az )<=5){
					spawnMugencreeperX(getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az);
				}
			}
		//無限スパイダーX
			if(Math.floor(Math.random()*5)+1<=1){
				var xx=Math.floor(Math.random()*50)-25;
				var yy=Math.floor(Math.random()*10)-5;
				var zz=Math.floor(Math.random()*50)-25;
				if(Level.getTile(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)==2&&Level.getBrightness(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)<=5){
					spawnMugenspiderX(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz);
				}
			}
		//無限エンダーマンX
			if(Math.floor(Math.random()*6)+1<=1){
				var xx=Math.floor(Math.random()*50)-25;
				var yy=Math.floor(Math.random()*10)-5;
				var zz=Math.floor(Math.random()*50)-25;
				if(Level.getTile(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)==2&&Level.getBrightness(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)<=5){
					spawnMugenendermanX(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz);
				}
			}
		//浮游する爪X
			if(Math.floor(Math.random()*4)+1<=1){ 
				var ax = Math.floor(Math.random()*50)-25;
				var ay = Math.floor(Math.random()*10)-5;
				var az = Math.floor(Math.random()*50)-25;
				if(getTile( getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az)==2 && Level.getBrightness( getPlayerX()+ax,getPlayerY()+ay+1,getPlayerZ()+az )<=5){
					spawnTumeX(getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az);
				}
			}
		//クローエンペラーX
			if(Math.floor(Math.random()*8)+1<=1){
				var xx=Math.floor(Math.random()*50)-25;
				var yy=Math.floor(Math.random()*10)-5;
				var zz=Math.floor(Math.random()*50)-25;
				if(Level.getTile(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)==2&&Level.getBrightness(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)<=7){
					spawnSlayerX(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz);
				}
			}
		//マグマーマンX
			if(Math.floor(Math.random()*6)+1<=1){
				if(Player.getDimension()==1){
					var xx=Math.floor(Math.random()*50)-25;
					var yy=Math.floor(Math.random()*10)-5;
					var zz=Math.floor(Math.random()*50)-25;
					if(Level.getTile(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)==87){
						spawnMagumamanX(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz);
					}
				}
			}
			count1=0;
		}
	}else if(df==0){
		count++;
		//無限ゾンビ
		if(count==60){
			if(Math.floor(Math.random()*6)+1<=1){ 
				var ax = Math.floor(Math.random()*50)-25;
				var ay = Math.floor(Math.random()*10)-5;
				var az = Math.floor(Math.random()*50)-25;
				if(getTile( getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az)==2 && Level.getBrightness( getPlayerX()+ax,getPlayerY()+ay+1,getPlayerZ()+az )<=7){
					spawnMugenzombie(getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az);
				}
			}
		//無限スケルトン
			if(Math.floor(Math.random()*5)+1<=1){ 
				var ax = Math.floor(Math.random()*50)-25;
				var ay = Math.floor(Math.random()*10)-5;
				var az = Math.floor(Math.random()*50)-25;
				if(getTile( getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az)==2 && Level.getBrightness( getPlayerX()+ax,getPlayerY()+ay+1,getPlayerZ()+az )<=5){
					spawnMugenskeleton(getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az);
				}
			}
		//無限クリーパー
			if(Math.floor(Math.random()*5)+1<=1){ 
				var ax = Math.floor(Math.random()*50)-25;
				var ay = Math.floor(Math.random()*10)-5;
				var az = Math.floor(Math.random()*50)-25;
				if(getTile( getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az)==2 && Level.getBrightness( getPlayerX()+ax,getPlayerY()+ay+1,getPlayerZ()+az )<=5){
					spawnMugencreeper(getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az);
				}
			}
		//無限スパイダー
			if(Math.floor(Math.random()*5)+1<=1){
				var xx=Math.floor(Math.random()*50)-25;
				var yy=Math.floor(Math.random()*10)-5;
				var zz=Math.floor(Math.random()*50)-25;
				if(Level.getTile(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)==2&&Level.getBrightness(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)<=5){
					spawnMugenspider(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz);
				}
			}
		//無限エンダーマン
			if(Math.floor(Math.random()*6)+1<=1){
				var xx=Math.floor(Math.random()*50)-25;
				var yy=Math.floor(Math.random()*10)-5;
				var zz=Math.floor(Math.random()*50)-25;
				if(Level.getTile(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)==2&&Level.getBrightness(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)<=5){
					spawnMugenenderman(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz);
				}
			}
		//浮游する爪
			if(Math.floor(Math.random()*4)+1<=1){ 
				var ax = Math.floor(Math.random()*50)-25;
				var ay = Math.floor(Math.random()*10)-5;
				var az = Math.floor(Math.random()*50)-25;
				if(getTile( getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az)==2 && Level.getBrightness( getPlayerX()+ax,getPlayerY()+ay+1,getPlayerZ()+az )<=5){
					spawnTume(getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az);
				}
			}
		//クローエンペラー
			if(Math.floor(Math.random()*8)+1<=1){
				var xx=Math.floor(Math.random()*50)-25;
				var yy=Math.floor(Math.random()*10)-5;
				var zz=Math.floor(Math.random()*50)-25;
				if(Level.getTile(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)==2&&Level.getBrightness(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)<=7){
					spawnSlayer(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz);
				}
			}
		//マグマーマン
			if(Math.floor(Math.random()*6)+1<=1){
				if(Player.getDimension()==1){
					var xx=Math.floor(Math.random()*50)-25;
					var yy=Math.floor(Math.random()*10)-5;
					var zz=Math.floor(Math.random()*50)-25;
					if(Level.getTile(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)==87){
						spawnMagumaman(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz);
					}
				}
			}
			count=0;
		}
	}else if(df==3){
		count4++;
		if(count4==30){
		//無限ゾンビXs
			if(Math.floor(Math.random()*6)+1<=1){ 
				var ax = Math.floor(Math.random()*50)-25;
				var ay = Math.floor(Math.random()*10)-5;
				var az = Math.floor(Math.random()*50)-25;
				if(getTile( getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az)==2 && Level.getBrightness( getPlayerX()+ax,getPlayerY()+ay+1,getPlayerZ()+az )<=7){
					spawnMugenzombieXs(getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az);
				}
			}
		//無限スケルトンXs
			if(Math.floor(Math.random()*5)+1<=1){ 
				var ax = Math.floor(Math.random()*50)-25;
				var ay = Math.floor(Math.random()*10)-5;
				var az = Math.floor(Math.random()*50)-25;
				if(getTile( getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az)==2 && Level.getBrightness( getPlayerX()+ax,getPlayerY()+ay+1,getPlayerZ()+az )<=5){
					spawnMugenskeletonXs(getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az);
				}
			}
		//無限クリーパーXs
			if(Math.floor(Math.random()*5)+1<=1){ 
				var ax = Math.floor(Math.random()*50)-25;
				var ay = Math.floor(Math.random()*10)-5;
				var az = Math.floor(Math.random()*50)-25;
				if(getTile( getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az)==2 && Level.getBrightness( getPlayerX()+ax,getPlayerY()+ay+1,getPlayerZ()+az )<=5){
					spawnMugencreeperXs(getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az);
				}
			}
		//無限スパイダーXs
			if(Math.floor(Math.random()*5)+1<=1){
				var xx=Math.floor(Math.random()*50)-25;
				var yy=Math.floor(Math.random()*10)-5;
				var zz=Math.floor(Math.random()*50)-25;
				if(Level.getTile(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)==2&&Level.getBrightness(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)<=5){
					spawnMugenspiderXs(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz);
				}
			}
		//無限エンダーマンXs
			if(Math.floor(Math.random()*6)+1<=1){
				var xx=Math.floor(Math.random()*50)-25;
				var yy=Math.floor(Math.random()*10)-5;
				var zz=Math.floor(Math.random()*50)-25;
				if(Level.getTile(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)==2&&Level.getBrightness(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)<=5){
					spawnMugenendermanXs(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz);
				}
			}
		//浮游する爪Xs
			if(Math.floor(Math.random()*4)+1<=1){ 
				var ax = Math.floor(Math.random()*50)-25;
				var ay = Math.floor(Math.random()*10)-5;
				var az = Math.floor(Math.random()*50)-25;
				if(getTile( getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az)==2&& Level.getBrightness( getPlayerX()+ax,getPlayerY()+ay+1,getPlayerZ()+az )<=5){
					spawnTumeXs(getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az);
				}
			}
		//クローエンペラーXs
			if(Math.floor(Math.random()*8)+1<=1){
				var xx=Math.floor(Math.random()*50)-25;
				var yy=Math.floor(Math.random()*10)-5;
				var zz=Math.floor(Math.random()*50)-25;
				if(Level.getTile(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)==2&&Level.getBrightness(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)<=7){
					spawnSlayerXs(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz);
				}
			}
		//マグマーマンXs
			if(Math.floor(Math.random()*6)+1<=1){
				if(Player.getDimension()==1){
					var xx=Math.floor(Math.random()*50)-25;
					var yy=Math.floor(Math.random()*10)-5;
					var zz=Math.floor(Math.random()*50)-25;
					if(Level.getTile(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)==87){
						spawnMagumamanXs(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz);
					}
				}
			}
			count4=0;
		}
	}else if(df==1){
		count5++;
		//無限ゾンビXno
		if(count==50){
			if(Math.floor(Math.random()*6)+1<=1){ 
				var ax = Math.floor(Math.random()*50)-25;
				var ay = Math.floor(Math.random()*10)-5;
				var az = Math.floor(Math.random()*50)-25;
				if(getTile( getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az)==2 && Level.getBrightness( getPlayerX()+ax,getPlayerY()+ay+1,getPlayerZ()+az )<=7){
					spawnMugenzombieXno(getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az);
				}
			}
		//無限スケルトンXno
			if(Math.floor(Math.random()*5)+1<=1){ 
				var ax = Math.floor(Math.random()*50)-25;
				var ay = Math.floor(Math.random()*10)-5;
				var az = Math.floor(Math.random()*50)-25;
				if(getTile( getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az)==2 && Level.getBrightness( getPlayerX()+ax,getPlayerY()+ay+1,getPlayerZ()+az )<=5){
					spawnMugenskeletonXno(getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az);
				}
			}
		//無限クリーパーXno
			if(Math.floor(Math.random()*5)+1<=1){ 
				var ax = Math.floor(Math.random()*50)-25;
				var ay = Math.floor(Math.random()*10)-5;
				var az = Math.floor(Math.random()*50)-25;
				if(getTile( getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az)==2 && Level.getBrightness( getPlayerX()+ax,getPlayerY()+ay+1,getPlayerZ()+az )<=5){
					spawnMugencreeperXno(getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az);
				}
			}
		//無限スパイダーXno
			if(Math.floor(Math.random()*5)+1<=1){
				var xx=Math.floor(Math.random()*50)-25;
				var yy=Math.floor(Math.random()*10)-5;
				var zz=Math.floor(Math.random()*50)-25;
				if(Level.getTile(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)==2&&Level.getBrightness(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)<=5){
					spawnMugenspiderXno(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz);
				}
			}
		//無限エンダーマンXno
			if(Math.floor(Math.random()*6)+1<=1){
				var xx=Math.floor(Math.random()*50)-25;
				var yy=Math.floor(Math.random()*10)-5;
				var zz=Math.floor(Math.random()*50)-25;
				if(Level.getTile(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)==2&&Level.getBrightness(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)<=5){
					spawnMugenendermanXno(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz);
				}
			}
		//浮游する爪Xno
			if(Math.floor(Math.random()*4)+1<=1){ 
				var ax = Math.floor(Math.random()*50)-25;
				var ay = Math.floor(Math.random()*10)-5;
				var az = Math.floor(Math.random()*50)-25;
				if(getTile( getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az)==2 && Level.getBrightness( getPlayerX()+ax,getPlayerY()+ay+1,getPlayerZ()+az )<=5){
					spawnTumeXno(getPlayerX()+ax,getPlayerY()+ay,getPlayerZ()+az);
				}
			}
		//クローエンペラーXno
			if(Math.floor(Math.random()*8)+1<=1){
				var xx=Math.floor(Math.random()*50)-25;
				var yy=Math.floor(Math.random()*10)-5;
				var zz=Math.floor(Math.random()*50)-25;
				if(Level.getTile(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)==2&&Levl.getBrightness(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)<=7){
					spawnSlayerXno(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz);
				}
			}
		//マグマーマンXno
			if(Math.floor(Math.random()*6)+1<=1){
				if(Player.getDimension()==1){
					var xx=Math.floor(Math.random()*50)-25;
					var yy=Math.floor(Math.random()*10)-5;
					var zz=Math.floor(Math.random()*50)-25;
					if(Level.getTile(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz)==87){
						spawnMagumamanXno(getPlayerX()+xx,getPlayerY()+yy,getPlayerZ()+zz);
					}
				}
			}
			count5=0;
		}
	}
}
	if(slayerxp==1){
		count18++;
		if(count18==20){
			for(var xp=1;xp<=50;xp++){
				Level.spawnMob(slx,sly,slz,68);
			}
		}
		if(count18==60) {
			for(var xp=1;xp<=50;xp++){
				Level.spawnMob(slx,sly,slz,68);
			}
		}
		if(count18==100){
			for(var xp=1;xp<=50;xp++){
				Level.spawnMob(slx,sly,slz,68);
			}
		}
		if(count18==140){
			for(var xp=1;xp<=50;xp++){
				Level.spawnMob(slx,sly,slz,68);
			}
		}
		if(count18==180){
			for(var xp=1;xp<=50;xp++){
				Level.spawnMob(slx,sly,slz,68);
			}
		}
		if(count18==220){
			for(var xp=1;xp<=50;xp++){
				Level.spawnMob(slx,sly,slz,68);
			}
		}
		if(count18==260){
			for(var xp=1;xp<=50;xp++){
				Level.spawnMob(slx,sly,slz,68);
			}
		}
		if(count18==300){
			for(var xp=1;xp<=50;xp++){
				Level.spawnMob(slx,sly,slz,68);
			}
		}
		if(count18==340){
			for(var xp=1;xp<=50;xp++){
				Level.spawnMob(slx,sly,slz,68);
			}
			count18=0;
			slayerxp=0;
		}
	}
}

function useItem(x,y,z,i,b,s,id,bd){
//聖なる雷
if(sei==1&&i==聖剣エクスカリバー){
addLightning(x+5,y+1,z);
addLightning(x+5,y+1,z+1);
addLightning(x+5,y+1,z+2);
addLightning(x+5,y+1,z-1);
addLightning(x+5,y+1,z-2);
addLightning(x-5,y+1,z);
addLightning(x-5,y+1,z+1);
addLightning(x-5,y+1,z+2);
addLightning(x-5,y+1,z-1);
addLightning(x-5,y+1,z-2);
addLightning(x,y+1,z+5);
addLightning(x+1,y+1,z+5);
addLightning(x+2,y+1,z+5);
addLightning(x-1,y+1,z+5);
addLightning(x-2,y+1,z+5);
addLightning(x,y+1,z-5);
addLightning(x+1,y+1,z-5);
addLightning(x+2,y+1,z-5);
addLightning(x-1,y+1,z-5);
addLightning(x-2,y+1,z-5);
addLightning(x,y+1,z);
addLightning(x+1,y+1,z);
addLightning(x-1,y+1,z);
addLightning(x,y+1,z+1);
addLightning(x,y+1,z-1);
addLightning(x+1,y+1,z+1);
addLightning(x-1,y+1,z+1);
addLightning(x+1,y+1,z-1);
addLightning(x-1,y+1,z-1);
Entity.addEffect(Player.getEntity(),12,0.1,1,false,false);
sei=0;
}

//アイスバリア
if(aice==1&&i==真ラピスラズリの剣){
for(var q=0;q<=20;q++){
setTile(x-2,y+2,z-10+q,79,0);
setTile(x+2,y+2,z-10+q,79,0);
setTile(x-10+q,y+2,z-2,79,0);
setTile(x-10+q,y+2,z+2,79,0);
aice=0;
aice1=1;
gx=x;
gy=y;
gz=z;
 }
}


/***黒の杖処理***/
//黒曜石ドーム生成
if(i==黒の杖){
for(var s=0;s<=2;s++){
setTile(x,y,z,儀式,10);
setTile(x+4,y+1+s,z,49,0);
setTile(x-4,y+1+s,z,49,0);
setTile(x,y+1+s,z+4,49,0);
setTile(x,y+1+s,z-4,49,0);
setTile(x+3,y+1+s,z+1,49,0);
setTile(x+2,y+1+s,z+2,49,0);
setTile(x+1,y+1+s,z+3,49,0);
setTile(x-1,y+1+s,z+3,49,0);
setTile(x-2,y+1+s,z+2,49,0);
setTile(x-3,y+1+s,z+1,49,0);
setTile(x-3,y+1+s,z-1,49,0);
setTile(x-2,y+1+s,z-2,49,0);
setTile(x-1,y+1+s,z-3,49,0);
setTile(x+1,y+1+s,z-3,49,0);
setTile(x+2,y+1+s,z-2,49,0);
setTile(x+3,y+1+s,z-1,49,0);
setTile(x,y+4,z+3,49,0);
setTile(x,y+5,z+2,49,0);
setTile(x,y+6,z+1,49,0);
setTile(x-3,y+4,z,49,0);
setTile(x-2,y+5,z,49,0);
setTile(x-1,y+6,z,49,0);
setTile(x,y+4,z-3,49,0);
setTile(x,y+5,z-2,49,0);
setTile(x,y+6,z-1,49,0);
setTile(x+3,y+4,z,49,0);
setTile(x+2,y+5,z,49,0);
setTile(x+1,y+6,z,49,0);
setTile(x-1,y+4,z+2,49,0);
setTile(x-2,y+4,z+1,49,0);
setTile(x-1,y+5,z+1,49,0);
setTile(x-2,y+4,z-1,49,0);
setTile(x-1,y+4,z-2,49,0);
setTile(x-1,y+5,z-1,49,0);
setTile(x+1,y+4,z-2,49,0);
setTile(x+2,y+4,z-1,49,0);
setTile(x+1,y+5,z-1,49,0);
setTile(x+2,y+4,z+1,49,0);
setTile(x+1,y+4,z+2,49,0);
setTile(x+1,y+5,z+1,49,0);
setTile(x,y+7,z,49,0);
if(b==儀式&&bd==10){
setTile(x,y,z,3,0);
setTile(x+4,y+1+s,z,0,0);
setTile(x-4,y+1+s,z,0,0);
setTile(x,y+1+s,z+4,0,0);
setTile(x,y+1+s,z-4,0,0);
setTile(x+3,y+1+s,z+1,0,0);
setTile(x+2,y+1+s,z+2,0,0);
setTile(x+1,y+1+s,z+3,0,0);
setTile(x-1,y+1+s,z+3,0,0);
setTile(x-2,y+1+s,z+2,0,0);
setTile(x-3,y+1+s,z+1,0,0);
setTile(x-3,y+1+s,z-1,0,0);
setTile(x-2,y+1+s,z-2,0,0);
setTile(x-1,y+1+s,z-3,0,0);
setTile(x+1,y+1+s,z-3,0,0);
setTile(x+2,y+1+s,z-2,0,0);
setTile(x+3,y+1+s,z-1,0,0);
setTile(x,y+4,z+3,0,0);
setTile(x,y+5,z+2,0,0);
setTile(x,y+6,z+1,0,0);
setTile(x-3,y+4,z,0,0);
setTile(x-2,y+5,z,0,0);
setTile(x-1,y+6,z,0,0);
setTile(x,y+4,z-3,0,0);
setTile(x,y+5,z-2,0,0);
setTile(x,y+6,z-1,0,0);
setTile(x+3,y+4,z,0,0);
setTile(x+2,y+5,z,0,0);
setTile(x+1,y+6,z,0,0);
setTile(x-1,y+4,z+2,0,0);
setTile(x-2,y+4,z+1,0,0);
setTile(x-1,y+5,z+1,0,0);
setTile(x-2,y+4,z-1,0,0);
setTile(x-1,y+4,z-2,0,0);
setTile(x-1,y+5,z-1,0,0);
setTile(x+1,y+4,z-2,0,0);
setTile(x+2,y+4,z-1,0,0);
setTile(x+1,y+5,z-1,0,0);
setTile(x+2,y+4,z+1,0,0);
setTile(x+1,y+4,z+2,0,0);
setTile(x+1,y+5,z+1,0,0);
setTile(x,y+7,z,0,0);
  }
 }
}

/***スポーンエッグ処理***/
	if(Level.getDifficulty()!==0){
		if(df==2){
			//魔王X
			if(i==魔王のスポーンエッグ){
				down(1);
				spawnMaouX(x,y,z);
			}
			//無限ゾンビX
			if(i==無限ゾンビのスポーンエッグ){
				down(1);
				spawnMugenzombieX(x,y,z);
			}
			//無限スケルトンX
			if(i==無限スケルトンのスポーンエッグ){
				down(1);
				spawnMugenskeletonX(x,y,z);
			}
			//無限クリーパーX
			if(i==無限クリーパーのスポーンエッグ){
				down(1);
				spawnMugencreeperX(x,y,z);
			}
			//無限スパイダーX
			if(i==無限スパイダーのスポーンエッグ){
				down(1);
				spawnMugenspider(x,y,z);
			}
			//無限エンダーマンX
			if(i==無限エンダーマンのスポーンエッグ){
				down(1);
				spawnMugenendermanX(x,y,z);
			}
			//無限ブレイズX
			if(i==無限ブレイズのスポーンエッグ){
				down(1);
				spawnMugenblazeX(x,y,z);
			}
			//無限ブレイズ子分X
			if(i==無限ブレイズのスポーンエッグ子分){
				down(1);
				spawnMugenblaze2X(x,y,z);
			}
			//浮游する爪X
			if(i==浮游する爪のスポーンエッグ){
				down(1);
				spawnTumeX(x,y,z);
			}
			//クローエンペラーX
			if(i==クローエンペラーのスポーンエッグ){
				down(1);
				spawnSlayerX(x,y,z);
			}
			//マグマーマンX
			if(i==マグマーマンのスポーンエッグ){
				down(1);
				spawnMagumamanX(x,y,z);
			}
		}else if(df==0){
			//魔王
			if(i==魔王のスポーンエッグ){
				down(1);
				spawnMaou(x,y,z);
			}
			//無限ゾンビ
			if(i==無限ゾンビのスポーンエッグ){
				down(1);
				spawnMugenzombie(x,y,z);
			}
			//無限スケルトン
			if(i==無限スケルトンのスポーンエッグ){
				down(1);
				spawnMugenskeleton(x,y,z);
			}
			//無限クリーパー
			if(i==無限クリーパーのスポーンエッグ){
				down(1);
				spawnMugencreeper(x,y,z);
			}
			//無限スパイダー
			if(i==無限スパイダーのスポーンエッグ){
				down(1);
				spawnMugenspider(x,y,z);
			}
			//無限エンダーマン
			if(i==無限エンダーマンのスポーンエッグ){
				down(1);
				spawnMugenenderman(x,y,z);
			}
			//無限ブレイズ
			if(i==無限ブレイズのスポーンエッグ){
				down(1);
						spawnMugenblaze(x,y,z);
			}
			//無限ブレイズ子分
			if(i==無限ブレイズのスポーンエッグ子分){
				down(1);
				spawnMugenblaze2(x,y,z);
			}
			//浮游する爪
			if(i==浮游する爪のスポーンエッグ){
				down(1);
				spawnTume(x,y,z);
			}
			//クローエンペラー
			if(i==クローエンペラーのスポーンエッグ){
				down(1);
				spawnSlayer(x,y,z);
			}
			//マグマーマン
			if(i==マグマーマンのスポーンエッグ){
				down(1);
				spawnMagumaman(x,y,z);
			}
		}
		if(df==3){
			//魔王Xs
			if(i==魔王のスポーンエッグ){
				down(1);
				spawnMaouXs(x,y,z);
			}
			//無限ゾンビXs
			if(i==無限ゾンビのスポーンエッグ){
				down(1);
				spawnMugenzombieXs(x,y,z);
			}
			//無限スケルトンXs
			if(i==無限スケルトンのスポーンエッグ){
				down(1);
				spawnMugenskeletonXs(x,y,z);
			}
			//無限クリーパーXs
			if(i==無限クリーパーのスポーンエッグ){
				down(1);
				spawnMugencreeperXs(x,y,z);
			}
			//無限スパイダーXs
			if(i==無限スパイダーのスポーンエッグ){
				down(1);
				spawnMugenspiderXs(x,y,z);
			}
			//無限エンダーマンXs
			if(i==無限エンダーマンのスポーンエッグ){
				down(1);
				spawnMugenendermanXs(x,y,z);
			}
			//無限ブレイズXs
			if(i==無限ブレイズのスポーンエッグ){
				down(1);
				spawnMugenblazeXs(x,y,z);
			}
			//無限ブレイズ子分Xs
			if(i==無限ブレイズのスポーンエッグ子分){
				down(1);
				spawnMugenblaze2Xs(x,y,z);
			}
			//浮游する爪Xs
			if(i==浮游する爪のスポーンエッグ){
				down(1);
				spawnTumeXs(x,y,z);
			}
			//クローエンペラーXs
			if(i==クローエンペラーのスポーンエッグ){
				down(1);
				spawnSlayerXs(x,y,z);
			}
			//マグマーマンXs
			if(i==マグマーマンのスポーンエッグ){
				down(1);
				spawnMagumamanXs(x,y,z);
			}
		}else if(df==1){
			//魔王Xno
			if(i==魔王のスポーンエッグ){
				down(1);
				spawnMaouXno(x,y,z);
			}
			//無限ゾンビXno
			if(i==無限ゾンビのスポーンエッグ){
				down(1);
				spawnMugenzombieXno(x,y,z);
			}
			//無限スケルトンXno
			if(i==無限スケルトンのスポーンエッグ){
				down(1);
				spawnMugenskeletonXno(x,y,z);
			}
			//無限クリーパーXno
			if(i==無限クリーパーのスポーンエッグ){
				down(1);
				spawnMugencreeperXno(x,y,z);
			}
			//無限スパイダーXno
			if(i==無限スパイダーのスポーンエッグ){
				down(1);
				spawnMugenspiderXno(x,y,z);
			}
			//無限エンダーマンXno
			if(i==無限エンダーマンのスポーンエッグ){
				down(1);
				spawnMugenendermanXno(x,y,z);
			}
			//無限ブレイズXno
			if(i==無限ブレイズのスポーンエッグ){
				down(1);
				spawnMugenblazeXno(x,y,z);
			}
			//無限ブレイズ子分Xno
			if(i==無限ブレイズのスポーンエッグ子分){
				down(1);
				spawnMugenblaze2Xno(x,y,z);
			}
			//浮游する爪Xno
			if(i==浮游する爪のスポーンエッグ){
				down(1);
				spawnTumeXno(x,y,z);
			}
			//クローエンペラーXno
			if(i==クローエンペラーのスポーンエッグ){
				down(1);
				spawnSlayerXno(x,y,z);
			}
			//マグマーマンXno
			if(i==マグマーマンのスポーンエッグ){
				down(1);
				spawnMagumamanXno(x,y,z);
			}
		}
	}
	
/***召喚***/
//無限ブレイズ	
if(i==369){
if(b==儀式){
if(bd==0){
setTile(x,y,z,儀式,1);
down(1);
print("難易度がイージー以上か確認してください");
clientMessage("無限ブレイズをスポーンさせる儀式を始めます。まず、無限ダイヤでタップしてください。");
  }
 }
}

if(i==無限ダイヤ){
if(b==儀式){
if(bd==1){
setTile(x,y,z,儀式,2);
down(1);
clientMessage("次に、ダイヤモンドでタップしてください。");
  }
 }
}

if(i==ダイヤ){
if(b==儀式){
if(bd==2){
setTile(x,y,z,儀式,3);
down(1);
clientMessage("次に、腐った肉でタップしてください。");
  }
 }
}

if(i==367){
if(b==儀式){
if(bd==3){
setTile(x,y,z,儀式,4);
down(1);
clientMessage("次に、生命の源でタップしてください。タップしたら、無限ブレイズがスポーンシマス");
  }
 }
}

if(i==生命の源){
if(b==儀式){
if(bd==4){
setTile(x,y,z,儀式,0);
down(1);
clientMessage("無限ブレイズスポーン!");
if(df==2){
spawnMugenblazeX(x,y,z);
spawnMugenblaze2X(x,y,z);
spawnMugenblaze2X(x,y,z);
spawnMugenblaze2X(x,y,z);
spawnMugenblaze2X(x,y,z);
spawnMugenblaze2X(x,y,z);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
}else if(df==0){
spawnMugenblaze(x,y,z);
spawnMugenblaze2(x,y,z);
spawnMugenblaze2(x,y,z);
spawnMugenblaze2(x,y,z);
spawnMugenblaze2(x,y,z);
spawnMugenblaze2(x,y,z);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
}else if(df==1){
spawnMugenblazeXno(x,y,z);
spawnMugenblaze2Xno(x,y,z);
spawnMugenblaze2Xno(x,y,z);
spawnMugenblaze2Xno(x,y,z);
spawnMugenblaze2Xno(x,y,z);
spawnMugenblaze2Xno(x,y,z);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
}else if(df==3){
spawnMugenblazeXs(x,y,z);
spawnMugenblaze2Xs(x,y,z);
spawnMugenblaze2Xs(x,y,z);
spawnMugenblaze2Xs(x,y,z);
spawnMugenblaze2Xs(x,y,z);
spawnMugenblaze2Xs(x,y,z);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
Level.spawnMob(x,y,z,32);
   }
  }
 }
}

//魔王
if(i==370){
if(b==儀式){
if(bd==5){
setTile(x,y,z,儀式,6);
down(1);
print("難易度がイージー以上か確認してください");
clientMessage("魔王を召喚する儀式をはじめます。まず、ブレイズロッドでタップしてください。");
  }
 }
}

if(i==369){
if(b==儀式){
if(bd==6){
setTile(x,y,z,儀式,7);
down(1);
clientMessage("次に、無限ダイヤでタップしてください。");
  }
 }
}

if(i==無限ダイヤ){
if(b==儀式){
if(bd==7){
setTile(x,y,z,儀式,8);
down(1);
clientMessage("次に、生命の源でタップしてください。タップしたら、魔王が召喚サレマス");
  }
 }
}

if(i==生命の源){
if(b==儀式){
if(bd==8){
setTile(x,y,z,儀式,5);
down(1);
clientMessage("魔王召喚!");
if(df==2){
spawnMaouX(x,y+5,z);
spawnMugenblazeX(x,y,z);
spawnMugenblazeX(x,y,z);
spawnMugenblaze2X(x,y,z);
spawnMugenblaze2X(x,y,z);
spawnMugenblaze2X(x,y,z);
spawnMugenblaze2X(x,y,z);
spawnMugenzombieX(x,y,z);
spawnMugenzombieX(x,y,z);
spawnMugenzombieX(x,y,z);
spawnMugenzombieX(x,y,z);
}else if(df==0){
spawnMaou(x,y+5,z);
spawnMugenblaze(x,y,z);
spawnMugenblaze(x,y,z);
spawnMugenblaze2(x,y,z);
spawnMugenblaze2(x,y,z);
spawnMugenblaze2(x,y,z);
spawnMugenblaze2(x,y,z);
spawnMugenzombie(x,y,z);
spawnMugenzombie(x,y,z);
spawnMugenzombie(x,y,z);
spawnMugenzombie(x,y,z);
}else if(df==1){
spawnMaouXno(x,y+5,z);
spawnMugenblazeXno(x,y,z);
spawnMugenblazeXno(x,y,z);
spawnMugenblaze2Xno(x,y,z);
spawnMugenblaze2Xno(x,y,z);
spawnMugenblaze2Xno(x,y,z);
spawnMugenblaze2Xno(x,y,z);
spawnMugenzombieXno(x,y,z);
spawnMugenzombieXno(x,y,z);
spawnMugenzombieXno(x,y,z);
spawnMugenzombieXno(x,y,z);
}else if(df==3){
spawnMaouXs(x,y+5,z);
spawnMugenblazeXs(x,y,z);
spawnMugenblazeXs(x,y,z);
spawnMugenblaze2Xs(x,y,z);
spawnMugenblaze2Xs(x,y,z);
spawnMugenblaze2Xs(x,y,z);
spawnMugenblaze2Xs(x,y,z);
spawnMugenzombieXs(x,y,z);
spawnMugenzombieXs(x,y,z);
spawnMugenzombieXs(x,y,z);
spawnMugenzombieXs(x,y,z);
   }
  }
 }
}

//魔王の儀式召喚
if(i==370){
if(b==儀式){
if(bd==0){
setTile(x,y,z,儀式,1);
down(1);
clientMessage("ブレイズロッド");
  }
 }
}

if(i==369){
if(b==儀式){
if(bd==1){
setTile(x,y,z,儀式,2);
down(1);
clientMessage("無限ダイヤ");
  }
 }
}

if(i==無限ダイヤ){
if(b==儀式){
if(bd==2){
setTile(x,y,x,儀式,0);
down(1);
Level.dropItem(x,y,z,50,儀式,1,5);
  }
 }
}

/***地面タップで雷***/
if(i==神剣インフィニティソード改){
addLightning(x,y,z);
Entity.addEffect(Player.getEntity(),12,0.1,1,false,false);
}
if(i==雷槍ケラウノス){
addLightning(x,y,z);
Entity.addEffect(Player.getEntity(),12,0.1,1,false,false);
}
}

function entityHurtHook(){
	shieldData();
}

function ChunkGeneratedHook(x1,z1,x2,z2){
/**鉱石自動生成**/
//無限ダイヤ鉱石
	OreGenerate(x1,z1,無限ダイヤ鉱石,0,100,1,1,10,2);

//鉛鉱石
	OreGenerate(x1,z1,鉛鉱石,0,70,1,4,10,2);
}

//ブロックの光度合い設定
Block.setLightLevel(儀式,8,10);

//ブロックの破壊時間設定
Block.setDestroyTime(無限ダイヤ鉱石,3);
Block.setDestroyTime(儀式,2);

function explodeHook(entity,x,y,z,power,fire){
	var ent=Entity.getEntityTypeId(entity);
/***無限クリーパーの爆発力***/
	if(df==0){
//無限クリーパー
		if(ent==EntityType.CREEPER&&Entity.getMobSkin(entity)=="mob/mugencreeper.png"){
			explode(x,y,z,5,true);
			cx=Entity.getX(entity);
			cy=Entity.getY(entity);
			cz=Entity.getZ(entity);
		}
	}else if(df==1){
//無限クリーパーXno
		if(ent==EntityType.CREEPER&&Entity.getMobSkin(entity)=="mob/mugencreeper.png"){
			explode(x,y,z,6,true);
			cx=Entity.getX(entity);
			cy=Entity.getY(entity);
			cz=Entity.getZ(entity);
		}
	}else if(df==2){
//無限クリーパーX
		if(ent==EntityType.CREEPER&&Entity.getMobSkin(entity)=="mob/mugencreeper.png"){
			explode(x,y,z,8,true);
			cx=Entity.getX(entity);
			cy=Entity.getY(entity);
			cz=Entity.getZ(entity);
		}
	}else if(df==3){
//無限クリーパーXs
		if(ent==EntityType.CREEPER&&Entity.getMobSkin(entity)=="mob/mugencreeper.png"){
			explode(x,y,z,10,true);
			cx=Entity.getX(entity);
			cy=Entity.getY(entity);
			cz=Entity.getZ(entity);
		}
	}
}

function entityAddedHook(entity){
	//lightningHook
	addlightninghook(entity);
}

function entityRemovedHook(entity){
	for(var tu=0;tu<tume.length;tu++){
		if(entity==tume[tu]){
			count7=0;
		}
	}
	for(var sl=0;sl<slayer.length;sl++){
		if(entity==slayer[sl]){
			count9=0;
			ModPE.setGameSpeed(20);
		}
	}
	for(var sl2=0;sl2<slayer2.length;sl2++){
		if(entity==slayer2[sl2]){
			count13=0;
			ModPE.setGameSpeed(20);
		}
	}
	for(var ma=0;ma<maou.length;ma++){
		if(entity==maou[ma]){
			count21=0;
		}
	}
	for(var mb=0;mb<mugenblaze.length;mb++){
		if(entity==mugenblaze[mb]){
			count23=0;
		}
	}
	for(var ms=0;ms<mugenspider.length;ms++){
		if(entity==mugenspider[ms]){
			count24=0;
		}
	}
	for(var me=0;me<mugenender.length;me++){
		if(entity==mugenender[me]){
			count25=0;
		}
	}
	for(var mag=0;mag<magumaman.length;mag++){
		if(entity==magumaman[mag]){
			count26=0;
		}
	}
}

function deathHook(murderer,victim){
	var et=Entity.getEntityTypeId(victim);
	var ex=Entity.getX(victim);
	var ey=Entity.getY(victim);
	var ez=Entity.getZ(victim);
	var name=Entity.getNameTag(murderer);
	for(var ma=0;ma<maou.length;ma++){
		if(victim==maou[ma]){
			count21=0;
		}
	}
	for(var mb=0;mb<mugenblaze.length;mb++){
		if(victim==mugenblaze[mb]){
			count23=0;
		}
	}
	for(var tu=0;tu<tume.length;tu++){
		if(victim==tume[tu]){
			count7=0;
		}
	}
	for(var sl=0;sl<slayer.length;sl++){
		if(victim==slayer[sl]){
			count9=0;
			ModPE.setGameSpeed(20);
			switch(df){
				case 0:
					spawnSlayer2(ex,ey,ez);
				break;
				case 1:
					spawnSlayer2Xno(ex,ey,ez);
				break;
				case 2:
					spawnSlayer2X(ex,ey,ez);
				break;
				case 3:
					spawnSlayer2Xs(ex,ey,ez);
				break;
			}
		}
	}
	for(var sl2=0;sl2<slayer2.length;sl2++){
		if(victim==slayer2[sl2]){
			count13=0;
			ModPE.setGameSpeed(20);
			slayerxp=1;
			addLightning(ex,ey,ez);
			slx=ex;
			sly=ey;
			slz=ez;
		}
	}
	for(var ms=0;ms<mugenspider.length;ms++){
		if(victim==mugenspider[ms]){
			count24=0;
		}
	}
	for(var me=0;me<mugenender.length;me++){
		if(victim==mugenender[me]){
			count25=0;
		}
	}
	for(var mag=0;mag<magumaman.length;mag++){
		if(victim==magumaman[mag]){
			count26=0;
		}
	}
	
/***ドロップアイテム***/
	if(Entity.getNameTag(victim)=="無限ゾンビ"){
		if(et=32){
			if(Math.floor(Math.random()*14)+1==13){
				Level.dropItem(ex,ey,ez,0,3745,1,0);
			}
			if(Math.floor(Math.random()*15)+1==14){
				Level.dropItem(ex,ey,ez,0,3750,1,0);
			}
		}
	}
	if(Entity.getNameTag(victim)=="無限スケルトン"){
		if(et=34){
			if(Math.floor(Math.random()*15)+1==14){
				Level.dropItem(ex,ey,ez,0,3748,1,0);
			}
			if(Math.floor(Math.random()*15)+1==14){
				Level.dropItem(ex,ey,ez,0,3750,1,0);
			}
		}
	}
	if(Entity.getNameTag(victim)=="無限クリーパー"){
		if(et=33){
			if(Math.floor(Math.random()*15)+1==14){
				Level.dropItem(ex,ey,ez,0,3749,1,0);
			}
			if(Math.floor(Math.random()*15)+1==14){
				Level.dropItem(ex,ey,ez,0,3750,1,0);
			}
		}
	}
	if(Entity.getNameTag(victim)=="§6無限ブレイズ"){
		if(et=43){
			if(Math.floor(Math.random()*15)+1==14){
				Level.dropItem(ex,ey,ez,0,3752,1,0);
			}
		}
	}
	if(Entity.getNameTag(victim)=="§l§5魔王"){
		if(et=41){
			if(Math.floor(Math.random()*5)+1==2){
				Level.dropItem(ex,ey,ez,0,魔王の魂,1,0);
			}
		}
	}
	if(et==11){
		if(Math.floor(Math.random()*5)+1==4){
			Level.dropItem(ex,ey,ez,0,全ての食材のもと,1,0);
		}
	}
	if(et==10){
		if(Math.floor(Math.random()*5)+1==4){
			Level.dropItem(ex,ey,ez,0,全ての食材のもと,1,0);
		}
	}
	if(et==12){
		if(Math.floor(Math.random()*5)+1==4){
			Level.dropItem(ex,ey,ez,0,全ての食材のもと,1,0);
		}
	}

/***死亡メッセージ追加***/
	if(victim==getPlayerEnt()){
		if(name==false){
			ModPE.langEdit("death.attack.arrow","%1$sは%2$sに射ぬかれた");
			ModPE.langEdit("death.attack.mob","%1$sは%2$sに殺害された");
			ModPE.langEdit("death.attack.generic","%1$sは死んでしまった");
		}
//無限ゾンビ
		if(name=="無限ゾンビ"){
			ModPE.langEdit("death.attack.mob","%1$sは無限ゾンビに殺害された");
			ModPE.langEdit("death.attack.generic","%1$sは死んでしまった");
		}
//無限スケルトン
		if(name=="無限スケルトン"){
			ModPE.langEdit("death.attack.arrow","%1$sは無限スケルトンに射ぬかれた");
			ModPE.langEdit("death.attack.generic","%1$sは無限スケルトンに射ぬかれた");
		}
//無限クリーパー
		if(name=="無限クリーパー"){
			var xx=Math.floor(Math.random()*10)-5;
			var yy=Math.floor(Math.random()*4)-2;
			var zz=Math.floor(Math.random()*10)-5;
			if(cx<=getPlayerX()+xx&&cy<=getPlayerY()+yy&&cz<=getPlayerZ()+zz){
				ModPE.langEdit("death.attack.explosion","%1$sは無限クリーパーに爆破されてしまった");
			}
		}
//浮游する爪
		if(name=="浮遊する爪"){
			ModPE.langEdit("death.attack.mob","%1$sは浮遊する爪に引き裂かれてしまった");
		}	
//クローエンペラー
		for(var sl=0;sl<slayer.length;sl++){
			if(murderer==slayer[sl]){
				ModPE.langEdit("death.attack.mob","%1$sはクローエンペラーに八つ裂きにされた");
			}
			var xx=Math.floor(Math.random()*30)-15;
			var yy=Math.floor(Math.random()*20)-10;
			var zz=Math.floor(Math.random()*30)-15;
			if(Entity.getX(slayer[sl])<=getPlayerX()+xx&&Entity.getY(slayer[sl])<=getPlayerY()+yy&&Entity.getZ(slayer[sl])<=getPlayerZ()+zz){
				ModPE.langEdit("death.attack.lightningBolt","%1$sはクローエンペラーの雷撃によって焼き付くされた");
				ModPE.langEdit("death.attack.explosion","%1$sはクローエンペラーの爆撃によって吹き飛ばされた");
				ModPE.langEdit("death.attack.fireball","%1$sはクローエンペラーに焼き付くされた");
				ModPE.langEdit("death.attack.generic","%1$sはクローエンペラーに射ぬかれた");
			}
		}
		for(var sl2=0;sl2<slayer2.length;sl2++){
			if(murderer==slayer2[sl2]){
				ModPE.langEdit("death.attack.fireball","%1$sは覚醒クローエンペラーに焼き付くされた");
			}
			var xx=Math.floor(Math.random()*40)-20;
			var yy=Math.floor(Math.random()*20)-10;
			var zz=Math.floor(Math.random()*40)-20;
			if(Entity.getX(slayer2[sl2])<=getPlayerX()+xx&&Entity.getY(slayer2[sl2])<=getPlayerY()+yy&&Entity.getZ(slayer2[sl2])<=getPlayerZ()+zz){
				ModPE.langEdit("death.attack.lightningBolt","%1$sは覚醒クローエンペラーの雷撃によって焼き付くされた");
				ModPE.langEdit("death.attack.explosion","%1$sは覚醒クローエンペラーの爆撃によって吹き飛ばされた");
				ModPE.langEdit("death.attack.fireball","%1$sは覚醒クローエンペラーに焼き付くされた");
				ModPE.langEdit("death.attack.generic","%1$sは覚醒クローエンペラーに射ぬかれた");
			}
		}
		for(var ms=0;ms<mugenspider.length;ms++){
			if(murderer==mugenspider[ms]){
				ModPE.langEdit("death.attack.mob","%1$sは無限スパイダーに倒された");
			}
		}
		for(var me=0;me<mugenender.length;me++){
			if(murderer==mugenender[me]){
				ModPE.langEdit("death.attack.mob","%1$sは無限エンダーマンに倒された");
			}
		}
		for(var mag=0;mag<magumaman.length;mag++){
			if(murderer==magumaman[mag]){
				ModPE.langEdit("death.attack.mob","%1$sはマグマーマンによってドロドロに溶かされた");
			}
		}
	}
}

function lightningHook(x,y,z,blockId,blockData,entity){
	//クローエンペラーAI
	var xx=Math.floor(Math.random()*20)-10;
	var yy=Math.floor(Math.random()*10)-5;
	var zz=Math.floor(Math.random()*20)-10;
	for(var sl=0;sl<slayer.length;sl++){
		if(Entity.getX(entity)<=Entity.getX(slayer[sl])+xx&&Entity.getY(entity)<=Entity.getY(slayer[sl])+yy&&Entity.getZ(entity)<=Entity.getZ(slayer[sl])+zz){
			switch(df){
				case 0:
					if(Math.floor(Math.random()*2)+1==1){
						spawnTume(x,y,z);
					}
				break;
				case 1:
					if(Math.floor(Math.random()*2)+1==1){
						spawnTumeXno(x,y,z);
					}
				case 2:
					if(Math.floor(Math.random()*2)+1==1){
						spawnTumeX(x,y,z);
					}
				break;
				case 3:
					if(Math.floor(Math.random()*2)+1==1){
						spawnTumeXs(x,y,z);
					}
				break;
			}
		}
	}
	for(var sl2=0;sl2<slayer2.length;sl2++){
		if(Entity.getX(entity)<=Entity.getX(slayer2[sl2])+xx&&Entity.getY(entity)<=Entity.getY(slayer2[sl2])+yy&&Entity.getZ(entity)<=Entity.getZ(slayer2[sl2])+zz){
			if(Entity.getEntityTypeId(slayer2[sl2])==43){
				if(Math.floor(Math.random()*3)+1==2){
					Level.spawnMob(x,y,z,41);
				}
			}
			switch(df){
				case 0:
					if(Math.floor(Math.random()*2)+1==1){
						spawnTume(x,y,z);
					}
				break;
				case 1:
					if(Math.floor(Math.random()*2)+1==1){
						spawnTumeXno(x,y,z);
					}
				case 2:
					if(Math.floor(Math.random()*2)+1==1){
						spawnTumeX(x,y,z);
					}
				break;
				case 3:
					if(Math.floor(Math.random()*2)+1==1){
						spawnTumeXs(x,y,z);
					}
				break;
			}
		}
	}
}