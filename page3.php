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
		<legend>КРОК 1.4. Здійснюємо перевірку виконання умови за формулою (3) з [2, с. 168]</legend>
		<br>Максимальне значення осьової складової сили різання, допустимої механізмом подачі верстата Рmax, Н
 		<br><select>
  				<option>Рmax (7 000 Н) у верстатів: 2К52, 2К522</option>
  				<option>Рmax (9 000 Н) у верстатів: 2Н122, 2Г125, 2Н125</option>
  				<option>Рmax (15 000 Н) у верстатів: 2Н135</option>
  				<option>Рmax (16 000 Н) у верстатів: 2А53У</option>
  				<option>Рmax (20 000 Н) у верстатів: 255, 2055, 2Н55, 2А55, 2М55, 2А554</option>
  				<option>Рmax (23 500 Н) у верстатів: 2Н150</option>
  				<option>Рmax (32 000 Н) у верстатів: 2М57</option>
			</select>
	</fieldset>
  <br>
	<fieldset>
		<legend>КРОК 1.5. Визначаємо швидкість vn м/хв., головного руху різання, що допускається ріжучими властивостями свердла за формулою (4) з [2, с. 435]</legend>
		<br>Передумовою визначення швидкості різання vn м/хв., є розрахунок поправочного коефіцієнта на швидкість головного руху різання kv.
	<p>
		<p>
   		<br>
   		$$
			\pmb{{Cm}⋅\left(\frac{75}{sigma}\right)^{Nv}}
		$$
   	</p>
	<br>Вираховування "першого" поправочного коефіцієнта Kmv 
       Коефіцієнт См, що враховує групу сталі:
        <br><select  id="Cm">
        	<optgroup label="Оброблювальний матеріал - cталь вуглеродиста, cталь нікелева, cталь хромиста">
        		<option value="1.0">См=1.0</option>
        	<optgroup label="Оброблювальний матеріал - cталь автоматна">
        		<option value="1.2">См=1.2</option>
        	<optgroup label="Оброблювальний матеріал - cталь хромонікелева">
        		<option value="0.9">См=0.9</option>
        	</optgroup>
        </select> 

 		<p>
 			<br>
        Показник степені у формулі вираховування поправочного коефіцієнта при операції свердління і розсвердлювання, nv:
        <br><select id="Nv">
        	<optgroup label="Оброблювальний матеріал - cталь вуглеродиста, cталь автоматна, cталь нікелева, cталь хромиста, cталь хромонікелева">
        		<option value="0.9">nv=0.9</option>
        	</optgroup>
        </select>
        </p> 

        <br>Межа міцності матеріалу заготовки, сігма, МПа: 
        <br><input type="number" id="sigma">

<p id="empty_formula3">

   	</p>
    <br><br>
   	<p>
   		<button id="but_formula3">Вирахувати поправочний коефіцієнт, Kmv, на швидкість головного руху різання</button>
   		<button id="generate_formula3">Згенерувати формулу</button>
   		<button  id="copyred_formula3" disabled="true" onclick="copyToClipboard3('#empty_formula3')">Скопіювати формулу</button><span id="show3">Скопійовано!</span>
   	</p>
   	<p id="res_formula3">
   		
   	</p>

   	<p>
   		<br>Вираховування поправочних коефіцієнтів Kuv,Klv, які враховують відповідно марку інструментального матеріалу та вплив глибини оброблювального отвору
   		<p>
   		<br>
   		$$
			\pmb{{Kuv}⋅{Klv}⋅{Kmv}}
		$$
   	</p>  
      <br>Поправочний коефіцієнт Kuv, що враховує марку інструментального матеріалу: 
      	<br><select id="Kuv">
      		<optgroup label="Оброблювальний матеріал">
      			<option value="0.35">Cталь і конструкційне лиття Т5К12В, Kuv=0.35</option>
      		<optgroup label="Оброблювальний матеріал">
      			<option value="0.65">Cталь і конструкційне лиття Т5К10, Kuv=0.65</option>
      		<optgroup label="Оброблювальний матеріал">
      			<option value="0.8">Cталь і конструкційне лиття Т14К8, Kuv=0.8</option>
      		<optgroup label="Оброблювальний матеріал">
      			<option value="1.0">Cталь і конструкційне лиття Т15К6, Kuv=1.0</option>
      		<optgroup label="Оброблювальний матеріал">
      			<option value="1.15">Cталь і конструкційне лиття Т15К6, Kuv=1.15</option>
      		<optgroup label="Оброблювальний матеріал">
      			<option value="1.4">Cталь і конструкційне лиття Т30К4, Kuv=1.4</option>
      		<optgroup label="Оброблювальний матеріал - ">
      			<option value="0.4">Cталь і конструкційне лиття ВК8, Kuv=0.4</option>
      		</optgroup>
      </select>
      <br>
      <br>Поправочний коефіцієнт Klv, на швидкість різання, що враховує вплив глибини оброблювального отвору: 
      		<br><select  id="Klv">
      			<optgroup label="Глибина оброблювального отвору у діаметрах - 3D">
      				<option value="1.0">Klv=1.0</option>
      			<optgroup label="Глибина оброблювального отвору у діаметрах - 4D">
      				<option value="0.85">Klv=0.85</option>
      			<optgroup label="Глибина оброблювального отвору у діаметрах - 5D">
      				<option value="0.75">Klv=0.75</option>
      			<optgroup label="Глибина оброблювального отвору у діаметрах - 6D">
      				<option value="0.7">Klv=0.7</option>
      			<optgroup label="Глибина оброблювального отвору у діаметрах - 8D">
      				<option value="0.6">Klv=0.6</option>
      			<optgroup label="Глибина оброблювального отвору у діаметрах - більше 8D">
      				<option value="1.0">Klv=1.0</option>
      			</optgroup>
      		</select>
          <br>
      <br>Поправочний коефіцієнт Kmv, на швидкість головного руху різання: 
      <br><input  id="Kmv" type="number">
   	</p>
   	<p id="empty_formula4">

   	</p>
    <br>
   	<p>
   		<button id="but_formula4">Вирахувати поправочний коефіцієнт, Kv, на швидкість головного руху різання</button>
   		<button id="generate_formula4">Згенерувати формулу</button>
   		<button  id="copyred_formula4" disabled="true" onclick="copyToClipboard4('#empty_formula4')">Скопіювати формулу</button><span id="show4">Скопійовано!</span>
   	</p>
   	<p id="res_formula4">
   		
   	</p>
	</fieldset>



 </div>






    <?php 

include 'footer.php';



 ?>
</body>
</html>