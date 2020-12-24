<template>
    <div class="col-12 col-sm-6 col-md-6 col-lg-4 card-container" :class="{flipped: isFlipped}">
        <div class="flip-card">
            <div class="front">
                <div class="motivPaket">
                    <a class="motivLink vorderseite" @click="flip()">Rückseite&nbsp;&nbsp; <font-awesome-icon :icon="['fas', 'share']" /></a>
                    <img class="motivPaketBild img-fluid" src="../../assets/img/textil_bg.png">
                    <div class="zentriertesMotiv">
                        <img class="motiv" src="../../assets/img/motiv_abschlussmeister.png">
                    </div>
                </div>
            </div>
            <div class="back">
                <div class="motivPaket">
                    <a class="motivLink rueckseite" @click="flip()"><font-awesome-icon :icon="['fas', 'reply']" />&nbsp;&nbsp;Vorderseite</a>
                    <img class="motivPaketBild img-fluid" src="../../assets/img/textil_bg.png">
                    <div class="zentriertesMotiv">
                        <img class="motiv" src="../../assets/img/motiv_abschlussmeister.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isFlipped: false
            }
        },
        methods: {
            flip() {
                this.isFlipped = !this.isFlipped;
                this.log();
            },
            log() {
                console.log("clicked");
            }
        }
    }

</script>

<style scoped>
    .card-container {
        perspective: 1000px;
    }

    /* flip the pane when hovered */
    .card-container.flipped .flip-card {
        transform: rotateY(180deg);
    }

    .card-container,
    .front,
    .back {
        width: 100%;
        height: 280px;
    }

    /* flip speed goes here */
    .flip-card {
        transition: 0.6s;
        transform-style: preserve-3d;
        position: relative;
    }

    /* hide back of pane during swap */
    .front,
    .back {
        backface-visibility: hidden;
        background-color: grey;
        position: absolute;
        top: 0;
        left: 0;
    }

    /* front pane, placed above back */
    .front {
        z-index: 2;
        /* for firefox 31 */
        transform: rotateY(0deg);
    }

    /* back, initially hidden pane */
    .back {
        transform: rotateY(180deg);
    }

</style>
