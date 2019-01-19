<template>
  <section class="container">
    <div>
        <span>ユーザーＩＤ：{{this.$store.state.user.userId}}</span>
        <br>
        <span>ユーザーＩＤ/getter：{{$store.getters['user/getUserId']}}</span>
        <br>
        <span>ユーザー名：{{userInfo.userName}}</span>
        <br>
        <br>
        <button @click="login">メソッド経由</button>
        <button @click="$store.dispatch('user/login', 'dispatch経由ユーザー')">dispatch経由</button>
        <br>
        <button @click="setMessage">メッセージ設定</button>
        <span>{{messageInfo.message}}</span>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    userInfo () {
      return this.$store.state.user
    },
    messageInfo () {
      return this.$store.state.message
    }
  },
  methods: {
    login: function () {
      this.$store.dispatch('user/login', 'メソッド経由ユーザー')

      // 以下でも同じ
      // this.$store.commit(`counter/increment`, 1)
    },
    setMessage: function() {
      this.$store.dispatch('message/setMessage')
    }
  }
}
</script>