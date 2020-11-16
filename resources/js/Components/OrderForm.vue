<template>
  <form id="msform" class="order-form">
    <!-- svg definition for fontawesome svgs to have linear gradient-->
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="svg-settings">
      <defs>
        <linearGradient id="linear" gradientTransform="rotate(45)">
          <stop class="linear-stop1" offset="0%"></stop>
          <stop class="linear-stop2" offset="100%"></stop>
        </linearGradient>
      </defs>
    </svg>
    <fieldset :class="{active: activeTab === 1}" :style="{display: activeTab === 1 ? 'block' : 'none'}">
      <!-- ###################### CONTENT ###################### -->
      <order-fieldset-head title="Textilien" button-next="Vorderseite" v-on:next-tab="nextTab()" />
      <p class="form-text">Wähle dein gewünschtes Paket aus.<br>
        Falls du einzelne Hoodies oder Shirts zusammen mit dem Bundle bestellen möchtest, kannst du diese später
        über dein Warenkorb hinzufügen.</p>
      <div class="row form-component product-cards">
        <div v-if="products.count > 0">Produkte</div>
        <div v-for="product in products" :key="product.id" class="col-lg-4 col-md-4 col-sm-4">
          <a class="cardProduktLink" href="#">
            <div class="cardProdukt">
              <img class="img-fluid card-img-top" :src="product.default_image" alt="Abschlusspullis Abschlusspulli Abschlussklamotten Pullover Hoodie für nur 22,00 EUR 22€">
              <div class="produktPreis"><span>Je {{ formatPrice(product.prices[0]) }} EUR</span></div>
              <div class="card-body">
                <p class="card-text"><span>{{product.name}}</span></p>
              </div>
              </div>
            </a>
          </div>
      </div>
      <!-- ###################### CONTENT ###################### -->
      <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
      <order-fieldset-footer alert="Bitte wähle ein Paket aus!" button-next  v-on:next-tab="nextTab()" />
      <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
    </fieldset>
    <fieldset :class="{active: activeTab === 2}" :style="{display: activeTab === 2 ? 'block' : 'none'}">
      <!-- ###################### CONTENT ###################### -->
      <order-fieldset-head title="Vorderseite" button-prev="Textilien" v-on:prev-tab="previousTab()" button-next="Rückseite" v-on:next-tab="nextTab()" />
      <p class="form-text">Konfiguriere dein Motiv.<br>
        Wähle zwischen einer Vielzahl von Motiven oder lade selbst welche hoch! </p>
      <div class="row">
        <div class="col-md-4">
          <div class="hoodieShirtWrapper">
            <div class="hoodieShirtSwitch left">
              <div class="hoodieShirtTab active" hoodieshirttab-direction="left">Hoodies</div>
              <div class="hoodieShirtTab" hoodieshirttab-direction="right">Shirts</div>
            </div>
          </div>
          <div class="motivVorschau">
            <div class="motivVorschauBild">
              <img class="img-fluid" src="../../assets/img/vorschau.png">
              <img class="motiv horizontalesMotiv" src="../../assets/img/motiv_abschlussmeister.png">
            </div>
            <p class="motivPaketTextilfarbe-text">Wähle die Textilfarbe:</p>
            <ul class="motivPaketTextilfarbe-color-list">
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color active"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
              <li name="motivPaketTextilfarbe" class="motivPaketTextilfarbe-color"></li>
            </ul>
          </div>
        </div>
        <div class="col-md-8">
          <div class="bibliothekUploadWrapper">
            <div class="bibliothekUploadSwitch left">
              <div class="bibliothekUploadTab active" bibliothekuploadtab-direction="left">Motivbibliothek</div>
              <div class="bibliothekUploadTab" bibliothekuploadtab-direction="right">Motiv hochladen</div>
            </div>
          </div>
          <div class="bibliothekTab">
            <div class="row">
              <div class="col-6 col-md-6 col-lg-4 abstandUntenMinPadding mPactive">
                <div class="motivPaket">
                  <img class="img-fluid" src="../../assets/img/textil_bg.png">
                  <img class="motiv horizontalesMotiv" src="../../assets/img/motiv_abschlussmeister.png">
                  <div class="motivLink"><a href="#">Rückseite&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'link']" /></a></div>
                  <div class="motivDetails">
                    <h2><span>Abschlussmeister</span></h2>
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
              <div class="col-6 col-md-6 col-lg-4 abstandUntenMinPadding mPactive">
                <div class="motivPaket">
                  <img class="img-fluid" src="../../assets/img/textil_bg.png">
                  <img class="motiv horizontalesMotiv" src="../../assets/img/motiv_abschlussmeister.png">
                  <div class="motivLink"><a href="#">Rückseite&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'link']" /></a></div>
                  <div class="motivDetails">
                    <h2><span>Abschlussmeister</span></h2>
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
              <div class="col-6 col-md-6 col-lg-4 abstandUntenMinPadding mPactive">
                <div class="motivPaket">
                  <img class="img-fluid" src="../../assets/img/textil_bg.png">
                  <img class="motiv horizontalesMotiv" src="../../assets/img/motiv_abschlussmeister.png">
                  <div class="motivLink"><a href="#">Rückseite&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'link']" /></a></div>
                  <div class="motivDetails">
                    <h2><span>Abschlussmeister</span></h2>
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
              <div class="col-6 col-md-6 col-lg-4 abstandUntenMinPadding mPactive">
                <div class="motivPaket">
                  <img class="img-fluid" src="../../assets/img/textil_bg.png">
                  <img class="motiv horizontalesMotiv" src="../../assets/img/motiv_abschlussmeister.png">
                  <div class="motivLink"><a href="#">Rückseite&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'link']" /></a></div>
                  <div class="motivDetails">
                    <h2><span>Abschlussmeister</span></h2>
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
              <div class="col-6 col-md-6 col-lg-4 abstandUntenMinPadding mPactive">
                <div class="motivPaket">
                  <img class="img-fluid" src="../../assets/img/textil_bg.png">
                  <img class="motiv horizontalesMotiv" src="../../assets/img/motiv_abschlussmeister.png">
                  <div class="motivLink"><a href="#">Rückseite&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'link']" /></a></div>
                  <div class="motivDetails">
                    <h2><span>Abschlussmeister</span></h2>
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
            </div>
          </div>
          <div style="display: none;" class="motivHochladenTab">
            <div class="row">
              <div class="col-12">
                <input type="file" name="filepond" multiple data-max-file-size="3MB" data-max-files="3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ###################### CONTENT ###################### -->
      <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
      <order-fieldset-footer button-prev v-on:prev-tab="previousTab()" alert="Bitte wähle ein Motiv aus!" button-next v-on:next-tab="nextTab()" />
      <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
    </fieldset>
    <fieldset :class="{active: activeTab === 3}" :style="{display: activeTab === 3 ? 'block' : 'none'}">
      <!-- ###################### CONTENT ###################### -->
      <order-fieldset-head title="Rückseite" button-prev="Vorderseite" v-on:prev-tab="previousTab()" button-next="Sonderdruck" v-on:next-tab="nextTab()" />
      <p class="form-text">Wähle das Format deiner Rückseite.<br>
            Die oberen zwei, sowie die unteren drei Felder sind optional und werden nicht beachtet, wenn nichts eingetragen wurde.</p>
        <div class="row">
          <div class="col-md-12">
            <div class="row rueckseite">
              <div class="col-md-12 col-lg-6 col-xl-5">
                <div class="rueckseiteVorschau">
                  <div class="rueckseiteVorschauBild">
                    <img class="img-fluid" src="../../assets/img/rueckseite-vorschau.png">
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-lg-6 col-xl-7">
                <div class="row namenslisteFormate">
                  <div class="col-lg-6">
                    <label for="selected-item-1" class="selected-label">
                      <div class="inputText">1-Spaltig</div>
                      <input type="radio" name="selected-item" id="selected-item-1">
                      <span class="icon"></span>
                      <div class="selected-content">
                        <img class="img-fluid" src="../../assets/img/einspaltig.png" alt="">
                      </div>
                    </label>
                  </div>
                  <div class="col-lg-6">
                    <label for="selected-item-2" class="selected-label">
                      <div class="inputText">2-Spaltig</div>
                      <input type="radio" checked name="selected-item" id="selected-item-2">
                      <span class="icon"></span>
                      <div class="selected-content">
                        <img class="img-fluid" src="../../assets/img/zweispaltig.png" alt="">
                      </div>
                    </label>
                  </div>
                  <div class="col-lg-6">
                    <label for="selected-item-3" class="selected-label">
                      <div class="inputText">3-Spaltig</div>
                      <input type="radio" name="selected-item" id="selected-item-3">
                      <span class="icon"></span>
                      <div class="selected-content">
                        <img class="img-fluid" src="../../assets/img/dreispaltig.png" alt="">
                      </div>
                    </label>
                  </div>
                  <div class="col-lg-6">
                    <label for="selected-item-4" class="selected-label">
                      <div class="inputText">4-Spaltig</div>
                      <input type="radio" name="selected-item" id="selected-item-4">
                      <span class="icon"></span>
                      <div class="selected-content">
                        <img class="img-fluid" src="../../assets/img/vierspaltig.png" alt="">
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <!-- ###################### EINSPALTIG ###################### -->
            <div class="row namenslisteTab einSpaltig">
              <!-- OBERER TEIL -->
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control" placeholder="Optional: Motivlogo" style="max-width: 250px;">
              </div>
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: 10b" style="max-width: 250px;">
              </div>
              <!-- OBERER TEIL -->
              <!-- MITTLERER TEIL -->
              <div class="col-sm-12 col-md-2 col-lg-3"></div>
              <div class="col-sm-12 col-md-8 col-lg-6">
                <textarea class="form-control textareaAbstand" id="motivAenderung" rows="20" placeholder="Beispiel: Vorname Nachname"></textarea>
              </div>
              <div class="col-sm-12 col-md-2 col-lg-3"></div>
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: Lehrername" style="max-width: 250px;">
              </div>
              <!-- MITTLERER TEIL -->
              <!-- UNTERER TEIL -->
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: AK2021" style="max-width: 250px;">
              </div>
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: Schulname" style="max-width: 250px;">
              </div>      
              <!-- UNTERER TEIL -->
            </div>
            <!-- ###################### EINSPALTIG ###################### -->

            <!-- ###################### ZWEISPALTIG ###################### -->
            <div class="row namenslisteTab zweiSpaltig">
              <!-- OBERER TEIL -->
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control" placeholder="Optional: Motivlogo" style="max-width: 250px;">
              </div>
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: 10b" style="max-width: 250px;">
              </div>
              <!-- OBERER TEIL -->
              <!-- MITTLERER TEIL -->
              <div class="col-sm-12 col-md-1 col-lg-1"></div>
              <div class="col-sm-12 col-md-5 col-lg-5">
                <textarea class="form-control textareaAbstand" id="motivAenderung" rows="20" placeholder="Beispiel: Vorname Nachname"></textarea>
              </div>
              <div class="col-sm-12 col-md-5 col-lg-5">
                <textarea class="form-control textareaAbstand" id="motivAenderung" rows="20" placeholder="Beispiel: Vorname Nachname"></textarea>
              </div>
              <div class="col-sm-12 col-md-1 col-lg-1"></div>
              <div class="col-md-1"></div>
              <div class="col-sm-12 col-md-5">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: Lehrername">
              </div>
              <div class="col-sm-12 col-md-5">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: Lehrername">
              </div>
              <div class="col-md-1"></div>
              <!-- MITTLERER TEIL -->
              <!-- UNTERER TEIL -->
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: AK2021" style="max-width: 250px;">
              </div>
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: Schulname" style="max-width: 250px;">
              </div>      
              <!-- UNTERER TEIL -->
            </div>
            <!-- ###################### ZWEISPALTIG ###################### -->
            <!-- ###################### DREISPALTIG ###################### -->
            <div class="row namenslisteTab dreiSpaltig">
              <!-- OBERER TEIL -->
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control" placeholder="Optional: Motivlogo" style="max-width: 250px;">
              </div>
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: 10b" style="max-width: 250px;">
              </div>
              <!-- OBERER TEIL -->
              <!-- MITTLERER TEIL -->
              <div class="col-md-6 col-lg-4">
                <textarea class="form-control textareaAbstand" id="motivAenderung" rows="20" placeholder="Beispiel: Vorname Nachname"></textarea>
              </div>
              <div class="col-md-6 col-lg-4">
                <textarea class="form-control textareaAbstand" id="motivAenderung" rows="20" placeholder="Beispiel: Vorname Nachname"></textarea>
              </div>
              <div class="col-md-12 col-lg-4">
                <textarea class="form-control textareaAbstand" id="motivAenderung" rows="20" placeholder="Beispiel: Vorname Nachname"></textarea>
              </div>
              <div class="col-sm-6 col-md-4">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: Lehrername">
              </div>
              <div class="col-sm-6 col-md-4">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: Lehrername">
              </div>
              <div class="col-sm-12 col-md-4">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: Lehrername">
              </div>
              <!-- MITTLERER TEIL -->
              <!-- UNTERER TEIL -->
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: AK2021" style="max-width: 250px;">
              </div>
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: Schulname" style="max-width: 250px;">
              </div>      
              <!-- UNTERER TEIL -->
            </div>
            <!-- ###################### DREISPALTIG ###################### -->
            <!-- ###################### VIERSPALTIG ###################### -->
            <div class="row namenslisteTab vierSpaltig">
              <!-- OBERER TEIL -->
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control" placeholder="Optional: Motivlogo" style="max-width: 250px;">
              </div>
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: 10b" style="max-width: 250px;">
              </div>
              <!-- OBERER TEIL -->
              <!-- MITTLERER TEIL -->
              <div class="col-md-6 col-lg-3">
                <textarea class="form-control textareaAbstand" id="motivAenderung" rows="20" placeholder="Beispiel: Vorname Nachname"></textarea>
              </div>
              <div class="col-md-6 col-lg-3">
                <textarea class="form-control textareaAbstand" id="motivAenderung" rows="20" placeholder="Beispiel: Vorname Nachname"></textarea>
              </div>
              <div class="col-md-6 col-lg-3">
                <textarea class="form-control textareaAbstand" id="motivAenderung" rows="20" placeholder="Beispiel: Vorname Nachname"></textarea>
              </div>
              <div class="col-md-6 col-lg-3">
                <textarea class="form-control textareaAbstand" id="motivAenderung" rows="20" placeholder="Beispiel: Vorname Nachname"></textarea>
              </div>
              <div class="col-sm-6 col-md-3">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: Lehrername">
              </div>
              <div class="col-sm-6 col-md-3">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: Lehrername">
              </div>
              <div class="col-sm-6 col-md-3">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: Lehrername">
              </div>
              <div class="col-sm-6 col-md-3">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: Lehrername">
              </div>
              <!-- MITTLERER TEIL -->
              <!-- UNTERER TEIL -->
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: AK2021" style="max-width: 250px;">
              </div>
              <div class="col-12 d-flex justify-content-center align-items-center">
                <input type="text" class="form-control inputAbstand" placeholder="Optional: Schulname" style="max-width: 250px;">
              </div>      
              <!-- UNTERER TEIL -->
            </div>
            <!-- ###################### VIERSPALTIG ###################### -->
          </div>
        </div>
      <!-- ###################### CONTENT ###################### -->
      <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
      <order-fieldset-footer button-prev v-on:prev-tab="previousTab()" alert="Bitte trage mindestens 10 Stück ein!" button-next v-on:next-tab="nextTab()" />
      <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
    </fieldset>
    <fieldset :class="{active: activeTab === 4}" :style="{display: activeTab === 4 ? 'block' : 'none'}">
      <!-- ###################### CONTENT ###################### -->
      <order-fieldset-head title="Sonderdruck" button-prev="Rückseite" v-on:prev-tab="previousTab()" button-next="Menge" v-on:next-tab="nextTab()" />
      <p class="form-text">Hier steht ein Beispieltext.</p>
      <div class="row">
        <div class="col-md-12">
          <p>Dies ist ein Beispieltext.</p>
        </div>
      </div>
      <!-- ###################### CONTENT ###################### -->
      <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
      <order-fieldset-footer button-prev v-on:prev-tab="previousTab()" alert="Bitte trage mindestens 10 Stück ein!" button-next v-on:next-tab="nextTab()" />
        <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
    </fieldset>
    <fieldset :class="{active: activeTab === 5}" :style="{display: activeTab === 5 ? 'block' : 'none'}">
      <!-- ###################### CONTENT ###################### -->
      <order-fieldset-head title="Menge" button-prev="Sonderdruck" v-on:prev-tab="previousTab()" button-final v-on:add-to-cart="addToCart()" />
      <p class="form-text">Trage die gewünschten Größen für dein Paket ein.<br>
          Achte bitte darauf, dass du mindestens 10 Stück bzw. im Bundle gleich viele Hoodies und Shirts
          einträgst.</p>
      <div class="row groessenAuswahl">
        <div class="col-12 col-md-6 groessenAbstand groessenAbstand2">
          <p class="groessenText">Wähle die Größen der Hoodies im Bundle:</p>
          <div class="row">
            <div class="col-3 col-md-6">
              <p class="groessen">XS:</p>
            </div>
            <size-input name="hoodie_bundle_amount_xs" />
            <div class="my-4"></div>
            <div class="col-3 col-md-6">
              <p class="groessen">S:</p>
            </div>
            <size-input name="hoodie_bundle_amount_s" />
            <div class="col-3 col-md-6">
              <p class="groessen">M:</p>
            </div>
            <size-input name="hoodie_bundle_amount_m" />
            <div class="col-3 col-md-6">
              <p class="groessen">L:</p>
            </div>
            <size-input name="hoodie_bundle_amount_l" />
            <div class="col-3 col-md-6">
              <p class="groessen">XL:</p>
            </div>
            <size-input name="hoodie_bundle_amount_xl" />
            <div class="col-3 col-md-6">
              <p class="groessen">XXL:</p>
            </div>
            <size-input name="hoodie_bundle_amount_xxl" />
            <div class="col-3 col-md-6">
              <p class="groessen">3XL:</p>
            </div>
            <size-input name="hoodie_bundle_amount_xxxl" />
          </div>
        </div>
        <div class="col-12 col-md-6 groessenAbstand groessenAbstand2">
          <p class="groessenText">Wähle die Größen der Shirts im Bundle:</p>
          <div class="row">
            <div class="col-3 col-md-6">
              <p class="groessen">S:</p>
            </div>
            <size-input name="shirt_bundle_amount_s" />
            <div class="col-3 col-md-6">
              <p class="groessen">M:</p>
            </div>
            <size-input name="shirt_bundle_amount_m" />
            <div class="col-3 col-md-6">
              <p class="groessen">L:</p>
            </div>
            <size-input name="shirt_bundle_amount_l" />
            <div class="col-3 col-md-6">
              <p class="groessen">XL:</p>
            </div>
            <size-input name="shirt_bundle_amount_xl" />
            <div class="col-3 col-md-6">
              <p class="groessen">XXL:</p>
            </div>
            <size-input name="shirt_bundle_amount_xxl" />
            <div class="col-3 col-md-6">
              <p class="groessen">3XL:</p>
            </div>
            <size-input name="shirt_bundle_amount_xxxl" />
            <div class="col-3 col-md-6">
              <p class="groessen">4XL:</p>
            </div>
            <size-input name="shirt_bundle_amount_xxxxl" />
          </div>
        </div>
        <div class="col-12 col-md-6 groessenAbstand">
          <p class="groessenText">Wähle die Größen der Hoodies:</p>
          <div class="row">
            <div class="col-3 col-md-6">
              <p class="groessen">XS:</p>
            </div>
            <size-input name="hoodie_amount_xs" />
            <div class="my-4"></div>
            <div class="col-3 col-md-6">
              <p class="groessen">S:</p>
            </div>
            <size-input name="hoodie_amount_s" />
            <div class="col-3 col-md-6">
              <p class="groessen">M:</p>
            </div>
            <size-input name="hoodie_amount_m" />
            <div class="col-3 col-md-6">
              <p class="groessen">L:</p>
            </div>
            <size-input name="hoodie_amount_l" />
            <div class="col-3 col-md-6">
              <p class="groessen">XL:</p>
            </div>
            <size-input name="hoodie_amount_xl" />
            <div class="col-3 col-md-6">
              <p class="groessen">XXL:</p>
            </div>
            <size-input name="hoodie_amount_xxl" />
            <div class="col-3 col-md-6">
              <p class="groessen">3XL:</p>
            </div>
            <size-input name="hoodie_amount_xxxl" />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <p class="groessenText">Wähle die Größen der Shirts:</p>
          <div class="row">
            <div class="col-3 col-md-6">
              <p class="groessen">S:</p>
            </div>
            <size-input name="shirt_amount_s" />
            <div class="my-4"></div>
            <div class="col-3 col-md-6">
              <p class="groessen">M:</p>
            </div>
            <size-input name="shirt_amount_m" />
            <div class="col-3 col-md-6">
              <p class="groessen">L:</p>
            </div>
            <size-input name="shirt_amount_l" />
            <div class="col-3 col-md-6">
              <p class="groessen">XL:</p>
            </div>
            <size-input name="shirt_amount_xl" />
            <div class="col-3 col-md-6">
              <p class="groessen">XXL:</p>
            </div>
            <size-input name="shirt_amount_xxl" />
            <div class="col-3 col-md-6">
              <p class="groessen">3XL:</p>
            </div>
            <size-input name="shirt_amount_xxxl" />
            <div class="col-3 col-md-6">
              <p class="groessen">4XL:</p>
            </div>
            <size-input name="shirt_amount_xxxxl" />
          </div>
        </div>
      </div>
      <!-- ###################### CONTENT ###################### -->
      <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
      <order-fieldset-footer button-prev v-on:prev-tab="previousTab()" button-final v-on:add-to-cart="addToCart()" />
      <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
    </fieldset>
  </form>
</template>
<script>
    import {
        store,
        mutations
    } from '../OrderStore'
    import numeral from 'numeral'
    import locales from 'numeral'
    import OrderFieldsetHead from './OrderFieldsetHead'
    import OrderFieldsetFooter from './OrderFieldsetFooter'
    import SizeInput from './SizeInput'
    export default {
      components: {
        OrderFieldsetHead,
        OrderFieldsetFooter,
        SizeInput
      },
      data() {
          return {
              activeTab: 1,
          }
      },
      props: {
        products: Array
      },
      computed: {
          currentItem() {
              return store.currentItem;
          }
      },
      mounted() {
      },
      methods: {
          nextTab(event) {
              this.activeTab++;
          },
          previousTab(event) {
              this.activeTab--;
          },
          addToCart(event) {
              mutations.addToCart();
          },
          selectItem(event, type) {
              mutations.setCurrentItem(type);
          },
          formatPrice(number) {
            return numeral(number).format("0,0.00");
          }
      }
    }
</script>
<style>
  /* hide svg which is used to create linear color gradient in fontawesome icons */
  .svg-settings {
      position: absolute !important;
      height: 0px; width: 0px;
      overflow: hidden;
      clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
      clip: rect(1px, 1px, 1px, 1px);
  }
</style>