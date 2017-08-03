<template>
  <div class='question'>
  <div class='question__adminbar'>
  <span>delete</span><span>duplicate</span><span>edot</span>
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

  border-width: $border-width;
  border-style: $border-style;
  border-color: $border-color;
  border-radius: $border-radius;

  margin:10px;

}

.question__adminbar {

background-color:rgb(103, 103, 103);
text-align: right;
}

.question__label {
  display:flex;
  justify-content:space-between;
  flex-direction: row;


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
  display: flex;
}

.question__input > input {
  flex: 1 1 auto;
}

.question__label label {
  flex:1 1 auto;
  display: flex;

  align-self: flex-start;
  margin-left:10px;
}

.question__adminbar {
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
}

.question__number {
display: flex;
font-weight:bold;
flex:0 0 auto;
}

.question__status {
flex: 0 0 auto;
}


// Changes base question__label style to accomodate admin bar
.question__label--admin {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

</style>
