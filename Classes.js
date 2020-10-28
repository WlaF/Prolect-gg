class f1 {

	constructor(sigma,np) {
	  this.sigma = sigma;
	  this.np = np;
	}
	calc(){
		let formula_1 = Math.pow((this.sigma/75), this.np).toFixed(3);
	    $('#res_formula1').text(String(formula_1).replace('.',','));
	}
	gen(){
		let formula_1 = Math.pow((this.sigma/75), this.np).toFixed(3);
		let formula1_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mo stretchy="false"&gt;(&lt;/mo&gt;&lt;mfrac&gt;&lt;mi&gt;'+String(this.sigma).replace('.',',')+'&lt;/mi&gt;&lt;mn&gt;75&lt;/mn&gt;&lt;/mfrac&gt;&lt;msup&gt;&lt;mo stretchy="false"&gt;)&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.np).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/msup&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+formula_1.replace('.',',')+' &lt;/mi&gt;&lt;/math&gt;';
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
	    $('#res_formula2').text(String(formula_2).replace('.',','));
	}
	gen(){
		let formula_2 = (9.81*this.Sr*(Math.pow(this.D,this.Qp))*(Math.pow(this.So,this.Yp))*this.Kr).toFixed(3);
		let formula2_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mo stretchy="false"&gt;(&lt;/mo&gt;&lt;mn&gt;9,81&lt;/mn&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.Sr).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msup&gt;&lt;mi&gt;'+String(this.D).replace('.',',')+'&lt;/mi&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.Qp).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/msup&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msup&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.So).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.Yp).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/msup&gt;&lt;/mrow&gt;&lt;mo stretchy="false"&gt;)&lt;/mo&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.Kr).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+String(formula_2).replace('.',',')+'&lt;/mi&gt;&lt;/math&gt;';
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
	    $('#res_formula3').text(String(formula_3).replace('.',','));
	}
	gen(){
		let formula_3 = this.Cm*(Math.pow((75/this.sigma),this.Nv)).toFixed(3);
		let formula3_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.Cm).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mo stretchy="false"&gt;(&lt;/mo&gt;&lt;mfrac&gt;&lt;mn&gt;75&lt;/mn&gt;&lt;mrow&gt;&lt;mi&gt;'+String(this.sigma).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/mfrac&gt;&lt;msup&gt;&lt;mo stretchy="false"&gt;)&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.Nv).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/msup&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+String(formula_3).replace('.',',')+'&lt;/mi&gt;&lt;/math&gt;';
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
	    $('#res_formula4').text(String(formula_4).replace('.',','));
	}
	gen(){
		let formula_4 = (this.Kuv*this.Klv*this.Kmv).toFixed(3);
		let formula4_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.Kuv).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.Klv).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.Kmv).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+String(formula_4).replace('.',',')+'&lt;/mi&gt;&lt;/math&gt;';
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






  class f5 {

	constructor(Cv,D,Qv,T,Mv,So,Yv,Kv) {
      this.Cv = Cv;
      this.D = D;
	  this.Qv = Qv;
	  this.T = T;
	  this.Mv = Mv;
	  this.So = So;
	  this.Yv = Yv;
	  this.Kv = Kv;
	  
	}
	calc(){
		let formula_5 = (((this.Cv*(Math.pow(this.D,this.Qv)))/((Math.pow(this.T,this.Mv))*((Math.pow(this.So,this.Yv)))))*this.Kv).toFixed(3);
	    $('#res_formula5').text(String(formula_5).replace('.',','));
	}
	gen(){
		let formula_5 = (((this.Cv*(Math.pow(this.D,this.Qv)))/((Math.pow(this.T,this.Mv))*((Math.pow(this.So,this.Yv)))))*this.Kv).toFixed(3);
		let formula5_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mrow&gt;&lt;mo&gt;(&lt;/mo&gt;&lt;mfrac&gt;&lt;mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.Cv).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msup&gt;&lt;mi&gt;'+String(this.D).replace('.',',')+'&lt;/mi&gt;&lt;mi&gt;'+String(this.Qv).replace('.',',')+'&lt;/mi&gt;&lt;/msup&gt;&lt;/mrow&gt;&lt;/mrow&gt;&lt;mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msup&gt;&lt;mi&gt;'+String(this.T).replace('.',',')+'&lt;/mi&gt;&lt;mi&gt;'+String(this.Mv).replace('.',',')+'&lt;/mi&gt;&lt;/msup&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msup&gt;&lt;mi&gt;'+String(this.So).replace('.',',')+'&lt;/mi&gt;&lt;mi&gt;'+String(this.Yv).replace('.',',')+'&lt;/mi&gt;&lt;/msup&gt;&lt;/mrow&gt;&lt;/mrow&gt;&lt;/mfrac&gt;&lt;mo&gt;)&lt;/mo&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mi&gt;'+String(this.Kv).replace('.',',')+'&lt;/mi&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+String(formula_5).replace('.',',')+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula5').html(formula5_text);
        $('#res_formula5').text("Згенеровано!");
         $('#copyred_formula5').prop('disabled', false);
	}
	copy(){
		var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#empty_formula5').text()).select();
        document.execCommand("copy");
        temp.remove();
		$('#copyred_formula5').prop('disabled', true);
		$('#res_formula5').text("Скопійовано!");
	}
  }







  class f6 {

	constructor(V,D2) {
      this.V = V;
      this.D2 = D2;
	  
	}
	calc(){
		let formula_6 = ((this.V*1000)/(3.14*this.D2)).toFixed(3);
	    $('#res_formula6').text(String(formula_6).replace('.',','));
	}
	gen(){
		let formula_6 = ((this.V*1000)/(3.14*this.D2)).toFixed(3);
		let formula6_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mfrac&gt;&lt;mrow&gt;&lt;mn&gt;1000&lt;/mn&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mi&gt;'+String(this.V).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mrow&gt;&lt;mn&gt;3,14&lt;/mn&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mi&gt;'+String(this.D2).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/mfrac&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+String(formula_6).replace('.',',')+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula6').html(formula6_text);
        $('#res_formula6').text("Згенеровано!");
         $('#copyred_formula6').prop('disabled', false);
	}
	copy(){
		var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#empty_formula6').text()).select();
        document.execCommand("copy");
        temp.remove();
		$('#copyred_formula6').prop('disabled', true);
		$('#res_formula6').text("Скопійовано!");
	}
  }


  class f7 {

	constructor(Nd,D) {
      this.Nd = Nd;
      this.D = D;
	  
	}
	calc(){
		let formula_7 = ((3.14*this.D*this.Nd)/1000).toFixed(3);
	    $('#res_formula7').text(String(formula_7).replace('.',','));
	}
	gen(){
		let formula_7 = ((3.14*this.D*this.Nd)/1000).toFixed(3);
		let formula7_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mfrac&gt;&lt;mrow&gt;&lt;mn&gt;3,14&lt;/mn&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mi&gt;'+String(this.D).replace('.',',')+'&lt;/mi&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mi&gt;'+String(this.Nd).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mn&gt;1000&lt;/mn&gt;&lt;/mfrac&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+String(formula_7).replace('.',',')+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula7').html(formula7_text);
        $('#res_formula7').text("Згенеровано!");
         $('#copyred_formula7').prop('disabled', false);
	}
	copy(){
		var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#empty_formula7').text()).select();
        document.execCommand("copy");
        temp.remove();
		$('#copyred_formula7').prop('disabled', true);
		$('#res_formula7').text("Скопійовано!");
	}
  }



  class f8 {

	constructor(Cm,Qm,Ym,D2,So,Kr) {
      this.Cm = Cm;
	  this.Qm = Qm;
	  this.Ym = Ym;
	  this.D2 = D2;
	  this.So = So;
	  this.Kr = Kr;
	}
	calc(){
		let formula_8 = (((9.81*this.Cm*(Math.pow(this.D2,this.Qm)))*(Math.pow(this.So,this.Ym)))*(this.Kr*0.101973)).toFixed(3);
	    $('#res_formula8').text(String(formula_8).replace('.',','));
	}
	gen(){
		let formula_8 = (((9.81*this.Cm*(Math.pow(this.D2,this.Qm)))*(Math.pow(this.So,this.Ym)))*(this.Kr*0.101973)).toFixed(3);
		let formula8_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mo stretchy="false"&gt;(&lt;/mo&gt;&lt;mn&gt;9,81&lt;/mn&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mi&gt;'+String(this.Cm).replace('.',',')+'&lt;/mi&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msup&gt;&lt;mi&gt;'+String(this.D2).replace('.',',')+'&lt;/mi&gt;&lt;mi&gt;'+String(this.Qm).replace('.',',')+'&lt;/mi&gt;&lt;/msup&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msup&gt;&lt;mi&gt;'+String(this.So).replace('.',',')+'&lt;/mi&gt;&lt;mi&gt;'+String(this.Ym).replace('.',',')+'&lt;/mi&gt;&lt;/msup&gt;&lt;/mrow&gt;&lt;mo stretchy="false"&gt;)&lt;/mo&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mo stretchy="false"&gt;(&lt;/mo&gt;&lt;mi&gt;'+String(this.Kr).replace('.',',')+'&lt;/mi&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mn&gt;0,101973&lt;/mn&gt;&lt;mo stretchy="false"&gt;)&lt;/mo&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+String(formula_8).replace('.',',')+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula8').html(formula8_text);
        $('#res_formula8').text("Згенеровано!");
         $('#copyred_formula8').prop('disabled', false);
	}
	copy(){
		var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#empty_formula8').text()).select();
        document.execCommand("copy");
        temp.remove();
		$('#copyred_formula8').prop('disabled', true);
		$('#res_formula8').text("Скопійовано!");
	}
  }


  class f9 {

	constructor(M,Nd) {
      this.Nd = Nd;
      this.M = M;
	  
	}
	calc(){
		let formula_9 = ((this.M*this.Nd)/975).toFixed(3);
	    $('#res_formula9').text(String(formula_9).replace('.',','));
	}
	gen(){
		let formula_9 = ((this.M*this.Nd)/975).toFixed(3);
		let formula9_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mfrac&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.M).replace('.',',')+'&lt;/mi&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mi&gt;'+String(this.Nd).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mn&gt;975&lt;/mn&gt;&lt;/mfrac&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+String(formula_9).replace('.',',')+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula9').html(formula9_text);
        $('#res_formula9').text("Згенеровано!");
         $('#copyred_formula9').prop('disabled', false);
	}
	copy(){
		var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#empty_formula9').text()).select();
        document.execCommand("copy");
        temp.remove();
		$('#copyred_formula9').prop('disabled', true);
		$('#res_formula9').text("Скопійовано!");
	}
  }







  class f10 {

	constructor(Nd2) {
      this.Nd2 = Nd2;
	  
	}
	calc(){
		let formula_10 = ((this.Nd2*0.8)).toFixed(3);
	    $('#res_formula10').text(String(formula_10).replace('.',','));
	}
	gen(){
		let formula_10 = ((this.Nd2*0.8)).toFixed(3);
		let formula10_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mi&gt;'+String(this.Nd2).replace('.',',')+'&lt;/mi&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mn&gt;0,8&lt;/mn&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+String(formula_10).replace('.',',')+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula10').html(formula10_text);
        $('#res_formula10').text("Згенеровано!");
         $('#copyred_formula10').prop('disabled', false);
	}
	copy(){
		var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#empty_formula10').text()).select();
        document.execCommand("copy");
        temp.remove();
		$('#copyred_formula10').prop('disabled', true);
		$('#res_formula10').text("Скопійовано!");
	}
  }




  class f11 {

	constructor(Vper,Ft) {
	  this.Vper = Vper;
	  this.Ft = Ft;
	  
	}
	calc(){
		let formula_11 = ((this.Vper*this.Ft)/(14.4*0.001)).toFixed(2);
	    $('#res_formula11').text(String(formula_11).replace('.',','));
	}
	choice(){
		let formula_11 = ((this.Vper*this.Ft)/(14.4*0.001)).toFixed(2);
		
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
	gen(){
		let formula_11 = ((this.Vper*this.Ft)/(14.4*0.001)).toFixed(2);
		let formula11_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mfrac&gt;&lt;mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.Vper).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.Ft).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/mrow&gt;&lt;mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mn&gt;14,4&lt;/mn&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mn&gt;0,001&lt;/mn&gt;&lt;/mrow&gt;&lt;/mrow&gt;&lt;/mfrac&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+String(formula_11).replace('.',',')+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula11').html(formula11_text);
        $('#res_formula11').text("Згенеровано!");
         $('#copyred_formula11').prop('disabled', false);
	}
	copy(){
		var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#empty_formula11').text()).select();
        document.execCommand("copy");
        temp.remove();
		$('#copyred_formula11').prop('disabled', true);
		$('#res_formula11').text("Скопійовано!");
	}
  }

  class f12 {

	constructor(Gama,Q,H,KKD,M) {
		this.Gama = Gama;
		this.Q = Q;
		this.H = H;
		this.KKD = KKD;
		this.M = M;
	  
	}
	calc(){
		let formula_12 = ((1.1*this.Gama*this.Q*this.H)/(3600*1000*this.KKD*this.M)).toFixed(4);
	    $('#res_formula12').text(String(formula_12).replace('.',','));
	}
	choice(){
		let formula_12 = ((1.1*this.Gama*this.Q*this.H)/(3600*1000*this.KKD*this.M)).toFixed(4);

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
	}
	gen(){
		let formula_12 = ((1.1*this.Gama*this.Q*this.H)/(3600*1000*this.KKD*this.M)).toFixed(4);
		let formula12_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mfrac&gt;&lt;mrow&gt;&lt;mn&gt;1,1&lt;/mn&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.Gama).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.Q).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.H).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/mrow&gt;&lt;mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mn&gt;3600&lt;/mn&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mn&gt;1000&lt;/mn&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.KKD).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;!-- ∗ --&gt;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.M).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/mrow&gt;&lt;/mfrac&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+String(formula_12).replace('.',',')+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula12').html(formula12_text);
        $('#res_formula12').text("Згенеровано!");
         $('#copyred_formula12').prop('disabled', false);
	}
	copy(){
		var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#empty_formula12').text()).select();
        document.execCommand("copy");
        temp.remove();
		$('#copyred_formula12').prop('disabled', true);
		$('#res_formula12').text("Скопійовано!");
	}
  }


  class f13 {

	constructor(Pn,KKD,Cosf) {
		this.Pn = Pn;
		this.KKD = KKD;
		this.Cosf = Cosf;
	  
	}
	calc(){
		let formula_13 = ((this.Pn*1000)/((Math.pow(3,(1/2))*0.38)*this.KKD*this.Cosf)).toFixed(3);
	    $('#res_formula13').text(String(formula_13).replace('.',','));
	}
	
	gen(){
		let formula_13 = ((this.Pn*1000)/((Math.pow(3,(1/2))*0.38)*this.KKD*this.Cosf)).toFixed(3);
		let formula13_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mfrac&gt;&lt;mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.Pn).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mn&gt;1000&lt;/mn&gt;&lt;/mrow&gt;&lt;mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;msqrt&gt;&lt;mn&gt;3&lt;/mn&gt;&lt;/msqrt&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mn&gt;0,38&lt;/mn&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.KKD).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mi&gt;'+String(this.Cosf).replace('.',',')+'&lt;/mi&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;/mrow&gt;&lt;/mrow&gt;&lt;/mfrac&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+String(formula_13).replace('.',',')+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula13').html(formula13_text);
        $('#res_formula13').text("Згенеровано!");
         $('#copyred_formula13').prop('disabled', false);
	}
	copy(){
		var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#empty_formula13').text()).select();
        document.execCommand("copy");
        temp.remove();
		$('#copyred_formula13').prop('disabled', true);
		$('#res_formula13').text("Скопійовано!");
	}
  }



  class f14 {

	constructor(Ip,K1,K2) {
		this.Ip = Ip;
		this.K1 = K1;
		this.K2 = K2;
	  
	}
	calc(){
		let formula_14 = ((this.Ip/this.K1)*this.K2).toFixed(3);
	    $('#res_formula14').text(String(formula_14).replace('.',','));
	}
	choice(){
		let formula_14 = ((this.Ip/this.K1)*this.K2).toFixed(3);

		if (formula_14>0 && formula_14<=19) {
			$('#res_formula14_text').text('Переріз струмопровідної жили 1,5 мм2, cтрум 19 А для трьохжильних проводів і кабелів з мідними жилами');
	  } 

	  if (formula_14>19.01 && formula_14<=25) {
		$('#res_formula14_text').text('Переріз струмопровідної жили 2,5 мм2, cтрум 25 А для трьохжильних проводів і кабелів з мідними жилами');
	  } 
	  
	  if (formula_14>25.01 && formula_14<=35) {
		$('#res_formula14_text').text('Переріз струмопровідної жили 4 мм2, cтрум 35 А для трьохжильних проводів і кабелів з мідними жилами');
	  }
	}
	gen(){
		let formula_14 = ((this.Ip/this.K1)*this.K2).toFixed(3);
		let formula14_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mfrac&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.Ip).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.K1).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;/mfrac&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mrow class="MJX-TeXAtom-ORD"&gt;&lt;mi&gt;'+String(this.K2).replace('.',',')+'&lt;/mi&gt;&lt;/mrow&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+String(formula_14).replace('.',',')+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula14').html(formula14_text);
        $('#res_formula14').text("Згенеровано!");
         $('#copyred_formula14').prop('disabled', false);
	}
	copy(){
		var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#empty_formula14').text()).select();
        document.execCommand("copy");
        temp.remove();
		$('#copyred_formula14').prop('disabled', true);
		$('#res_formula14').text("Скопійовано!");
	}
  }





  class f15 {

	constructor(IR) {
		this.IR = IR;
	  
	}
	calc(){
		let formula_15 = (this.IR*3.5).toFixed(3);
	    $('#res_formula15').text(String(formula_15).replace('.',','));
	}
	choice(){
		let formula_15 = (this.IR*3.5).toFixed(3);

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
	}
	gen(){
		let formula_15 = (this.IR*3.5).toFixed(3);
		let formula15_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mi&gt;'+String(this.IR).replace('.',',')+'&lt;/mi&gt;&lt;mo&gt;&#x22C5;&lt;/mo&gt;&lt;mn&gt;3,5&lt;/mn&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+String(formula_15).replace('.',',')+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula15').html(formula15_text);
        $('#res_formula15').text("Згенеровано!");
         $('#copyred_formula15').prop('disabled', false);
	}
	copy(){
		var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#empty_formula15').text()).select();
        document.execCommand("copy");
        temp.remove();
		$('#copyred_formula15').prop('disabled', true);
		$('#res_formula15').text("Скопійовано!");
	}
  }





  class f16 {

	constructor(PN) {
		this.PN = PN;
	  
	}
	calc(){
		let formula_16 = (this.PN/380).toFixed(3);
	    $('#res_formula16').text(String(formula_16).replace('.',','));
	}
	choice(){
		let formula_16 = (this.PN/380).toFixed(3);

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
	   if (formula_16>80) {
		$('#res_formula16_text').text('Такого вимикача не існує!');
	  }
	}
	gen(){
		let formula_16 = (this.PN/380).toFixed(3);
		let formula16_text = '&lt;math xmlns="http://www.w3.org/1998/Math/MathML" display="block"&gt;&lt;mfrac&gt;&lt;mi&gt;'+String(this.PN).replace('.',',')+'&lt;/mi&gt;&lt;mn&gt;380&lt;/mn&gt;&lt;/mfrac&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mi&gt;'+String(formula_16).replace('.',',')+'&lt;/mi&gt;&lt;/math&gt;';
		$('#empty_formula16').html(formula16_text);
        $('#res_formula16').text("Згенеровано!");
         $('#copyred_formula16').prop('disabled', false);
	}
	copy(){
		var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#empty_formula16').text()).select();
        document.execCommand("copy");
        temp.remove();
		$('#copyred_formula16').prop('disabled', true);
		$('#res_formula16').text("Скопійовано!");
	}
  }






  class f17 {

	constructor(IR2) {
		this.IR2 = IR2;
	  
	}
	choice(){
		let IR2 = this.IR2;
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
	
  }




  class f18 {

	constructor(IR3) {
		this.IR3 = IR3;
	  
	}
	choice(){
		let IR3 = this.IR3;

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
	
  }