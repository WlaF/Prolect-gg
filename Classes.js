class f1 {

	constructor(sigma,np) {
	  this.sigma = sigma;
	  this.np = np;
	}
	calc(){
		let formula_1 = Math.pow((this.sigma/75), this.np).toFixed(3);
	    $('#res_formula1').text(formula_1);
	}
	gen(){
		let formula_1 = Math.pow((this.sigma/75), this.np).toFixed(3);
		let formula1_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mo stretchy="false"&gt;(&lt;/mo&gt;&lt;mfrac&gt;&lt;mi&gt;'+this.sigma+'&lt;/mi&gt;&lt;mn&gt;75&lt;/mn&gt;&lt;/mfrac&gt;&lt;msup&gt;&lt;mo stretchy="false"&gt;)&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+this.np+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/msup&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_1+' &lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula1').html(formula1_text);
		$('#res_formula1').text("Згенеровано!");
		 $('#copyred_formula1').prop('disabled', false);
	}
	copy(){
		var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#empty_formula1').text()).select();
        document.execCommand("copy");
        temp.remove();
		$('#copyred_formula1').prop('disabled', true);
		$('#res_formula1').text("Скопійовано!");
	}
  }

class f2 {

	constructor(Sr,Qp,Yp,D,So,Kr) {
      this.Sr = Sr;
      this.Qp = Qp;
      this.Yp = Yp;
      this.D = D;
      this.So = So;
      this.Kr = Kr;
	}
	calc(){
		let formula_2 = (9.81*this.Sr*(Math.pow(this.D,this.Qp))*(Math.pow(this.So,this.Yp))*this.Kr).toFixed(3);
	    $('#res_formula2').text(formula_2);
	}
	gen(){
		let formula_2 = (9.81*this.Sr*(Math.pow(this.D,this.Qp))*(Math.pow(this.So,this.Yp))*this.Kr).toFixed(3);
		let formula2_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mo stretchy="false"&gt;(&lt;/mo&gt;&lt;mn&gt;9.81&lt;/mn&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+this.Sr+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msup&gt;&lt;mi&gt;'+this.D+'&lt;/mi&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+this.Qp+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/msup&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msup&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+this.So+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+this.Yp+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/msup&gt;&lt;/mrow&gt;&lt;mo stretchy="false"&gt;)&lt;/mo&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+this.Kr+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_2+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula2').html(formula2_text);
		$('#res_formula2').text("Згенеровано!");
		 $('#copyred_formula2').prop('disabled', false);
	}
	copy(){
		var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#empty_formula2').text()).select();
        document.execCommand("copy");
        temp.remove();
		$('#copyred_formula2').prop('disabled', true);
		$('#res_formula2').text("Скопійовано!");
	}
  }


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
		let formula_3 = this.Cm*(Math.pow((75/this.sigma),this.Nv)).toFixed(3);
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


  class f4 {

	constructor(Kuv,Klv,Kmv) {
      this.Kuv = Kuv;
      this.Klv = Klv;
      this.Kmv = Kmv;
	}
	calc(){
		let formula_4 = (this.Kuv*this.Klv*this.Kmv).toFixed(3);
	    $('#res_formula4').text(formula_4);
	}
	gen(){
		let formula_4 = (this.Kuv*this.Klv*this.Kmv).toFixed(3);
		let formula4_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+this.Kuv+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+this.Klv+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+this.Kmv+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_4+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula4').html(formula4_text);
        $('#res_formula4').text("Згенеровано!");
         $('#copyred_formula4').prop('disabled', false);
	}
	copy(){
		var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#empty_formula4').text()).select();
        document.execCommand("copy");
        temp.remove();
		$('#copyred_formula4').prop('disabled', true);
		$('#res_formula4').text("Скопійовано!");
	}
  }