<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

useHead({
	title: 'Каталог продуктов',
})

const products = ref()

const error = ref(null)

const fetchProducts = async () => {
	try {
		const response = await axios.get('api/catalogitem.php')
		products.value = response.data.data
	} catch (e) {
		error.value = 'Ошибка при загрузке продуктов'
		console.error('Error:', e)
	}
}

onMounted(() => {
	fetchProducts()
})
</script>

<template>
	<div class="container mx-auto px-4">
		<div v-if="error" class="text-center text-red-600 p-4">
			{{ error }}
		</div>

		<CardList v-else-if="products" :products="products" />

		<div v-else class="text-center text-gray-500 p-4 animate-pulse">
			Loading...
		</div>
	</div>
</template>

<style scoped></style>
