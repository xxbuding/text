<template>
  <div class="classify">

      <classsearch></classsearch>

      <classgroup></classgroup>

      <classlist></classlist>


      <vuefooter></vuefooter>
  </div>
</template>

<script>
import Classgroup from '../components/classify/classgroup.vue'

import Classlist from '../components/classify/classlist.vue'
import Classsearch from '../components/classify/classsearch.vue'
import vuefooter from "../components/compon/vuefooter.vue"

export default {
  components: { vuefooter, Classlist, Classsearch, Classgroup },
   created(){
    // console.log('my' ,this.$route);
    let { title } = this.$route.meta
    let {icon} = this.$route.meta

    document.title = title 
    document.icon = icon

  },
}
</script>

    
<style>

</style>