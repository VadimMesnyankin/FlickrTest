<template>
	<b-container>
		<b-row v-if="!isLoading">
			<b-col v-for="flickrImg in flickrImages"
				   v-bind:data="flickrImg"
				   v-bind:key="flickrImg.link"
				   class="mt-3 mb-3">
				<div><b-img-lazy :src=flickrImg.media.m :alt=flickrImg.title /></div>
			</b-col>
		</b-row>
		<b-row v-else>
			<b-col>
				<div><img :src="require('../assets/loader.gif')" /></div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	export default {
		name: "ImgList",
		data() {
			return {
			}
		},
		computed: {
			flickrImages() {
				return this.$store.getters.flickrImages;
			},
			isLoading() {
				return this.$store.getters.isLoading;
			}
		},
		created() {
			this.$store.dispatch('getImages');
		}
	}
</script>
