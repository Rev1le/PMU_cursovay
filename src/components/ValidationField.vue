<template>
<div class="validation-field">
  <span>{{ label }}</span>
  <el-input-number :value="value" @change="$emit('update:value', $event)" :min="0" />
</div>
</template>

<script>
export default {
  name: "ValidationField",
  props: ["label", "value"],
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.validation-field {
  display: inline-block;
  width: min-content;
  margin: 5px;
  padding-top: 5px;
}
</style>