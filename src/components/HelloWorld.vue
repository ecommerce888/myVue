<!--slot的运用-->
<template>
    <div>
      <v-two>
8888888888888     dfsdf88899999999
<div slot="rrr"></div>
      </v-two>
    </div>
</template>
<script>
/* eslint-disable */ 
import Vue from "vue";
Vue.component("v-two", {
  template: ` <div>
      <nav>
        <slot name="nav">nav1</slot>
      </nav>
      <main>
        <slot name="main">main2222</slot>
      </main>
      <footer>
        <slot name="footer">footer</slot>
      </footer>
      <slot></slot>
      <slot name="rrr"></slot>
    </div>`,
  props: [],
  methods: {
    closeDiv2() {
    }
  }
});
export default {
  data() {
    return {
    };
  },
  methods: {

  }
};
</script>

