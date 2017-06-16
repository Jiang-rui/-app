<template>
<div class="loadsign">
	<form action="#" v-show="load" class="unit" method="GET">
		<h1 class="title">登录我的世界</h1>
		<div class="name">
			<input type="text"  placeholder="邮箱/手机号/用户名" />
		</div>
		<div class="password">
			<input type="password" placeholder="密码" />
		</div>
		<div class="submit">
			<input type="submit" value="登录"/> 
		</div>
		<div class="signload" >
			<a @click="tosign">没有账号，去注册！</a>
		</div>
	</form>
	<form action="#" v-show="sign" class="unit" method="POST">
		<h1 class="title">注册账号</h1>
		<div class="name">
			<input type="text"  placeholder="邮箱/手机号/用户名" />
		</div>
		<div class="password">
			<input type="password" placeholder="密码" />
		</div>
		<div class="password2">
			<input type="password" placeholder="确认密码">
		</div>
		<div class="submit">
			<input type="submit" value="注册"/> 
		</div>
		<div class="signload" >
			<a @click="toload">返回登录界面</a>
		</div>
	</form>
</div>
</template>
<script type="text/ecmascript2015">
	export default{
		data(){
			return {
				load:true,
				sign:false,
				user:{
					name: 123,
					password:123
				}
			}
		},
		methods:{
			tosign(){
				this.load = false;
				this.sign = true;
			},
			toload(){
				this.load = true;
				this.sign = false;
			}
		}
	}
</script>
<style lang="less" scoped>
.loadsign {
	padding: 20px;
	.unit{
		.title{
			text-align: center;
			color: #333;
			font-weight: bold;
			padding-bottom: 20px;
		}
		.name,.password,.password2{
			border: 2px solid #f0f0f0;
			line-height: 40px;
			font-size: 16px;
			padding-left: 10px;
			font-weight: bold;
			color:#888;
		}
		.name{
			border-radius: 5px 5px 0 0;
			input{
				width: 100%;
				height: 100%;
				outline-style: none;
			}
		}
		.password{
			border-top-color: transparent;
			input{
				width: 100%;
				height: 100%;
				outline-style: none;
			}
		}
		.password2{
			border-top-color: transparent;
			border-radius:  0 0 5px 5px;
		}
		.submit{
			margin-top: 20px;
			input{
				width: 100%;
				font-size: 16px;
				line-height: 40px;
				background-color: #00b600;
				color:#fff;
			}
		}
		.signload{
			padding-top: 10px;
			text-align: center;
			color:#888;
			text-decoration: underline;
		}
	}
}
</style>