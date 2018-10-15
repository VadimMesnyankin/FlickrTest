<template>
	<div id="app">
		<b-container>
			<b-jumbotron header="flickrTest" lead="Тестовое задание">
				<p>Автор: Вадим Меснянкин</p>
				<router-link :to="{name: 'imglist'}">
					<b-btn variant="primary">Изображения</b-btn>
				</router-link>
			</b-jumbotron>
		</b-container>
	</div>
</template>

<script>
	export default {
		name: "Start"
	}
</script>
