<template>
	<div class='question'>
		<div class='question-label'>
			<span class='number'>{{ question.number }}</span>
			<label>{{ question.label }}</label>
			<span class='status'>status</span>
		</div>
		<div class='question-input'>
			<p>Field goes here</p>
			<p>question type: {{ question.type }}<br>name: {{ question.name }}</p>
		</div>
	</div>
</template>
<script>
export default {
	name: 'question',
	props: ['question'],
}
</script>
<style lang="scss">
.question {
  margin: 1em 0em;
}

.question-label {
	background-color: $light-gray;
	width: 100%;
	padding: 1em;
}

.question-input {
	background-color: $not-so-light-gray;
	padding: 1em;
}

.question-label label {
	display: inline;
}
</style>
