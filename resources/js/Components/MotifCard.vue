<template>
  <div class="col-6 col-md-6 col-lg-4">
    <div class="scene scene--card">
      <div class="card" :class="{'is-flipped': isFlipped}" @click="flip()">
        <div class="card__face card__face--front">

          <div class="motivPaket" :class="{'is-flipped': isFlipped}">
            <img class="img-fluid" src="../../assets/img/textil_bg.png">
            <div class="zentriertesMotiv">
              <img class="motiv" src="../../assets/img/motiv_wegflix.png">
            </div>
            
            <div class="motivLink">
              <a @click="flip()">Rückseite&nbsp;&nbsp;<font-awesome-icon style="transform: scaleX(-1)" :icon="['fas', 'reply']" /></a>
            </div>

            <!-- <div class="motivDetails">
              <h2><span>Abschlussmeister</span></h2>
              <ul class="motivPaketMotivfarbe-color-list">
                <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color"></li>
                <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color"></li>
                <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color"></li>
                <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color"></li>
                <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color"></li>
                <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color"></li>
              </ul>
            </div> -->
              
            <!-- <span>
              <font-awesome-icon :icon="['fas', 'chevron-right']" />&nbsp;&nbsp;Wähle die Motivfarbe&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'chevron-left']" />
            </span> -->
          </div>

        </div>
        <div class="card__face card__face--back">

          test

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
    }

  }
}
</script>