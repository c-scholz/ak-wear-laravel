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
            validator: value => {
                if(value === "") {
                    console.warn(`Cannot pass empty type. Only types ${Object.values(types).map((type, index) => '"' + type + '"' + (index < Object.values(types).length ? '' : ', '))} allowed.`)
                    return false
                }
                if(!Object.values(types).includes(value)) {
                    console.warn(`Type "${value}" not supported. Only types ${Object.values(types).map((type, index) => '"' + type + '"' + (index < Object.values(types).length ? '' : ', '))} allowed.`)
                    return false
                }
                return true
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