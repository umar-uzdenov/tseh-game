# let post = window.post
let telInvalid = false
extend tag element

	def submit
		unless order.telIsValid
			telInvalid = true
			return false
		return false if order.items.length == 0

		telInvalid = false
		let data = order.data
		order.items = []

		# @ts-expect-error
		let result = await post "/order", data

		if result.success
			window.alert "Ваш заказ принят, вам позвонит оператор для подтверждения заказа"
			order.total = 0
			return true
		else
			order.items = data.items
			return false

tag submit-form

	<self>
		<div>
			<input .invalid=telInvalid bind=order.tel @input=(telInvalid = false)
				placeholder="Ваш номер для подтверждения заказа">
		<div>
			<textarea rows=3 placeholder="Ваш адрес, если хотите доставку" bind=order.address>
		# <button @click=submit> show ? "Заказать" : "Оформить заказ"
	css d:vflex g:16px w:100%
		div d:vflex g:8px w:100%
			input p:12px h:56px fs: 24px bg:rgba(0, 0, 0, 0.5) c:white
				::placeholder c:white
			textarea p:12px h:128px fs:24px bg:rgba(0, 0, 0, 0.5) c:white
				::placeholder c:white
			.invalid bxs: 0 0 2px 2px red5
		button p:8px 20px b:none fw:bold bg:yellow3 @active:yellow