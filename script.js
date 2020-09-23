

	



	$('#generate_formula1').on('click', function generate_f1(){
		let sigma = $('#sigma').val();
		let np = $('#np').val();
		if (sigma) {
		let formula_1 = Math.pow((sigma/75), np).toFixed(3);
		let formula1_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mo stretchy="false"&gt;(&lt;/mo&gt;&lt;mfrac&gt;&lt;mi&gt;'+sigma+'&lt;/mi&gt;&lt;mn&gt;75&lt;/mn&gt;&lt;/mfrac&gt;&lt;msup&gt;&lt;mo stretchy="false"&gt;)&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+np+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/msup&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_1+' &lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula1').html(formula1_text);
		$('#res_formula1').text("Згенеровано!");
		 $('#copyred_formula1').prop('disabled', false);
		 }
		 else{
		 	$('#res_formula1').text("Введіть межу міцності матеріалу заготовки, сігма!");
		 }


});

	$('#but_formula1').on('click', function calculate_f1(){
		let sigma = $('#sigma').val();
		let np = $('#np').val();


		if (sigma) {
		

		let formula_1 = Math.pow((sigma/75), np).toFixed(3);

		$('#res_formula1').text(formula_1);
		}
		 else{
		 	$('#res_formula1').text("Введіть межу міцності матеріалу заготовки, сігма!");
		 }
});

function copyToClipboard1(element) {

     var temp = $("<input>");
     $("body").append(temp);
     $('#show').show().fadeOut( 1000 );
     temp.val($(element).text()).select();
     document.execCommand("copy");
     temp.remove();
     $('#copyred_formula1').prop('disabled', true);
}












	$('#generate_formula2').on('click', function generate_f2(){
		let Sr = $('#Sr').val();
		let Qp = $('#Qp').val();
		let Yp = $('#Yp').val();
		let D = $('#D').val();
		let So = $('#So').val();
		let Kr = $('#Kr').val();
		if (D) {
			if (So) {
				if (Kr) {
		//$P0=9.81*$Cp*(pow($D, $qp))*(pow($S0, $yp))*$Kp;
		let formula_2 = (9.81*Sr*(Math.pow(D,Qp))*(Math.pow(So,Yp))*Kr).toFixed(3);
		let formula2_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mo stretchy="false"&gt;(&lt;/mo&gt;&lt;mn&gt;9.81&lt;/mn&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+Sr+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msup&gt;&lt;mi&gt;'+D+'&lt;/mi&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+Qp+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/msup&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msup&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+So+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+Yp+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/msup&gt;&lt;/mrow&gt;&lt;mo stretchy="false"&gt;)&lt;/mo&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+Kr+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_2+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula2').html(formula2_text);
		$('#res_formula2').text("Згенеровано!");
		 $('#copyred_formula2').prop('disabled', false);
		 }
		 else{
		 	$('#res_formula2').text("Введіть поправочний коефіцієнт на осьову складову сили різання!");
		 	}
		 	
		}
		else{
		 	$('#res_formula2').text("Введіть подачу!");
		 }
		}
		else{
		 	$('#res_formula2').text("Введіть діаметр ріжучого інструменту!");
		 }


});

	$('#but_formula2').on('click', function calculate_f2(){
		let Sr = $('#Sr').val();
		let Qp = $('#Qp').val();
		let Yp = $('#Yp').val();
		let D = $('#D').val();
		let So = $('#So').val();
		let Kr = $('#Kr').val();
if (D) {
			if (So) {
				if (Kr) {
		let formula_2 = (9.81*Sr*(Math.pow(D,Qp))*(Math.pow(So,Yp))*Kr).toFixed(3);

		$('#res_formula2').text(formula_2);
		 }
		 else{
		 	$('#res_formula2').text("Введіть поправочний коефіцієнт на осьову складову сили різання!");
		 	}
		 	
		}
		else{
		 	$('#res_formula2').text("Введіть подачу!");
		 }
		}
		else{
		 	$('#res_formula2').text("Введіть діаметр ріжучого інструменту!");
		 }
		
});


function copyToClipboard2(element) {
     var temp = $("<input>");
     $("body").append(temp);
     $('#show2').show().fadeOut( 1000 );
     temp.val($(element).text()).select();
     document.execCommand("copy");
     temp.remove();
     $('#copyred_formula2').prop('disabled', true);
}





$('#generate_formula3').on('click', function(){
		let Cm = $('#Cm').val();
		let Nv = $('#Nv').val();
		let sigma = $('#sigma').val();
		if (sigma) {
		//Cm*( pow(75/$sigma, $nv));
		let formula_3 = Cm*(Math.pow((75/sigma),Nv)).toFixed(3);
		let formula3_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+Cm+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mo stretchy="false"&gt;(&lt;/mo&gt;&lt;mfrac&gt;&lt;mn&gt;75&lt;/mn&gt;&lt;mrow&gt;&lt;mi&gt;'+sigma+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/mfrac&gt;&lt;msup&gt;&lt;mo stretchy="false"&gt;)&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+Nv+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/msup&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_3+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula3').html(formula3_text);
		$('#res_formula3').text("Згенеровано!");
		 $('#copyred_formula3').prop('disabled', false);
		 }
		 else{
		 	$('#res_formula3').text("Введіть межу міцності матеріалу заготовки, сігма!");
		 }


});

	$('#but_formula3').on('click', function(){
		let Cm = $('#Cm').val();
		let Nv = $('#Nv').val();
		let sigma = $('#sigma').val();
		if (sigma) {
		let formula_3 = Cm*(Math.pow((75/sigma),Nv)).toFixed(3);

		$('#res_formula3').text(formula_3);
	}
	else{
		$('#res_formula3').text("Введіть межу міцності матеріалу заготовки, сігма!");
	}
});


function copyToClipboard3(element) {
     var temp = $("<input>");
     $("body").append(temp);
     $('#show3').show().fadeOut( 1000 );
     temp.val($(element).text()).select();
     document.execCommand("copy");
     temp.remove();
     $('#copyred_formula3').prop('disabled', true);
}







$('#generate_formula4').on('click', function(){
		let Kuv = $('#Kuv').val();
		let Klv = $('#Klv').val();
		let Kmv = $('#Kmv').val();
		if (Kmv) {
		//Cm*( pow(75/$sigb, $nv));
		let formula_4 = (Kuv*Klv*Kmv).toFixed(3);
		let formula4_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+Kuv+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+Klv+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+Kmv+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_4+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula4').html(formula4_text);
		$('#res_formula4').text("Згенеровано!");
		 $('#copyred_formula4').prop('disabled', false);
		 }
		 else{
		 	$('#res_formula4').text("Введіть поправочний коефіцієнт Kmv, на швидкість головного руху різання!");
		 }


});

	$('#but_formula4').on('click', function(){
		let Kuv = $('#Kuv').val();
		let Klv = $('#Klv').val();
		let Kmv = $('#Kmv').val();
		if (Kmv) {
		let formula_4 = (Kuv*Klv*Kmv).toFixed(3);

		$('#res_formula4').text(formula_4);
	}
	else{
		 	$('#res_formula4').text("Введіть поправочний коефіцієнт Kmv, на швидкість головного руху різання!");
		 }
});


function copyToClipboard4(element) {
     var temp = $("<input>");
     $("body").append(temp);
     $('#show4').show().fadeOut( 1000 );
     temp.val($(element).text()).select();
     document.execCommand("copy");
     temp.remove();
     $('#copyred_formula4').prop('disabled', true);
}













$('#generate_formula5').on('click', function(){
		let Cv = $('#Cv').val();
		let D = $('#D').val();
		let Qv = $('#Qv').val();
		let T = $('#T').val();
		let Mv = $('#Mv').val();
		let So = $('#So').val();
		let Yv = $('#Yv').val();
		let Kv = $('#Kv').val();

		if (D) {
			if (So) {
					if (Kv) {
						//$vp=($Cv * (pow($D, $qv))) / ((pow($T, $mv)) * (pow($SO, $yv))) * $Kv;
		let formula_5 = (((Cv*(Math.pow(D,Qv)))/((Math.pow(T,Mv))*((Math.pow(So,Yv)))))*Kv).toFixed(3);
		let formula5_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mrow&gt;&lt;mo&gt;(&lt;/mo&gt;&lt;mfrac&gt;&lt;mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+Cv+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msup&gt;&lt;mi&gt;'+D+'&lt;/mi&gt;&lt;mi&gt;'+Qv+'&lt;/mi&gt;&lt;/msup&gt;&lt;/mrow&gt;&lt;/mrow&gt;&lt;mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msup&gt;&lt;mi&gt;'+T+'&lt;/mi&gt;&lt;mi&gt;'+Mv+'&lt;/mi&gt;&lt;/msup&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msup&gt;&lt;mi&gt;'+So+'&lt;/mi&gt;&lt;mi&gt;'+Yv+'&lt;/mi&gt;&lt;/msup&gt;&lt;/mrow&gt;&lt;/mrow&gt;&lt;/mfrac&gt;&lt;mo&gt;)&lt;/mo&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mi&gt;'+Kv+'&lt;/mi&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_5+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula5').html(formula5_text);
		$('#res_formula5').text("Згенеровано!");
		 $('#copyred_formula5').prop('disabled', false);
					}
					else{
						$('#res_formula5').text("Введіть поправочний коефіцієнт, Kv, який враховує вплив механічних властивостей оброблювального матеріалу на швидкість різання!");
					}
			}
			else{
				$('#res_formula5').text("Введіть подачу!");
			}
		}
		else{
			$('#res_formula5').text("Введіть діаметр ріжучого інструменту!");
		}


});

	$('#but_formula5').on('click', function(){
		let Cv = $('#Cv').val();
		let D = $('#D').val();
		let Qv = $('#Qv').val();
		let T = $('#T').val();
		let Mv = $('#Mv').val();
		let So = $('#So').val();
		let Yv = $('#Yv').val();
		let Kv = $('#Kv').val();

		if (D) {
			if (So) {
					if (Kv) {
		//$vp=($Cv * (pow($D, $qv))) / ((pow($T, $mv)) * (pow($SO, $yv))) * $Kv;
		let formula_5 = (((Cv*(Math.pow(D,Qv)))/((Math.pow(T,Mv))*((Math.pow(So,Yv)))))*Kv).toFixed(3);
		

		$('#res_formula5').text(formula_5);
		}
					else{
						$('#res_formula5').text("Введіть поправочний коефіцієнт, Kv, який враховує вплив механічних властивостей оброблювального матеріалу на швидкість різання!");
					}
			}
			else{
				$('#res_formula5').text("Введіть подачу!");
			}
		}
		else{
			$('#res_formula5').text("Введіть діаметр ріжучого інструменту!");
		}
});


function copyToClipboard5(element) {
     var temp = $("<input>");
     $("body").append(temp);
     $('#show5').show().fadeOut( 1000 );
     temp.val($(element).text()).select();
     document.execCommand("copy");
     temp.remove();
     $('#copyred_formula5').prop('disabled', true);
}






















$('#generate_formula6').on('click', function(){
		let V = $('#V').val();
		let D2 = $('#D2').val();

		if (D2) {
			if (V) {
						//$vp=($Cv * (pow($D, $qv))) / ((pow($T, $mv)) * (pow($SO, $yv))) * $Kv;
		let formula_6 = ((V*1000)/(3.14*D2)).toFixed(3);
		let formula6_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mfrac&gt;&lt;mrow&gt;&lt;mn&gt;1000&lt;/mn&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mi&gt;'+V+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mrow&gt;&lt;mn&gt;3.14&lt;/mn&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mi&gt;'+D2+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/mfrac&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_6+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula6').html(formula6_text);
		$('#res_formula6').text("Згенеровано!");
		 $('#copyred_formula6').prop('disabled', false);
					}
					else{
						$('#res_formula6').text("Введіть швидкість головного руху різання, що допускається ріжучими властивостями свердла v, м/хв!");
					}
			}
			else{
				$('#res_formula6').text("Введіть діаметр ріжучого інструменту!");
			}


});

	$('#but_formula6').on('click', function(){
		let V = $('#V').val();
		let D2 = $('#D2').val();

		if (D2) {
			if (V) {
		//$vp=($Cv * (pow($D, $qv))) / ((pow($T, $mv)) * (pow($SO, $yv))) * $Kv;
		let formula_6 = ((V*1000)/(3.14*D2)).toFixed(3);
		

		$('#res_formula6').text(formula_6);
		}
					else{
						$('#res_formula6').text("Введіть швидкість головного руху різання, що допускається ріжучими властивостями свердла v, м/хв!");
					}
			}
			else{
				$('#res_formula6').text("Введіть діаметр ріжучого інструменту!");
			}

});


function copyToClipboard6(element) {
     var temp = $("<input>");
     $("body").append(temp);
     $('#show6').show().fadeOut( 1000 );
     temp.val($(element).text()).select();
     document.execCommand("copy");
     temp.remove();
     $('#copyred_formula6').prop('disabled', true);
}









$('#generate_formula7').on('click', function(){
		let Nd = $('#Nd').val();
		let D = $('#D').val();

		if (D) {
		let formula_7 = ((3.14*D*Nd)/1000).toFixed(3);
		let formula7_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mfrac&gt;&lt;mrow&gt;&lt;mn&gt;3.14&lt;/mn&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mi&gt;'+D+'&lt;/mi&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mi&gt;'+Nd+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mn&gt;1000&lt;/mn&gt;&lt;/mfrac&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_7+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula7').html(formula7_text);
		$('#res_formula7').text("Згенеровано!");
		 $('#copyred_formula7').prop('disabled', false);
			}
			else{
				$('#res_formula7').text("Введіть діаметр ріжучого інструменту!");
			}


});

	$('#but_formula7').on('click', function(){
		let Nd = $('#Nd').val();
		let D = $('#D').val();
		if (D) {
		let formula_7 = ((3.14*D*Nd)/1000).toFixed(3);
		

		$('#res_formula7').text(formula_7);
			}
			else{
				$('#res_formula7').text("Введіть діаметр ріжучого інструменту!");
			}

});


function copyToClipboard7(element) {
     var temp = $("<input>");
     $("body").append(temp);
     $('#show7').show().fadeOut( 1000 );
     temp.val($(element).text()).select();
     document.execCommand("copy");
     temp.remove();
     $('#copyred_formula7').prop('disabled', true);
}




















 $('#generate_formula8').on('click', function(){
 		let Cm = $('#Cm').val();
 		let Qm = $('#Qm').val();
 		let Ym = $('#Ym').val();
 		let D2 = $('#D2').val();
 		let So = $('#So').val();
 		let Kr = $('#Kr').val();
 		if (D2) {
 			if (So) {
 				if (Kr) {
 					let formula_8 = (((9.81*Cm*(Math.pow(D2,Qm)))*(Math.pow(So,Ym)))*(Kr*0.101973)).toFixed(3);
 					let formula8_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mo stretchy="false"&gt;(&lt;/mo&gt;&lt;mn&gt;9.81&lt;/mn&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mi&gt;'+Cm+'&lt;/mi&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msup&gt;&lt;mi&gt;'+D2+'&lt;/mi&gt;&lt;mi&gt;'+Qm+'&lt;/mi&gt;&lt;/msup&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msup&gt;&lt;mi&gt;'+So+'&lt;/mi&gt;&lt;mi&gt;'+Ym+'&lt;/mi&gt;&lt;/msup&gt;&lt;/mrow&gt;&lt;mo stretchy="false"&gt;)&lt;/mo&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mo stretchy="false"&gt;(&lt;/mo&gt;&lt;mi&gt;'+Kr+'&lt;/mi&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mn&gt;0.101973&lt;/mn&gt;&lt;mo stretchy="false"&gt;)&lt;/mo&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_8+'&lt;/mi&gt;&lt;/math&gt;';
 					$('#empty_formula8').html(formula8_text);
 					$('#res_formula8').text("Згенеровано!");
 		 			$('#copyred_formula8').prop('disabled', false);
 				}
 				else{
 				$('#res_formula8').text("Введіть поправочний коефіцієнт на осьову складову сили різання!");
 			}
 			}
 			else{
 				$('#res_formula8').text("Введіть подачу!");
 			}
 			}
 			else{
 				$('#res_formula8').text("Введіть діаметр ріжучого інструменту!");
 			}


 });
	$('#but_formula8').on('click', function(){

		 let Cm = $('#Cm').val();
		 let Qm = $('#Qm').val();
		 let Ym = $('#Ym').val();
		 let D2 = $('#D2').val();
		 let So = $('#So').val();
		 let Kr = $('#Kr').val();
		 if (D2) {
		 	if (So) {
		 		if (Kr) {
		 		let formula_8 = (((9.81*Cm*(Math.pow(D2,Qm)))*(Math.pow(So,Ym)))*(Kr*0.101973)).toFixed(3);
		 		$('#res_formula8').text(formula_8);
		  	}
		  	else{
		  	$('#res_formula8').text("Введіть поправочний коефіцієнт на осьову складову сили різання!");
		  }
		  }
		  else{
		  	$('#res_formula8').text("Введіть подачу!");
		  }
		  }
		  else{
		  	$('#res_formula8').text("Введіть діаметр ріжучого інструменту!");
		  }



});


 function copyToClipboard8(element) {
      var temp = $("<input>");
      $("body").append(temp);
      $('#show8').show().fadeOut( 1000 );
      temp.val($(element).text()).select();
      document.execCommand("copy");
      temp.remove();
      $('#copyred_formula8').prop('disabled', true);
 }









$('#generate_formula9').on('click', function(){

let M =$('#M').val(); 
let Nd =$('#Nd').val();


if (M) {
	if (Nd) {
		let formula_9 = ((M*Nd)/975).toFixed(3);
		let formula9_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mfrac&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+M+'&lt;/mi&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mi&gt;'+Nd+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mn&gt;975&lt;/mn&gt;&lt;/mfrac&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_9+'&lt;/mi&gt;&lt;/math&gt;';
 		$('#empty_formula9').html(formula9_text);
 		$('#res_formula9').text("Згенеровано!");
 		$('#copyred_formula9').prop('disabled', false);
	}
	else{
		$('#res_formula9').text("Введіть дійсну швидкість головного руху різання!");
	}
}
else{
	$('#res_formula9').text("Введіть крутний момент від сил опору різання при свердлінні!");		
}



});

$('#but_formula9').on('click', function(){
	let M =$('#M').val(); 
let Nd =$('#Nd').val();
	if (M) {
	if (Nd) {
		let formula_9 = ((M*Nd)/975).toFixed(3);
		$('#res_formula9').text(formula_9);
	}
	else{
		$('#res_formula9').text("Введіть дійсну швидкість головного руху різання!");
	}
}
else{
	$('#res_formula9').text("Введіть крутний момент від сил опору різання при свердлінні!");	
}

});



function copyToClipboard9(element) {

		var temp = $("<input>");
      $("body").append(temp);
      $('#show9').show().fadeOut( 1000 );
      temp.val($(element).text()).select();
      document.execCommand("copy");
      temp.remove();
      $('#copyred_formula9').prop('disabled', true);

}




















$('#generate_formula10').on('click', function(){

let Nd2 =$('#Nd2').val();

	if (Nd2) {
		let formula_10 = ((Nd2*0.8)).toFixed(3);
		let formula10_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mi&gt;'+Nd2+'&lt;/mi&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mn&gt;0.8&lt;/mn&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_10+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula10').html(formula10_text);
 		$('#res_formula10').text("Згенеровано!");
 		$('#copyred_formula10').prop('disabled', false);
	}
	else{
		$('#res_formula10').text("Введіть потужність, використовувану для різання!");
	}



});

$('#but_formula10').on('click', function(){
let Nd2 =$('#Nd2').val();
	if (Nd2) {
		let formula_10 = ((Nd2*0.8)).toFixed(3);
		$('#res_formula10').text(formula_10);
	}
	else{
		$('#res_formula10').text("Введіть потужність, використовувану для різання!");
	}

});



function copyToClipboard10(element) {

		var temp = $("<input>");
      $("body").append(temp);
      $('#show10').show().fadeOut( 1000 );
      temp.val($(element).text()).select();
      document.execCommand("copy");
      temp.remove();
      $('#copyred_formula10').prop('disabled', true);

}














$('#generate_formula11').on('click', function(){

let Vper =$('#Vper').val();
let Ft =$('#Ft').val();

	if (Vper) {
		let formula_11 = ((Vper*Ft)/(14.4*0.001)).toFixed(2);

		let formula11_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mfrac&gt;&lt;mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+Vper+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+Ft+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/mrow&gt;&lt;mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mn&gt;14.4&lt;/mn&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mn&gt;0.001&lt;/mn&gt;&lt;/mrow&gt;&lt;/mrow&gt;&lt;/mfrac&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_11+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula11').html(formula11_text);
 		$('#res_formula11').text("Згенеровано!");
 		$('#copyred_formula11').prop('disabled', false);
	}
	else{
		$('#res_formula11').text("Введіть швидкість переміщення!");
	}



});

$('#but_formula11').on('click', function(){
let Vper =$('#Vper').val();
let Ft =$('#Ft').val();
	if (Vper) {
		let formula_11 = ((Vper*Ft)/(14.4*0.001)).toFixed(2);
		$('#res_formula11').text(formula_11);
		if (formula_11>0.371 && formula_11<=0.55) {
  			$('#res_formula11_text').text('Електродвигун АІР71В6, Р=0.55 кВт, n= 1000 об/хв, Ін=1.8 А, ККД=65%, cos f=0.72');
		}

		if (formula_11>0.551 && formula_11<=0.75) {
		  $('#res_formula11_text').text('Електродвигун АІР80А6, Р=0.75 кВт, n= 1000 об/хв, Ін=2.3 А, ККД=69%, cos f=0.72');
		}

		 if (formula_11>0.751 && formula_11<=1.1) {
		   $('#res_formula11_text').text('Електродвигун АІР80В6, Р=1.1 кВт, n= 1000 об/хв, Ін=3.2 А, ККД=72%, cos f=0.73');
		 }
		
		if (formula_11>1.11 && formula_11<=1.5) {
		  $('#res_formula11_text').text('Електродвигун АІР90L6, Р=1.5 кВт, n= 1000 об/хв, Ін=4 А, ККД=76%, cos f=0.75');
		}
		
		if (formula_11>1.51 && formula_11<=2.2) {
		  $('#res_formula11_text').text('Електродвигун АІР100L6, Р=2.2 кВт, n= 1000 об/хв, Ін=5.6 А, ККД=79%, cos f=0.76');
		}
		
		if (formula_11>2.21 && formula_11<=3) {
		  $('#res_formula11_text').text('Електродвигун АІР112MA6, Р=3 кВт, n= 1000 об/хв, Ін=7.4 А, ККД=81%, cos f=0.76');
		}
		
		if (formula_11>3.01 && formula_11<=4) {
		  $('#res_formula11_text').text('Електродвигун АІР112MB6, Р=4 кВт, n= 1000 об/хв, Ін=9.75 А, ККД=82%, cos f=0.76');
		}
		if (formula_11>4 || formula_11<0.371) {
		  $('#res_formula11_text').text('Такого електродвигуна не існує!');
		}

		
	}
	else{
		$('#res_formula11').text("Введіть швидкість переміщення!");
	}

});



function copyToClipboard11(element) {

		var temp = $("<input>");
      $("body").append(temp);
      $('#show11').show().fadeOut( 1000 );
      temp.val($(element).text()).select();
      document.execCommand("copy");
      temp.remove();
      $('#copyred_formula11').prop('disabled', true);

}








$('#generate_formula12').on('click', function(){
	let Gama = $('#Gama').val();
	let Q = $('#Q').val();
	let H = $('#H').val();
	let KKD = $('#KKD').val();
	let M = $('#M').val();

	let formula_12 = ((1.1*Gama*Q*H)/(3600*1000*KKD*M)).toFixed(4);
	let formula12_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mfrac&gt;&lt;mrow&gt;&lt;mn&gt;1.1&lt;/mn&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+Gama+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+Q+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+H+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/mrow&gt;&lt;mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mn&gt;3600&lt;/mn&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mn&gt;1000&lt;/mn&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+KKD+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+M+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/mrow&gt;&lt;/mfrac&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_12+'&lt;/mi&gt;&lt;/math&gt;';
	$('#empty_formula12').html(formula12_text);
 	$('#res_formula12').text("Згенеровано!");
 	$('#copyred_formula12').prop('disabled', false);

});
$('#but_formula12').on('click', function(){
	let Gama = $('#Gama').val();
	let Q = $('#Q').val();
	let H = $('#H').val();
	let KKD = $('#KKD').val();
	let M = $('#M').val();
	
	let formula_12 = ((1.1*Gama*Q*H)/(3600*1000*KKD*M)).toFixed(4);
	$('#res_formula12').text(formula_12);

	if (formula_12>0 && formula_12<=0.18) {
	  $('#res_formula12_text').text('Електродвигун АІР63А6, Р=0.18 кВт, n= 1000 об/хв, Ін=0.8 А, ККД=55.5%, cos f=0.64');
	} 
	
	if (formula_12>0.181 && formula_12<=0.25) {
	  $('#res_formula12_text').text('Електродвигун АІР63В6, Р=0.25 кВт, n= 1000 об/хв, Ін=1.1 А, ККД=58.3%, cos f=0.65');
	} 
	
	if (formula_12>0.251 && formula_12<=0.37) {
	  $('#res_formula12_text').text('Електродвигун АІР71А6, Р=0.37 кВт, n= 1000 об/хв, Ін=1.3 А, ККД=62%, cos f=0.7');
	} 
	
	if (formula_12>0.371 && formula_12<=0.55) {
	  $('#res_formula12_text').text('Електродвигун АІР71В6, Р=0.55 кВт, n= 1000 об/хв, Ін=1.8 А, ККД=65%, cos f=0.72');
	}
	if (formula_12>0.55 && formula_12<=0) {
	  $('#res_formula12_text').text('Такого електродвигуна не існує!');
	}

});
function copyToClipboard12(element) {

		var temp = $("<input>");
      $("body").append(temp);
      $('#show12').show().fadeOut( 1000 );
      temp.val($(element).text()).select();
      document.execCommand("copy");
      temp.remove();
      $('#copyred_formula12').prop('disabled', true);

}

$('#generate_formula13').on('click', function(){
 		let Pn = $('#Pn').val();
 		let KKD = $('#KKD').val();
 		let Cosf = $('#Cosf').val();
 		if (Pn) {
 			if (KKD) {
 				if (Cosf) {

 					//($Ip= $Pn *1000/(657.4* $KKD* $cosf)
 					let formula_13 = ((Pn*1000)/((Math.pow(3,(1/2))*0.38)*KKD*Cosf)).toFixed(3);
					 let formula13_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mfrac&gt;&lt;mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+Pn+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mn&gt;1000&lt;/mn&gt;&lt;/mrow&gt;&lt;mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msqrt&gt;&lt;mn&gt;3&lt;/mn&gt;&lt;/msqrt&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mn&gt;0.38&lt;/mn&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+KKD+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mi&gt;'+Cosf+'&lt;/mi&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;/mrow&gt;&lt;/mrow&gt;&lt;/mfrac&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_13+'&lt;/mi&gt;&lt;/math&gt;';
					$('#empty_formula13').html(formula13_text);
 					$('#res_formula13').text("Згенеровано!");
 		 			$('#copyred_formula13').prop('disabled', false);
 				}
 				else{
 				$('#res_formula13').text("Введіть номінальний коефіцієнт потужності!");
 			}
 			}
 			else{
 				$('#res_formula13').text("Введіть коефіцієнт корисної дії електродвигуна!");
 			}
 			}
 			else{
 				$('#res_formula13').text("Введіть номінальну потужність електродвигуна Рн, кВт:!");
 			}


 });
	$('#but_formula13').on('click', function(){

		 let Pn = $('#Pn').val();
 		let KKD = $('#KKD').val();
 		let Cosf = $('#Cosf').val();
 		if (Pn) {
 			if (KKD) {
 				if (Cosf) {
 					//($Ip= $Pn *1000/(657.4* $KKD* $cosf)
 					let formula_13 = ((Pn*1000)/((Math.pow(3,(1/2)))*0.38*KKD*Cosf)).toFixed(3)
 					$('#res_formula13').text(formula_13);
}
 				else{
 				$('#res_formula13').text("Введіть номінальний коефіцієнт потужності!");
 			}
 			}
 			else{
 				$('#res_formula13').text("Введіть коефіцієнт корисної дії електродвигуна!");
 			}
 			}
 			else{
 				$('#res_formula13').text("Введіть номінальну потужність електродвигуна Рн, кВт:!");
 			}
		 		
		  	



});


 function copyToClipboard13(element) {
      var temp = $("<input>");
      $("body").append(temp);
      $('#show13').show().fadeOut( 1000 );
      temp.val($(element).text()).select();
      document.execCommand("copy");
      temp.remove();
      $('#copyred_formula13').prop('disabled', true);
 }









$('#generate_formula14').on('click', function(){

let Ip =$('#Ip').val();
let K1 =$('#K1').val();
let K2 =$('#K2').val();

	if (Ip) {
		let formula_14 = ((Ip/K1)*K2).toFixed(3);
		let formula14_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mfrac&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+Ip+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+K1+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/mfrac&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+K2+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_14+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula14').html(formula14_text);
 		$('#res_formula14').text("Згенеровано!");
 		$('#copyred_formula14').prop('disabled', false);
	}
	else{
		$('#res_formula14').text("Введіть pозрахунковий струм навантаження Ір, А!");
	}



});

$('#but_formula14').on('click', function(){
let Ip =$('#Ip').val();
let K1 =$('#K1').val();
let K2 =$('#K2').val();

	if (Ip) {
		let formula_14 = ((Ip/K1)*K2).toFixed(3);
		if (formula_14>0 && formula_14<=19) {
  			$('#res_formula14_text').text('Переріз струмопровідної жили 1,5 мм2, cтрум 19 А для трьохжильних проводів і кабелів з мідними жилами');
		} 

		if (formula_14>19.01 && formula_14<=25) {
		  $('#res_formula14_text').text('Переріз струмопровідної жили 2,5 мм2, cтрум 25 А для трьохжильних проводів і кабелів з мідними жилами');
		} 
		
		if (formula_14>25.01 && formula_14<=35) {
		  $('#res_formula14_text').text('Переріз струмопровідної жили 4 мм2, cтрум 35 А для трьохжильних проводів і кабелів з мідними жилами');
		}

		$('#res_formula14').text(formula_14);

	}
	else{
		$('#res_formula14').text("Введіть pозрахунковий струм навантаження Ір, А!");
	}

});



function copyToClipboard14(element) {

		var temp = $("<input>");
      $("body").append(temp);
      $('#show14').show().fadeOut( 1000 );
      temp.val($(element).text()).select();
      document.execCommand("copy");
      temp.remove();
      $('#copyred_formula14').prop('disabled', true);

}







$('#generate_formula15').on('click', function(){

let IR =$('#IR').val();


	if (IR) {
		let formula_15 = (IR*3.5).toFixed(3);
		let formula15_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mi&gt;'+IR+'&lt;/mi&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mn&gt;3.5&lt;/mn&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt; ' +formula_15+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula15').html(formula15_text);
 		$('#res_formula15').text("Згенеровано!");
 		$('#copyred_formula15').prop('disabled', false);
	}
	else{
		$('#res_formula15').text("Введіть pозрахунковий струм навантаження Ір, А!");
	}



});

$('#but_formula15').on('click', function(){
let IR =$('#IR').val();

	if (IR) {
		let formula_15 = (IR*3.5).toFixed(3);

		if (formula_15>0 && formula_15<=6) {
 		 $('#res_formula15_text').text('Плавкий запобіжник NT0, Ін=6 А');
		} 

		if (formula_15>6 && formula_15<=10) {
		  $('#res_formula15_text').text('Плавкий запобіжник NT0, Ін=10 А');
		} 
		
		if (formula_15>10 && formula_15<=16) {
		  $('#res_formula15_text').text('Плавкий запобіжник NT0, Ін=16 А');
		} 
		
		if (formula_15>16 && formula_15<=20) {
		  $('#res_formula15_text').text('Плавкий запобіжник NT0, Ін=20 А');
		} 
		
		if (formula_15>20 && formula_15<=25) {
		  $('#res_formula15_text').text('Плавкий запобіжник NT0, Ін=25 ');;
		} 
		
		if (formula_15>25 && formula_15<=32) {
		  $('#res_formula15_text').text('Плавкий запобіжник NT0, Ін=32 А');
		} 
		
		
		if (formula_15>32 && formula_15<=35) {
		  $('#res_formula15_text').text('Плавкий запобіжник NT0, Ін=35 А');
		} 
		
		if (formula_15>35 && formula_15<=40) {
		  $('#res_formula15_text').text('Плавкий запобіжник NT0, Ін=40 А');
		} 
		
		if (formula_15>40 && formula_15<=50) {
		  $('#res_formula15_text').text('Плавкий запобіжник NT0, Ін=50 А');
		} 
		
		if (formula_15>50 && formula_15<=63) {
		  $('#res_formula15_text').text('Плавкий запобіжник NT0, Ін=63 А');
		} 
		
		if (formula_15>63 && formula_15<=80) {
		  $('#res_formula15_text').text('Плавкий запобіжник NT0, Ін=80 А');
		} 
		
		if (formula_15>80 && formula_15<=100) {
		  $('#res_formula15_text').text('Плавкий запобіжник NT0, Ін=100 А');
		}
		
		if (formula_15>100 && formula_15<=125) {
		  $('#res_formula15_text').text('Плавкий запобіжник NT0, Ін=125 А');
		} 
		
		if (formula_15>125 && formula_15<=160) {
		  $('#res_formula15_text').text('Плавкий запобіжник NT0, Ін=160 А');
		}


		$('#res_formula15').text(formula_15);

	}
	else{
		$('#res_formula15').text("Введіть pозрахунковий струм навантаження Ір, А!");
	}

});



function copyToClipboard15(element) {

		var temp = $("<input>");
      $("body").append(temp);
      $('#show15').show().fadeOut( 1000 );
      temp.val($(element).text()).select();
      document.execCommand("copy");
      temp.remove();
      $('#copyred_formula15').prop('disabled', true);

}




















$('#generate_formula16').on('click', function(){
let PN =$('#PN').val();


	if (PN) {
		let formula_16 = (PN/380).toFixed(3);
		let formula16_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mfrac&gt;&lt;mi&gt;'+PN+'&lt;/mi&gt;&lt;mn&gt;380&lt;/mn&gt;&lt;/mfrac&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_16+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula16').html(formula16_text);
 		$('#res_formula16').text("Згенеровано!");
 		$('#copyred_formula16').prop('disabled', false);
	}
	else{
		$('#res_formula16').text("Введіть потужність електродвигуна Рн, Вт:!");
	}



});

$('#but_formula16').on('click', function(){

let PN =$('#PN').val();


	if (PN) {
		let formula_16 = (PN/380).toFixed(3);

		if (formula_16>0.63 && formula_16<=1) {
 			$('#res_formula16_text').text('АВЗД 2000/3-1, Ір=0.63-1 А');
		} 


		if (formula_16>1 && formula_16<=1.6) {
		  $('#res_formula16_text').text('АВЗД 2000/3-1, Ір=1-1.6 А');
		} 
		
		if (formula_16>1.6 && formula_16<=2.5) {
		  $('#res_formula16_text').text('АВЗД 2000/3-1, Ір=1.6-2.5 А');
		} 
		
		if (formula_16>2.5 && formula_16<=4) {
		  $('#res_formula16_text').text('АВЗД 2000/3-1, Ір=2.5-4.0 А');
		} 
		
		if (formula_16>4 && formula_16<=6.3) {
		  $('#res_formula16_text').text('АВЗД 2000/3-1, Ір=4-6.3 А');
		} 
		
		if (formula_16>6.3 && formula_16<=10) {
		  $('#res_formula16_text').text('АВЗД 2000/3-1, Ір=6.3-10 А');
		} 
		
		if (formula_16>9 && formula_16<=14) {
		  $('#res_formula16_text').text('АВЗД 2000/3-1, Ір=9-14 А');
		} 
		
		if (formula_16>14 && formula_16<=18) {
		  $('#res_formula16_text').text('АВЗД 2000/3-1, Ір=14-18 А');
		}
		if (formula_16>18 && formula_16<=23) {
		  $('#res_formula16_text').text('АВЗД 2000/3-1, Ір=18-23 А');
		}
		if (formula_16>20 && formula_16<=25) {
		  $('#res_formula16_text').text('АВЗД 2000/3-2, Ір=20-25 А');
		}
		if (formula_16>25 && formula_16<=40) {
		  $('#res_formula16_text').text('АВЗД 2000/3-2, Ір=25-40 А');
		}
		
		if (formula_16>40 && formula_16<=63) {
		  $('#res_formula16_text').text('АВЗД 2000/3-2, Ір=40-63 А');
		}
		
		if (formula_16>56 && formula_16<=80) {
		  $('#res_formula16_text').text('АВЗД 2000/3-2, Ір=56-80 А');
		}



		$('#res_formula16').text(formula_16);

	}
	else{
		$('#res_formula16').text("Введіть потужність електродвигуна Рн, Вт:!");
	}

});



function copyToClipboard16(element) {

		var temp = $("<input>");
      $("body").append(temp);
      $('#show16').show().fadeOut( 1000 );
      temp.val($(element).text()).select();
      document.execCommand("copy");
      temp.remove();
      $('#copyred_formula16').prop('disabled', true);

}





$('#but_formula17').on('click', function(){

let IR2 =$('#IR2').val();


	if (IR2) {
		if (IR2>1.6 && IR2<=2.5) {
		  $('#res_formula17_text').text('РТ2М-2.5, номінальний струм 1.6-2.5 А');
		  $('#res_formula17').text('');
		} 
		
		if (IR2>2.5 && IR2<=4) {
		  $('#res_formula17_text').text('РТ2М-4, номінальний струм 2.5-4 А');
		  $('#res_formula17').text('');
		} 
		
		if (IR2>4 && IR2<=6) {
		  $('#res_formula17_text').text('РТ2М-6, номінальний струм 4-6 А');
		  $('#res_formula17').text('');
		} 
		
		if (IR2>6 && IR2<=8) {
		  $('#res_formula17_text').text('РТ2М-8, номінальний струм 5.5-8 А');
		  $('#res_formula17').text('');
		} 
		
		if (IR2>8 && IR2<=10) {
		  $('#res_formula17_text').text('РТ2М-10, номінальний струм 7-10 А');
		  $('#res_formula17').text('');
		} 
		
		if (IR2>10 && IR2<=13) {
		  $('#res_formula17_text').text('РТ2М-13, номінальний струм 9-13 А');
		  $('#res_formula17').text('');
		} 
		
		if (IR2>13 && IR2<=18) {
		  $('#res_formula17_text').text('РТ2М-18, номінальний струм 12-18 А');
		  $('#res_formula17').text('');
		} 
		
		if (IR2>18 && IR2<=25) {
		  $('#res_formula17_text').text('РТ2М-25, номінальний струм 18-25 А');
		  $('#res_formula17').text('');
		} 
		
		if (IR2>25 && IR2<=32) {

		  $('#res_formula17_text').text('РТ2М-32');
		  $('#res_formula17').text('');
		}

	}
	else{
		$('#res_formula17').text("Введіть номінальний робочий струм Ір, А!");
	}

});













$('#but_formula18').on('click', function(){

let IR3 =$('#IR3').val();


	if (IR3) {
		if (IR3>0 && IR3<=6) {
		  $('#res_formula18_text').text("ПММ 1/6, Uк=24 В, Ір=6 А") ;
		  $('#res_formula18').text('');
		} 
		
		if (IR3>6 && IR3<9) {
		  $('#res_formula18_text').text("ПММ 1/9, Uк=24 В, Ір=9 А") ;
		  $('#res_formula18').text('');
		} 
		
		if (IR3>9 && IR3<12) {
		  $('#res_formula18_text').text("ПММ 1/12, Uк=24 В, Ір=12 А") ;
		  $('#res_formula18').text('');
		} 
		
		if (IR3>12 && IR3<16) {
		  $('#res_formula18_text').text("ПММ 1/16, Uк=24 В, Ір=16 А") ;
		  $('#res_formula18').text('');
		} 
		
		
		if (IR3>16 && IR3<25) {
		  $('#res_formula18_text').text("ПММ 2/25, Uк=24 В, Ір=25 А") ;
		  $('#res_formula18').text('');
		} 
		
		if (IR3>25 && IR3<32) {
		  $('#res_formula18_text').text("ПММ 3/32, Uк=24 В, Ір=32 А") ;
		  $('#res_formula18').text('');
		} 
		
		
		if (IR3>32 && IR3<40) {
		  $('#res_formula18_text').text("ПММ 4/40, Uк=24 В, Ір=40 А") ;
		  $('#res_formula18').text('');
		} 
		
		if (IR3>40 && IR3<50) {
		  $('#res_formula18_text').text("ПММ 4/50, Uк=24 В, Ір=50 А") ;
		  $('#res_formula18').text('');
		} 
		
		
		
		if (IR3>50 && IR3<63) {
		  $('#res_formula18_text').text("ПММ 4/63, Uк=24 В, Ір=63 А") ;
		  $('#res_formula18').text('');
		}


	}
	else{
		$('#res_formula18').text("Введіть номінальний робочий струм Ір, А!");
	}

});