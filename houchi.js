
function calc_sum(){
  // ����
  var num1 = document.frm1['num1'].value;
  
  // �Œᒓ�Ԑ�
  var num2 = document.frm1['num2'].value;

  var result1 = num1 / num2 ;

  var timeM = Math.floor(result1 % (24 * 60 * 60) % (60 * 60) / 60);
  var timeS = result1 % (24 * 60 * 60) % (60 * 60) % 60;
    
  
  // ���ϊ�
  document.frm1['result1'].value = timeM + '��' +timeS + '�b';
  
  // �b�ϊ�
  document.frm1['result2'].value = result1 + '�b';

  return false;
}
function reset_exe(){
  sum1 = "";
  if (confirm('���Z�b�g���܂��B')){
    document.frm1['num1'].value = "";
    document.frm1['num2'].value = "";
  }
}