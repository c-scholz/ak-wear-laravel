<template>
  <div class="col-6 col-md-6 col-lg-4 abstandUntenMinPadding mPactive">
    <div class="motivPaket">
      <img class="img-fluid" src="../../assets/img/textil_bg.png">
      <img class="motiv vertikalesMotiv" src="../../assets/img/motiv_wegflix.png">
      <div class="motivLink"><a href="#">Rückseite&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'link']" /></a></div>
      <div class="motivDetails">
        <h2><span>Wegflix</span></h2>
        <ul class="motivPaketMotivfarbe-color-list">
          <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color"></li>
          <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color"></li>
          <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color"></li>
          <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color"></li>
          <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color"></li>
          <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color"></li>
        </ul>
      </div>
      <div class="motivFarbe"><span><font-awesome-icon :icon="['fas', 'chevron-right']" />&nbsp;&nbsp;Wähle die Motivfarbe&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'chevron-left']" /></span></div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      id: Number
    },
    data() {
      return {}
    }
}
</script>