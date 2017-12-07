<template>
  <div class="form">
    <div class="header">
      <button type="button" data-toggle="tab" href="#signin" @click="resetForm">Login</button>
      <button type="button" data-toggle="tab" href="#signup" @click="resetForm">Register</button>
    </div>
    <div class="tab-content">
      <div id="signin" class="tab-pane in active">
        <span class="input-label">Email</span>
        <input type="text" placeholder="Email" v-model="email">
        <span class="input-label">Password</span>
        <input type="password" placeholder="Password" v-model="password">
        <button type="button" class="btn btn-primary" @click="signin">Login</button>
      </div>
      <div id="signup" class="tab-pane">
        <span class="input-label">Email</span>
        <input type="text" placeholder="Email" v-model="email">
        <span class="input-label">Password</span>
        <input type="password" placeholder="Password" v-model="password">
        <button type="button" class="btn btn-primary" @click="signup">Register</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signin () {
      if (this.email !== '' && this.password !== '') {
        this.$axios.post('user/signin', {
          email: this.email,
          password: this.password
        }).then(function ({data}) {
          if (data.status) {
            this.resetForm()
            localStorage.setItem('token_lightgram', data.msg)
            this.$router.push('/')
          } else {
            alert(data.msg)
          }
        }.bind(this)).catch(function (err) {
          console.log(err)
        })
      } else {
        alert('Please complete the form!')
      }
    },
    signup () {
      if (this.email !== '' && this.password !== '') {
        this.$axios.post('user/signup', {
          email: this.email,
          password: this.password
        }).then(function ({data}) {
          if (data.status) {
            alert(data.msg)
            this.resetForm()
          } else {
            alert(data.msg)
          }
        }.bind(this)).catch(function (err) {
          console.log(err)
        })
      } else {
        alert('Please complete the form!')
      }
    },
    resetForm () {
      this.email = ''
      this.password = ''
    }
  }
}
</script>
<style lang="scss">
.form {
  top: 50%;
  width: 90%;
  margin: auto;
  max-width: 350px;
  border-radius: 5px;
  position: relative;
  background-color: #FFF;
  box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
  -webkit-box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  .header {
    overflow: hidden;
    button {
      width: 50%;
      float: left;
      height: 50px;
      border: none;
      outline: none;
    }
  }
  .tab-content {
    padding: 20px;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
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
      padding: 5px 10px 5px 10px;
    }
    button {
      float: right;
      margin-top: 10px;
    }
  }
}
</style>
