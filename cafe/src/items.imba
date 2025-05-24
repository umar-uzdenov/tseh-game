import { nanoid } from 'nanoid';

const menu =
	"hot_dishes": [
		{ id: nanoid(), name: "Жареная курица", price: 1000 }
		{ id: nanoid(), name: "Тушеная говядина", price: 1200 }
	]
	"cold_dishes": [
		{ id: nanoid(), name: "Салат Цезарь", price: 800 }
		{ id: nanoid(), name: "Салат с лапшой", price: 700 }
	]
	"desserts": [
		{ id: nanoid(), name: "Пахлава", price: 500 }
		{ id: nanoid(), name: "Фруктовый салат", price: 400 }
	]
	"hot_drinks": [
		{ id: nanoid(), name: "Турецкий кофе", price: 300 }
		{ id: nanoid(), name: "Зеленый чай", price: 200 }
	]
	"cold_drinks": [
		{ id: nanoid(), name: "Мятный лимонад", price: 300 }
		{ id: nanoid(), name: "Холодный чай", price: 200 }
	]

tag items
	<self> if current then for item in menu[current]
		<div.item>
			<div>
				<span> item.name
				<span [fw:700]> item.price + " ₽"
			<button @click=(order.add item)> "Добавить"

	css d:vflex  g:8px
		.item h:40px bg:teal3 d:flex jc:space-between ai:center
			div p:8px d:flex jc:space-between w:100%
			button h:40px px:8px c:white b:none bg:teal6 @active:teal7