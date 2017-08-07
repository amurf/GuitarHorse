<template>
  <div class='question-options'>
    <gh-question-config-form :questions="formConfig.questions" :model="model"></gh-question-config-form>
  </div>
</template>
<script>

import { ghQuestionConfigForm } from "shared/layouts";
import ghQuestion from "shared/Question";

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
  created() {

    let componentObject = ghQuestion.components[this.component];


    function getType (fn) {
      const match = fn && fn.toString().match(/^\s*function (\w+)/)
      return match ? match[1] : ''
    }


    const simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/

    function assertType (value, type) {
      let valid
      const expectedType = getType(type)
      if (simpleCheckRE.test(expectedType)) {
        valid = typeof value === expectedType.toLowerCase()
      } else if (expectedType === 'Object') {
        valid = isPlainObject(value)
      } else if (expectedType === 'Array') {
        valid = Array.isArray(value)
      } else {
        valid = value instanceof type
      }
      return {
        valid,
        expectedType
      }
    }


    const props = componentObject.props;

    let typeToComponents = {
      'String'  : 'ghText',
      'Boolean' : 'ghCheckbox',
      'Array'   : 'ghText',
      //'Array'   : 'tbc',
    };

    let x = [];
    x.push({
      label: 'Label',
      component: 'ghText',
      name: 'label',
    });

    Object.keys(componentObject.props).forEach(
    prop => {
      let type = props[prop].type;
      if (type) {

        let stringifiedType = getType(type);

        let genComponent = {
          label: props[prop].label,
          component: typeToComponents[stringifiedType],
          name: prop
        };

        // Better this?
        if (stringifiedType == 'Boolean') {
          genComponent.options = [""];
          // Reinstated label - Uh tried to remove 'Mandatory' - Ash help I am not good with computer.
        }

        x.push(genComponent);
      }
    }
    );

    this.formConfig.questions = x;
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
