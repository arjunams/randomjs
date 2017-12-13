
let btn_ok = document.querySelector('#btn-ok');
let valor_Expressao = document.querySelector('#valorExpressao');
let resultado_expressao = document.querySelector('#resultadoExpressao');

	btn_ok.addEventListener('click', () => {
		//let primeiroValor = document.querySelector('#valor1').value;
		//let segundoValor = document.querySelector('#valor2').value;
		var arrayRandom = valor_Expressao.value.split('-');

		if (arrayRandom){
			console.log(arrayRandom);
			resultado_expressao.innerHTML = getRandom(arrayRandom[0],arrayRandom[1]);
		}
		
		
		
		
		
	});

	function getRandom(min,max){
		min = Math.ceil(min);
		max = Math.floor(max);

		return Math.floor(Math.random() * (max - min +1)) + min;
	}