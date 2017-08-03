<template>
<form>
  <ul>
    <li v-for="option in question.options" :key="option">
      <input type="radio" :id="option" :value="option" v-model="answers[question.name]">
      <label for="option">{{ option }}</label>
    </li>
  </ul>
</form>
</template>
<script>
export default {
  name: 'scale',
  props: ['question', 'answers'],
  computed: {
    options: function() {
      let questionOptions = question.options;
      if (Array.isArray(questionOptions)) {
        return questionOptions;
      }

      var optionsRange = [];
      for (var i = 1; i <= s; i++) {
        optionsRange.push(i);
      }

      return optionsRange;
    },
  },
}
</script>
<style lang="scss">

//likert scale styles

form {
  list-style:none;
  width:100%;
  margin:0;
  padding:0 0 35px;
  display:block;
  border-bottom:2px solid #efefef;
}
form:last-of-type {border-bottom:0;}
form:before {
  content: '';
  position:relative;
  top:11px;
  left:9.5%;
  display:block;
  background-color:#efefef;
  height:4px;
  width:78%;
}
form li {
  display:inline-block;
  width:19%;
  text-align:center;
  vertical-align: top;
}
form li input[type=radio] {
  display:block;
  position:relative;
  top:0;
  left:50%;
  margin-left:-6px;

}

</style>
