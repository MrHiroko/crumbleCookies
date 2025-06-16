<script setup>
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
</script>

<template>
	<div class="min-h-screen flex flex-col">
		<!-- Шапка -->
		<Header />

		<!-- Основной контент, центрированный по вертикали и горизонтали -->
		<main class="flex-1 flex items-center justify-center bg-gray-100">
			<slot />
		</main>

		<!-- Подвал -->
		<Footer />
	</div>
</template>

<style scoped></style>
