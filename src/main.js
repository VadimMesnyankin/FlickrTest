import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import App from './App.vue'
import VueJsonp from 'vue-jsonp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Start from './components/Start.vue'
import ImgList from './components/ImgList.vue'

Vue.use(BootstrapVue);
Vue.use(Router);
Vue.use(VueJsonp);
Vue.use(Vuex);

const router = new Router({
	routes: [
		{
			path: '/',
			name:'start',
			component: Start
		},
		{
			path: '/imglist',
			name:'imglist',
			component: ImgList
		}
	]
});

const store = new Vuex.Store({
	state: {
		isLoading: false,
		flickrImages: null
	},
	actions: {
		getImages({commit}) {
			const apiUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
			const apiCallbackName = 'jsonFlickrFeed';
			commit('ISLOADING', true);
			Vue.jsonp(apiUrl,{callbackName: apiCallbackName})
				.then(response => {
					commit('ISLOADING', false);
					commit('FLICKRIMAGES', response.items);
				})
				.catch(error => {
					commit('ISLOADING', false);
					console.log("Error :: " + error);
				});
		}
	},
	mutations: {
		FLICKRIMAGES(state, data) {
			state.flickrImages = data;
		},
		ISLOADING(state, value){
			state.isLoading = value;
		}
	},
	getters: {
		flickrImages(state){
			return state.flickrImages;
		},
		isLoading(state){
			return state.isLoading;
		}
	},
	modules: {}
});

new Vue({
	el: '#app',
	render: h => h(App),
	router,
	store
});