// ==UserScript==
// @name         高校邦自动刷课
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://qust.class.gaoxiaobang.com/class/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';
function start(){
		var classFix = document.getElementsByClassName("gxb-icon-check unchecked");
	//勾选全部答案
for(var i=0;i<classFix.length;i++){
	var Fix = classFix[i];
	Fix.className="gxb-icon-check checked";
}
   //提交
	var oBtn = document.getElementsByClassName('gxb-btn_ submit');
for(var i=0;i<oBtn.length;i++){
	var click = oBtn[i];
	click.click();	
}
	//继续观看
	var oBtn2 = document.getElementsByClassName('gxb-btn_ player');
for(var i=0;i<oBtn2.length;i++){
	var click = oBtn2[i];
	click.click();	
    
}

//检测并跳过章节测试
	var testCon = document.getElementsByClassName("gxb-btn-pri gxb-btn-big quiz-join chapter_id");
	var continueBtn = document.getElementsByClassName("gxb-next-blue");
	for(var r=0;r<testCon.length;r++)
	{
		var test = testCon[r];
		if(test.className=="gxb-btn-pri gxb-btn-big quiz-join chapter_id"){
		var clickContinue = continueBtn[r];
		clickContinue.click();
		}
	}
	//检测并跳过讨论
	var dicCon = document.getElementsByClassName("gxb-btn-pri gxb-btn-nav post-submit");
	var continueBtn = document.getElementsByClassName("gxb-next-blue");
	for(var f=0;f<dicCon.length;f++)
	{
		var test = dicCon[f];
		if(test.className=="gxb-btn-pri gxb-btn-nav post-submit"){
		var clickContinue = continueBtn[f];
		clickContinue.click();
		}
	}
}
window.setInterval(start,5000);

// Your code here...
