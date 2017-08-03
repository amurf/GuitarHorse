<template>
  <div>
    <h1>Will this work?</h1>
    <code>{{ formConfig.questions }}</code>
    <gh-fieldset :questions="formConfig.questions"></gh-fieldset>
  </div>
</template>
<script>

import ghFieldset from "shared/Fieldset";

export default {
  name: 'gh-question-options',
  props: ['component'],
  components: { ghFieldset },
  data() {
    return {
      formConfig: {
        questions: [],
      },
    };
  },
  created() {
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


    console.log(assertType("abc", String));
    const props = this.component.props;

    let typeToComponents = {
      'String'  : 'ghText',
      //'Boolean' : 'checkbox',
      //'Array'   : 'tbc',
      'Array'   : 'ghText',
      'Boolean' : 'ghText',
    };


    let x = [];

    Object.keys(this.component.props).forEach(
    prop => {
      let type = props[prop].type;
      if (type) {

        let stringifiedType = getType(type);
        x.push({label: props[prop].label, component: typeToComponents[stringifiedType], name: prop});
        console.log(prop, props[prop].label, getType(type));
      }
    }
    );

    this.formConfig.questions = x;
  },
}
</script>
<style scoped>
</style>
