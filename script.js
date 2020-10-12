$('#generate_formula1').on('click', function generate_f1(){
		let sigma = $('#sigma').val();
		let np = $('#np').val();
		if (sigma) {
			let for1 = new f1(+sigma,+np);
			for1.gen();
		 }
		 else{
		 	$('#res_formula1').text("Введіть межу міцності матеріалу заготовки, сігма!");
		 }


});
	$('#but_formula1').on('click', function calculate_f1(){
		let sigma = $('#sigma').val();
		let np = $('#np').val();


		if (sigma) {
		

			let for1 = new f1(+sigma,+np);
			for1.calc();
		}
		 else{
		 	$('#res_formula1').text("Введіть межу міцності матеріалу заготовки, сігма!");
		 }
});
$('#copyred_formula1').on('click', function copy(){
	let for1 = new f1();
	for1.copy();
});



$('#generate_formula2').on('click', function generate_f1(){
    let Sr = $('#Sr').val();
    let Qp = $('#Qp').val();
    let Yp = $('#Yp').val();
    let D = $('#D').val();
    let So = $('#So').val();
    let Kr = $('#Kr').val();
		if (D) {
			if (So) {
				if (Kr) {

			let for2 = new f2(+Sr,+Qp,+Yp,+D,+So,+Kr);
			for2.gen();
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
	$('#but_formula2').on('click', function calculate_f1(){
		let Sr = $('#Sr').val();
		let Qp = $('#Qp').val();
		let Yp = $('#Yp').val();
		let D = $('#D').val();
		let So = $('#So').val();
		let Kr = $('#Kr').val();


		if (D) {
			if (So) {
				if (Kr) {

		

			let for2 = new f2(+Sr,+Qp,+Yp,+D,+So,+Kr);
			for2.calc();
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
$('#copyred_formula2').on('click', function copy(){
	let for2 = new f2();
	for2.copy();
});


  $('#generate_formula3').on('click', function(){
    let Cm = $('#Cm').val();
    let Nv = $('#Nv').val();
    let sigma = $('#sigma').val();
    if (sigma) {
        let for3 = new f3(+Cm,+Nv,+sigma);
        for3.gen();
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

        let for3 = new f3(+Cm,+Nv,+sigma);
        for3.calc();
}
else{
    $('#res_formula3').text("Введіть межу міцності матеріалу заготовки, сігма!");
}
});

$('#copyred_formula3').on('click', function copy(){
	let for3 = new f3();
	for3.copy();
});


$('#generate_formula4').on('click', function(){
		let Kuv = $('#Kuv').val();
		let Klv = $('#Klv').val();
		let Kmv = $('#Kmv').val();
		if (Kmv) {
			let for4 = new f4(+Kuv,+Klv,+Kmv);
			for4.gen();
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
			let for4 = new f4(+Kuv,+Klv,+Kmv);
			for4.calc();
	}
	else{
		 	$('#res_formula4').text("Введіть поправочний коефіцієнт Kmv, на швидкість головного руху різання!");
		 }
});


$('#copyred_formula4').on('click', function copy(){
	let for4 = new f4();
	for4.copy();
});













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
						let for5 = new f5(+Cv,+D,+Qv,+T,+Mv,+So,+Yv,+Kv);
        				for5.gen();
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
						let for5 = new f5(+Cv,+D,+Qv,+T,+Mv,+So,+Yv,+Kv);
        				for5.calc();
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


$('#copyred_formula5').on('click', function copy(){
	let for5 = new f5();
	for5.copy();
});


$('#generate_formula6').on('click', function(){
		let V = $('#V').val();
		let D2 = $('#D2').val();

		if (D2) {
			if (V) {
				let for6 = new f6(+D2,+V);
				for6.gen();
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
				let for6 = new f6(+D2,+V);
				for6.calc();
		}
					else{
						$('#res_formula6').text("Введіть швидкість головного руху різання, що допускається ріжучими властивостями свердла v, м/хв!");
					}
			}
			else{
				$('#res_formula6').text("Введіть діаметр ріжучого інструменту!");
			}

});


$('#copyred_formula6').on('click', function copy(){
	let for6 = new f6();
	for6.copy();
});









$('#generate_formula7').on('click', function(){
		let Nd = $('#Nd').val();
		let D = $('#D').val();

		if (D) {
			let for7 = new f7(+D,+Nd);
			for7.gen();
			}
			else{
				$('#res_formula7').text("Введіть діаметр ріжучого інструменту!");
			}


});

	$('#but_formula7').on('click', function(){
		let Nd = $('#Nd').val();
		let D = $('#D').val();
		if (D) {
			let for7 = new f7(+D,+Nd);
			for7.calc();
			}
			else{
				$('#res_formula7').text("Введіть діаметр ріжучого інструменту!");
			}

});


$('#copyred_formula7').on('click', function copy(){
	let for7 = new f7();
	for7.copy();
});



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
					let for8 = new f8(+Cm,+Qm,+Ym,+D2,+So,+Kr);
					for8.gen();
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
					let for8 = new f8(+Cm,+Qm,+Ym,+D2,+So,+Kr);
					for8.calc();
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

$('#copyred_formula8').on('click', function copy(){
	let for8 = new f8();
	for8.copy();
});









$('#generate_formula9').on('click', function(){

let M =$('#M').val(); 
let Nd =$('#Nd').val();


if (M) {
	if (Nd) {
				let for9 = new f9(+M,+Nd);
				for9.gen();
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
		let for9 = new f9(+M,+Nd);
				for9.calc();
	}
	else{
		$('#res_formula9').text("Введіть дійсну швидкість головного руху різання!");
	}
}
else{
	$('#res_formula9').text("Введіть крутний момент від сил опору різання при свердлінні!");	
}

});

$('#copyred_formula9').on('click', function copy(){
	let for9 = new f9();
	for9.copy();
});




















$('#generate_formula10').on('click', function(){

let Nd2 =$('#Nd2').val();

	if (Nd2) {
		let for10 = new f10(+Nd2);
				for10.gen();
	}
	else{
		$('#res_formula10').text("Введіть потужність, використовувану для різання!");
	}



});

$('#but_formula10').on('click', function(){
let Nd2 =$('#Nd2').val();
	if (Nd2) {
		let for10 = new f10(+Nd2);
			for10.calc();
	}
	else{
		$('#res_formula10').text("Введіть потужність, використовувану для різання!");
	}

});


$('#copyred_formula10').on('click', function copy(){
	let for10 = new f10();
	for10.copy();
});






$('#generate_formula11').on('click', function(){

let Vper =$('#Vper').val();
let Ft =$('#Ft').val();

	if (Vper) {
		let for11 = new f11(+Vper,+Ft);
				for11.gen();
	}
	else{
		$('#res_formula11').text("Введіть швидкість переміщення!");
	}



});

$('#but_formula11').on('click', function(){
let Vper =$('#Vper').val();
let Ft =$('#Ft').val();
	if (Vper) {
		let for11 = new f11(+Vper,+Ft);
				for11.calc();
				for11.choice();
		

		
	}
	else{
		$('#res_formula11').text("Введіть швидкість переміщення!");
	}

});



$('#copyred_formula11').on('click', function copy(){
	let for11 = new f11();
	for11.copy();
});








$('#generate_formula12').on('click', function(){
	let Gama = $('#Gama').val();
	let Q = $('#Q').val();
	let H = $('#H').val();
	let KKD = $('#KKD').val();
	let M = $('#M').val();

	let for12 = new f12(+Gama,+Q,+H,+KKD,+M);
	for12.gen();

});
$('#but_formula12').on('click', function(){
	let Gama = $('#Gama').val();
	let Q = $('#Q').val();
	let H = $('#H').val();
	let KKD = $('#KKD').val();
	let M = $('#M').val();
	
	let for12 = new f12(+Gama,+Q,+H,+KKD,+M);
	for12.calc();
	for12.choice();

});
$('#copyred_formula12').on('click', function copy(){
	let for12 = new f12();
	for12.copy();
});





$('#generate_formula13').on('click', function(){
 		let Pn = $('#Pn').val();
 		let KKD = $('#KKD').val();
 		let Cosf = $('#Cosf').val();
 		if (Pn) {
 			if (KKD) {
 				if (Cosf) {

					let for13 = new f13(+Pn,+KKD,+Cosf);
					for13.gen();
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
					let for13 = new f13(+Pn,+KKD,+Cosf);
					for13.calc();
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


$('#copyred_formula13').on('click', function copy(){
	let for13 = new f13();
	for13.copy();
});









$('#generate_formula14').on('click', function(){

let Ip =$('#Ip').val();
let K1 =$('#K1').val();
let K2 =$('#K2').val();

	if (Ip) {
		let for14 = new f14(+Ip,+K1,+K2);
		for14.gen();
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
		let for14 = new f14(+Ip,+K1,+K2);
		for14.calc();
		for14.choice();

	}
	else{
		$('#res_formula14').text("Введіть pозрахунковий струм навантаження Ір, А!");
	}

});



$('#copyred_formula14').on('click', function copy(){
	let for14 = new f14();
	for14.copy();
});







$('#generate_formula15').on('click', function(){

let IR =$('#IR').val();


	if (IR) {
		let for15 = new f15(+IR);
		for15.gen();
	}
	else{
		$('#res_formula15').text("Введіть pозрахунковий струм навантаження Ір, А!");
	}



});

$('#but_formula15').on('click', function(){
let IR =$('#IR').val();

	if (IR) {
		let for15 = new f15(+IR);
		for15.calc();
		for15.choice();

	}
	else{
		$('#res_formula15').text("Введіть pозрахунковий струм навантаження Ір, А!");
	}

});



$('#copyred_formula15').on('click', function copy(){
	let for15 = new f15();
	for15.copy();
});




$('#generate_formula16').on('click', function(){
let PN =$('#PN').val();


	if (PN) {
		let for16 = new f16(+PN);
		for16.gen();
	}
	else{
		$('#res_formula16').text("Введіть потужність електродвигуна Рн, Вт:!");
	}



});

$('#but_formula16').on('click', function(){

let PN =$('#PN').val();


	if (PN) {
		let for16 = new f16(+PN);
		for16.calc();
		for16.choice();

	}
	else{
		$('#res_formula16').text("Введіть потужність електродвигуна Рн, Вт:!");
	}

});


$('#copyred_formula16').on('click', function copy(){
	let for16 = new f16();
	for16.copy();
});





$('#but_formula17').on('click', function(){

let IR2 =$('#IR2').val();


	if (IR2) {
		let for17 = new f17(+IR2);
		for17.choice();

	}
	else{
		$('#res_formula17').text("Введіть номінальний робочий струм Ір, А!");
	}

});













$('#but_formula18').on('click', function(){

let IR3 =$('#IR3').val();


	if (IR3) {
		
		let for18 = new f18(+IR3);
		for18.choice();

	}
	else{
		$('#res_formula18').text("Введіть номінальний робочий струм Ір, А!");
	}

});

