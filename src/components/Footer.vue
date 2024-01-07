<template>
    <div class="container" id="footer">
        <div class="row justify-content-center fixed-bottom">
            <p>Khwezi.All Rights Reserved.{{ currentYear }}</p>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
    currentYear() {
      return this.$store.getters.currentYear;
    },
  },
}
</script>
<style>
p{
   text-align: center;
}
.footer{
    z-index: 100;
}
</style>