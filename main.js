console.log("main.js!!");

/*
// jQuery入門
//	公式サイト: https://jquery.com/
//	チュートリアル: https://snome.jp/programming/jquery1/
//	チートシート: https://web-cheatsheet.com/jquery-to-vanillajs
*/

// Ready
$(document).ready(()=>{
	console.log("Ready!!");

	//ボタンのクリックイベント
	$("my_btn").click(()=>{
		console.log("計算する");
		const strVal = $("#my_input").val();//文字列取得
		const numVal = parseIn(strVal);//文字列->数値
		console.log("これを計算する",numVal);
		//TODO：消費税計算電卓を完成させなさい
    	
	})
});