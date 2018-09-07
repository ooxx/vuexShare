<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ num }}</div>

    <div><button @click="increment">+</button> <button @click="reduce">-</button></div>
    <div><button @click="incrementActions">+</button> <button @click="reduceActions">-</button></div>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  store,
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Vuex'
    }
  },
  // computed: {
  //   num() {
  //     return this.$store.state.num
  //   }
  // }
  computed: {
    ...mapState(['num']),
    ...mapGetters(['num'])
  },
  // methods: {
  //   increment() {
  //     return this.$store.commit('increment')
  //   }
  // }
  methods: {
    ...mapMutations(['increment', 'reduce']),
    ...mapActions(['incrementActions', 'reduceActions'])
  }

}
</script>

<style scoped>

</style>
