<script setup>
const props = defineProps({
	id: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	stock: {
		type: Number,
		required: true,
	},
})
</script>

<template>
	<div class="cursor-pointer hover:shadow-lg transition-shadow duration-300">
		<div class="relative">
			<NuxtImg
				class="rounded-t-lg w-full h-48 object-cover"
				:src="image"
				:alt="name"
			/>
		</div>

		<div class="p-5">
			<div>
				<h5 class="mb-2 text-xl font-bold tracking-tight">
					{{ name }}
				</h5>
			</div>
			<div class="space-y-2">
				<p class="font-normal text-gray-700 dark:text-gray-400">
					{{ description }}
				</p>
				<div class="flex justify-between items-center">
					<p class="font-semibold text-lg text-blue-600">
						${{ price.toFixed(2) }}
					</p>
					<p
						class="text-sm font-medium"
						:class="stock > 0 ? 'text-green-600' : 'text-red-600'"
					>
						{{ stock > 0 ? `В наличии: ${stock} шт.` : 'Нет в наличии' }}
					</p>
				</div>
			</div>
			<NuxtLink
				:to="`/cookies/cookie-${id}`"
				class="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Подробнее
				<svg
					class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 5h12m0 0L9 1m4 4L9 9"
					/>
				</svg>
			</NuxtLink>
		</div>
	</div>
</template>

<style scoped>
.cursor-pointer {
	background: white;
	border-radius: 0.5rem;
	overflow: hidden;
}
</style>
