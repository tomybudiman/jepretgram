<template>
  <div>
    <div id="newPost" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">New Post</h4>
          </div>
          <div class="modal-body">
            <span class="input-label">URL</span>
            <input type="text" v-model="newPost.image">
            <span class="input-label">Caption</span>
            <input type="text" v-model="newPost.caption">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="newPostSubmit">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <div id="editPost" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Edit Caption</h4>
          </div>
          <div class="modal-body">
            <span class="input-label">Caption</span>
            <input type="text" v-model="editPostCaption">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateCaption">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newPost: {
        image: '',
        caption: ''
      },
      editCaption: ''
    }
  },
  computed: {
    editPostCaption () {
      return this.$store.state.edit.caption
    }
  },
  methods: {
    newPostSubmit () {
      var token = localStorage.getItem('token_lightgram')
      if (this.newPost.image !== '' && this.newPost.caption !== '' && token != null) {
        this.$axios.post('post', {
          image: this.newPost.image,
          caption: this.newPost.caption
        }, {
          headers: {
            token: token
          }
        }).then(function ({data}) {
          if (data.status) {
            this.resetForm()
            this.$store.commit('addNewPost', data.msg)
          } else {
            alert(data.msg)
          }
        }.bind(this)).catch(function (err) {
          console.log(err)
        })
      } else {
        alert('Abort! Abort Mission!')
        this.resetForm()
      }
    },
    updateCaption () {
      this.$axios.put(`post/${this.$store.state.edit.id}`, {
        caption: this.$store.state.edit.caption
      }).then(function ({data}) {
        if (data.status) {
          this.$store.commit('setAllPost')
        } else {
          alert(data.msg)
        }
      }.bind(this)).catch(function (err) {
        console.log(err)
      })
    },
    resetForm () {
      this.newPost.image = ''
      this.newPost.caption = ''
      this.editPost.caption = ''
    }
  }
}
</script>
<style lang="scss">
.modal-body {
  .input-label {
    color: #555;
    display: block;
    font-size: 16px;
    margin-top: 5px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    height: 40px;
    outline: none;
    font-size: 18px;
    margin-bottom: 5px;
    box-sizing: border-box;
    padding: 5px 10px 5px 10px;
  }
}
</style>
