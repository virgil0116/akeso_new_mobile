<template>
  <div class="container">
    <p>child_select</p>
    <router-link to="/bind_success">
      <button>下一步</button>
    </router-link>
    <router-link to="/create_child">
      <button>创建孩子</button>
    </router-link>
    <div>
      <group>
        <cell :title="name" :value="value" @click.native="onClick"/>
      </group>
    </div>
  </div>
</template>

<script>
import { Cell, Group } from 'vux'
export default {
  name: 'ChildSelect',
  components: {
    Group,
    Cell
  },
  data() {
    return {
      name: '123',
      value: '456'
    }
  },
  methods: {
    onClick() {
      console.log('aaaaaaa')
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
