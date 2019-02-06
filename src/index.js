import Vue from 'vue';

import Router from 'vue-router';
import routes from '@/routes';
Vue.use(Router);

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, {locale});

const router = new Router({
	// mode: 'history',	//	Electron App can't use history mode
	routes: routes
});

import App from '@/components/App';

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
});
