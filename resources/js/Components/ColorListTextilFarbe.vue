<template>
    <div>
        <p class="motivPaketTextilMotivfarbe-text">{{ text }}</p>
        <ul :class="{ 'motivPaketTextilfarbe-color-list': type == 'textil', 'motivPaketMotivfarbe-color-list': type == 'motiv' }">
            <li v-for="color in colors"  
                :key="color.name" 
                :id="color.name" 
                :class="{ 
                    active: color.name === activeColor, 
                    'motivPaketTextilfarbe-color': type == 'textil', 
                    'motivPaketMotivfarbe-color': type == 'motiv'  
                }" 
                :style="{background: color.color_value}">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            colors: Array,
            type: String,
            text: String
        }, 
        data: function() {
            return {
                activeColor: 'black'
            }
        },
        methods: {
            toggleActive(color) {
                this.activeColor = color
            },
        }
    }
</script>

<style scoped>
/*
li.motivPaketTextilfarbe-color:nth-child(3) {
    background: #c7cccf;
}

li.motivPaketTextilfarbe-color:nth-child(4) {
    background: #464644;
}

li.motivPaketTextilfarbe-color:nth-child(5) {
    background: #002c5b;
}

li.motivPaketTextilfarbe-color:nth-child(6) {
    background: #3d5eab;
}

li.motivPaketTextilfarbe-color:nth-child(7) {
    background: #009ada;
}

li.motivPaketTextilfarbe-color:nth-child(8) {
    background: #acc6e9;
}

li.motivPaketTextilfarbe-color:nth-child(9) {
    background: #38307d;
}

li.motivPaketTextilfarbe-color:nth-child(10) {
    background: #cb1430;
}

li.motivPaketTextilfarbe-color:nth-child(11) {
    background: #610021;
}

li.motivPaketTextilfarbe-color:nth-child(12) {
    background: #d46120;
}

li.motivPaketTextilfarbe-color:nth-child(13) {
    background: #ecc2ce;
}

li.motivPaketTextilfarbe-color:nth-child(14) {
    background: #009c55;
}

li.motivPaketTextilfarbe-color:nth-child(15) {
    background: #304832;
}

li.motivPaketTextilfarbe-color:nth-child(16) {
    background: #6b6e53;
}

li.motivPaketTextilfarbe-color:nth-child(17) {
    background: #f4c30f;
}

li.motivPaketTextilfarbe-color:nth-child(18) {
    background: #483a2f;
}



li.motivPaketMotivfarbe-color:nth-child(1) {
    background: #000000;
}

li.motivPaketMotivfarbe-color:nth-child(2) {
    background: #f2f2f2;
}

li.motivPaketMotivfarbe-color:nth-child(3) {
    background: #c7cccf;
}

li.motivPaketMotivfarbe-color:nth-child(4) {
    background: linear-gradient(135deg, #FF0000 50%, #000000 50%);
}

li.motivPaketMotivfarbe-color:nth-child(5) {
    background: conic-gradient(#FF0000 0% 33.33%, #000000 33.33% 67.66%, yellow 33.33% 100%);
}

li.motivPaketMotivfarbe-color:nth-child(6) {
    background: conic-gradient(#FF0000 0% 25%, #000000 25% 50%, blue 25% 75%, #f2f2f2 25% 100%);
}*/
</style>