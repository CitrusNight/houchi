
function calc_sum(){
  // 球数
  var num1 = document.frm1['num1'].value;
  
  // 最低駐屯数
  var num2 = document.frm1['num2'].value;
  
  // 係数
  var num3 = document.frm1['num3'].value;
  
  var result1 = num1 / num2 * num3;

  var min = Math.round(Math.floor(result1 / 60));
  var sec = Math.round(result1 % 60);
  
  var result2 = Math.round(result1);
  
  if(num1 != '' && num2 != '' && num3 != ''){
	  // 分変換
	  document.frm1['result1'].value = min + '分' + sec + '秒';
	  
	  // 秒変換
	  document.frm1['result2'].value = result2 + '秒';
} else {
	  document.frm1['result1'].value = "";
	  document.frm1['result2'].value = "";
}
  return false;
}
function reset_exe(){
    document.frm1['num1'].value = "";
}