import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

//import EmployeeDashboard from "@/view/employee/dashboard";
//import SalaryIndex from "@/view/salary/index";

Vue.use(Router);
var myWrapper = require.context('../view',true,/.*\.vue/);
myWrapper.keys().forEach(key => {
  var tmp=myWrapper(key).default;
  Vue.component(tmp.name,tmp);
});
//Vue.component(EmployeeIndex.name,EmployeeIndex);
//Vue.component(EmployeeDashboard.name,EmployeeDashboard);
//Vue.component(SalaryIndex.name,SalaryIndex);

export default new Router({
  routes: [
    {
      path: '/:controller/:action',
      name:"level2",
      component:{
        render:function(createElement){
          //Vue.component("salary-index",SalaryIndex);
          console.log("router-------"+this.$route.params.controller + "-" + this.$route.params.action);
          return createElement(this.$route.params.controller + "-" + this.$route.params.action);
        }
      }
    },
    {
      path: '/:action',
      name: 'level1',
      component: {
        render:function(createElement){
          console.log("router--------" + "-" + this.$route.params.action);
          return createElement(this.$route.params.action);
        }
      }
    },
    {
      path: '*',
      name: 'index',
      component: {
        render:function(createElement){
          console.log("router"+"----index");
          return createElement("index");
        }
      }
    },
  ]
})
