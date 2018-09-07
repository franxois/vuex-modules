<template>
  <div class="hello">
    <button @click="addModule">Add module</button>
    <br/><button
      v-for="id in $store.getters.nbParams"
      :key="id"
      @click="changeTartare(id-1)"
    >Test commit on config/params/{{ id - 1 }}</button>
    <br/>
    <button @click="removeAll" :disabled="this.$store.getters.nbParams == 0">Remove all modules</button>

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
    addModule() {
      this.$store.dispatch("addModule");
    },
    changeTartare(idTartare) {
      this.$store.commit(
        `params/${idTartare}/tartare/change`,
        "Hehe " + new Date()
      );
    },
    removeAll() {
      this.$store.dispatch("removeAllModule");
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
