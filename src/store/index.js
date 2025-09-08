import { createStore } from 'vuex'
import ModuleUser from './user'

export default createStore({
  state: {
  },
  getters: {  // 只读取不修改
  },
  mutations: {  // 一般直接对state进行修改的操作一定在这里执行, 不能做异步操作
  },
  actions: {  // 各种操作（比如更新用户 UpdateUser() ）能做异步操作
  },
  modules: {  // 对state进行分割
    user: ModuleUser,
  }
});

