import { nanoid } from 'nanoid'

const dish_list =
	current: "hot_dishes"
	list:
		"hot_dishes": 
			name: "Горячие блюда"
			items: [
				{ id: nanoid(), name: "Жареная курица", price: 1000 }
				{ id: nanoid(), name: "Тушеная говядина", price: 1200 }
				{ id: nanoid(), name: "Грибной суп", price: 800 }
				{ id: nanoid(), name: "Стейк из лосося", price: 1500 }
				{ id: nanoid(), name: "Овощное рагу", price: 750 }
				{ id: nanoid(), name: "Пельмени", price: 900 }
				{ id: nanoid(), name: "Греческий салат", price: 600 }
				{ id: nanoid(), name: "Паста Карбонара", price: 1100 }
				{ id: nanoid(), name: "Пицца Маргарита", price: 950 }
				{ id: nanoid(), name: "Борщ", price: 700 }
				{ id: nanoid(), name: "Сырники", price: 500 }
			]
		"cold_dishes": 
			name: "Холодные блюда"
			items: [
				{ id: nanoid(), name: "Салат Цезарь", price: 800 }
				{ id: nanoid(), name: "Салат с лапшой", price: 700 }
				{ id: nanoid(), name: "Табуле", price: 650 }
				{ id: nanoid(), name: "Греческий салат", price: 750 }
				{ id: nanoid(), name: "Оливье", price: 600 }
				{ id: nanoid(), name: "Винегрет", price: 550 }
				{ id: nanoid(), name: "Салат Щука", price: 900 }
				{ id: nanoid(), name: "Морковь по-корейски", price: 500 }
				{ id: nanoid(), name: "Свекла с чесноком", price: 450 }
				{ id: nanoid(), name: "Фалафель", price: 700 }
				{ id: nanoid(), name: "Хумус", price: 650 }
				{ id: nanoid(), name: "Тунец с огурцом", price: 850 }
			]
		"desserts": 
			name: "Десерты"
			items: [
				{ id: nanoid(), name: "Пахлава", price: 500 }
				{ id: nanoid(), name: "Фруктовый салат", price: 400 }
				{ id: nanoid(), name: "Шакербура", price: 550 }
				{ id: nanoid(), name: "Молочный пудинг", price: 350 }
				{ id: nanoid(), name: "Рахат-лукум", price: 300 }
				{ id: nanoid(), name: "Чак-чак", price: 600 }
				{ id: nanoid(), name: "Халва", price: 250 }
				{ id: nanoid(), name: "Щербет", price: 400 }
				{ id: nanoid(), name: "Баклава", price: 500 }
				{ id: nanoid(), name: "Гурабье", price: 450 }
				{ id: nanoid(), name: "Финиковый рулет", price: 700 }
			]
		"hot_drinks": 
			name: "Горячие напитки"
			items: [
				{ id: nanoid(), name: "Турецкий кофе", price: 300 }
				{ id: nanoid(), name: "Зеленый чай", price: 200 }
				{ id: nanoid(), name: "Арабский кофе", price: 350 }
				{ id: nanoid(), name: "Чай каркаде", price: 250 }
				{ id: nanoid(), name: "Имбирный чай", price: 280 }
				{ id: nanoid(), name: "Мятный чай", price: 220 }
				{ id: nanoid(), name: "Шафрановый чай", price: 400 }
				{ id: nanoid(), name: "Кофе по-йеменски", price: 320 }
				{ id: nanoid(), name: "Чай масала", price: 270 }
				{ id: nanoid(), name: "Лимонный имбирь", price: 230 }
				{ id: nanoid(), name: "Ячменный кофе", price: 180 }
				{ id: nanoid(), name: "Ромашковый чай", price: 210 }
			]
		"cold_drinks": 
			name: "Холодные напитки"
			items: [
				{ id: nanoid(), name: "Мятный лимонад", price: 300 }
				{ id: nanoid(), name: "Холодный чай", price: 200 }
				{ id: nanoid(), name: "Апельсиновый сок", price: 350 }
				{ id: nanoid(), name: "Гранатовый нектар", price: 400 }
				{ id: nanoid(), name: "Яблочный фреш", price: 320 }
				{ id: nanoid(), name: "Лаймовая газировка", price: 280 }
				{ id: nanoid(), name: "Малиновый морс", price: 250 }
				{ id: nanoid(), name: "Клубный коктейль", price: 450 } # Non-alcoholic
				{ id: nanoid(), name: "Имбирный эль", price: 380 }
				{ id: nanoid(), name: "Молочный коктейль", price: 420 }
				{ id: nanoid(), name: "Кокосовая вода", price: 370 }
				{ id: nanoid(), name: "Арбузный смузи", price: 390 }
			]

import cartSvg from './shopping-cart-white-icon.svg'

let	categories_show = false
let dishes_show = true
let details_show = false

def show_categories
	if categories_show or details_show
		categories_show = false
		dishes_show = true
		details_show = false
	else
		categories_show = true
		dishes_show = false
		details_show = false


def show_dishes
	categories_show = false
	dishes_show = true
	details_show = false

def show_details
	if details_show
		categories_show = false
		dishes_show = true
		details_show = false
	else
		categories_show = false
		dishes_show = false
		details_show = true


let categoriesHeight = Object.keys(dish_list.list).length * (56 + 1) + 1 + 32 * 2
let itemsHeight = categoriesHeight # tmp


tag dishes
	def submitAndShowMain
		let result = await submit!
		if result
			show_categories!
	<self.fsc [fs:20px]>
		<category-list>
		<item-list>
		<order-view>
		<details-view>
		<div.cart.flc [w:40% g:12px] @click=show_details>
			<img src=cartSvg [w:24px h:24px pos:relative t:-4px]>
			order.total + " ₽"
		if categories_show or dishes_show
			<.menu @click=show_categories>
				dish_list.list[dish_list.current].name
		if details_show
			<.menu [c:white] @click=submitAndShowMain> "Заказать"
	
	css
		pos:fixed h:64px l:16px r:16px b:16px rd:32px
		p:0 32px bg:rgba(0, 0, 0, .5) c:white
		.menu w:60% d:flex jc:flex-end ai:center


tag category-list
	def setCategory key
		dish_list.current = key
		show_dishes!

	<self.vtc [h:{categoriesHeight}px b:96px]
		[l:calc(16px - 100vw) r:calc(16px + 100vw)]=!categories_show> # hide for now
		for own key, category of dish_list.list
			<div [w:100% h:1px bg:#ccc]>
			<button [c:white fs:20px h:56px] @click=(setCategory key)> category.name
		<div [w:100% h:1px bg:#ccc]>

	css pos:fixed l:16px r:16px p:32px
		bg:rgba(0, 0, 0, .5) c:white

tag item-list
	def findItemInOrder dish
		order.items.find do $1.id == dish.id

	<self.vtc [h:calc(100vh - 96px - 64px) b:96px]
		[l:calc(16px - 100vw) r:calc(16px + 100vw)]=!dishes_show> # hide for now
		for dish, index in dish_list.list[dish_list.current].items
			<div.fsc [w:100% h:72px mih:72px]>
				<div.vtc [p:0 16px w:100% mih:72px]>
					<div.flc [w:100% mih:36px]> dish.name
					<price dish=dish>
				<button
					[c:gray4]
					[c:red5]=(order.items.find do $1.id === dish.id)
					@click=(order.rem dish)> "\u2212"
				<button [c:green4] @click=(order.add dish)> "+"
				css button c:white fs:60px w:72px h:72px
			if index != dish_list.list[dish_list.current].items.length - 1 # hack for last el
				<div [w:100% mih:1px bg:#ccc]>
	css
		pos:fixed b:96px l:16px r:16px o:1 bg:red ofy:scroll
		bg:rgba(0, 0, 0, .5) c:white

tag price
	prop dish = {}
	get item do order.items.find do $1.id === dish..id
	<self [w:100% mih:36px]>
		<div.fsc [w:100% mih:36px]>
			if item
				<div.fcc [mih:36px]> "{item.price} ₽ \u00D7 {item.quantity} ="
				<div.fcc [mih:36px]> item.price * item.quantity + " ₽"
			else
				<div.fcc [mih:36px]> "{dish.price} ₽"
				<div> " "

tag order-view
	<self.vtc
		[h:calc(100vh - 96px - 64px - 200px - 16px) pos:fixed b:calc(96px + 200px + 16px) l:16px r:16px]
		[l:calc(16px - 100vw) r:calc(16px + 100vw)]=!details_show
		[bg:rgba(0, 0, 0, .5) c:white]>

		<h2.fcc [mih:64px]> "Ваш заказ"
		<ul.vtc [w:100% mih:calc(100vh - {categoriesHeight}px - 232px) ofy:scroll]>
			for dish, index in order.items
				<div [w:100% mih:1px bg:#ccc]>
				<div.fsc [w:100% h:72px mih:72px]>
					<div.vtc [p:0 16px w:100% mih:72px]>
						<div.flc [w:100% mih:36px]> dish.name
						<price dish=dish>
					<button
						[c:gray4]
						[c:red5]=(order.items.find do $1.id === dish.id)
						@click=(order.rem dish)> "\u2212"
					<button [c:green4] @click=(order.add dish)> "+"
					css button c:white fs:60px w:72px h:72px

tag details-view
	<self.vtc
		[h:200px pos:fixed l:16px r:16px b:96px]
		[l:calc(16px - 100vw) r:calc(16px + 100vw)]=!details_show
		[c:white]>
		<submit-form>


					

css
	.fsc d:flex jc:space-between ai:center
	.flc d:flex jc:flex-start ai:center
	.fcc d:flex jc:center ai:center
	.vtc d:flex fld:column jc:flex-start ai:center
