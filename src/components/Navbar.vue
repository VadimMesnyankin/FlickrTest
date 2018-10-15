<template>
	<b-navbar toggleable="md" type="dark" variant="info">
		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
		<router-link :to="{name: 'start'}"><b-navbar-brand>FlickrTest</b-navbar-brand></router-link>
		<b-collapse is-nav id="nav_collapse">
			<b-navbar-nav>
				<b-nav-item :to="{name: 'start'}">Главная</b-nav-item>
				<b-nav-item :to="{name: 'imglist'}">Список изображений</b-nav-item>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
	export default {
		name: "Navbar"
	}
</script>
