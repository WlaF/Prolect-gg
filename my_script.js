class f3 {

	constructor(Cm,Nv,sigma) {
      this.Cm = Cm;
      this.Nv = Nv;
      this.sigma = sigma;
	}
	calc(){
        let formula_3 = this.Cm*(Math.pow((75/this.sigma),this.Nv)).toFixed(3);
	    $('#res_formula3').text(formula_3);
	}
	gen(){
		let formula_2 = (9.81*this.Sr*(Math.pow(this.D,this.Qp))*(Math.pow(this.So,this.Yp))*this.Kr).toFixed(3);
        let formula3_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+this.Cm+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mo stretchy="false"&gt;(&lt;/mo&gt;&lt;mfrac&gt;&lt;mn&gt;75&lt;/mn&gt;&lt;mrow&gt;&lt;mi&gt;'+this.sigma+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/mfrac&gt;&lt;msup&gt;&lt;mo stretchy="false"&gt;)&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+this.Nv+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/msup&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_3+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula3').html(formula3_text);
        $('#res_formula3').text("Згенеровано!");
         $('#copyred_formula3').prop('disabled', false);
	}
	copy(){
		var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#empty_formula3').text()).select();
        document.execCommand("copy");
        temp.remove();
		$('#copyred_formula3').prop('disabled', true);
		$('#res_formula3').text("Скопійовано!");
	}
  }
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

    $('#res_formula3').text(formula_3);
}
else{
    $('#res_formula3').text("Введіть межу міцності матеріалу заготовки, сігма!");
}
});

$('#copyred_formula3').on('click', function copy(){
	let for3 = new f3();
	for3.copy();
});
