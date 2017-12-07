import Vue from 'vue'
import Vuex from 'vuex'
import http from 'axios'

Vue.use(Vuex)
const axios=http.create({
  baseURL: 'http://localhost:3032/'
})

const store=new Vuex.Store({
  state:{
    posts:[]
  },
  mutations:{
    setAllPost(state){
      axios.get('post').then(function({data}){
        state.posts=data.msg;
      }).catch(function(err){
        console.log(err);
      });
    },
    addNewPost(state,post){
      state.posts.unshift(post);
    }
  }
});

export default store
