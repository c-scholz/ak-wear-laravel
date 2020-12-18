<template>
  <div>
    <div class="nameContainer">
      <div v-for="(name, index) in names" :key="name">
        {{ name }} <span @click="removeName(index)"><font-awesome-icon :icon="['fas', 'times']" /></span>
      </div>
    </div>
    <input type="text" name="nameInput" placeholder="hier Namen eingeben" @keydown.enter="addName">
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  data () {
    return {
      names: ['Max Mustermann', 'Franziska Musterfrau']
    }
  },
  methods: {
    addName(event) {
      event.preventDefault();
      var val = event.target.value;
      if(val.length > 0) {
        this.names.push(val);
        event.target.value = '';
      }
    }, 
    removeName(index) {
      this.names.splice(index, 1);
    }
  }
}
</script>