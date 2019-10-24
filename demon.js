var demon_data = new Vue({
	el:'#demonScreen',
	data:{
		screenVisible:true,
		img_style:{borderRadius:'5%'},
		DemonInfo:{
			'info':{
					"race":'',
					"name":"",
					"img":"",
					'resist':{},
					'resistArray':[],
					'id':null,
					"status":{},
					},
			'visible':false,		
			'style':{
				'origin':{'height':'100%','overflow':'auto','position':'fixed','right':0,'top':'57px'},
				'pic':{
						'width':'200px',
						'height':'200px'
					}
			}
		},
		progressBarStyle:{
			'height':'15px',
		},
		statusKeys:["力","魔","體","速","運"],
		element:{
					"物":"img/element/phy.jpg",
					"火":"img/element/fire.jpg",
					"冰":"img/element/ice.jpg",
					"電":"img/element/elec.jpg",
					"衝":"img/element/force.jpg",
					"破":"img/element/light.jpg",
					"咒":"img/element/dark.jpg"
				},
		demon:[
							{
								"race":'破壞神',
								"name":"濕婆(異)",
								"img":"img/224.jpg",
								'resist':{	
											'物':'無',
											'火':'-',
											'冰':'-',
											'電':'吸',
											'衝':'反',
											'破':'無',
											'咒':'耐'
										},
								'resistArray':["物無","火-","冰-","電吸","衝反","破無","咒耐"],
								'id':1,
								"status":{"力":111,"魔":256,"體":89,"速":200,"運":55},
							},
							{
								"race":'破壞神',
								"name":"北斗星君",
								"img":"img/110.jpg",
								'resist':{	
											'物':'耐',
											'火':'吸',
											'冰':'吸',
											'電':'吸',
											'衝':'-',
											'破':'-',
											'咒':'耐'
										},
								'resistArray':["物耐","火吸","冰吸","電吸","衝-","破-","咒耐"],
								'id':12,
								"status":{"力":55,"魔":200,"體":89,"速":222,"運":111},
							},
							{
								"race":'破壞神',
								"name":"濕婆(異)",
								"img":"img/224.jpg",
								'resist':{	
											'物':'無',
											'火':'-',
											'冰':'-',
											'電':'吸',
											'衝':'反',
											'破':'無',
											'咒':'耐'
										},
								'resistArray':["物無","火-","冰-","電吸","衝反","破無","咒耐"],
								'id':1,
								"status":{"力":111,"魔":256,"體":89,"速":200,"運":55},
							},
							{
								"race":'破壞神',
								"name":"北斗星君",
								"img":"img/110.jpg",
								'resist':{	
											'物':'耐',
											'火':'吸',
											'冰':'吸',
											'電':'吸',
											'衝':'-',
											'破':'-',
											'咒':'耐'
										},
								'resistArray':["物耐","火吸","冰吸","電吸","衝-","破-","咒耐"],
								'id':12,
								"status":{"力":55,"魔":200,"體":89,"速":222,"運":111},
							},
							{
								"race":'破壞神',
								"name":"濕婆(異)",
								"img":"img/224.jpg",
								'resist':{	
											'物':'無',
											'火':'-',
											'冰':'-',
											'電':'吸',
											'衝':'反',
											'破':'無',
											'咒':'耐'
										},
								'resistArray':["物無","火-","冰-","電吸","衝反","破無","咒耐"],
								'id':1,
								"status":{"力":111,"魔":256,"體":89,"速":200,"運":55},
							},
							{
								"race":'破壞神',
								"name":"北斗星君",
								"img":"img/110.jpg",
								'resist':{	
											'物':'耐',
											'火':'吸',
											'冰':'吸',
											'電':'吸',
											'衝':'-',
											'破':'-',
											'咒':'耐'
										},
								'resistArray':["物耐","火吸","冰吸","電吸","衝-","破-","咒耐"],
								'id':12,
								"status":{"力":55,"魔":200,"體":89,"速":222,"運":111},
							},
							{
								"race":'破壞神',
								"name":"濕婆(異)",
								"img":"img/224.jpg",
								'resist':{	
											'物':'無',
											'火':'-',
											'冰':'-',
											'電':'吸',
											'衝':'反',
											'破':'無',
											'咒':'耐'
										},
								'resistArray':["物無","火-","冰-","電吸","衝反","破無","咒耐"],
								'id':1,
								"status":{"力":111,"魔":256,"體":89,"速":200,"運":55},
							},
							{
								"race":'破壞神',
								"name":"北斗星君",
								"img":"img/110.jpg",
								'resist':{	
											'物':'耐',
											'火':'吸',
											'冰':'吸',
											'電':'吸',
											'衝':'-',
											'破':'-',
											'咒':'耐'
										},
								'resistArray':["物耐","火吸","冰吸","電吸","衝-","破-","咒耐"],
								'id':12,
								"status":{"力":55,"魔":200,"體":89,"速":222,"運":111},
							},
							{
								"race":'破壞神',
								"name":"濕婆(異)",
								"img":"img/224.jpg",
								'resist':{	
											'物':'無',
											'火':'-',
											'冰':'-',
											'電':'吸',
											'衝':'反',
											'破':'無',
											'咒':'耐'
										},
								'resistArray':["物無","火-","冰-","電吸","衝反","破無","咒耐"],
								'id':1,
								"status":{"力":111,"魔":256,"體":89,"速":200,"運":55},
							},
							{
								"race":'破壞神',
								"name":"北斗星君",
								"img":"img/110.jpg",
								'resist':{	
											'物':'耐',
											'火':'吸',
											'冰':'吸',
											'電':'吸',
											'衝':'-',
											'破':'-',
											'咒':'耐'
										},
								'resistArray':["物耐","火吸","冰吸","電吸","衝-","破-","咒耐"],
								'id':12,
								"status":{"力":55,"魔":200,"體":89,"速":222,"運":111},
							},
							{
								"race":'破壞神',
								"name":"濕婆(異)",
								"img":"img/224.jpg",
								'resist':{	
											'物':'無',
											'火':'-',
											'冰':'-',
											'電':'吸',
											'衝':'反',
											'破':'無',
											'咒':'耐'
										},
								'resistArray':["物無","火-","冰-","電吸","衝反","破無","咒耐"],
								'id':1,
								"status":{"力":111,"魔":256,"體":89,"速":200,"運":55},
							},
							{
								"race":'破壞神',
								"name":"北斗星君",
								"img":"img/110.jpg",
								'resist':{	
											'物':'耐',
											'火':'吸',
											'冰':'吸',
											'電':'吸',
											'衝':'-',
											'破':'-',
											'咒':'耐'
										},
								'resistArray':["物耐","火吸","冰吸","電吸","衝-","破-","咒耐"],
								'id':12,
								"status":{"力":55,"魔":200,"體":89,"速":222,"運":111},
							},
							// {"race":'破壞神',"name":"藏王權現","img":"img/180.jpg",'resist':'物吸','id':13}, 
							// {"race":'破壞神',"name":"素盞嗚尊","img":"img/142.jpg",'resist':'物反','id':14}, 
							// {"race":'破壞神',"name":"阿瑞斯","img":"img/67.jpg",'resist':'物吸','id':15}, 
							// {"race":'破壞神',"name":"濕婆","img":"img/143.jpg",'resist':'物吸','id':16}, 
							// {"race":'破壞神',"name":"齊天大聖","img":"img/109.jpg",'resist':'物耐','id':17},
							// {"race":'大天使',"name":"梅塔特隆","img":"img/224.jpg",'resist':'物耐','id':18},
							// {"race":'大天使',"name":"聖達芬","img":"img/110.jpg",'resist':'物耐','id':19},
							// {"race":'大天使',"name":"莫斯提馬","img":"img/180.jpg",'resist':'物耐','id':122}, 
							// {"race":'大天使',"name":"阿斯萊爾","img":"img/180.jpg",'resist':'物吸','id':133}, 
							// {"race":'大天使',"name":"萊拉","img":"img/110.jpg",'resist':'物反','id':144}, 
							// {"race":'大天使',"name":"米迦勒","img":"img/110.jpg",'resist':'物耐','id':155},
							// {"race":'女神',"name":"吉祥天","img":"img/224.jpg",'resist':'物耐','id':166},
							// {"race":'女神',"name":"伊絲塔","img":"img/110.jpg",'resist':'物耐','id':177},
							// {"race":'女神',"name":"伊邪那美","img":"img/180.jpg",'resist':'物吸','id':188}, 
							// {"race":'女神',"name":"妙音天女","img":"img/110.jpg",'resist':'物吸','id':199}, 
							// {"race":'女神',"name":"阿麗安蘿德","img":"img/110.jpg",'resist':'物耐','id':1222}, 
							// {"race":'女神',"name":"哈索爾","img":"img/110.jpg",'resist':'物反','id':1333}, 
							// {"race":'女神',"name":"斯卡哈","img":"img/110.jpg",'resist':'物反','id':1444},
							// {"race":'女神',"name":"帕拉斯雅典娜","img":"img/110.jpg",'resist':'物反','id':1555}
				],
				'filterCount':0,
				'demonFilter':[],//存放被篩選過惡魔的資料的容器
		
	},
	methods:{
		"showDemonInfo":function(item){//點擊惡魔小圖可以查閱相關資訊
			this.DemonInfo.info = item;
			this.DemonInfo.visible = true;
		},
		"resistTableClick":function(e){ //按下後可勾選抗性篩選

			document.getElementById("resist" + e.target.getAttribute("data-filterCheck")).click()
			// alert()
		}
	},
	computed:{
		'demonFilterList':{
			get:function(){
				this.demonFilter = this.demon;
				return this;
			},
			set:function(obj){
				this.demonFilter = obj;
			},
			
		},
		"race_list":function(){
			    var bbb = new Object(3);
				for(var i=0;i<this.demonFilterList.demonFilter.length;i++){
					 var race = this.demonFilterList.demonFilter[i].race;
					 var name = this.demonFilterList.demonFilter[i].name;
					 var img = this.demonFilterList.demonFilter[i].img;
					 var resist = this.demonFilterList.demonFilter[i].resist;
					 var id = this.demonFilterList.demonFilter[i].id;
					 var resistArray = this.demonFilterList.demonFilter[i].resistArray;
					 var status = this.demonFilterList.demonFilter[i].status;
					 var robj = {
					 				"name":name,
					 				"img":img,
					 				"resist":resist,
					 				"id":id,
					 				"resistArray":resistArray,
					 				"status":status
					 			};
					if(bbb[race] == undefined){bbb[race] = [];}
					bbb[race].push(robj);
				}
				return bbb;
				},
		// "demon_select":function(){
		// 	return this.demon.filter(function(x){
		// 		var f1 = VueContent.race.filterTagName;
		// 		var f2 = VueContent.resist.filterTagName;
		// 		var condition_race = f1.length == 0 ? true : f1.includes(x.race);
		// 		var condition_resist = f2.length == 0 ? true : f2.includes(x.resist);
		// 		return condition_race && condition_resist
		// 	})
		// },
		"statusBarStyle":function(){
			var status = this.DemonInfo.info.status;
				
				return Object.keys(status).map(function(v,i){
					return {'width':Math.round(status[v]/256*100) + "%",'height':'10px'};
				})
			
			// else{return '';}
			
		},
		
	}
})
