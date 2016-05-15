var buttonset=false;
var spawn=false;

var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var Check=(function(){
	return{
		spawnChecker:function(entity){
			var ex=Math.floor(Entity.getX(entity));
			var ez=Math.floor(Entity.getZ(entity));
			var px=Math.floor(getPlayerX());
			var pz=Math.floor(getPlayerZ());
			var ent=Entity.getEntityTypeId(entity);
			new java.lang.Thread(function(){
				android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_BACKGROUND);
				if(ent!==64&&ent!==65&&ent!==66&&ent!==68&&ent!==69&&ent!==77&&ent!==80&&ent!==81&&ent!==83&&ent!==84&&ent!==85&&ent!==86&&ent!==90&&ent!==94&&ent!==95&&entity!==getPlayerEnt()){
					for(var pa=-1;pa<=30;pa++){
						Level.addParticle(9,getPlayerX()+1,getPlayerY()+pa,getPlayerZ(),0,0,0,2);
						Level.addParticle(9,getPlayerX()-1,getPlayerY()+pa,getPlayerZ(),0,0,0,2);
						Level.addParticle(9,getPlayerX(),getPlayerY()+pa,getPlayerZ()+1,0,0,0,2);
						Level.addParticle(9,getPlayerX(),getPlayerY()+pa,getPlayerZ()-1,0,0,0,2);
					}
					if(ex<px&&ez<pz){
						clientMessage(Check.checkEnt(entity)+"が北に"+(px-ex)+"、東に"+(pz-ez)+"の場所にスポーンしました");
					}
					if(ex>px&&ez<pz){
						clientMessage(Check.checkEnt(entity)+"が南に"+(ex-px)+"、東に"+(pz-ez)+"の場所にスポーンしました");
					}
					if(ex>px&&ez>pz){
						clientMessage(Check.checkEnt(entity)+"が南に"+(ex-px)+"、西に"+(ez-pz)+"の場所にスポーンしました");
					}
					if(ex<px&&ez>pz){
						clientMessage(Check.checkEnt(entity)+"が北に"+(px-ex)+"、西に"+(ez-pz)+"の場所にスポーンしました");
					}
					if(ex<px&&ez==pz){
						clientMessage(Check.checkEnt(entity)+"が北に"+(px-ex)+"、東西に0の場所にスポーンしました");
					}
					if(ex>px&&ez==pz){
						clientMessage(Check.checkEnt(entity)+"が南に"+(ex-px)+"、東西に0の場所にスポーンしました");
					}
					if(ex==px&&ez<pz){
						clientMessage(Check.checkEnt(entity)+"が南北に0、東に"+(pz-ez)+"の場所にスポーンしました");
					}
					if(ex==px&&ez>pz){
						clientMessage(Check.checkEnt(entity)+"が南北に0、西に"+(ez-pz)+"の場所にスポーンしました");
					}
					if(ex==px&&ez==pz){
						clientMessage(Check.checkEnt(entity)+"がプレイヤーと同じ座標にスポーンしました");
					}
				}
			}).start();
		},
		checkEnt:function(entity){
			var ent=Entity.getEntityTypeId(entity);
			switch(ent){
				case 10: return "ニワトリ"; break;
				case 11: return "牛"; break;
				case 12: return "豚"; break;
				case 13: return "羊"; break;
				case 14: return "狼"; break;
				case 15: return "村人"; break;
				case 16: return "ムーシュルーム"; break;
				case 17: return "イカ"; break;
				case 18: return "ウサギ"; break;
				case 19: return "コウモリ"; break;
				case 20: return "アイアンゴーレム"; break;
				case 21: return "スノーゴーレム"; break;
				case 22: return "ヤマネコ"; break;
				case 32: return "ゾンビ"; break;
				case 33: return "クリーパー"; break;
				case 34: return "スケルトン"; break;
				case 35: return "スパイダー"; break;
				case 36: return "ゾンビピッグマン"; break;
				case 37: return "スライム"; break;
				case 38: return "エンダーマン"; break;
				case 39: return "シルバーフィッシュ"; break;
				case 40: return "ケイブスパイダー"; break;
				case 41: return "ガスト"; break;
				case 42: return "マグマキューブ"; break;
				case 43: return "ブレイズ"; break;
				case 44: return "村人ゾンビ"; break;
				case 45: return "ウィッチ"; break;
			}
		}
	}
})();

function addOffButton(){
	ctx.runOnUiThread(
		new java.lang.Runnable({
			run:function(){
				try{
					var button=new android.widget.Button(ctx);
					button.setText("スポーンチェッカー");
					button.setTextColor(android.graphics.Color.BLACK);
					button.setOnClickListener(
						new android.view.View.OnClickListener(){
							onClick:function(){
								addOnButton();
								spawn=true;
								gui.dismiss();
							}
						}
					);
					gui=new android.widget.PopupWindow(button,android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					gui.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP,0,100);
				}catch(e){
					clientMessage(e);
				}
			}
		})
	);
}

function addOnButton(){
	ctx.runOnUiThread(
		new java.lang.Runnable({
			run:function(){
				try{
					var button=new android.widget.Button(ctx);
					button.setText("スポーンチェッカー");
					button.setTextColor(android.graphics.Color.RED);
					button.setOnClickListener(
						new android.view.View.OnClickListener(){
							onClick:function(){
								addOffButton();
								spawn=false;
								gui2.dismiss();
							}
						}
					);
					gui2=new android.widget.PopupWindow(button,android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					gui2.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP,0,100);
				}catch(e){
					clientMessage(e);
				}
			}
		})
	);
}

function deleteOffButton(){
	ctx.runOnUiThread(
		new java.lang.Runnable({
			run:function(){
				try{
					gui.dismiss();
				}catch(e){
					clientMessage(e);
				}
			}
		})
	);
}

function deleteOnButton(){
	ctx.runOnUiThread(
		new java.lang.Runnable({
			run:function(){
				try{
					gui2.dismiss();
				}catch(e){
					clientMessage(e);
				}
			}
		})
	);
}

function modTick(){
	if(Player.getCarriedItem()==280&&!buttonset){
		if(!spawn){
			addOffButton();
			buttonset=true;
		}else{
			addOnButton();
			buttonset=true;
		}
	}
	if(Player.getCarriedItem()!=280&&buttonset){
		if(!spawn){
			deleteOffButton();
			buttonset=false;
		}else{
			deleteOnButton();
			buttonset=false;
		}
	}
}

function entityAddedHook(entity){
	if(spawn){
		Check.spawnChecker(entity);
	}
}

function leaveGame(){
	deleteOffButton();
	deleteOnButton();
}