
var app = new Vue({
            el: '#app',
            data: function(){
            	return{ 
            		"shiro":"",
            		"num2":"",
            	    "num3":""
            	    }
            },
            updated: function(){
                    if(app.shiro == '1') {
                        document.frm1['num2'].value = 1;
                        document.frm1['num3'].value = 1;
                    } else if (this.shiro == '2'){
                        document.frm1['num2'].value = 2;
                        document.frm1['num3'].value = 1.5;
                    } else if (this.shiro == '3'){
                        document.frm1['num2'].value = 1;
                        document.frm1['num3'].value = 2;
                    } else if (this.shiro == '4'){
                        document.frm1['num2'].value = 2;
                        document.frm1['num3'].value = 2;
                    } else if (this.shiro == '5'){
                        document.frm1['num2'].value = 3;
                        document.frm1['num3'].value = 1.5;
                    }else if (this.shiro == '6'){
                        document.frm1['num2'].value = 3;
                        document.frm1['num3'].value = 2;
                    }
                    calc_sum();
                    
            	}
          });
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
  
  // var result2 = Math.round(result1);
  
  if(num1 != '' && num2 != '' && num3 != ''){
	  // 分変換
	  document.frm1['result1'].value = min + '分' + sec + '秒';
	  
	  // 秒変換
	  // document.frm1['result2'].value = result2 + '秒';
} else {
	  document.frm1['result1'].value = "";
	  // document.frm1['result2'].value = "";
}


//必要おにぎり計算
  // 時間
  var min2 = parseInt(document.frm1['time1'].value.substr(0,2),10);
  var sec2 = parseInt(document.frm1['time1'].value.substr(2,2),10);
  // 駐屯数
  var num2 = document.frm1['num2'].value;
  // 係数
  var num3 = document.frm1['num3'].value;
  
  if(min2 + sec2){
	  if(min2+sec2 != 0 && num2 != '' && num3 != ''){
 		 document.frm1['onigiriCNT'].value = (min2*60 +sec2) * num2 / num3 ;
		} else {
			document.frm1['onigiriCNT'].value = "";
		}
	}

  return false;
}

function calc_onigiri(){
  // 時間
  var min2 = parseInt(document.frm1['time1'].value.substr(0,2),10);
  var sec2 = parseInt(document.frm1['time1'].value.substr(2,2),10);
  // 駐屯数
  var num2 = document.frm1['num2'].value;
  // 係数
  var num3 = document.frm1['num3'].value;
  
  if(min2+sec2 != 0 && num2 != '' && num3 != ''){
 	 document.frm1['onigiriCNT'].value = Math.round(((min2*60)+sec) * num2 / num3) ;
	} else {
	document.frm1['onigiriCNT'].value = "";}
}
function reset_exe(){
    document.frm1['num1'].value = "";
}