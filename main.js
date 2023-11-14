console.log("main.js!!");

$(document).ready(()=>{
	console.log("Ready!!");

	// ガソリン代を計算する
	$("#btn_calc").click(()=>{

		console.log("計算開始!!");
		//ガソリン代
		const strA = $("#input_a").val();
		console.log("strA:",strA);
		// もし、strAが空文字だったら
		if(strA === ""){
			console.log("strAは空文字ですね");
			$("#msg_info").text("ガソリン価格を入力してください。");
			return;// ここで停止
		}
	});
		// TODO: 残りの入力欄２つを実装してください
		//#input_b
		// 走行距離を計算する
	$("#btn_calc").click(()=>{
		console.log("計算開始!!");
		//ガソリン代
		const strB = $("#input_b").val();
		console.log("strB:",strB);
		// もし、strAが空文字だったら
		if(strB === ""){
			console.log("strBは空文字ですね");
			$("#msg_info").text("走行距離を入力してください。");
			return;// ここで停止
		}
	});
		//#input_c
		// 車の燃費を計算する
	$("#btn_calc").click(()=>{
		console.log("計算開始!!");
		//ガソリン代
		const strC = $("#input_c").val();
		console.log("strC:",strC);
		// もし、strAが空文字だったら
		if(strC === ""){
			console.log("strCは空文字ですね");
			$("#msg_info").text("車の燃費を入力してください。");
			return;// ここで停止
		}
	
		// ここまで来てたら、空文字はない
		console.log("全データ入力済み",strA,strB,strC)

		//文字から数値に変換
		const numA = parseInt(strA);

		// 数値かどうかチェック
		if(Number.isInteger(numA) === false){
			console.log("numAは数値じゃないぞ");
			$("#msg_info").text("ガソリン価格に数値を入力してください。");
			return;
		}

		// TODO: strBと、strCにも同じ処理を実装してください。
		//文字から数値に変換
		const numB = parseInt(strB);

		// 数値かどうかチェック
		if(Number.isInteger(numA) === false){
			console.log("numBは数値じゃないぞ");
			$("#msg_info").text("走行距離に数値を入力してください。");
			return;
		}

		//文字から数値に変換
		const numC = parseInt(strC);

		// 数値かどうかチェック
		if(Number.isInteger(numC) === false){
			console.log("numCは数値じゃないぞ");
			$("#msg_info").text("車の燃費に数値を入力してください。");
			return;
		}

		//ここまで来たら、データは全て数値です
		console.log("エラー無しなので計算する")

		// TODO: #msg_resultにガソリン代を表示すること
		//ガソリン代の計算
		$("#msg_result").eval(()=>{
			msg_result =eval("strA * strB / strC")

		})

	});

});