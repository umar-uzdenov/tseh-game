import { nanoid } from 'nanoid'



const dish_list =
	current: "classic_roll"
	list:
		"salad":
			icon: "🥗"
			img: "salad"
			name: "Салаты"
			items: [
				{ id: nanoid(), name: "Салат Цезарь с курицей", price: 300, size: "250г" }
				{ id: nanoid(), name: "Салат Овощной", price: 320, size: "250г" }
				{ id: nanoid(), name: "Салат Хрустящий Баклажан", price: 420, size: "250г" }
			]
		"soup":
			icon: "🍲"
			img: "soup"
			name: "Супы"
			items: [
				{ id: nanoid(), name: "Лапша куриная", price: 320, size: "250г" }
				{ id: nanoid(), name: "Том Ям с креветками", price: 530, size: "250г" }
			]
		"pasta":
			icon: "🍝"
			name: "Паста"
			img: "pasta"
			items: [
				{ id: nanoid(), name: "Фетучини Том Ям", price: 590, desc: "с креветками и черри" }
				{ id: nanoid(), name: "Фетучини с курицей и грибами", price: 530 }
			]
		"dessert":
			icon: "🍝"
			name: "Десерты"
			img: "dessert"
			items: [
				{ id: nanoid(), name: "Жареное мороженое", price: 350 }
				{ id: nanoid(), name: "Сладкий ролл Минари", price: 380 }
			]
		# "vok": # Пока под систему не подходит, надо уточнить, как вообще заказывается
		# 	name: "Вок Лапша Удон Фунчоза"
		# 	items: [
		# 	]

		"hot_snack":
			icon: "🍟"
			name: "Горячие закуски"
			img: "hot-snack"
			items: [
				{ id: nanoid(), name: "Картофель фри", price: 180, size: "150г" }
				{ id: nanoid(), name: "Айдахо", price: 150, size: "150г" }
				{ id: nanoid(), name: "Наггетсы", price: 190, size: "100г - 6 шт" }
				{ id: nanoid(), name: "Эби Темпура", price: 580, size: "Креветки 5 шт", desc: "Соус спайси" }
				{ id: nanoid(), name: "Запечённые мидии", price: 580, size: "Мидии 5шт", desc: "Соус Спайси, кунжут, унаги соус" }
			]
		"pizza":
			icon: "🍕"
			name: "Пицца"
			img: "pizza"
			items: [
				{ id: nanoid(), name: "Морская пикантная", price: 600, size: "33 см" }
				{ id: nanoid(), name: "Пепперони", price: 560, size: "33 см" }
				{ id: nanoid(), name: "Цезарь с курицей", price: 580, size: "33 см" }
				{ id: nanoid(), name: "Курица - Грибы", price: 550, size: "33 см" }
				{ id: nanoid(), name: "Ветчина - Грибы", price: 720, size: "33 см" }
				{ id: nanoid(), name: "Маргарита", price: 470, size: "33 см" }
				{ id: nanoid(), name: "4 сыра", price: 570, size: "33 см" }
				{ id: nanoid(), name: "Шаурма", price: 600, size: "33 см" }
				{ id: nanoid(), name: "Сладкая", price: 580, size: "33 см" }
			]
		"sauce":
			icon: "🫚"
			name: "Соусы и приправы"
			img: "sauce"
			items: [
				{ id: nanoid(), name: "Спайси соус", price: 100, size: "50г" }
				{ id: nanoid(), name: "Соевый соус", price: 60, size: "50г" }
				{ id: nanoid(), name: "Сырный соус", price: 70, size: "50г" }
				{ id: nanoid(), name: "Соус кетчуп", price: 50, size: "50г" }
				{ id: nanoid(), name: "Соус Чили", price: 70, size: "50г" }
				{ id: nanoid(), name: "Имбирь", price: 40, size: "50г" }
				{ id: nanoid(), name: "Васаби", price: 30, size: "20г" }
			]
		"cold_roll":
			icon: "🍣"
			name: "Холодные роллы"
			img: "cold-roll"
			items: [
				{ id: nanoid(), name: "Филадельфия", price: 380, size: "8 шт", desc: "сыр, огурец, авокадо, лосось" }
				{ id: nanoid(), name: "Филадельфия с угрём", price: 390, size: "8 шт", desc: "сыр, огурец, авокадо, угорь" }
				{ id: nanoid(), name: "Филадельфия MIX", price: 380, size: "8 шт", desc: "сыр, огурец, авокадо, лосось, угорь" }
				{ id: nanoid(), name: "Калифорния в кунжуте", price: 290, size: "8 шт", desc: "краб, огурец, авокадо, кунжут" }
				{ id: nanoid(), name: "Нежный лосось", price: 350, size: "8 шт", desc: "лосось, сыр, авокадо, кунжут" }
				{ id: nanoid(), name: "Сочи", price: 460, size: "8 шт", desc: "сливочный сыр, огурец, кунжут" }
				{ id: nanoid(), name: "Калифорния с крабом", price: 330, size: "8 шт", desc: "краб, огурец, авокадо, масаго" }
				{ id: nanoid(), name: "Калифорния с лососем", price: 350, size: "8 шт", desc: "лосось, огурец, авокадо, масаго" }
				{ id: nanoid(), name: "Калифорния Креветка", price: 370, size: "8 шт", desc: "креветка, огурец, авокадо, масаго" }
				{ id: nanoid(), name: "Ролл Киото", price: 370, size: "8 шт", desc: "угорь, авокадо, сыр, спайси соус" }
				{ id: nanoid(), name: "Ролл Азуми", price: 350, size: "8 шт", desc: "краб, креветка, сыр, спайси соус" }
				{ id: nanoid(), name: "Веган ролл", price: 270, size: "8 шт", desc: "огурец, авокадо, салат айсберг, перец болгарский" }
				{ id: nanoid(), name: "Кисловодск", price: 440, size: "8 шт", desc: "угорь, лосось, сыр сливочный, огурец" }
				{ id: nanoid(), name: "Филадельфия Люкс", price: 470, size: "8 шт", desc: "икра лосося, салат айсберг, перец болгарский, сыр сливочный" }
				{ id: nanoid(), name: "Грин ролл", price: 340, size: "8 шт", desc: "лосось копчёный, сыр, огурец, укроп" }
				{ id: nanoid(), name: "Цезарь", price: 370, size: "8 шт", desc: "айсберг, помидоры, курица, соус цезарь, пармезан" } # почему не салат айсберг? почему помидоры а не помидор?
				{ id: nanoid(), name: "Фила гурме", price: 410, size: "8 шт", desc: "лосось копчёный, сыр сливочный, огурец" }
				{ id: nanoid(), name: "Бонито", price: 390, size: "8 шт", desc: "стружка Тунца, сливочный сыр, огурец, лосось копчёный" }
				{ id: nanoid(), name: "Эби самурай", price: 430, size: "8 шт", desc: "креветка, сыр сливочный, авокадо, икра масаго" } # почему здесь икра, а в других без икры?
				{ id: nanoid(), name: "Сенсей", price: 370, size: "8 шт", desc: "краб, спайси соус, сыр, огурец, масаго" }
			]
		"classic_roll":
			icon: "🍥"
			name: "Классические роллы"
			img: "classic-roll"
			items: [
				{ id: nanoid(), name: "С огурцом", price: 110, size: "6 шт" }
				{ id: nanoid(), name: "С лососем", price: 150, size: "6 шт" }
				{ id: nanoid(), name: "С креветкой", price: 170, size: "6 шт" }
				{ id: nanoid(), name: "С угрём", price: 200, size: "6 шт" }
				{ id: nanoid(), name: "С копчёным лососем", price: 190, size: "6 шт" }
			]
		"baked_roll":
			icon: "🌀"
			name: "Запечённые роллы"
			img: "baked-roll"
			items: [
				{ id: nanoid(), name: "Калифорния гриль", price: 220, size: "8 шт", desc: "краб, огурец, тамаго, масаго, спайси соус" }
				{ id: nanoid(), name: "Филадельфия гриль", price: 390, size: "8 шт", desc: "сыр, огурец, тамаго, лосось, спайси соус" }
				{ id: nanoid(), name: "Филадельфия спешел", price: 420, size: "8 шт", desc: "лосось, краб, тамаго, сырный соус, чили соус" }
				{ id: nanoid(), name: "Сафари", price: 350, size: "8 шт", desc: "сыр, тамаго, краб, спайси соус" }
				{ id: nanoid(), name: "Фараон", price: 380, size: "8 шт", desc: "сыр, тамаго, угорь, краб, спайси соус" }
				{ id: nanoid(), name: "Сакура", price: 360, size: "8 шт", desc: "сыр, огурец, масаго, курица, спайси соус" }
				{ id: nanoid(), name: "Император", price: 370, size: "8 шт", desc: "сыр, огурец, лосось, креветка, сырный соус" }
				{ id: nanoid(), name: "Гурман", price: 350, size: "8 шт", desc: "сыр, огурец, масаго, лосось, креветка, сырный соус" }
				{ id: nanoid(), name: "Токио", price: 350, size: "8 шт", desc: "сыр, огурец, краб, спайси соус, кунжут" }
				{ id: nanoid(), name: "Лас-Вегас", price: 360, size: "8 шт", desc: "сыр, тамаго, краб, спайси соус, кунжут" }
				{ id: nanoid(), name: "Дзен", price: 380, size: "8 шт", desc: "сыр, огурец, угорь, краб, спайси соус, кунжут" }
				{ id: nanoid(), name: "Чикен", price: 340, size: "8 шт", desc: "сыр, тамаго, курица, спайси соус, кунжут" }
				{ id: nanoid(), name: "Вики", price: 370, size: "8 шт", desc: "сыр, тамаго, краб, угорь, спайси соус, масаго" }
				{ id: nanoid(), name: "Эра ролл", price: 340, size: "8 шт", desc: "сыр, огурец, окунь, масаго, сырный соус" }
				{ id: nanoid(), name: "Учкекен", price: 340, size: "8 шт", desc: "сыр, огурец, креветка, лосось, сырный соус, кунжут" }
				{ id: nanoid(), name: "Сливочный", price: 430, size: "8 шт", desc: "сыр сливочный, лосось копчёный, кунжут" }
				{ id: nanoid(), name: "Осака", price: 340, size: "8 шт", desc: "сыр, тамаго, курица, спайси соус" }
				{ id: nanoid(), name: "Унаги ролл", price: 370, size: "8 шт", desc: "сыр, огурец, угорь, краб, спайси соус" }
				{ id: nanoid(), name: "Эби Идзуми", price: 340, size: "8 шт", desc: "сыр, тамаго, окунь, сырный соус" }
				{ id: nanoid(), name: "Бомбей", price: 400, size: "8 шт", desc: "сыр сливочный, тамаго, масаго, креветка, шапка сырный соус" }
				{ id: nanoid(), name: "Суши Пицца с курицей", price: 440, size: "8 шт", desc: "курица, спайси соус, шампиньоны, помидоры, сыр моцарелла" }
				{ id: nanoid(), name: "Суши Пицца морская ассорти", price: 500, size: "8 шт" }
			]
		"fried_roll":
			icon: "🍤"
			name: "Жареные роллы"
			img: "fried-roll"
			items: [
				{ id: nanoid(), name: "Жареный ролл с крабом", price: 320, size: "8 шт", desc: "сыр сливочный, краб" }
				{ id: nanoid(), name: "Жареный ролл с креветкой", price: 350, size: "8 шт", desc: "сыр сливочный, креветка" }
				{ id: nanoid(), name: "Жареный ролл с лососем", price: 360, size: "8 шт", desc: "сыр сливочный, лосось" }
				{ id: nanoid(), name: "Жареный Чикен", price: 320, size: "8 шт", desc: "сыр сливочный, курица" }
				{ id: nanoid(), name: "Жареный ролл Панда", price: 360, size: "8 шт", desc: "сыр, угорь, лосось" }
				{ id: nanoid(), name: "Жареный ролл с угрём", price: 380, size: "8 шт", desc: "сыр сливочный, угорь" }
			]
		"roll_set":
			icon: "🍱"
			name: "Сеты"
			img: "roll-set"
			items: [
				{ id: nanoid(), name: "Сет Кавказ", price: 2150, size: "48 шт", desc: "Император, Лас Вегас, Эби Идзуми, Дзен, Сакура, Бомбей" }
				{ id: nanoid(), name: "Сет Архыз", price: 1150, size: "24 шт", desc: "Филадельфия гриль, Ролл Вики, Лас Вегас" }
				{ id: nanoid(), name: "Сет Копчёный", price: 1250, size: "32 шт", desc: "Филадельфия Гурме, Ролл Кисловодск, Калифорния с креветкой, Мини с копчёным лососем" }
				{ id: nanoid(), name: "Сет КЧР", price: 1450, size: "32 шт", desc: "Ролл Филадельфия, Ролл Эби Идзуми, Ролл Фараон, Ролл Осака" }
				{ id: nanoid(), name: "Сет Домбай", price: 1600, size: "40 шт", desc: "Калифорния гриль, Филадельфия запечённая, Эби Идзуми, Ролл Чикен, Жареный с креветкой" }
				{ id: nanoid(), name: "Сет Филадельфия", price: 1180, size: "24 шт", desc: "Филадельфия с лососем, Филадельфия с угрём, Филадельфия гриль" }
				{ id: nanoid(), name: "Сет Эльбрус", price: 1950, size: "48 шт", desc: "Жареный ролл с лососем, Ролл Филадельфия с угрём, Ролл Калифорния с крабом, Ролл Филадельфия с лососем, Ролл Осака, Ролл Жареный Панда" }
				{ id: nanoid(), name: "Сет Жареный", price: 1150, size: "24 шт", desc: "Жареный с лососем, Жареный Чикен, Жареный с креветкой" }
				{ id: nanoid(), name: "Сет Комбо", price: 1400, size: " шт", desc: "Ролл Гурме, Пицца Пепперони, Картофель Фри, Кола 1л" }
			]
		"burger":
			icon: "🍔"
			name: "Бургеры"
			img: "burger"
			items: [
				{ id: nanoid(), name: "Классический говяжий", price: 350 }
				{ id: nanoid(), name: "Классический куриный", price: 350 }
				{ id: nanoid(), name: "Голодный волк", price: 350 }
				{ id: nanoid(), name: "Бургер с яйцом", price: 350 }
				{ id: nanoid(), name: "Дон Педро", price: 350 }
			]

export default {
	current: "classic_roll"
	list: dish_list.list
}