<template>
  <div v-if="show">
    <p>默认初始值是{{show}}，所以是显示的</p>
    <button @click.stop="closeDiv">关闭</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      httptitle: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
      init: 0,
    };
  },
  props: ["show"],
  computed: {},
  methods: {
    closeDiv () {
      this.$emit("update:show", false); //触发 input 事件，并传入新值
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
