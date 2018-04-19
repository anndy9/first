import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  routes:[
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/register'),
    },
    {
      path: '/home',
      component: () => import('../components/home'),
      children:[
        {
          path: '',
          name:'store',
          component: () => import('../components/store')
        }
      ]
    }
  ]
}) 
router.beforeEach((to, from, next) => {
  let login = JSON.parse(sessionStorage.getItem('user'));
  if(!login){
    if(to.name == 'login' || to.name == 'register'){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})

export default router;

