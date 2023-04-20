const options = {
	bubbles: false,
	bomb: false,
	bathCandle: false,
	bathMusic: false,
	book: false,
	mask: false,
	sauna: false,
	hand: false,
	foot: false,
	massageCandle: false,
	massageMusic: false
}

const toggleCheckout = () => {
	document.getElementById('checkout').style.display = document.getElementById('checkout').style.display === 'none' ? '' : 'none'

	let choices = []
	if (options.bubbles) choices.push(`<p>Bubbles</p>`)
	if (options.bomb) choices.push(`<p>Bath Bomb</p>`)
	if (options.bathCandle) choices.push(`<p>Candle</p>`)
	if (options.bathMusic) choices.push(`<p>Music/Podcast</p>`)
	if (options.book) choices.push(`<p>Book</p>`)
	if (options.mask) choices.push(`<p>Face Mask</p>`)
	if (options.sauna) choices.push(`<p>Sauna</p>`)
	document.getElementById('bathAddons').innerHTML = choices.join('')

	choices = []
	if (options.hand) choices.push(`<p>Hand Massage</p>`)
	if (options.foot) choices.push(`<p>Foot Massage</p>`)
	if (options.massageCandle) choices.push(`<p>Candle</p>`)
	if (options.massageMusic) choices.push(`<p>Music/Podcast</p>`)
	document.getElementById('massageAddons').innerHTML = choices.join('')
}

const showSubmissionPage = () => {
	document.getElementById('checkout').innerHTML = `<h1>You're all set!</h1>
	<p>Please make your way upstairs to select your preferred candles, music, and face mask if you selected those addons.</p>`
}

const initialPageLoad = () => {
	document.getElementById('checkout').style.display = 'none'

	document.getElementById('welcome').scrollIntoView({ behavior: 'smooth' })

	document.getElementById('goToCheckout').addEventListener('click', toggleCheckout)

	document.getElementById('checkoutBtn').addEventListener('click', showSubmissionPage)

	document.getElementById('menu').addEventListener('click', () => {
		document.getElementById('store').scrollIntoView({ behavior: 'smooth' })
	})

	const optionIds = ['bubbles', 'bomb', 'bathCandle', 'bathMusic', 'book', 'mask', 'sauna', 'hand', 'foot', 'massageCandle', 'massageMusic']
	optionIds.forEach(id => {
		const el = document.getElementById(id)
		el.addEventListener('click', () => {
			if (options[id]) {
				options[id] = false
				el.style.backgroundColor = ''
			} else {
				options[id] = true
				el.style.backgroundColor = 'pink'
			}
		})
	})
}



initialPageLoad()