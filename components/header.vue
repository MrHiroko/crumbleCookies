<script setup></script>

<template>
	<header class="bg-blue-900 p-4 flex justify-between items-center">
		<!-- Название компании слева -->
		<div class="text-white font-semibold text-xl">
			<NuxtLink to="/">Crumble Cookies</NuxtLink>
		</div>

		<!-- Навигационные ссылки справа -->
		<div class="flex space-x-6">
			<nav>
				<!-- Регистрация -->
				<ul class="flex items-center">
					<li class="mr-4">
						<NuxtLink
							to="/register/registerApp"
							class="flex items-center text-gray-400 hover:text-yellow-400 transition duration-300"
						>
							<span class="material-icons mr-2">person_add</span>
							Регистрация
						</NuxtLink>
					</li>

					<!-- Авторизация -->
					<li class="mr-4">
						<NuxtLink
							to="/login/loginApp"
							class="flex items-center text-gray-400 hover:text-yellow-400 transition duration-300"
						>
							<span class="material-icons mr-2">home</span>
							Вход
						</NuxtLink>
					</li>
					<!-- Избранное -->
					<li class="mr-4">
						<NuxtLink
							to="/favorites/favoritesApp"
							class="flex items-center text-gray-400 hover:text-yellow-400 transition duration-300"
						>
							<svg
								class="w-5 h-5 mr-2"
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<!-- иконка сердца -->
								<path
									d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
								/>
							</svg>
							Избранное
						</NuxtLink>
					</li>
					<!-- Корзина -->
					<li class="mr-4">
						<NuxtLink
							to="/cart/cartApp"
							class="flex items-center text-gray-400 hover:text-yellow-400 transition duration-300"
						>
							<span class="material-icons mr-2">shopping_cart</span>
							Корзина
						</NuxtLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<style scoped></style>
