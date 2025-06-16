<script setup>
import axios from 'axios'
const route = useRoute()
const cookie = ref()
const error = ref()
const quantity = ref(1)
const cart = ref([])

watch(
	cookie,
	newCookie => {
		if (newCookie) {
			useHead({
				title: newCookie.name,
				meta: [{ name: 'description', content: newCookie.description }],
			})
		}
	},
	{ immediate: true }
)

const addToCart = () => {
	if (quantity.value > 0) {
		cart.value.push({
			id: cookie.value.id,
			name: cookie.value.name,
			price: cookie.value.price,
			quantity: quantity.value,
			image: cookie.value.image,
			description: cookie.value.description,
		})
	} else {
		console.log('error')
	}
}

const plusCookie = () => {
	if (quantity.value < cookie.value.stock) {
		quantity.value++
	} else {
		quantity.value = cookie.value.stock
	}
}

const minusCookie = () => {
	if (quantity.value > 1) {
		quantity.value--
	} else {
		quantity.value = 1
	}
}

const fetchCookie = async () => {
	try {
		const response = await axios.get(
			`/api/catalogitem.php?id=${route.params.id}`
		)
		cookie.value = response.data.data[0]
	} catch (e) {
		error.value = 'Ошибка при загрузке данных о печенье'
		console.error('Error:', e)
	}
}

onMounted(() => {
	fetchCookie()
})
</script>

<template>
	<div class="container mx-auto px-4 py-8">
		<div v-if="cookie" class="flex flex-col md:flex-row gap-8">
			<div class="md:w-1/2">
				<NuxtImg
					:src="cookie.image"
					:alt="cookie.name"
					class="w-full h-auto rounded-lg shadow-lg object-cover"
				/>
			</div>

			<div class="md:w-1/2 space-y-6">
				<h1 class="text-4xl font-bold text-gray-900">{{ cookie.name }}</h1>

				<p class="text-lg text-gray-700">{{ cookie.description }}</p>

				<div class="space-y-2">
					<p class="text-2xl font-bold text-gray-900">
						Цена: {{ cookie.price.toFixed(2) }} ₽
					</p>
					<p
						class="text-sm"
						:class="cookie.stock > 0 ? 'text-green-600' : 'text-red-600'"
					>
						{{
							cookie.stock > 0
								? `В наличии: ${cookie.stock} шт.`
								: 'Нет в наличии'
						}}
					</p>
				</div>

				<div class="flex items-center gap-4">
					<div class="flex items-center border rounded-lg">
						<button
							@click="minusCookie"
							class="px-4 py-2 text-xl border-r hover:bg-gray-100"
							:disabled="cookie.stock === 0"
						>
							-
						</button>
						<input
							type="number"
							min="1"
							:max="cookie.stock"
							v-model="quantity"
							class="w-16 px-2 py-2 text-center"
							:disabled="cookie.stock === 0"
						/>
						<button
							@click="plusCookie"
							class="px-4 py-2 text-xl border-l hover:bg-gray-100"
							:disabled="cookie.stock === 0"
						>
							+
						</button>
					</div>

					<button
						@click="addToCart"
						class="flex-1 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
						:disabled="cookie.stock === 0"
					>
						Добавить в корзину
					</button>

					<button
						class="p-3 text-red-500 border border-red-500 rounded-lg hover:bg-red-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<div v-else class="text-center text-gray-600 p-4">Загрузка...</div>
	</div>
</template>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

input[type='number'] {
	-moz-appearance: textfield;
}
</style>
