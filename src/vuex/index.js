import Vue from 'vue'
import Vuex from 'vuex'
import http from 'axios'

Vue.use(Vuex)
const axios=http.create({
  baseURL: 'http://localhost:3032/'
})

const store=new Vuex.Store({
  state:{
    posts:[],
    userId:null,
    edit:{
      id:'',
      caption:''
    }
  },
  mutations:{
    setUserId(state,token){
      axios.get('user/getid',{
        headers:{
          token:token
        }
      }).then(function({data}){
        state.userId=data.msg;
      }).catch(function(err){
        console.log(err);
      });
    },
    setAllPost(state){
      axios.get('post').then(function({data}){
        state.posts=data.msg;
      }).catch(function(err){
        console.log(err);
      });
    },
    addNewPost(state,post){
      state.posts.unshift(post);
    },
    removePost(state,postId){
      state.posts.forEach(function(post,i){
        if(post._id == postId){
          state.posts.splice(i,1)
        }
      })
    },
    setEditModal(state,data){
      state.edit.id=data._id;
      state.edit.caption=data.caption;
    }
  }
});

export default store
