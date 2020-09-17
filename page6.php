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
	<fieldset>
		<legend>КРОК 1.9. Вираховуємо потужність, використовувану для різання Nріз,кВт, за формулою (10) з [1, с. 437]</legend>
		<p>
   		<br>
   		$$
			\pmb{\frac{{M⋅nd}}{975}}
		$$
   	</p>
		Крутний момент від сил опору різання при свердлінні М, Нм:<br><input  type="number" id="M">
		<br><br>Дійсна швидкість головного руху різання nд, м/хв:<br><input  type="number" id="Nd">
		<br>
		<p id="empty_formula9">

   		</p>
         <br>
   		<p>
   		<button id="but_formula9">Вирахувати потужність, яка витрачається на різання N, кВт</button>
   		<button id="generate_formula9">Згенерувати формулу</button>
   		<button  id="copyred_formula9" disabled="true" onclick="copyToClipboard9('#empty_formula9')">Скопіювати формулу</button><span id="show9">Скопійовано!</span>
   	</p>
   	<p id="res_formula9">
   		<!-- $N=$M *$nd /975; -->
   	</p>
	</fieldset>
   <br>
	<fieldset>
	<legend> КРОК 1.10. Перевіряємо, чи достатня потужність верстата. Обробка можлива, якщо виконується умова (11) з [6, с. 170].Інакше, обрати менше значення частоти обертання шпинделя у Кроці 1.6.</legend>
	<p>
   		<br>
   		$$
			\pmb{{Nd}⋅0.8}
		$$
   	</p>
	Потужність, використовувана для різання Nріз,кВт
	<br><input  type="number" id="Nd2">
	<br>
	<p id="empty_formula10">

   		</p>
         <br>
   		<p>
   		<button id="but_formula10">Вирахувати достатність потужності електродвигуна головного привода, яка витрачається на різання N, кВт</button>
   		<button id="generate_formula10">Згенерувати формулу</button>
   		<button  id="copyred_formula10" disabled="true" onclick="copyToClipboard10('#empty_formula10')">Скопіювати формулу</button><span id="show10">Скопійовано!</span>
   	</p>

   	<p id="res_formula10">
   		<!-- $Nshp=$Nd *0.8; -->
	   </p>
	</fieldset>
  </div>
	  <?php 

include 'footer.php';



 ?>
</body>
</html>