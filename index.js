const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const pergunta1 = 'Você quer jogar?\n1.SIM\n2.NÃO\n'
const pergunta2 = 'Qual você escolhe?\n1.PEDRA\n2.PAPEL\n3.TESOURA\n'

function sair(){
	console.log('Até a poxima.')
	return rl.close()
}

function game(){
	rl.question(pergunta1, resposta1 => {
		
		if(resposta1 === '1'){
			return go()
		}

		if(resposta1 === '2'){
			return sair()
		}

		if(resposta1 !== '1' && resposta1 !== '2'){
			console.log(pergunta1)
			console.log('Porfavor digite 1 ou 2.')
			return game()
		}

	})
}
game()

function jogarOuNao() {
	rl.question('Ainda quer jogar?\n1.SIM\n2.NÃO\n', resposta3 => {
		if(resposta3 === '1'){
			return go()
		}else if(resposta3 === '2'){
			return sair()
		}
	})
}

function go() {
	rl.question(pergunta2, resposta2 => {
		
		const options = {
			1: 'Pedra',
			2: 'Papel',
			3: 'Tesoura'
		}

		let resUser = options[resposta2]
		let resCPU = options[Math.round(Math.random() * 2) + 1]

		function ganhar(){
			return console.log(`Você ganhou! \nVocê: ${resUser} X CPU:${resCPU}`)
		}

		function perder(){
			return console.log(`Você perdeu! \nVocê: ${resUser} X CPU:${resCPU}`)
		}

		function empatar(){
			return console.log(`Empatou! \nVocê: ${resUser} X CPU:${resCPU}`)
		}

		if(resUser === 'Pedra' && resCPU === 'Tesoura'){
			return ganhar() 
		}else if(resUser === '1' && resCPU === 'Papel'){
			return perder()
		}else if(resUser === 'Pedra' && resCPU === 'Pedra'){
			return empatar()
		}
/*
		if(resUser === 'Papel' && resCPU === 'Pedra'){
			return ganhar()
		}else if(resUser === '2' && resCPU === 'Tesoura'){
			return perder()
		}else if(resUser === 'Papel' && resCPU === 'Papel'){
			return empatar()
		}

		if(resUser === 'Tesoura' && resCPU === 'Papel'){
			return ganhar()
		}else if(resUser === 'Tesoura' && resCPU === 'Pedra'){
			return perder()
		}else if(resUser === 'Tesoura' && resCPU === 'Tesoura'){
			return empatar()
		}*/
		
	})

	
}