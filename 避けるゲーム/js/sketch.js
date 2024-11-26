let cvs;// キャンバス
let player;// プレイヤー
let start;// スタート床


let bkgGroup;// 背景グループ
let tnlGroup;// 土管グループ
let enemyGroup; // 敵のグループ

let scoreNum;// スコア
let scoreLabel;// スコアラベル
let scoreRanking = []; // スコアを格納する配列
let isGameOver = false;

function setup(){

	// キャンバスの準備
	cvs = new Canvas(480, 320);
	world.gravity.y = 12;// 重力を設定する

	// プレイヤー
	player = new Sprite(width/2, height/2);
	player.width = 30;
	player.height = 30;
	player.color = "orange";
	player.image = "assets/reimu_good_01.png";// 画像を設定する
	player.layer = 9;// スプライトの重なり順
	player.debug = true;

	// スタート床
	start = new Sprite(width/2, height/2+60);
	start.width = 90;
	start.height = 20;
	start.color = "gray";
	start.collider = "static";
	start.layer = 9;// スプライトの重なり順

	// 背景グループ
	bkgGroup = new Group();
	bkgGroup.layer = 1;// スプライトの重なり順

	for(let i=0; i<2; i++){
		const x = i * width;
		const bkg = new bkgGroup.Sprite(x, height/2);
		bkg.width = 480;
		bkg.height = 320;
		bkg.collider = "none";
		bkg.image = "fb_bkg_480x320.png";
	}
	
	// 土管グループ
	tnlGroup = new Group();
	tnlGroup.layer = 2;// スプライトの重なり順

	const padX = width / 2;// 土管のx間隔
	const padY = 240;      // 上下土管の間隔
	for(let i=0; i<3; i++){// 3列作ります
		const x = i * padX + width;// 土管のx座標
		const y = height / 2;// 土管のy座標
		// 上の土管
		const tnlA = new tnlGroup.Sprite(x, y - padY);
		tnlA.width = 52;
		tnlA.height = 360;
		tnlA.collider = "static";
		tnlA.image = "fb_tunnel.png";
		// 下の土管
		const tnlB = new tnlGroup.Sprite(x, y + padY);
		tnlB.width = 52;
		tnlB.height = 360;
		tnlB.collider = "static";
		tnlB.image = "fb_tunnel.png";
	}

	// スコア
	scoreNum = 0;

	// スコアラベル
	scoreLabel = new Sprite(width/2, 32);
	scoreLabel.color = "#00000000";
	scoreLabel.stroke = "#00000000";
	scoreLabel.collider = "none";
	scoreLabel.layer = 4;
	scoreLabel.textSize = 48;
	scoreLabel.textColor = "white";
	scoreLabel.text = scoreNum;

	// デフォルトの値でスコアランキングを初期化
	for (let i = 0; i < 5; i++) {
    	scoreRanking.push(0);
  	}

	// 敵の追加
	enemyGroup = new Group();
enemyGroup.layer = 3; // スプライトの重なり順

const enemy = new enemyGroup.Sprite(width + 50, height / 2);
enemy.width = 20;
enemy.height = 20;
enemy.color = "red";
enemy.collider = "static";

}

function draw(){
	background("silver");// 背景色
// キーボード
if(kb.presses("left")){
	player.vel.x = -2;
	player.vel.y = -5;
	player.rotateSpeed = 0;
}
if(kb.presses("right")){
	player.vel.x = 2;
	player.vel.y = -5;
}

//プレイヤーと敵の当たり判定
player.collided(enemyGroup, (a, b) => {
    // プレイヤーが敵に触れた時の処理（例）
    // ここでジャンプさせたり、何かしらのアクションを追加できます。
    player.vel.y = -8; // ジャンプ
    gameOver(); // ゲームオーバー処理
});
	      
	// プレイヤー x 土管グループ
	player.collided(tnlGroup, (a, b) => {
    gameOver(); // ゲームオーバー処理
});
	// プレイヤー x 敵グループ
    player.collided(enemyGroup, (a, b) => {
        gameOver(); // ゲームオーバー処理
    });
  
	// カメラ
	camera.x = player.x;// プレイヤーと同じx座標に

	// 背景
for (let bkg of bkgGroup) {
	if (bkg.x < player.x - width) {
	  bkg.x += width * 2;
	}
  }
  

	// 土管グループ
	for(let i=0; i<tnlGroup.length; i+=2){// 2個づつ取り出す
		const tnlA = tnlGroup[i];  // 上の土管
		const tnlB = tnlGroup[i+1];// 下の土管
		if(tnlA.x < player.x - width/2){
			// y座標はランダムに
			const y = height/2 + random(-height/5, height/5);
			const padY = 240;
			// 土管の再配置
			tnlA.x = player.x + width;
			tnlA.y = y - padY;
			tnlB.x = player.x + width;
			tnlB.y = y + padY;
		}
	}
	
	
	// スコア
	const score = player.x - width/2;
	if(scoreNum < score) scoreNum = score;
	// スコアラベル
	scoreLabel.x = player.x;
	scoreLabel.text = floor(scoreNum);

	// 敵の移動
for (let enemy of enemyGroup) {
	enemy.x -= 3; // 例: 敵の速度
  }
  
  
// 新しい敵の生成
if (frameCount % 120 === 0) {
	const newEnemy = new enemyGroup.Sprite(player.x + width, random(height));
	newEnemy.width = 20;
	newEnemy.height = 20;
	newEnemy.color = "red";
	newEnemy.collider = "static";
  }
  if (frameCount % 180 === 0) {
    const anotherEnemy = new enemyGroup.Sprite(player.x + width, random(height));
    anotherEnemy.width = 20;
    anotherEnemy.height = 20;
    anotherEnemy.color = "blue";
    anotherEnemy.collider = "static";
}
if (frameCount % 200 === 0) {
    const anotherEnemy = new enemyGroup.Sprite(player.x + width, random(height));
    anotherEnemy.width = 20;
    anotherEnemy.height = 20;
    anotherEnemy.color = "green"; // 例: 別の色を指定
    anotherEnemy.collider = "static";
}
}