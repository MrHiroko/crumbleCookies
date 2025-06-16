<script setup>
const route = useRoute()

const title = computed(() => {
	if (route.name === 'register-registerApp') {
		return 'Регистрация'
	} else if (route.name === 'login-loginApp') {
		return 'Вход'
	}
})

const send = computed(() => {
	if (route.name === 'register-registerApp') {
		return 'Зарегистрироваться'
	} else if (route.name === 'login-loginApp') {
		return 'Войти'
	}
})
</script>

<template>
	<div
		class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
	>
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<h2
				class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
			>
				{{ title }}
			</h2>
		</div>

		<div
			class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-2 border-gray-300 rounded-md p-4 m-4"
		>
			<form class="space-y-6" action="#" method="POST">
				<!-- Почта -->
				<div>
					<label for="email" class="block text-sm/6 font-medium text-gray-900"
						>Почта</label
					>
					<div class="mt-2">
						<input
							type="email"
							name="email"
							id="email"
							autocomplete="email"
							required="true"
							class="block w-full border-2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-1 -border-offset-1 border-gray-300 placeholder:text-gray-400 sm:text-sm/6 transition duration-300"
						/>
					</div>
				</div>

				<!-- Пароль -->
				<div>
					<div class="flex items-center justify-between">
						<label
							for="password"
							class="block text-sm/6 font-medium text-gray-900"
							>Пароль</label
						>
					</div>
					<div class="mt-2">
						<input
							type="password"
							name="password"
							id="password"
							autocomplete="current-password"
							required="true"
							class="block w-full border-2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-1 -border-offset-1 border-gray-300 placeholder:text-gray-400 sm:text-sm/6 transition duration-300"
						/>
					</div>
				</div>

				<!-- повтор пароля -->
				<div v-if="route.name === 'register-registerApp'">
					<div class="flex items-center justify-between">
						<label
							for="password"
							class="block text-sm/6 font-medium text-gray-900"
							>Повтор пароля</label
						>
					</div>
					<div class="mt-2">
						<input
							type="password"
							name="password"
							id="password"
							autocomplete="current-password"
							required="true"
							class="block w-full border-2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-1 -border-offset-1 border-gray-300 placeholder:text-gray-400 sm:text-sm/6 transition duration-300"
						/>
					</div>
				</div>
				<!-- Кнопка входа -->
				<div>
					<button
						type="submit"
						class="flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						{{ send }}
					</button>
				</div>
			</form>
		</div>
	</div>
</template>
<style scoped></style>
