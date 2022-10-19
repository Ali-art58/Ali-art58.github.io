//左边 头部导航
Vue.component("nav-header", {
	data(){
		return {
			popList:[
				{name:"门店", linkTo:"map.html"},
				{name:"星享俱乐部", linkTo:"#"},
				{name:"菜单", linkTo:"menu.html"},
				{name:"星巴克移动应用", linkTo:"#"},
				{name:"星礼卡", linkTo:"giftcard.html"},
				{name:"星巴克臻选™", linkTo:"#"},
				{name:"啡快™ － 在线点 到店取", linkTo:"#"},
				{name:"专星送™", linkTo:"#"},
				{name:"星讲堂", linkTo:"#"},
				{name:"上海烘焙工坊咖啡", linkTo:"#"},
				{name:"关于星巴克", linkTo:"#"},
				{name:"帮助中心", linkTo:"#"},
		  	],
			navList:[
				{name:"门店", linkTo:"map.html"},
				{name:"我的帐户", linkTo:"account.html"},
				{name:"菜单", linkTo:"menu.html"}
			],
			flagPop:false,
		} 
	},
	methods:{
		handlerPopMenu(){
			this.flagPop = !this.flagPop;
		}
	},
	template: `
		<header>
	        <a href="index.html" class="logo">
	          <img src="./img/logo.svg" alt="">
	        </a>
	        <div class="primary">
	          <ul>
	            <li v-for="item in navList">
	            	<a :href="item.linkTo">{{item.name}}</a>
	            </li>
	          </ul>
	        </div>
	        <a href="#" class="tirgger" v-on:click="handlerPopMenu">
	          <img src="./img/icon-hamburger.svg" alt="">
	        </a>
	
	        <!-- 下拉菜单 -->
	        <div class="pop-menu" v-show="flagPop">
	          <div class="closebox" v-on:click="handlerPopMenu">
	            <img id="close" src="./img/icon-close.svg" alt="">
	          </div>
	          <ul>
	          	<li v-for="item in popList">
	              <a class="pop-menu-item" :href="item.linkTo">
	                {{item.name}}
	              </a>
	            </li>
	            <li>
	              <hr>
	            </li>
	          </ul>
	          <btn-register-login></btn-register-login>
	          <footer class="footer">
	            <div class="footer-wrapper">
	              <a id="en-collapse" class="lang"
	                href="javascript:void(window.location.pathname = &quot;/en/menu/food/&quot;)">
	                English
	              </a>
	              |
	              <a id="privacy-collapse" href="/help/legal/privacy-policy">
	                                隐私政策
	              </a>
	              |
	              <a id="terms-collapse" href="/help/legal/terms-of-starbucks-website/">
	                                使用条款
	              </a>
	            </div>
	          </footer>
	        </div>
	      </header>
		`
})

//index 底部
Vue.component("index-footer",{
	template: `
		<footer class="index-footer">
	        <a href="#" target="_blank">
	          <img width="10" height="10" src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/icpicon.png">&nbsp;沪公网安备 31010402000253号
	        </a>
	    </footer>
	`
})

//右边 促销活动图片列表
Vue.component("index-promotion",{
	data(){
		return {
			picList:["./img/tmall-2020-06-29-zh.jpg",
					"./img/starbucks-design-studio-web-china.jpg",
					"./img/homepage-career-cn.jpg"]
		} 
	},
	template: `
		<section class="promotion">
	      <a href="#" class="promotion-item hoverup" v-for="item in picList">
	        <img v-bind:src="item" >
	      </a>
	    </section>
	`
})

//天猫 星巴克精选
Vue.component("index-tmall",{
		data(){
			return {
				theme:"星巴克精选",
				slogan:"在星巴克天猫旗舰店发现更多咖啡心意",
				list:[
					{title:"会员星礼包", desc:"星享卡新升级<br> 更多心意好礼",pic:"./img/tmall-card-01.png"},
					{title:"星礼卡", desc:"用一份心礼<br> 让心意相随",pic:"./img/tmall-card-02.png"},
					{title:"电子产品券", desc:"心意<br> 从这一杯开始",pic:"./img/tmall-eticket.png"},
					{title:"咖啡生活", desc:"星巴克<br> 用心制作",pic:"./img/tmall-reserve.png"},
				],
			} 
		},
		template: `
			<section class="tmall">
		      <div class="wrapper">
		        <h2>{{theme}}</h2>
		        <p class="p-grey">{{slogan}}</p>
		        <ul class="tmall-ul">
			          <li v-for="item in list">
			            <a href="#" class="tmall-ul-item">
			              <img v-bind:src="item.pic">
			              <p class="title-1">{{item.title}}</p>
			              <p class="p-grey" v-html="item.desc"></p>
			              <p class="getmore"> 了解更多 › </p>
			            </a>
			          </li>
			        </ul>
		      </div>
		 </section>
		`
	})

//登录、注册按钮组件
Vue.component("btn-register-login",{
	template:`
		<footer class="account">
          <a href="account.html" class="sign-in">
            <img src="./img/icon-account.svg" alt="">
            <span>登录</span>
          </a>
          <a href="account.html" class="register">
            <span>注册</span>
          </a>
        </footer>`
})

//星享俱乐部
Vue.component("index-program-msr",{
	data(){
		return {
			msrinfo:{
				title:"星享俱乐部",
				desc:"开启您的星享之旅，星星越多、会员等级越高、好礼越丰富。",
				pic:"./img/index.png"
			}
		}
	},
	template:`
		<section class="program-msr">
	      <div class="wrapper">
	        <div class="program-msr-text">
	          <h2>{{msrinfo.title}}</h2>
	          <p class="p-grey">
	            {{msrinfo.desc}}
	            <a href="#" class="getmore"> 了解更多 › </a>
	          </p>
	          <p class="program-msr-btn">
	          	 <!--登录、注册按钮组件-->
	            <btn-register-login></btn-register-login>
	          </p>
	        </div>
	        <div class="program-msr-img">
	          <a href="#"><img :src="msrinfo.pic" alt=""> </a>
	        </div>
	      </div>
	    </section>`
})


/* ------menu.html 组件-----------*/
//行销商品
Vue.component("lto",{
	props:["ltoinfo"],
	template:`
		<section class="lto">
			<h2>{{ltoinfo.title}}</h2>
			<div class="wrapper2" id="ltoItems">
				<div class="lto-item hoverup" v-for="item in ltoinfo.list">
					<img v-bind:src="item.img">
					<p>{{item.name}}</p>
				</div>
			</div>
		</section>`
})

//一级菜单
Vue.component("menu-primary",{
	props:["menuinfo"],
	data(){
		return {
			index:0
		}
	},
	methods:{
		handler(val){
			this.index = val;
		}
	},
	template:`
		<div class="content">
			<div class="display-1">{{menuinfo.title}}</div>
			<div class="tabs-wrapper">
				<ul class="subcategories" id="cateinfo">
					<li v-for="item,i in menuinfo.list">
						<a href="#" :class="{active:i==index}" v-on:click="handler(i)">{{item}}</a>
					</li>
				</ul>
			</div>
		</div>`
})

//推荐商品组件
Vue.component("rcmmd-item",{
	props:["iteminfo"],
	template:`
		<div class="item">
			<div class="image">
				<a href="#"><img :src="iteminfo.pic" alt=""></a>
			</div>
			<div class="wrapper2" >
				<h2>{{iteminfo.title}}</h2>
				<p class="description" v-html="iteminfo.desc"></p>
			</div>
		</div>`
})

//搜索按钮
Vue.component("btn-search",{
	template:`
		<div class="frap">
			<button class="search-menu">搜索菜单</button>
		</div>`

})


/* ------menubycate.html 组件-----------*/
//二级菜单
Vue.component("menu-secondary",{
	props:["menuinfo"],
	data(){
		return {
			index:-1
		}
	},
	methods:{
		handler(val){
			this.index = val;
			//this.$emit("父组件自定义事件名",带给父组件的数据);
			this.$emit("getindex",this.index);
		}
		
	},
	template:`
		<div class="content">
			<a href="menu.html" class="back">
				<img src="./img/icon-chevron-left.svg"> 菜单
			</a>
			<div class="display-1">饮料</div>
			<div class="tabs-wrapper">
				<ul class="subcategories" id="cateinfo">
					<li>
						<a href="#" :class="{active:index==-1}" v-on:click="handler(-1)">全部</a>
					</li>
					<li v-for="item,i in menuinfo">
						<a href="#" :class="{active:i==index}" v-on:click="handler(i)">{{item.title}}</a>
					</li>
				</ul>
			</div>
		</div>`
})

//商品列表
Vue.component("goods-list",{
	props:["goodsinfo"],
	template:`
		<div class="page-menu-list">
			<h3 class="caption">{{goodsinfo.title}}</h3>
			<ul class="product">
				<li v-for="goods in goodsinfo.gdslist">
					<a href="#" class="product-item">
						<div class="preview hoverup">
							<img v-bind:src="goods.img">
						</div>
						<strong>{{goods.name}}</strong>
					</a>
				</li>
			</ul>
			<hr>
		</div>`
})

/* ------account.html 组件-----------*/
//form表单
Vue.component("login-register-form",{
	template:`
	<div class="wrapper2">
		<form class="login-form">
          <div class="field">
            <input type="text" id="uname" name="username" placeholder="用户名或者电子邮箱">
          </div>
          <div class="field">
            <div class="password-group-field">
              <input type="password" id="upass" name="password" placeholder="密码">
            </div>
          </div>

          <div class="checkbox-field">
            <div class="checkbox-group">
              <input type="checkbox" id="login-remember" value="on">
              <label for="login-remember">下次自动登录</label>
            </div>
            <a id="sign-in-forgot-password" href="#" class="link">
              	忘记密码？
            </a>
          </div>
          
          <!-- 图片验证插件容器 -->
          <div class="captcha" id="captcha">
          </div>
          <!-- 图片验证提示信息 -->
          <span class="link" id="msg"></span>

          <div class="actions">
            <button type="submit" class="btn btn-login" id="btnlogin">登录</button>
            <button type="submit" class="btn btn-register" id="btnregister">注册</button> 
          </div>
        </form>
    </div>`

})

//form表单
Vue.component("account-join",{
	template:`    
	<section class="account-join">
      <div class="wrapper2">
        <h2 class="gold">加入星享俱乐部</h2>
        <p class="light">只需几分钟，便可成功注册星享俱乐部帐户，成为“星”会员，立即开启集星之旅。</p>
      </div>
    </section>`
})


/* ------userinfo.html 组件-----------*/
//会员等级、权益信息等
Vue.component("user-level",{
	props:["user","prvlglist"],
	template:`    
	<div class="gold-level box">
		<header class="header flex-bt">
			<h2 class="headline">{{user.level}}</h2>
			<img src="./img/icon-rewards.svg">
		</header>
		<div class="gl-main">
			<div class="account-info">
				<div class="my-star">
					<span class="star-count">
					<span id="starnum">{{user.stars}}</span>
					<img src="./img/icon-star-white-new.png">
					</span>
					<span>我的好礼星星</span>
				</div>
				<div class="next">
					<div class="privilege-title"><span>会员权益：</span></div>
					<privileges :prvlglist="prvlglist"></privileges>
				</div>
			</div>
	
			<div class="corner">
				<div>
					<strong>会员到期日：</strong> 2021/01/12
				</div>
			</div>
		</div>
	</div>`
})

//会员权益
Vue.component("privileges",{
	props:["prvlglist"],
	template:`    
	<div class="privileges">
		<div class="privilege" v-for="item in prvlglist"> 
			<div class="badge"><img :src="item.pic"></div>
			<span>{{item.title}}</span>
		</div>
	</div>`
})

//管理星礼卡
Vue.component("my-svc",{
	props:["cardlist"],
	template:`    
	<div class="svc box">
		<header class="header flex-bt">
			<h2 class="headline">管理星礼卡</h2>
			<span class="count">
	            <strong>1</strong>
	            <img src="./img/icon-card.svg">
          	</span>
		</header>
		<hr></hr>
		<div class="scroll" id="cardinfo">
			<svc-card v-for="item,i in cardlist" :cardinfo="item" :key="item.id"></svc-card>
		</div>
		<footer class="footer">
			<span class="link" >解除绑定</span>
		</footer>
	</div>`
})

//管理星礼卡--卡片
Vue.component("svc-card",{
	props:["cardinfo"],
	template:`    
	<div class="svc-card">
		<header class="header">
			<input type="checkbox" name="card">
			<div class="title-2 amount">¥{{cardinfo.balance}}</div>
		</header>
		<div class="preview">
			<label class="preview-title">{{cardinfo.desc}}</label>
			<img :src="cardinfo.pic">
		</div>
		<small class="meta">{{cardinfo.num}}</small>
	</div>`
})

//管理我的账号
Vue.component("profile-security",{
	props:["user"],
	template:`    
	<div class="profile-security box">
		<h2 class="header flex-bt">
          <span>帐户信息</span>
          <img src="./img/ic_profile.svg" alt="">
        </h2>
		<form id="profile-form" class="login-form" data-uid="">
			<div class="field">
				<label for="uname">用户名：</label>
				<input type="text" id="uname" name="username" disabled :value="user.uname">
			</div>
			<div class="field">
				<label for="nkname">姓名：</label>
				<input type="text" id="nkname" name="nkname" :value="user.nkname">
			</div>
			<div class="field div-radio">
				<label for="gender">性别：{{user.gender}}</label>
				<input type="radio" name="gender" id="male" value="先生" :checked="{checked :user.gender=='先生'}"> 先生
				<input type="radio" name="gender" id="female" value="女士" :checked="{checked :user.gender=='女士'}"> 女士
			</div>
			<div class="field">
				<label for="upass">密码：</label>
				<input type="password" id="upass" name="password" :value="user.upass">
			</div>
			<div class="field">
				<label for="tel">手机号：</label>
				<input type="text" id="tel" name="tel" :value="user.tel">
			</div>
			<div class="field">
				<label for="mail">邮箱地址：</label>
				<input type="text" id="mail" name="mail" :value="user.mail">
			</div>
			<div class="profile-actions">
				<button type="submit" class="btn btn-login" id="btnupdate">修改</button>
			</div>
		</form>
	</div>`
})


/* ------giftcard.html 组件-----------*/
//banner
Vue.component("gift-banner",{
	template:`    
	 <section class="gift-banner">
      <div class="wrapper2">
        <div class="text">
          <p class="caption white-2">星巴克星礼卡</p>
          <h1 class="display-2">心意相随</h1>
          <p class="white">
           	 将星礼卡绑定至星享俱乐部帐户，使用星巴克App移动支付，即可加速积星，每消费40元获得一颗星星，比其他支付方式积星快25%。
          </p>
          <p class="white">
            50元/100元/200元/300元/500元 （全国通用）
          </p>
          <a href="#" class="button white">常见问题</a>

        </div>
        <div class="image">
          <img src="./img/svc-cards.png" alt="">
        </div>
      </div>
    </section>`
})

//促销信息
Vue.component("gift-promotion",{
	template:`    
	<section class="promotion">
      <div class="promotion-tmall">
        <p class="caption gold">天猫商城</p>
        <h1 class="white">浓浓心意，送给特别的TA</h1>
        <img class="space" src="./img/svc-tmall-1.png" alt="">
        <a href="#" class="button white">前往天猫购买</a>
        <div class="image-bottom">
          <img src="./img/svc-tmall-2.png" alt="">
        </div>
      </div>
      <div class="promotion-say">
        <p class="caption white-2">扫码赠送星礼卡</p>
        <div class="image say1">
          <img src="./img/svc-say-1.png" alt="">
        </div>
        <div class="image say2">
          <img src="./img/svc-say-2.png" alt="">
        </div>
        <p class="white">
            “用星说” 全新社交礼品平台，一个简单的小行动，即刻用心说出真情实意
          </p>
      </div>
      <div class="promotion-company">
              <p class="caption p-grey">公司购买</p>
              <p class="p-grey">
                  一张星礼卡，将您的浓浓心意送给最重要的人。这份体贴而便捷的礼物替您在人际沟通中增进彼此的情感连接。
              </p>
              <p class="p-grey">
                  如您有公司采购需求，请拨打星巴克服务热线：400-820-6998, 将有专人为您提供服务。
              </p>
              <a href="#" class="button white">查看星礼卡章程</a>
      </div>
    </section>`
})
//星巴克星礼卡系列
Vue.component("card-list",{
	props:["cardlist"],
	template:`    
	<section class="card-list">
      <div class="wrapper2">
          <div class="title">
            <h2>星巴克星礼卡系列</h2>
            <p class="caption p-grey">50元/100元/200元/300元/500元 （全国通用）</p>
          </div>
          <ul>
            <li v-for="card in cardlist">
                <a href="#" class="card-list-item hoverup">
                    <div>
                      <img :src="card.pic" alt="">
                    </div>
                    <p class="p-grey" v-html="card.desc"> </p>
                    <span class="tag"> {{card.title}} </span>
                  </a>
            </li>
            </ul>
            <a href="#" class="button white">前往天猫购买</a>
      </div>
    </section>`
})