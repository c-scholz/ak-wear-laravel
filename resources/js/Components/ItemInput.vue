<template>
  <div>
    <input class="form-control inputAbstand" type="text" :name="name" :placeholder="placeholder" v-on:keydown.enter="addItem">
    <div class="itemContainer">
      <div class="row" v-for="(item, index) in items" :key="index">
          <div class="itemlistButtons col-3 col-sm-2">
              <font-awesome-icon class="itemlistButton" :icon="['fas', 'arrows-alt']" />
          </div>
          <div class="itemlistName col-6 col-sm-8 noPadding" type="text">{{ item }}</div>
          <div class="itemlistButtons col-3 col-sm-2 justify-content-end">
              <font-awesome-icon class="itemlistButton" :icon="['fas', 'times']" v-on:click="removeItem(index)" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    model: {
        prop: 'parentItems',
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        parentItems: {
            type: Array,
            required: true,
        },
        maxEntries: {
            type: Number,
            default: 20,
        },
        preset: {
            type: Array,
            default: () => ['Item 1'],
        },
        placeholder: {
            type: String,
            default: 'Hier Element eingeben',
        },
        type: {
            type: String,
            default: 'tags',
            validator: value => { return ['tags','draggable'].indexOf(value) !== -1 }
        }
    },
    created: function() {
        this.items = this.$props.preset;
        console.log(this.items.length);
    },
    data() {
        return {
            items: [],
        }
    },
    methods: {
        addItem(event) {
            event.preventDefault();
            console.log('pre add', this.items.length);
            var item = event.target.value;
            if(item.length > 0) {
                if(this.items.length >= this.maxEntries) {
                    this.$emit('warning', `Der ausgewählten Liste können maximal ${ this.maxEntries } Elemente hinzugefügt werden!`);
                    return;
                }
                this.items.push(item);
                event.target.value = '';
            }
            this.$emit('input', this.items);
        }, 
        removeItem(index) {
            console.log('pre remove', this.items.length)
            this.items.splice(index, 1);
            this.$emit('input', this.items);
        },
        dragItem(oldIndex, newIndex) {
            //TODO
        }
    },
    watch: {
        items: function(items) {
            console.log('watch', items.length)
        }
    }
}
</script>

<style lang="scss" scoped>
.itemContainer {
    font-family: 'Muli Light', sans-serif;
    margin-top: 15px;
}

.itemContainer > div {
    border-bottom: 1px solid #e6e6e6;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    list-style: none;
    padding-bottom: 7px;
    margin-bottom: 10px;
}

.itemContainer div .itemlistButtons {
    display: flex;
    align-items: center;
}

.itemContainer div .itemlistButton:active,
.itemContainer div .itemlistButton:focus,
.itemContainer div .itemlistButton:hover {
    background: #1a1a1a;
    color: #fff;
    border: 2px solid transparent;
    transition: all 0.25s;
}

.itemContainer div .itemlistButton {
    color: #1a1a1a;
    height: 25px;
    width: 25px;
    border: 2px solid #1a1a1a;
    border-radius: 5px;
    padding: 4px;
}

.itemlistButtons:first-child {
    padding-left: 0;
}

.itemlistButtons:last-child {
    padding-right: 0;
}

.itemlistButtons:first-child .itemlistButton {
    cursor: move;
}

.itemlistButtons:last-child .itemlistButton {
    cursor: pointer;
}
</style>