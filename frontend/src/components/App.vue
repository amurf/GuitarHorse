<template>
	<div>
		<gh-navbar></gh-navbar>
		<!-- Begin page content -->
		<div class="container content">
			<div class="mt-3">
				<h1>Sticky footer with fixed navbar</h1>
			</div>
			<p class="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with <code>padding-top: 60px;</code> on the <code>body &gt; .container</code>.</p>
		</div>
		<gh-footer></gh-footer>
	</div>
</template>
<script>
import ghNavbar from './Navbar';
import ghFooter from './Footer';

export default {
	name: 'app',
	components: { ghNavbar, ghFooter },
}
</script>
<style lang="scss">
@import '~styles/overrides.scss';

.container.content {
	padding: 60px 15px 0;
}
</style>
