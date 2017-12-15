<template>
    <div>
      <products-item></products-item>
    </div>
</template>
<style scoped>

</style>
<script>
  import productsItem from '@/components/Products_item'
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      productsItem
    }
  }
</script>
