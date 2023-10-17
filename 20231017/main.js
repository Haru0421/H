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

//乱数を取得する
    let rdm = Math.random();
	console.log("乱数;",rdm);

	//0~6までの整数を取り出したい
	let num1 = rdm * 7;
	console.log("num1:",num1);
    
	let num2 = Math.floor(num1);
	console.log("num2:",num2);

	//　画像のパスを作る
	let path = "./images/om_" + num2 + ".png";

	//画像を変えてみる
	$("#my_img").attr("src",path);
});