<template>
  <div class="col-9 col-md-6">
    <div class="groessenAngabe">
      <span class="input-number-minus" v-on:click="reduce()">–</span>
      <input class="input-number" :name="name" type="number" :value="value" min="0" v-on:focusout="update($event)">
      <span class="input-number-plus" v-on:click="add()">+</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  data() {
    return {
      value: 0
    } 
  },
  methods: {
    add() {
      this.value += 1;
    },
    reduce() {
      if(this.value > 0) {
        this.value -= 1;
      }
    },
    update(event) {
      this.value = Number(event.target.value);
    }
  }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
   -webkit-appearance: none;
   margin: 0;
}
input[type="number"] {
   -moz-appearance: textfield;
}
</style>