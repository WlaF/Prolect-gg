<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
	<link rel="stylesheet" href="style.css">
	<title>Document</title>
</head>
<body>

<?php 

include 'header.php';



 ?>
	 <div class="container-sm">

	<p><b>V. РОЗРАХУНОК ЕЛЕКТРООБЛАДНАННЯ СВЕРДЛИЛЬНОГО ВЕРСТАТА</p></b>
<br>
	<fieldset>
		<legend> КРОК 1. Розрахунок розрахункового струму навантаження для одного електродвигуна свердлильного верстата</legend>
	<p>
   		<br>
   		$$
			\pmb{\frac{{Pn}⋅1000}{{\sqrt{3}⋅0.38}⋅{η}⋅\cosϕ}}
		$$
   	</p>
	Рн, кВт = номінальна потужність електродвигуна:
	<br><input  type="number" id="Pn">

	<br>
	<br>
	η = коефіцієнт корисної дії електродвигуна:
	<br><input  type="number" id="KKD">

	<br><br>
	cosφ = номінальний коефіцієнт потужності:
	<br><input  type="number" id="Cosf">
	<p id="empty_formula13">

   	</p>
      <br><br>
  
   		<p>
			   <button id="but_formula13">Вирахувати розрахунковий струм навантаження для одного електродвигуна свердлильного верстата</button>
		   </p>
   		<p>
			   <button id="generate_formula13">Згенерувати формулу</button>
		   </p>
   		<p>
			   <button  id="copyred_formula13" disabled="true">Скопіювати формулу</button>
		   </p>
   	
   	<p id="res_formula13">
   		
   	</p>

	</fieldset>

	<fieldset>
	<legend><br>КРОК 2. Вибір проводів і кабелів свердлильного верстата за умовою допустимого нагріву тривалим допустимим струмом</legend>
	<p>
   		<br>

   		$$
			\pmb{\frac{{Ip}}{{K1}}⋅{K2}}
		$$
   	</p>
	Ір, А = розрахунковий струм навантаження:
	<br><input  type="number" id="Ip">
	<br>
	<br>К1 = поправочний коєфіцієнт на умову прокладання проводів і кабелів:
	<br>
	<select  id="K1">
		<optgroup label="Поправочний коєфіцієнт на умову прокладання проводів і кабелів при розрахунковій температурі середовища +15 градусів цельсія і фактичній температурі середовища +20 градусів цельсія">
			<option value="0.96">0.96</option>
		<optgroup label="Поправочний коєфіцієнт на умову прокладання проводів і кабелів при розрахунковій температурі середовища +25 градусів цельсія і фактичній температурі середовища +20 градусів цельсія">
			<option value="1.04">1.04</option>
		</optgroup>
	</select>
	<br><br>К2 = поправочний коєфіцієнт на кількість працюючих проводів і кабелів, які прокладені разом у землі, у трубах і без труб:
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
		   </p>
   		<p>
			   <button id="generate_formula14">Згенерувати формулу</button>
		   </p>
   		<p>
			   <button  id="copyred_formula14" disabled="true">Скопіювати формулу</button>
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

	Ір, А = розрахунковий струм навантаження:
<br><input  type="number" id="IR">
	<p id="empty_formula15">

   	</p>
      <br><br>
 
   		<p>
			   <button id="but_formula15">Вирахувати струм плавкої вставки, Іпік/2</button>
		   </p>
   		<p>
			   <button id="generate_formula15">Згенерувати формулу</button>
		   </p>
   		<p>
			   <button  id="copyred_formula15" disabled="true">Скопіювати формулу</button>
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
	Рн, Вт = вкажіть потужність електродвигуна:
<br><input  type="number" id="PN">
	<p id="empty_formula16">

   	</p>
      <br><br>

   		<p>
			   <button id="but_formula16">Обрати автоматичний вимикач</button>
		   </p>
   		<p>
			   <button id="generate_formula16">Згенерувати формулу</button>
		   </p>
   		<p>
			   <button  id="copyred_formula16" disabled="true">Скопіювати формулу</button>
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
<br><br>Ір, А = номінальний робочий струм:
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
<br><br>Ір, А = номінальний робочий струм:
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