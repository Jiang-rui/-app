<template>
	<div class="home">
		<h1 class="title">我的世界</h1>
		<p class="desc">
			这是一个基于vue的小项目，主要的模块有以下几个：电影部分，音乐部分，登录部分，图书部分
		</p>
		
		<div class="git">
			<h2 class="pro">访问gitHub上的源代码:</h2>
			<a href="https://github.com/Jiang-rui/-app" target="_blank">Github</a>
		</div>
		<div class="author">
			powered by Jiang Rui <br/>
			@2017
		</div>
	</div>
</template>
<script type="text/ecmascript2015">
	export default{

	}
</script>
<style lang="less" scoped>
.home{
	background-color: #f5f5f5;
	// width: 100%;
	// height: 100%;
	.title{
		font-size: 40px;
		line-height: 60px;
		color:#666;
		// text-align: center;
		padding: 60px 0 60px 100px;
		border-bottom: 1px solid #ddd;
	}
	.desc{
		padding: 20px;
		color: #888;
		background-color: #fff;
		box-shadow: 0px 4px 4px #ccc;
	}
	.git{
		.pro{
			color: #666;
			padding: 30px 20px;
			border-bottom: 1px solid #ddd;
		}
		a{
			display: block;
			text-align: center;
			font-size: 20px;
			line-height: 50px;
			background-color: #fff;
			box-shadow: 0px 4px 4px #ccc;
		}
	}
	.author{
		font-size: 20px;
		color:#666;
		text-align: center;
		line-height: 30px;
		padding: 80px 0;
	}
}
</style>