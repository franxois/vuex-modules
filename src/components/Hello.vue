<template>
  <div class="hello">
    <button @click="myClick">Add module</button>
    <button @click="myClick2">Test</button>
    <button @click="myClick3">Test</button>
    <button @click="removeAll">Remove all</button>

    <p>Store content : <pre>{{$store.state | pretty}}</pre> </p>

    <p v-for="(m,idx) in $store.state.modules" :key="idx">
      {{ m }}
    </p>
    
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js PWA"
    };
  },
  computed: {
    myTest() {
      return this.$store.state;
    }
  },
  methods: {
    myClick() {
      this.$store.dispatch("addModule", { payload: "plein de trucs" });
    },
    myClick2() {
      this.$store.commit("tartare/change", "???");
      this.$store.commit("params/0/tartare/change", "wha");
    },
    myClick3() {
      this.$store.commit("tartare/change", "?!?!?");
      this.$store.commit("params/1/tartare/change", "what ??");
    },
    removeAll() {
      this.$store.dispatch("removeAllModule", { payload: "plein de trucs" });
    }
  },
  filters: {
    pretty: function(value) {
      return JSON.stringify(value, null, 2);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}
pre {
  margin: auto;
  width: 80%;
  border: 1px solid red;
  text-align: left;
}
</style>
