<template>
	<div class="load-wrapper" v-show="load">
		<div class="load"></div>
	</div>
</template>
<script type="text/ecmascript2015">
	export default{
		props:{
			load:Boolean,
		}
	}
</script>
<style>
@keyframes rota{
	0% {transform: rotate(0deg)}
	10% {transform: rotate(36deg)}
	20% {transform: rotate(72deg)}
	30% {transform: rotate(108deg)}
	40% {transform: rotate(144deg)}
	50% {transform: rotate(180deg)}
	60% {transform: rotate(216deg)}
	70% {transform: rotate(252deg)}
	80% {transform: rotate(288deg)}
	90% {transform: rotate(324deg)}
	100% {transform: rotate(360deg)}
}
.load-wrapper{
	position: fixed;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
	
}
.load-wrapper .load{
		width: 30px;
		height: 30px;
		border: 3px solid #d43c33;
		border-radius: 50%;
		border-color: #d43c33 #d43c33 transparent transparent;
		/*border-bottom-style:dotted;*/
		animation: rota 1s infinite;
	}
</style>