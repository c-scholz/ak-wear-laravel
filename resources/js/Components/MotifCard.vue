<template>
    <div class="col-12 col-sm-6 col-md-6 col-lg-4 card-container" :class="{flipped: isFlipped}">
        <label for="motivPaketItem-item-1" class="motivPaketSelected-label">
            <input type="radio" name="selected-item" id="motivPaketItem-item-1">
            <span class="motivPaketIcon">
                <font-awesome-icon :icon="['fas', 'check']" />
            </span>
                
            <div class="flip-card">
                <div class="front">
                    <div class="motivPaket">
                        <a class="motivLink vorderseite" @click="flip()">Rückseite&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'share']" /></a>
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
                        <div class="zentriertesMotiv zentriertesMotivRueckseite">
                            <img class="motiv" src="../../assets/img/motiv_abschlussmeister_rueckseite.png">
                        </div>
                    </div>
                </div>
            </div>

        </label>
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