// Vue.components('some-component', {
//    data:function () {
//     return {
//       count: 0
//     }
//   },
//   template:`<button @click="count++">{{count}}</button>`,
// })


var skillScreen = new Vue({
	el:'#skillScreen',
	data:{
		screenVisible:0,
		skillList:[
			{id:1,name:"技能A"},
			{id:2,name:"技能B"},
			{id:3,name:"技能C"},
		]
	},
	methods:{
	}
})