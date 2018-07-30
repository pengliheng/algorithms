import Vue from './lib/vue.js'
import { select } from './lib/sort.js';
import 'babel-polyfill';


new Vue({
	el:document.querySelector('#root'),
	data(){
		return {
			time:0,
			arr: [4,3,2,1,8,7,6,5]
		}
	},
	async mounted(){
		// 交换策略  ,某个数字位于当前数字的 位置
		const result = select(this.arr, 0 , (i,j)=>{
			this.time++;
			[this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]]
			this.arr = [...this.arr]
			return this.arr;
		})
		console.log(await result);
	},
	created(){
		window.app = this;
		console.log('i am created');
	}
})