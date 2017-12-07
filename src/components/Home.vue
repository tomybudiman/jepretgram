<template>
  <div>
    <Navbar/>
    <Modal/>
    <ul class="post-list">
      <li v-for="(post,index) in allPosts">
        <img :src="post.imageUrl" alt="Image">
        <div class="botom">
          <button type="button" @click="addVote(post._id)">Like {{post.likes.length}}</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Modal from '@/components/Modal'
export default {
  components: {
    Navbar,
    Modal
  },
  computed: {
    allPosts () {
      return this.$store.state.posts
    }
  },
  beforeCreate () {
    this.$store.commit('setAllPost')
  },
  methods: {
    addVote (postId) {
      var token = localStorage.getItem('token_lightgram')
      if (token != null) {
        this.$axios.post(`/post/${postId}`, {}, {
          headers: {
            token: token
          }
        }).then(function ({data}) {
          if (data.status) {
            this.$store.commit('setAllPost')
          } else {
            alert(data.msg)
          }
        }.bind(this)).catch(function (err) {
          console.log(err)
        })
      } else {
        alert('Please login!')
      }
    }
  }
}
</script>
<style lang="scss">
.post-list {
  margin: 0;
  padding: 0;
  width: 90%;
  margin: auto;
  max-width: 800px;
  margin-top: 20px;
  li {
    padding: 20px;
    list-style: none;
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: #FFF;
    box-sizing: border-box;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    img {
      margin: auto;
      display: block;
    }
    .botom {
      margin-top: 20px;
      border-top: 1px solid #BBB;
      button {
        height: 40px;
        border: none;
        outline: none;
        font-size: 18px;
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
}
</style>
