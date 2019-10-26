
var doorScreen = new Vue({
	el:'#doorScreen',
	data:{
		screenVisible:0,
	},
	methods:{
	}
})
var ARScreen = new Vue({
	el:'#ARScreen',
	data:{
		screenVisible:0,
	},
	methods:{
	}
})

var VueHeader = new Vue({
	el:'#myHeader',
	data:{
		navbar_item:{"惡魔":"demon","技能":"skill","靈門":"door","AR":"AR"}
	},
	methods:{
		"showScreen":function(obj){ //顯示切換螢幕
			if(obj == "demon"){
				this.setScreenVisible(1,1,0,0,0)
			}else if(obj == "skill"){
				this.setScreenVisible(0,0,1,0,0)
			}else if(obj == "door"){
				this.setScreenVisible(0,0,0,1,0)
			}else if(obj == "AR"){
				this.setScreenVisible(0,0,0,0,1)
			}

		},
		"setScreenVisible":function(){//設定每個螢幕的顯示數值 0或1(False或True)
			demon_data.screenVisible = arguments[0];
			VueSelection.screenVisible = arguments[1];
			skillScreen.screenVisible = arguments[2];
			doorScreen.screenVisible = arguments[3];
			ARScreen.screenVisible = arguments[4];
		}
	}
})

var VueSelection = new Vue({
	el:'#selection',
	data:{
		checkBox:{
			margin:'0 15px',
		},
		screenVisible:1,
		race:{
			filterTagName:[],
		},
		resist:{
			checkName:{
				"物":{"value":["無","吸","反","耐"],"img":"img/element/phy.jpg"},//物理
				"火":{"value":["無","吸","反","耐"],"img":"img/element/fire.jpg"},//火炎
				"冰":{"value":["無","吸","反","耐"],"img":"img/element/ice.jpg"},//冰凍
				"電":{"value":["無","吸","反","耐"],"img":"img/element/elec.jpg"},//電擊
				"衝":{"value":["無","吸","反","耐"],"img":"img/element/force.jpg"},//衝擊
				"破":{"value":["無","吸","反","耐"],"img":"img/element/light.jpg"},//破魔
				"咒":{"value":["無","吸","反","耐"],"img":"img/element/dark.jpg"},//咒殺
			},
			filterTagName:[],
		}
		
	},
	methods:{
		// dropDown_preventDefault:function(e){
		// 	if(e.target.tagName == 'A'){
		// 		e.stopPropagation();
		// 	}
		// },
		// add_race:function(e){
		// 	var index = this.race.filterTagName.indexOf(e.target.innerText);
		// 	if(index != -1){return;}
		// 	this.race.filterTagName.push(e.target.innerText);
		// },
		// dropdown_race:function(e){
		// 	this.dropDown_preventDefault(e);
		// 	this.add_race(e);
		// },
		// CloseFilterTag_race:function(e){
		// 	var index = this.race.DropDownName.indexOf(e.target.innerText.trim());
		// 	this.race.filterTagName.splice(index,1);
		// },
		add_resist:function(e){
			// this.resist.filterTagName.push(e.target.value);
				// var aaa = demon_data.demon.map(function(v){
				//    return v['resist'];
				// })
				// var bbb = aaa.map(function(v){
				// 	return Object.keys(v).map(function(v2){
				// 		return v2+v[v2]
				// 	})
				// });
				// if(demon_data.filterCount == 0){
				// 	demon_data.demonFilterList = demon_data.demon;
				// 	demon_data.filterCount += 1;
				// }


				if(!e.target.checked){
					var index = this.resist.filterTagName.indexOf(e.target.value);
					this.resist.filterTagName.splice(index,1);
				}
				else{
					this.resist.filterTagName.push(e.target.value);
				}

				

				demon_data.demonFilterList = demon_data.demon.filter(function(x){
					return x.resistArray.some(function(v,i){
						return VueSelection.resist.filterTagName.includes(v) || 
							   VueSelection.resist.filterTagName.length == 0
					})
				});
				// console.log(demon_data.demonFilterList.demonFilter);
				// console.log(VueSelection.resist.filterTagName);


			
		},
		// dropdown_resist:function(e){
		// 	this.dropDown_preventDefault(e);
		// 	this.add_resist(e);
		// },
		// CloseFilterTag_resist:function(e){
		// 	var index = this.resist.DropDownName.indexOf(e.target.innerText.trim());
		// 	this.resist.filterTagName.splice(index,1);
		// },

		}
})



