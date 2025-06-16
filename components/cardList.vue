<script setup>
const props = defineProps({
	products: {
		type: Array,
		required: true,
		default: () => [],
	},
})
</script>

<template>
	<div class="card-list">
		<div v-for="product in products" :key="product.id" class="card-wrapper">
			<Card
				:id="product.id"
				:name="product.name"
				:price="Number(product.price)"
				:description="product.description"
				:image="product.image"
				:stock="Number(product.stock)"
			/>
		</div>
	</div>
</template>

<style scoped>
.card-list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 1.5rem;
	padding: 1.5rem;
}

.card-wrapper {
	height: 100%;
	display: flex;
}

.card-wrapper > :deep(*) {
	flex: 1;
}
</style>
