<template>
  <div class='question-options'>
    <gh-question-config-form :questions="formConfig.questions" :model="model"></gh-question-config-form>
  </div>
</template>
<script>

import { ghQuestionConfigForm } from "shared/components/layouts";
import ghQuestion from "shared/components/Question";

export default {
  name: 'gh-question-options',
  props: ['component', 'model'],
  components: { ghQuestionConfigForm },
  data() {
    return {
      formConfig: {
        questions: [],
      },
    };
  },
  methods: {
    // Stolen from vuejs prop inspection code.
    getType(fn) {
      const match = fn && fn.toString().match(/^\s*function (\w+)/)
      return match ? match[1] : ''
    },
  },
  created() {
    let vm = this; // forEach loop overwrites this

    let componentObject = ghQuestion.components[this.component];
    const props         = componentObject.props;

    let typeToComponents = {
      'String'  : 'ghText',
      'Boolean' : 'ghCheckbox',
      'Number'  : 'ghNumber',
      'Array'   : 'ghText',
      //'Array'   : 'tbc',
    };

    // Populated with defaults that apply to every single field
    let questions = [{
      label: 'Label',
      component: 'ghText',
      name: 'label',
    }];

    Object.keys(componentObject.props).forEach(function(propName) {
      let type = props[propName].type;
      let label = props[propName].label;

      // Skip anything without a type property
      // Maybe this should look at the label property?
      if (label) {
        let stringifiedType = vm.getType(type);
        let newQuestion = {
          label: label,
          component: typeToComponents[stringifiedType],
          name: propName,
        };

        // Better this? Booleans need options.
        if (stringifiedType == 'Boolean') {
          newQuestion.options = [""];
        }

        questions.push(newQuestion);
      }
    });

    vm.formConfig.questions = questions;
  },
}
</script>
<style lang="scss" scoped>

.question-options {
  border-width: $border-width;
  border-style: $border-style;
  border-color: $border-color;
  border-radius: $border-radius;
  background-color: $lightest-gray;
}

</style>
