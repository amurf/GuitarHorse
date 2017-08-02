<template>
  <div>
    <h1>Will this work?</h1>
    <code>{{ component }}</code>
  </div>
</template>
<script>
export default {
  name: 'gh-question-options',
  props: ['component'],
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
    Object.keys(this.component.props).forEach(
    prop => {
      let type = props[prop].type;
      if (type) {
        console.log(prop, props[prop].label, getType(type));
      }
    }
    );
  },
}
</script>
<style scoped>
</style>
