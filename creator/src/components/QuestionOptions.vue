<template>
  <gh-fieldset :questions="formConfig.questions" :model="model"></gh-fieldset>
</template>
<script>

import ghFieldset from "shared/Fieldset";
import ghQuestion from "shared/Question";

export default {
  name: 'gh-question-options',
  props: ['component', 'model'],
  components: { ghFieldset },
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
      //'Array'   : 'tbc',
      'Array'   : 'ghText',
      //'Boolean' : 'ghText',
    };


    let x = [];

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
          genComponent.options = ["Required"];
          delete genComponent.label;
        }

        x.push(genComponent);
      }
    }
    );

    console.log(x);
    this.formConfig.questions = x;
  },
}
</script>
<style scoped>
</style>
