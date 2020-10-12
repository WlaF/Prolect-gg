<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
	<link rel="stylesheet" href="style.css">
	<title>Document</title>
</head>

<body>
	<?php

	include 'header.php';



	?>
	<div class="container-sm">
		<p><b>ІІІ. ВИРАХОВУВАННЯ ПОТУЖНОСТІ ЕЛЕКТРОДВИГУНА ПРИВОДУ ПОДАЧІ СВЕРДЛИЛЬНОГО ВЕРСТАТА</p></b>
		<br>
		<fieldset>
			<legend> КРОК 1. Вираховування потужності електродвигуна приводу подачі свердлильного верстата</legend>
			<p>
				<br>
				$$
				\pmb{\frac{{Vper}⋅{Ft}}{{14.4}⋅{0.001}}}
				$$
			</p>
			Ft ,кН = найбільша допустима сила подачі:
			<br>
			<select id="Ft">
				<optgroup label="Найбільша допустима сила подачі верстатів моделі 2С132, ">
					<option value="1.5">1,5 кН</option>
				<optgroup label="Найбільша допустима сила подачі верстатів моделі 2Е52, 2Н118">
					<option value="5000">5 кН</option>
				<optgroup label="Найбільша допустима сила подачі верстата моделі 2К52, 2К522">
					<option value="7000">7 кН</option>
				<optgroup label="Найбільша допустима сила подачі верстатів моделі 2Н122, 2Г125, 2Н125">
					<option value="9000">9 кН</option>
				<optgroup label="Найбільша допустима сила подачі верстата моделі 2Л53У">
					<option value="10000">10 кН</option>
				<optgroup label="Найбільша допустима сила подачі верстата моделі ГС545">
					<option value="12000">12 кН</option>
				<optgroup label="Найбільша допустима сила подачі верстата моделі 2Н135">
					<option value="15000">15 кН</option>
				<optgroup label="Найбільша допустима сила подачі верстата моделі 2А53У">
					<option value="16000">16 кН</option>
				<optgroup label="Найбільша допустима сила подачі верстатів моделей 255, 2055, 2Н55, 2а55, 2М55, 2А554">
					<option value="20000">20 кН</option>
				<optgroup label="Найбільша допустима сила подачі верстата моделі 2Н150, 2C150">
					<option value="23500">23.5 кН</option>
				<optgroup label="Найбільша допустима сила подачі верстата моделі 2М57">
					<option value="32000">32 кН</option>
				<optgroup label="Найбільша допустима сила подачі верстата моделі 2Г175Б">
					<option value="40000">40 кН</option>
				</optgroup>
			</select>
			<br>
			<br>Vper, мм/хв = швидкість переміщення:
			<br><input type="number" id="Vper" placeholder="У верстата 2А55, vper=1.4" />
			<p id="empty_formula11">

			</p>
			<br><br>

			<p>
				<button id="but_formula11">Вирахувати потужність електродвигуна приводу подачі верстата</button>
			</p>
			<p>
				<button id="generate_formula11">Згенерувати формулу</button>
			</p>
			<p>
				<button id="copyred_formula11" disabled="true">Скопіювати формулу</button>
			</p>

			<p id="res_formula11">

			</p>
			<p id="res_formula11_text">

			</p>
		</fieldset>
		<br>
		<p><b>ІV. ВИРАХОВУВАННЯ ПОТУЖНОСТІ ЕЛЕКТРОДВИГУНА НАСОСУ ОХОЛОДЖЕННЯ СВЕРДЛИЛЬНОГО ВЕРСТАТА</p></b>
		<br>
		<fieldset>
			<legend> КРОК 1. Вираховування потужності електродвигуна насосу охолодження свердлильного верстата</legend>
			<p>
				<br>
				$$
				\pmb{\frac{1.1⋅{γ}⋅{Q}⋅{H}}{{3600}⋅{1000}⋅{η}⋅{M}}}
				$$
			</p>
			γ, кг/см3 = густина перекачуваної рідини:
			<br>
			<select id="Gama">
				<optgroup label="Засіб змащувально-охолоджуючий технологічний ЗГВ МР-10">
					<option value="850">850</option>
					<option value="915">915</option>
				</optgroup>
				<optgroup label="Концентрат ЕМ-2">
					<option value="1020">1020</option>
					<option value="1065">1065</option>
				</optgroup>
				<optgroup label="Індустріальне масло">
					<option value="870">І-5А 870</option>
					<option value="880">І-8А 880</option>
				</optgroup>
			</select>
			<br>
			<br>Q, Н/м = продуктивність насосу:
			<br>
			<select id="Q">
				<optgroup label="Продуктивність помпи подачі системи охолодження Х14-22М ">
					<option value="22">Для свердлильних верстатів продуктивність помпи подачі системи охолодження Х14-22М 22 л/хв</option>
				</optgroup>
			</select>
			<br>
			<br>H, м = напір насосу:
			<br>
			<select id="H">
				<optgroup label="Напір помпи подачі системи охолодження Х14-22М ">
					<option value="0.4">Для свердлильних верстатів продуктивність 0.4 кг/см2</option>
				</optgroup>
			</select>
			<br>
			<br>η = коефіцієнт корисної дії насосу:
			<br>
			<select id="KKD">
				<optgroup label="Для відцентрових насосів з тиском більше 39 000 Па ">
					<option value="0.6">0.6</option>
					<option value="0.61">0.61</option>
					<option value="0.62">0.62</option>
					<option value="0.63">0.63</option>
					<option value="0.64">0.64</option>
					<option value="0.65">0.65</option>
					<option value="0.66">0.66</option>
					<option value="0.67">0.67</option>
					<option value="0.68">0.68</option>
					<option value="0.69">0.69</option>
					<option value="0.7">0.7</option>
					<option value="0.71">0.71</option>
					<option value="0.72">0.72</option>
					<option value="0.73">0.73</option>
					<option value="0.74">0.74</option>
					<option value="0.75">0.75</option>
				</optgroup>
			</select>
			<br>
			<br>M = коефіцієнт корисної дії передачі:
			<br>
			<select id="M">
				<optgroup label="При з'єднанні насосу з двигуном ">
					<option value="1">1</option>
				</optgroup>
			</select>
			<p id="empty_formula12">

			</p>
			<br><br>

			<p>
				<button id="but_formula12">Вирахувати потужність електродвигуна насосу охолодження верстата</button>
			</p>
			<p>
				<button id="generate_formula12">Згенерувати формулу</button>
			</p>
			<p>
				<button id="copyred_formula12" disabled="true">Скопіювати формулу</button>
				
			</p>

			<p id="res_formula12">

			</p>
			<p id="res_formula12_text">

			</p>
		</fieldset>
	</div>
	<?php

	include 'footer.php';


	?>
</body>

</html>

