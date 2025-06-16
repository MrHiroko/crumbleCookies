<script setup></script>

<template>
	<footer class="bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
		<div class="container p-6">
			<div class="grid grid-cols-3">
				<!--First links section-->
				<div class="mb-6">
					<h5
						class="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200"
					>
						О нас
					</h5>

					<ul class="mb-0 list-none">
						<li class="text-neutral-800 dark:text-neutral-200">
							Crumble Cookies - ваш любимый магазин вкуснейшего печенья ручной
							работы. Мы используем только натуральные ингредиенты и готовим с
							любовью.
						</li>
					</ul>
				</div>

				<!--Second links section-->
				<div class="mb-6">
					<h5
						class="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200"
					>
						Контакты
					</h5>

					<ul class="mb-0 list-none flex flex-col justify-center">
						<li class="flex items-center">
							<span
								class="material-icons mr-2 text-neutral-800 dark:text-neutral-200 my-2"
								>call</span
							>
							<NuxtLink
								to="tel:+79991234567"
								class="text-neutral-800 dark:text-neutral-200"
							>
								+7 (999) 123-45-67</NuxtLink
							>
						</li>
						<li class="flex items-center">
							<span
								class="material-icons mr-2 text-neutral-800 dark:text-neutral-200 my-2"
							>
								mail
							</span>
							<NuxtLink
								to="mailto:info@crumblecookies.ru"
								class="text-neutral-800 dark:text-neutral-200"
								>info@crumblecookies.ru</NuxtLink
							>
						</li>
						<li class="flex items-center">
							<span
								class="material-icons mr-2 text-neutral-800 dark:text-neutral-200 my-2"
							>
								location_on
							</span>
							<NuxtLink
								to="https://maps.app.goo.gl/1234567890"
								class="text-neutral-800 dark:text-neutral-200"
								>г. Москва, ул. Примерная, д. 1</NuxtLink
							>
						</li>
					</ul>
				</div>
				<!--Third links section-->
				<div class="mb-6">
					<h5
						class="mb-2.5 text-center font-bold uppercase text-neutral-800 dark:text-neutral-200"
					>
						Мы в соцсетях
					</h5>

					<ul class="mb-0 list-none flex justify-center">
						<li class="flex items-center mx-3">
							<NuxtLink
								to="https://www.instagram.com/crumblecookies"
								class="text-neutral-800 dark:text-neutral-200"
								><NuxtImg src="/image/reddit.png" sizes="34px" alt="reddit"
							/></NuxtLink>
						</li>
						<li class="flex items-center mx-3">
							<NuxtLink
								to="https://www.instagram.com/crumblecookies"
								class="text-neutral-800 dark:text-neutral-200"
								><NuxtImg src="/image/vk.png" sizes="35px" alt="vk"
							/></NuxtLink>
						</li>

						<li class="flex items-center mx-3">
							<NuxtLink
								to="https://www.instagram.com/crumblecookies"
								class="text-neutral-800 dark:text-neutral-200"
								><NuxtImg src="/image/youtube.png" sizes="50px" alt="youtube" />
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!--Copyright section-->
		<div
			class="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200"
		>
			© 2025 Copyright
		</div>
	</footer>
</template>

<style scoped></style>
