<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
	<link rel="stylesheet" href="style.css">
	<title>Друга сторінка</title>
</head>
<body>
    <?php 

include 'header.php';



 ?>
 <div class="container-sm">
	<br><h3 align="center">Етап 2. Визначення режимів різання</h3>
	<fieldset>
		<legend>
			КРОК 1. Визначення режиму різання.
		</legend>
		<br>КРОК 1.1. Визначаємо подачу обробки у залежності від діаметра ріжучого інструменту, матеріалу який обирається [1, с. 433, табл. 27]. 
		<br>
		<select name="" id="filing">
			<optgroup label="Діаметр ріжучого інструменту D, мм">
        		<option  value="0.75">Діаметр ріжучого інструменту D, 6...10 мм, подача при свердлінні сталі 0.18...0.28 мм/об</option>
  				<option  value="0.75">Діаметр ріжучого інструменту D, 10...25 мм, подача при свердлінні сталі 0.25...0.35 мм/об</option>
				<option  value="0.75">Діаметр ріжучого інструменту D, 15...20 мм, подача при свердлінні сталі 0.34...0.43 мм/об</option>
				<option  value="0.75">Діаметр ріжучого інструменту D, 20...25 мм, подача при свердлінні сталі 0.39...0.47 мм/об</option>
				<option  value="0.75">Діаметр ріжучого інструменту D, 25...30 мм, подача при свердлінні сталі 0.45...0.55 мм/об</option>
				<option  value="0.75">Діаметр ріжучого інструменту D, 30...40 мм, подача при свердлінні сталі 0.55...0.6 мм/об</option>
				<option  value="0.75">Діаметр ріжучого інструменту D, 40...50 мм, подача при свердлінні сталі 0.6...0.65 мм/об</option>
				<option  value="0.75">Діаметр ріжучого інструменту D, 50...60 мм, подача при свердлінні сталі 0.65...0.7 мм/об</option>
   			</optgroup>
		</select>
	<p>
		<br>КРОК 1.2. Коректуємо подачу за технічними характеристиками верстата.
		<br>
		<select  id="Correction">
			<optgroup label="Подача свердління S0, мм/об, за паспортними даними верстата моделі 2А55">
        		<option  value="0.75">Перша ступінь, S0=0.05</option>
        		<option  value="0.75">Друга ступінь, S0=0.07</option>
        		<option  value="0.75">Третя ступін, S0=0.1</option>
        		<option  value="0.75">Четверта ступінь, S0=0.14</option>
        		<option  value="0.75">П'ята ступінь, S0=0.2</option>
        		<option  value="0.75">Шоста ступінь, S0=0.3</option>
        		<option  value="0.75">Сьома ступінь, S0=0.4</option>
        		<option  value="0.75">Восьма ступінь, S0=0.6</option>
        		<option  value="0.75">Дев'ята ступінь, S0=0.8</option>
        		<option  value="0.75">Десята ступінь, S0=1.6</option>
        		<option  value="0.75">Одинадцята ступінь, S0=1.1</option>
        		<option  value="0.75">Дванадцята ступінь, S0=2.2</option>
 			</optgroup>
			<optgroup label="Подача свердління S0, мм/об, за паспортними даними верстата моделі 2Н118">
        		<option  value="0.75">Перша ступінь, S0=0.1</option>
        		<option  value="0.75">Друга ступінь, S0=0.14</option>
        		<option  value="0.75">Третя ступінь, S0=0.2</option>
        		<option  value="0.75">Четверта ступінь, S0=0.28</option>
        		<option  value="0.75">П'ята ступінь, S0=0.4</option>
        		<option  value="0.75">Шоста ступінь, S0=0.56</option>
            </optgroup>
			<optgroup label="Подача свердління S0, мм/об, за паспортними даними верстата моделі 2Г175 М">
        		<option  value="0.75">Перша ступінь, S0=0.05</option>
        		<option  value="0.75">Друга ступінь, S0=0.07</option>
        		<option  value="0.75">Третя ступінь, S0=0.1</option>
        		<option  value="0.75">Четверта ступінь, S0=0.14</option>
        		<option  value="0.75">П'ята ступінь, S0=0.2</option>
        		<option  value="0.75">Шоста ступінь, S0=0.28</option>
        		<option  value="0.75">Сьома ступінь, S0=0.4</option>
        		<option  value="0.75">Восьма ступінь, S0=0.56</option>
        		<option  value="0.75">Дев'ята ступінь, S0=0.8</option>
        		<option  value="0.75">Десята ступінь, S0=1.12</option>
        		<option  value="0.75">Одинадцята ступінь, S0=1.6</option>
            </optgroup>
   		</select>
   	</p>
   	<p>
   		<br>КРОК 1.3. Здійснюємо перевірку прийнятої подачі за осьовою складовою силою різання, Р0, Н з використанням формули (1) із [1, с. 167]. Даний розрахунок передбачає з початку окреме визначення правочного коефіцієнта на осьову складову сили різання Kp, а потім його використання у формулі осьової складової сили різання, Р0. 
		Вираховуємо поправочний коефіцієнт на осьову складову сили різання Kp=Kmp, за формулою (2) із [1, с. 430, табл. 21]: 
   	</p>
   	<p>
   		
   		<br>
   		$$
   			\pmb{\left(\frac{sigma}{75}\right)^{np}}
   		$$
   	</p>	
   	<p>
   		<br>Межа міцності матеріалу заготовки, сігма, МПа:<br><input type="number" name="" id="sigma">
   	</p>
   	<p>
   		<br>Показник степені у формулі осьової складової сили різання:
   		<br><select type="text" id="np">
        	<optgroup label="Показник степені np при оброблювальному матеріалі сталь конструкційна і стальне лиття з 
        межою міцності менше 600 Мпа">
        		<option  value="0.75">Матеріал ріжучої частини інструмента - твердий сплав, np=0.75</option>
        	<optgroup label="Показник степені np при оброблювальному матеріалі сталь конструкційна і стальне лиття з 
        межою міцності менше 600 Мпа">
        		<option name="np" value="0.35">Матеріал ріжучої частини інструмента - швидкоріжуча сталь, np=0.35</option>
        	<optgroup label="Показник степені np при оброблювальному матеріалі сталь конструкційна і стальне лиття з 
        межою міцності менше 600 Мпа">
        		<option  name="np" value="1.35">Матеріал ріжучої частини інструмента - твердий сплав, np=1.35</option>
        	</optgroup>
        </select>
   	</p>
   	<p id="empty_formula1">

   	</p>
   	<br><p>
   		<button id="but_formula1">Вирахувати поправочний коефіцієнт на осьову складову сили різання, Kp</button>
   		<button id="generate_formula1">Згенерувати формулу</button>
   		<button  id="copyred_formula1" disabled="true" onclick="copyToClipboard1('#empty_formula1')">Скопіювати формулу</button><span id="show">Скопійовано!</span>
   	</p>
   	<p id="res_formula1">
   		
   	</p>
    
<p>
   		<br>
   		$$
			\pmb{(9.81⋅{Sr}⋅{D^{Qp}}⋅{{So}^{Yp}})⋅{Kr}}
		$$
   	</p>
   	<p>	
   		<br>Коефіцієнт формули осьової складової сили різання, що залежить від властивостей матеріалу, який обробляється, Cp:
   	<br>
        <select  id="Sr">
        	<optgroup label="Обробка матеріалу сталь конструкційна і стальне лиття з межою міцності 750 Мпа шляхлом свердління">
        		<option value="68">Матеріал ріжучої частини інструмента - швидкоріжуча сталь, Ср=68</option>
        	<optgroup label="Обробка матеріалу сталь конструкційна і стальне лиття з межою міцності 750 Мпа шляхлом розсвердлювання">
        		<option value="37.8">Матеріал ріжучої частини інструмента - швидкоріжуча сталь, Ср=37.8</option>
        	<optgroup label="Обробка матеріалу сталь жаростійка Х18Н9Т шляхлом свердління ">
        		<option value="143">Матеріал ріжучої  частини інструмента - швидкоріжуча сталь, Ср=143</option>
        	</optgroup>
        </select>			
   	</p>		
   	<p>
   		<br>Показник степені формули осьової складової сили різання, що залежить від властивостей матеріалу, який обробляється, qp:
        <br>
        <select  id="Qp">
        	<optgroup label="Обробка матеріалу сталь конструкційна і стальне лиття з межою міцності 750 Мпа шляхлом свердління">
        		<option value="1">Матеріал ріжучої  частини інструмента - швидкоріжуча сталь, qp=1.0</option>
        	<optgroup label="Обробка матеріалу сталь конструкційна і стальне лиття з межою міцності 750 Мпа шляхлом розсвердлювання">
        		<option value="1">Матеріал ріжучої  частини інструмента - швидкоріжуча сталь, qp=1.0</option>
        	<optgroup label="Обробка матеріалу сталь жаростійка Х18Н9Т шляхлом свердління">
        		<option value="1">Матеріал ріжучої  частини інструмента - швидкоріжуча сталь, qp=1.0</option>
        	</optgroup>
        </select>
   	</p>	
   	<p>
   		<br>Показник степені формули осьової складової сили різання, що залежить від властивостей матеріалу, який обробляється, yp:
   		<br>
   		<select  id="Yp">
        	<optgroup label="Обробка матеріалу сталь конструкційна і стальне лиття з межою міцності 750 Мпа шляхлом свердління">
        		<option value="0.7">Матеріал ріжучої  частини інструмента - швидкоріжуча сталь, yp=0.7</option>
        	<optgroup label="Обробка матеріалу сталь конструкційна і стальне лиття з межою міцності 750 Мпа шляхлом розсвердлювання">
        		<option value="0.7">Матеріал ріжучої  частини інструмента - швидкоріжуча сталь, yp=0.7</option>
        	<optgroup label="Обробка матеріалу сталь жаростійка Х18Н9Т шляхлом свердління">
        		<option value="0.7">Матеріал ріжучої  частини інструмента - швидкоріжуча сталь, yp=0.7</option>
        	</optgroup>
        </select>
   	</p>
   	<p>
   		<br>Діаметр ріжучого інструменту D, мм:
      <br><input  type="number" id="D">
        <br><br>Подача S0, мм/об:
        <br><input  type="number" id="So">     
        <br><br>Поправочний коефіцієнт на осьову складову сили різання, Kp:
        <br><input  type="number" id="Kr">
   	</p>
   	</p>
   	<p id="empty_formula2">

   	</p>
   	<br><p>
   		<button id="but_formula2">Вирахувати осьову складову сили різання, Р0, Н</button>
   		<button id="generate_formula2">Згенерувати формулу</button>
   		<button  id="copyred_formula2" disabled="true" onclick="copyToClipboard2('#empty_formula2')">Скопіювати формулу</button><span id="show2">Скопійовано!</span>
   	</p>
   	<p id="res_formula2">
   		
   	</p>
	</fieldset>
	</div>




    <?php 

include 'footer.php';



 ?>

</body>
</html>


