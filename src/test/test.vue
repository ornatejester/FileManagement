<template>
  <div>
   <input type="button" @click="getTable" value="测试"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      //获取数据
      getTable(){
        this.$http.post('/api/login',{
          a:"1",
          line:"1",
        }).then(res => {
          //this.tableDataBegin = res.data
          console.log("返回的数据"+JSON.stringify(res.data))
        }).catch(res => {
          console.log("出现错误"+res.error)
        })
      },
    }
  }
</script>

