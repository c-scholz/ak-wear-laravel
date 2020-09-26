<template>
  <form id="msform" class="order-form">
    <!-- ###################### Fortschritt ###################### -->
    <ul id="progressbar">
      <li :class="{active: activeTab >= 1}" id="textilien"><span>Textilien</span></li>
      <li :class="{active: activeTab >= 2}" id="menge"><span>Menge</span></li>
      <li :class="{active: activeTab >= 3}" id="motiv"><span>Motiv</span></li>
      <li :class="{active: activeTab >= 4}" id="rueckseite"><span>Rückseite</span></li>
      <li :class="{active: activeTab >= 5}" id="personalisierung"><span>Sonderdruck</span></li>
      <li :class="{active: activeTab >= 6}" id="daten"><span>Daten</span></li>
      <li :class="{active: activeTab == 7}" id="pruefen"><span>Prüfen</span></li>
    </ul>
    <!-- ###################### Fortschritt ###################### -->
    <fieldset :class="{active: activeTab === 1}" :style="{display: activeTab === 1 ? 'block' : 'none'}">
      <div class="form-card">
        <div class="form-title"><span>Textilien</span></div>
        <p class="formText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
          labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        <!-- ###################### Content ###################### -->
        <div class="row form-component product-cards">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <a class="cardProduktLink" href="#">
              <div class="cardProdukt">
                <img class="img-fluid card-img-top" src="https://via.placeholder.com/325x400" alt="Pullover Hoodie für nur 23,99 EUR 23€">
                <div class="card-img-overlay">
                  <p class="card-title"><span>23,99 EUR</span></p>
                </div>
                <div class="card-body">
                  <p class="card-text"><span>Hoodie</span></p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <a href="#">
              <div class="cardProdukt">
                <img class="img-fluid card-img-top" src="https://via.placeholder.com/325x400" alt="Card image cap">
                <div class="card-img-overlay">
                  <p class="card-title"><span>18,99 EUR</span></p>
                </div>
                <div class="card-body">
                  <p class="card-text"><span>Shirt</span></p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <a href="#">
              <div class="cardProdukt noMargin">
                <img class="img-fluid card-img-top" src="https://via.placeholder.com/325x400" alt="Card image cap">
                <div class="card-img-overlay">
                  <p class="card-title"><span>33,99 EUR</span></p>
                </div>
                <div class="card-body">
                  <p class="card-text"><span>Bundle</span></p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <!-- ###################### Content ###################### -->
      </div>
      <!-- ###################### Buttons ###################### -->
      <div class="stepButtonContainer">
        <button type="button" name="next" class="next stepButton" @click="nextTab">
          <span>
            Weiter zu Menge&nbsp;
            <i style="transform: scaleX(-1)" class="fas fa-reply"></i>
          </span>
        </button>
      </div>
      <!-- ###################### Buttons ###################### -->
    </fieldset>
    <fieldset :class="{active: activeTab === 2}" :style="{display: activeTab === 2 ? 'block' : 'none'}">
      <div class="form-card">
        <div class="form-title"><span>Menge</span></div>
        <br>
        <!-- ###################### Content ###################### -->
        <p>Dies ist ein Beispieltext.</p>
        <!-- ###################### Content ###################### -->
      </div>
      <!-- ###################### Buttons ###################### -->
      <div class="stepButtonContainer">
        <button style="margin-right: 5px;" type="button" name="previous" class="previous stepButton" @click="previousTab">
          <span>
            <i class="fas fa-reply"></i>
          </span>
        </button>
        <button type="button" name="next" class="next stepButton" @click="nextTab">
          <span>
            Weiter zu Motiv&nbsp;
            <i style="transform: scaleX(-1)" class="fas fa-reply"></i>
          </span>
        </button>
      </div>
      <!-- ###################### Buttons ###################### -->
    </fieldset>
    <fieldset :class="{active: activeTab === 3}" :style="{display: activeTab === 3 ? 'block' : 'none'}">
      <div class="form-card">
        <div class="form-title"><span>Motiv</span></div>
        <br>
        <!-- ###################### Content ###################### -->
        <p>Dies ist ein Beispieltext.</p>
        <!-- ###################### Content ###################### -->
      </div>
      <!-- ###################### Buttons ###################### -->
      <div class="stepButtonContainer">
        <button style="margin-right: 5px;" type="button" name="previous" class="previous stepButton" @click="previousTab">
          <span>
            <i class="fas fa-reply"></i>
          </span>
        </button>
        <button type="button" name="next" class="next stepButton" @click="nextTab">
          <span>
            Weiter zu Rückseite&nbsp;
            <i style="transform: scaleX(-1)" class="fas fa-reply"></i>
          </span>
        </button>
      </div> 
      <!-- ###################### Buttons ###################### -->
    </fieldset>
    <fieldset :class="{active: activeTab === 4}" :style="{display: activeTab === 4 ? 'block' : 'none'}">
      <div class="form-card">
        <div class="form-title"><span>Rückseite</span></div>
        <br>
        <!-- ###################### Content ###################### -->
        <p>Dies ist ein Beispieltext.</p>
        <!-- ###################### Content ###################### -->
      </div>
      <!-- ###################### Buttons ###################### -->
      <div class="stepButtonContainer">
        <button style="margin-right: 5px;" type="button" name="previous" class="previous stepButton" @click="previousTab">
          <span>
            <i class="fas fa-reply"></i>
          </span>
        </button>
        <button type="button" name="next" class="next stepButton" @click="nextTab">
          <span>
            Weiter zu Sonderdruck&nbsp;
            <i style="transform: scaleX(-1)" class="fas fa-reply"></i>
          </span>
        </button>
      </div>
      <!-- ###################### Buttons ###################### -->
    </fieldset>
    <fieldset :class="{active: activeTab === 5}" :style="{display: activeTab === 5 ? 'block' : 'none'}">
      <div class="form-card">
        <div class="form-title"><span>Sonderdruck</span></div>
        <br>
        <!-- ###################### Content ###################### -->
        <p>Dies ist ein Beispieltext.</p>
        <!-- ###################### Content ###################### -->
      </div>
      <!-- ###################### Buttons ###################### -->
      <div class="stepButtonContainer">
        <button style="margin-right: 5px;" type="button" name="previous" class="previous stepButton" @click="previousTab">
          <span>
            <i class="fas fa-reply"></i>
          </span>
        </button>
        <button type="button" name="next" class="next stepButton" @click="nextTab">
          <span>
            Weiter zu Daten&nbsp;
            <i style="transform: scaleX(-1)" class="fas fa-reply"></i>
          </span>
        </button>
      </div>
      <!-- ###################### Buttons ###################### -->
    </fieldset>
    <fieldset :class="{active: activeTab === 6}" :style="{display: activeTab === 6 ? 'block' : 'none'}">
      <div class="form-card">
        <div class="form-title"><span>Daten</span></div>
        <br>
        <!-- ###################### Content ###################### -->
        <p>Dies ist ein Beispieltext.</p>
        <!-- ###################### Content ###################### -->
      </div>
      <!-- ###################### Buttons ###################### -->
      <div class="stepButtonContainer">
        <button style="margin-right: 5px;" type="button" name="previous" class="previous stepButton" @click="previousTab">
          <span>
            <i class="fas fa-reply"></i>
          </span>
        </button>
        <button type="button" name="next" class="next stepButton" @click="nextTab">
          <span>
            Weiter zu Prüfen&nbsp;
            <i style="transform: scaleX(-1)" class="fas fa-reply"></i>
          </span>
        </button>
      </div>
      <!-- ###################### Buttons ###################### -->
    </fieldset>
    <fieldset :class="{active: activeTab === 7}" :style="{display: activeTab === 7 ? 'block' : 'none'}">
      <div class="form-card">
        <div class="form-title"><span>Prüfen</span></div>
        <br>
        <!-- ###################### Content ###################### -->
        <p>Dies ist ein Beispieltext.</p>
        <!-- ###################### Content ###################### -->
      </div>
      <!-- ###################### Buttons ###################### -->
      <div class="stepButtonContainer">
        <button style="margin-right: 5px;" type="button" name="previous" class="previous stepButton" @click="previousTab">
          <span>
            <i class="fas fa-reply"></i>
          </span>
        </button>
        <button type="button" name="next" class="next stepButton">
          <span>
            Bestellen&nbsp;
            <i class="fas fa-check"></i>
          </span>
        </button>
      </div>
      <!-- ###################### Buttons ###################### -->
    </fieldset>
  </form>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
      totalTabs: 7,
    }
  },
  methods: {
    nextTab(event) {
      this.activeTab++;
    },
    previousTab(event) {
      this.activeTab--;
    }
  }
}
</script>

<style scoped>
</style>