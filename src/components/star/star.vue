	<template>
		<div class="star" :class="starType">
			<span v-for="itemClass in itemClasses" :class="itemClass" class="star-item" :key="itemClass.index"></span>
		</div>
	</template>
	<script type="text/ecmascript2015">
		const LENGTH = 5;
		const CLS_ON = "on";
		const CLS_HALF = "half";
		const CLS_OFF = "off";

		export default {
			props: {
				size: {
				   type: Number
				},
				score: {
				   type: Number
				}
			},
			computed: {
				starType() {
					return "star-"+this.size;
				},
				itemClasses() {
					let result = [];
					let score = this.score/2 ;
					let hasDecimal = score % 1 >= 0.5;
					let integer=Math.floor(score);
					for(let i=0;i<integer;i++){
						result.push(CLS_ON);
					};
					if (hasDecimal) {
						result.push(CLS_HALF);
					};
					while(result.length < LENGTH) {
						result.push(CLS_OFF);
					}
					return result;
				}
			}
		}
	</script>
	<style>
		.star {
			font-size: 0
		}
		.star .star-item {
			display: inline-block
		}
		.star-48 .star-item {
			width: 20px;
			height: 20px;
			margin-right: 22px;
			background-size: 20px 20px;
		}
		.star-48 .star-item:last-child{
			margin-right: 0;
		}
		.star-48 .star-item.on {
			background-image: url("star48_on@3x.png");
		}
		.star-48 .star-item.half {
			background-image: url("star48_half@3x.png");
		}
		.star-48 .star-item.off {
			background-image: url("star48_off@3x.png");
		}
		.star-36 .star-item {
			width: 15px;
			height: 15px;
			margin-right: 3px;
			background-size: 15px 15px;
		}
		.star-36 .star-item:last-child{
			margin-right: 0;
		}
		.star-36 .star-item.on {
			background-image: url("star36_on@3x.png");
		}
		.star-36 .star-item.half {
			background-image: url("star36_half@3x.png");
		}
		.star-36 .star-item.off {
			background-image: url("star36_off@3x.png");
		}
		.star-24 .star-item {
			width: 10px;
			height: 10px;
			margin-right: 3px;
			background-size: 10px 10px;
		}
		.star-24 .star-item:last-child{
			margin-right: 0;
		}
		.star-24 .star-item.on {
			background-image: url("star24_on@3x.png");
		}
		.star-24 .star-item.half {
			background-image: url("star24_half@3x.png");
		}
		.star-24 .star-item.off {
			background-image: url("star24_off@3x.png");
		}
		
	</style>