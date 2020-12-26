<template>
  <div>
    <input class="form-control inputAbstand" type="text" name="nameInput" placeholder="Hier Namen eintragen" @keydown.enter="addName">
    <div class="nameContainer">
      <ul>
        <li v-for="(name, index) in names" :key="index">
            <span class="namelistButtons"><font-awesome-icon :icon="['fas', 'grip-vertical']" /></span>
                <span class="namelistName" type="text">{{ name }}</span>
            <span class="namelistButtons" @click="removeName(index)"><font-awesome-icon :icon="['fas', 'times']" /></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  data () {
    return {
      names: ['Max Mustermann', 'Marie Musterfrau']
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