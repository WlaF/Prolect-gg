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
	<fieldset>
		<legend>КРОК 1.9. Вираховуємо потужність, використовувану для різання Nріз,кВт, за формулою (10) з [1, с. 437]</legend>
		<p>
   		<br>
   		$$
			\pmb{\frac{{M⋅nd}}{975}}
		$$
   	</p>
	   М,Нм = крутний момент від сил опору різання при свердлінн:<br><input  type="number" id="M">
		<br><br>nд,м/хв = дійсна швидкість головного руху різання:<br><input  type="number" id="Nd">
		<br>
		<p id="empty_formula9">

   		</p>
         <br>

   		<p>
			   <button id="but_formula9">Вирахувати потужність, яка витрачається на різання N, кВт</button>
		   </p>
   		<p>
			   <button id="generate_formula9">Згенерувати формулу</button>
		   </p>
   		<p>
			   <button  id="copyred_formula9" disabled="true">Скопіювати формулу</button>
		   </p>

   	<p id="res_formula9">
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
	   Nріз,кВт = потужність, використовувана для різання:
	<br><input  type="number" id="Nd2">
	<br>
	<p id="empty_formula10">

   		</p>
         <br>
  
   		<p>
			   <button id="but_formula10">Вирахувати достатність потужності електродвигуна головного привода, яка витрачається на різання N, кВт</button>
		   </p>
   		<p>
			   <button id="generate_formula10">Згенерувати формулу</button>
		   </p>
   		<p>
			   <button  id="copyred_formula10" disabled="true">Скопіювати формулу</button>
		   </p>
  

   	<p id="res_formula10">
	   </p>
	</fieldset>
  </div>
	  <?php 

include 'footer.php';



 ?>
</body>
</html>