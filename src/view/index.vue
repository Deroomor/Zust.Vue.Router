<template>
  <div>
    <h3>首页</h3>
      <router-link to="/employee/dashboard">统计看板</router-link>
      <router-link to="/salary/index">工资列表</router-link>
      <router-link to="/employee/index">员工列表</router-link>
  </div>
</template>

<script>
export default {
  name:"index"
}
</script>

<style>
 
</style>