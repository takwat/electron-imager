<template>
	<div id="app">
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>
<style>
#app{
	width: 100%;
	display: flex;
	flex-direction: column;
}
main{
	width: 100%;
}
</style>
<script>
export default {
	name: 'app',
}
</script>
