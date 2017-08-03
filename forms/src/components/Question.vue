<template>
  <div class='question'>
  <div class='question__adminbar'>
  <span>x</span><span>duplicate</span>
  </div> <!-- Make me appear only in the builder Ash! and can you also append the class 'question__label--admin' to the div below -->
    <div class='question__label question__label--admin'>
      <span class='question__number'>{{ number }}</span>
      <label>{{ question.label }}</label>
      <span class='question__status'>* Required</span>
    </div>
    <div class='question__input'>
      <component :is="question.component" :answers="answers" :question="question"></component>
    </div>
  </div>
</template>
<script>

//Pull in slot types
import ghText from './Text';
import ghScale from './Scale';
import ghSelect from './Select';

export default {
  name: 'question',
  props: ['number', 'question', 'answers'],
  components: { ghText, ghScale, ghSelect },
}
</script>
<style lang="scss">

.question {
  display:flex;
  flex-direction: column;

  margin: 1em 0em;
  border-width: $border-width;
  border-style: $border-style;
  border-color: $border-color;
  border-radius: $border-radius;
}

.question__adminbar {

background-color:rgb(103, 103, 103);

}

.question__label {
  display:flex;
  justify-content:space-between;


  background-color: $lightest-gray;
  width: 100%;
  padding: 1em;
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
  border-bottom:$border-color $border-style $border-width;

}

.question__input {
  background-color: $lightest-gray;
  padding: 1em;
  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;
}

.question__label label {
  display: flex;
  flex-direction:row;

  margin-left:10px;
}

.question__adminbar {
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
}

.question__label--admin {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

.question__number {
display:inline-block;
font-weight:bold;
}

.question__status {

}

</style>
