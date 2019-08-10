const readline = require('readline')
const chalk = require('chalk')

const error = chalk.bold.red;
const warning = chalk.bold.yellow
const success = chalk.bold.green
const whats = chalk.bold.white

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const begin = rl.question(whats('JOGAR?') + '\n1.SIM\n2.NÃO\n', res => {
	if(res === '1'){
		game()
	}else if(res === '2'){
		rl.close()
	}else{
		console.log(whats('JOGAR?') + '\n1.SIM\n2.NÃO\n')
		console.log(warning('Porfavor digite 1 ou 2.'))
		jogarOuNao()
	}
})


function sair(){
	console.log('Até a poxima.')
	return rl.close()
}

function jogarOuNao() {
	rl.question(whats('Ainda quer jogar?') + '\n1.SIM\n2.NÃO\n', res3 => {
		if(res3 === '1'){
			game()
		}else if(res3 === '2'){
			sair()
		}else{
			console.log(warning('Porfavor digite 1 ou 2.'))
			jogarOuNao()
		}
		return ''
	})
}

const game = () =>{ 
	rl.question(whats('Qual você escolhe?')+ '\n1.PEDRA\n2.PAPEL\n3.TESOURA\n', res2 => {
		const options = {
				1: 'Pedra',
				2: 'Papel',
				3: 'Tesoura'
			}

			let resUser = options[res2]
			let resCPU = options[Math.round(Math.random() * 2) + 1]
			var placar = ''


			if(resUser === 'Pedra' && resCPU === 'Tesoura'){
				placar = success('VOCÊ GANHOU!') + '\nVocê: '+ resUser + ' X CPU: ' + resCPU
			}else if(resUser === 'Pedra' && resCPU === 'Papel'){
				placar = error('VOCÊ PERDEU!')+ '\nVocê: ' + resUser + ' X CPU: ' + resCPU
			}else if(resUser === 'Pedra' && resCPU === 'Pedra'){
				placar = warning('EMPATOU!')+ '\nVocê: '+  resUser + ' X CPU: ' + resCPU
			}else if(resUser === 'Papel' && resCPU === 'Pedra'){
				placar = success('VOCÊ GANHOU!') + '\nVocê: '+ resUser + ' X CPU: ' + resCPU
			}else if(resUser === 'Papel' && resCPU === 'Tesoura'){
				placar = error('VOCÊ PERDEU!')+ '\nVocê: ' + resUser + ' X CPU: ' + resCPU
			}else if(resUser === 'Papel' && resCPU === 'Papel'){
				placar = warning('EMPATOU!')+ '\nVocê: '+  resUser + ' X CPU: ' + resCPU
			}else if(resUser === 'Tesoura' && resCPU === 'Papel'){
				placar = success('VOCÊ GANHOU!') + '\nVocê: '+ resUser + ' X CPU: ' + resCPU
			}else if(resUser === 'Tesoura' && resCPU === 'Pedra'){
				placar = error('VOCÊ PERDEU!')+ '\nVocê: ' + resUser + ' X CPU: ' + resCPU
			}else if(resUser === 'Tesoura' && resCPU === 'Tesoura'){
				placar = warning('EMPATOU!')+ '\nVocê: '+  resUser + ' X CPU: ' + resCPU
			}else{
				console.log(warning('Porfavor digite 1, 2. ou 3'))
				game()
			}

			console.log(placar)
			jogarOuNao()
		
	})
}
