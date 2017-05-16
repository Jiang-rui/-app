<template>
	<div class="book">
		<input type="text" v-model="txt" class="search" placeholder="查找你感兴趣的书籍">
		<span class="search-button" @click="search">搜索</span>

		<div class="tip">豆瓣图书和音乐的api都不给用似乎，无法访问</div>
	</div>
</template>
<script type="text/ecmascript2015">
	export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.book
	padding 18px
	.search 
		display inline-block
		height 30px
		width 60%
		padding-left 10px
		font-size 12px
		outline-style none
		border 1px solid #f0f0f0
		margin 0 40px
	.search-button 
		display inline-block
		padding 5px
		border-radius 10%
		font-size 12px
		background-color: #00b600
		border 1px solid #00b600
		color #fff
	.tip 
		margin-top 40px
</style>