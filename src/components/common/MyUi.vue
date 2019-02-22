<template>
  <ul>
      <slot></slot>
  </ul>
</template>

<script>
export default {
    name:'my-ul',
  data () {
    return {
    };
  },
}

</script>
<style scoped>
ul{
    margin: 0px;
    padding: 0px;
}
</style>