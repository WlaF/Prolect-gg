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
		<legend>КРОК 1.5. (ПРОДОВЖЕННЯ) Визначаємо швидкість vn, м/хв., головного руху різання, що допускається ріжучими властивостями свердла за формулою (4) з [2, с. 435]</legend>
		<p>
   		<br>
   		$$
			\pmb{\left(\frac{{Cv}⋅{D^{qv}}}{{T^{mv}}⋅{S^{yv}}}\right)⋅{Kv}}
		$$
   	</p> 
		<br>Коефіцієнт у формулі швидкості різання, яка допускається ріжучими властивостями свердла, Cv:
  
   		<br><select  id="Cv">
   			<optgroup label="Обробка матеріалу сталь конструкційна з межою міцності 750 Мпа шляхлом свердління, де матеріал ріжучого інструмента - Р18 при умовах обробки менше 0,2 мм/об">
   				<option value="7.0">7.0</option>
   			<optgroup label="Обробка матеріалу сталь конструкційна з межою міцності 750 Мпа шляхлом свердління, де матеріал ріжучого інструмента - Р18 при умовах обробки більше 0,2 мм/об">
   				<option value="9.8">9.8</option>
   			</optgroup>
   		</select>
   		<br>
   		<br>Показник степені у формулі швидкості різання, яка допускається ріжучими властивостями свердла, qv:
   		<br><select  id="Qv">
   			<optgroup label="Обробка матеріалу сталь конструкційна з межою міцності 750 Мпа шляхлом свердління, де матеріал ріжучого інструмента - Р18 при умовах обробки менше 0,2 мм/об">
   				<option value="0.4">0.4</option>
   			<optgroup label="Обробка матеріалу сталь конструкційна з межою міцності 750 Мпа шляхлом свердління, де матеріал ріжучого інструмента - Р18 при умовах обробкибільше 0,2 мм/об">
  				<option value="0.4">0.4</option>
   			</optgroup>
   		</select>
   		<br>
   		<br>Показник степені у формулі швидкості різання, яка допускається ріжучими властивостями свердла, mv:
   		<br><select  id="Mv">
   			<optgroup label="Обробка матеріалу сталь конструкційна з межою міцності 750 Мпа шляхлом свердління, де матеріал ріжучого інструмента - Р18 при умовах обробки менше 0,2 мм/об">
   				<option value="0.2">0.2</option>
   			<optgroup label="Обробка матеріалу сталь конструкційна з межою міцності 750 Мпа шляхлом свердління, де матеріал ріжучого інструмента - Р18 при умовах обробкибільше 0,2 мм/об">
   				<option value="0.2">0.2</option>
   			</optgroup>
   		</select>
   		<br>
   		<br>Показник степені у формулі швидкості різання, яка допускається ріжучими властивостями свердла, yv:
   		<br><select  id="Yv">
   			<optgroup label="Обробка матеріалу сталь конструкційна з межою міцності 750 Мпа шляхлом свердління, де матеріал ріжучого інструмента - Р18 при умовах обробки менше 0,2 мм/об">
   				<option value="0.7">0.7</option>
   			<optgroup label="Обробка матеріалу сталь конструкційна з межою міцності 750 Мпа шляхлом свердління, де матеріал ріжучого інструмента - Р18 при умовах обробкибільше 0,2 мм/об">
   				<option value="0.5">0.5</option>
   			</optgroup>
   		</select>
   		<br>
  	 <br>Діаметр ріжучого інструменту D, мм:
      <br><input  type="number" id="D">
   		<br><br>Подача S0, мм/об:
   		<br><input  type="number" id="So">     
   		<br><br>Стійкість ріжучого інструменту T, хв при обробці сталі конструкційної і стального лиття матеріалом ріжучої частини інструменту - швидкоріжуча сталь шляхом свердління і розсвердлювання:
   		<br>
   		<select  id="T"> 
   			<optgroup label="Стійкість ріжучого інструменту при обробці сталі конструкційної і стального лиття матеріалом ріжучої частини інструменту - швидкоріжуча сталь шляхом свердління і розсвердлювання">
   				<option value="15">15</option>
   			<optgroup label="Стійкість ріжучого інструменту діаметорм від 6 до 10 мм">
   				<option value="25">25</option>
   			<optgroup label="Стійкість ріжучого інструменту діаметорм від 11 до 20 мм">
   				<option value="45">45</option>
   			<optgroup label="Стійкість ріжучого інструменту діаметорм від 21 до 30 мм">
   				<option value="50">50</option>
   			<optgroup label="Стійкість ріжучого інструменту діаметорм від 31 до 40 мм">
   				<option value="70">70</option>
  			<optgroup label="Стійкість ріжучого інструменту діаметорм від 41 до 50 мм">
   				<option value="90">90</option>
   			<optgroup label="Стійкість ріжучого інструменту діаметорм від 51 до 60 мм">
  				<option value="110">110</option>
  			</optgroup>
  		</select>
  		<br>
  		<br>Поправочний коефіцієнт, Kv, який враховує вплив механічних властивостей оброблювального матеріалу на швидкість різання:<br><input  type="number" id="Kv">  
  		<p id="empty_formula5">

   	</p>
    <br>
    <br>
   	<p>
   		<button id="but_formula5">Вирахувати швидкість головного руху різання, що допускається ріжучими властивостями свердла v, мм/хв</button>
   		<button id="generate_formula5">Згенерувати формулу</button>
   		<button  id="copyred_formula5" disabled="true" onclick="copyToClipboard5('#empty_formula5')">Скопіювати формулу</button><span id="show5">Скопійовано!</span>
   	</p>
   	<p id="res_formula5">
   		
   	</p>
	</fieldset>
  <br>
	<fieldset>
		<legend>КРОК 1.6. Вираховуємо частоту обертання шпинделя, n, хв-1, що відповідає знайденій швидкості головного руху різання за формулою (7) з [2, с. 169]:</legend>
		<p>

   		<br>
   		$$
			\pmb{\frac{1000⋅V}{3.14⋅D}}
		$$
   	</p> 
		Діаметр ріжучого інструменту D, мм:
		<br><input  type="number" id="D2">
    <br>
		<br>Швидкість головного руху різання, що допускається ріжучими властивостями свердла v, м/хв:
		<br><input  type="number" id="V">
		<p id="empty_formula6">

   	</p>
    <br>
    <br>
   	<p>
   		<button id="but_formula6">Вирахувати частоту обертання шпинделя, що відповідає знайденій швидкості головного руху різання n, хв</button>
   		<button id="generate_formula6">Згенерувати формулу</button>
   		<button  id="copyred_formula6" disabled="true" onclick="copyToClipboard6('#empty_formula6')">Скопіювати формулу</button><span id="show6">Скопійовано!</span>
   	</p>
   	<p id="res_formula6">
   		
   	</p>
	</fieldset>





 </div>




    <?php 

include 'footer.php';



 ?>
</body>
</html>