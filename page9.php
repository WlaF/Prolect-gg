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



<h1>Ця сторінка знаходиться на стадії розробки!</h1>

<div class="content">
	<input type="number" id="num1">
	<br>
	<input type="number" id="num2">
	<p id="empty_for">

   	</p>
   	<br>
   		<p>
			   <button id="but_for">Вирахувати поправочний коефіцієнт на осьову складову сили різання, Kp</button>
		   </p>
   		<p>
			   <button id="generate_for">Згенерувати формулу</button>
		   </p>
   		<p>
			   <button  id="copyred_for" disabled="true">Скопіювати формулу</button><span id="show">Скопійовано!</span>
		   </p>
   	
   	<p id="res_for">
   		
   	</p>

</div>


	   <?php 

include 'footer.php';



 ?>
</body>
</html>