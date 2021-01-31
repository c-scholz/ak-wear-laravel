<template>
    <input :name="name" v-model="inputData">
</template>

<script>
import getStreetInfo, { TYPE_STREETINFO } from '../Shared/Validators/streetInfo'
import getPhoneInfo, { TYPE_PHONEINFO } from '../Shared/Validators/phoneInfo'

const types = {
    STREETINFO: TYPE_STREETINFO,
    PHONEINFO: TYPE_PHONEINFO,
}

export default {
    props: {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true,
            validator: function (value) {
                return [
                    types.STREETINFO, 
                    types.PHONEINFO
                ].indexOf(value) !== -1
            }
        },
        value: {
            type: Object,
            required: true
        }

    },
    data() {
        return {
            inputData: ''
        }
    },
    computed: {
        inputInfo: function() {
            switch(this.type){
                case types.STREETINFO:
                    return getStreetInfo(this.inputData)
                case types.PHONEINFO:
                    return getPhoneInfo(this.inputData)
                default: 
                    return {}
            }
        }
    },
    watch: {
        inputData: function() {
            this.$emit('input', this.inputInfo)
        }
    }
}
</script>