<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../style/style.css">
	<title>Document</title>
</head>
<body>

<?php 

include 'header.php';



 ?>
	 <div class="container-sm">

	<p><b>ІV. РОЗРАХУНОК ЕЛЕКТРООБЛАДНАННЯ СВЕРДЛИЛЬНОГО ВЕРСТАТА</p></b>
<br>
	<fieldset>
		<legend> КРОК 1. Розрахунок розрахункового струму навантаження для одного електродвигуна свердлильного верстата</legend>
	<p>
   		<br>
   		<!-- ⋅ -->
   		<!-- ($Pn *1000/(657.4* $KKD* $cosf) -->
   		$$
			\pmb{\frac{{Pn}⋅1000}{{\sqrt{3}⋅0.38}⋅{KKD}⋅\cosϕ}}
		$$
   	</p>
	Номінальна потужність електродвигуна Рн, кВт:
	<br><input  type="number" id="Pn">

	<br><br>Коефіцієнт корисної дії електродвигуна:
	<br><input  type="number" id="KKD">

	<br><br>Номінальний коефіцієнт потужності:
	<br><input  type="number" id="Cosf">
	<p id="empty_formula13">

   	</p>
      <br><br>
   	<p>
   		<button id="but_formula13">Вирахувати розрахунковий струм навантаження для одного електродвигуна свердлильного верстата</button>
   		<button id="generate_formula13">Згенерувати формулу</button>
   		<button  id="copyred_formula13" disabled="true" onclick="copyToClipboard13('#empty_formula13')">Скопіювати формулу</button><span id="show13">Скопійовано!</span>
   	</p>
   	<p id="res_formula13">
   		
   	</p>

	</fieldset>




	<fieldset>
	<legend><br>КРОК 2. Вибір проводів і кабелів свердлильного верстата за умовою допустимого нагріву тривалим допустимим струмом</legend>
	<p>
   		<br>
   		<!-- ⋅ -->
   		<!-- ⋅ -->
   		$$
			\pmb{\frac{{Ip}}{{K1}}⋅{K2}}
		$$
   	</p>
	Розрахунковий струм навантаження Ір, А:
	<br><input  type="number" id="Ip">
	<br><br>Поправочний коєфіцієнт на умову прокладання проводів і кабелів, К1:
	<br>
	<select  id="K1">
		<optgroup label="Поправочний коєфіцієнт на умову прокладання проводів і кабелів при розрахунковій температурі середовища +15 градусів цельсія і фактичній температурі середовища +20 градусів цельсія">
			<option value="0.96">0.96</option>
		<optgroup label="Поправочний коєфіцієнт на умову прокладання проводів і кабелів при розрахунковій температурі середовища +25 градусів цельсія і фактичній температурі середовища +20 градусів цельсія">
			<option value="1.04">1.04</option>
		</optgroup>
	</select>
	<br><br>Поправочний коєфіцієнт на кількість працюючих проводів і кабелів, які прокладені разом у землі, у трубах і без труб, К2:
	<br><select  id="K2">
		<optgroup label="При кількості кабелів - 1">
			<option value="1">1.0</option>
		<optgroup label="При кількості кабелів - 2">
			<option value="0.9">0.9</option>
		<optgroup label="При кількості кабелів - 3">
			<option value="0.85">0.85</option>
		<optgroup label="При кількості кабелів - 4">
			<option value="0.8">0.8</option>
		<optgroup label="При кількості кабелів - 5">
			<option value="0.78">0.78</option>
		</optgroup>
	</select>

	<p id="empty_formula14">

   	</p>
      <br><br>
   	<p>
   		<button id="but_formula14">Вирахувати допустиме струмове навантаження для вибору перерізу провідника</button>
   		<button id="generate_formula14">Згенерувати формулу</button>
   		<button  id="copyred_formula14" disabled="true" onclick="copyToClipboard14('#empty_formula14')">Скопіювати формулу</button><span id="show14">Скопійовано!</span>
   	</p>
   	<p id="res_formula14">
   		
   	</p>
   	<p id="res_formula14_text">
   		
   	</p>
</fieldset>
<br>
<fieldset>
<legend> КРОК 3. Вибір запобіжників</legend>
<p>
   		<br>
   		$$
			\pmb{{Ip⋅3.5}}
		$$
   	</p>

Розрахунковий струм навантаження Ір, А:
<br><input  type="number" id="IR">
	<p id="empty_formula15">

   	</p>
      <br><br>
   	<p>
   		<button id="but_formula15">Вирахувати струм плавкої вставки, Іпік/2</button>
   		<button id="generate_formula15">Згенерувати формулу</button>
   		<button  id="copyred_formula15" disabled="true" onclick="copyToClipboard15('#empty_formula15')">Скопіювати формулу</button><span id="show15">Скопійовано!</span>
   	</p>
   	<p id="res_formula15">
   		
   	</p>
   	<p id="res_formula15_text">
   		
   	</p>

</fieldset>



<br>
<fieldset>
<legend> КРОК 4. Вибір автоматичних вимикачів за потужністю</legend>
<p>
   		<br>
   		$$
			\pmb{\frac{{Pn}}{380}}
		$$
   	</p>

Вкажіть потужність електродвигуна Рн, Вт:
<br><input  type="number" id="PN">
	<p id="empty_formula16">

   	</p>
      <br><br>
   	<p>
   		<button id="but_formula16">Обрати автоматичний вимикач</button>
   		<button id="generate_formula16">Згенерувати формулу</button>
   		<button  id="copyred_formula16" disabled="true" onclick="copyToClipboard16('#empty_formula16')">Скопіювати формулу</button><span id="show16">Скопійовано!</span>
   	</p>
   	<p id="res_formula16">
   		
   	</p>
   	<p id="res_formula16_text">
   		
   	</p>

</fieldset>





<br>
<fieldset>
<legend> КРОК 5. Вибір теплового реле</legend>
<br> Номінальний струм теплового реле дорівнює номінальному струму електродвигуна.
<br><br>Номінальний робочий струм Ір, А:
<br><input  type="number" id="IR2">
	<p id="empty_formula17">

   	</p>
      <br>
   	<p>
   		<button id="but_formula17">Вибрати теплове реле для одного електродвигуна</button>

   	</p>
      <p id="res_formula17">
         
      </p>
   	<p id="res_formula17_text">
   		
   	</p>


</fieldset>

<br>
<fieldset>
<legend> КРОК 6. Вибір магнітних пускачів</legend>
<br> При виборі магнітного пускача повинна виконуватися умова, де номінальний струм магнітного пускача повинен бути більшим за розрахунковий струм навантаження.
<br><br>Номінальний робочий струм Ір, А:
<br><input  type="number" id="IR3">
<br><br>
   	<p>
   		<button id="but_formula18">Вибрати магнітний пускач для одного електродвигуна</button>

   	</p>
      <p id="res_formula18">
         
      </p>
   	<p id="res_formula18_text">
   		
   	</p>

</fieldset>
	 </div>
<?php 

include 'footer.php';



 ?>

</body>
</html>