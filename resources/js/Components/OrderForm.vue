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
                <div v-for="product in products" :key="product.id" class="col-sm-12 col-md-4 col-lg-4">
                    <a class="cardProduktLink" href="#" v-on:click="store.currentItem = product; nextTab();">
                        <div class="cardProdukt">
                            <img class="img-fluid card-img-top" :src="product.default_image"
                                alt="Abschlusspullis Abschlusspulli Abschlussklamotten Pullover Hoodie für nur 22,00 EUR 22€">
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
            <order-fieldset-footer alert="Bitte wähle ein Paket aus!" button-next v-on:next-tab="nextTab()" />
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
        </fieldset>
        <fieldset :class="{active: activeTab === 2}" :style="{display: activeTab === 2 ? 'block' : 'none'}">
            <!-- ###################### CONTENT ###################### -->
            <order-fieldset-head title="Vorderseite" button-prev="Textilien" v-on:prev-tab="previousTab()"
                button-next="Rückseite" v-on:next-tab="nextTab()" />
            <p class="form-text">Konfiguriere dein Motiv.<br>
                Wähle zwischen einer Vielzahl von Motiven oder lade selbst welche hoch!</p>
            <div class="row">
                <div class="col-md-12 col-lg-4">
                    <div class="motivVorschau">
                        <div class="hoodieShirtWrapper" v-if="store.currentItem.bundled">
                            <div class="hoodieShirtSwitch left">
                                <div class="hoodieShirtTab active" hoodieshirttab-direction="left">Hoodies</div>
                                <div class="hoodieShirtTab" hoodieshirttab-direction="right">Shirts</div>
                            </div>
                        </div>
                        <p class="motivPaketTextilfarbe-text">Wähle die Textilfarbe</p>
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
                        <div class="motivVorschauBild">
                            <canvas>
                                <img class="motiv horizontalesMotiv" src="../../assets/img/motiv_abschlussmeister.png">
                            </canvas>
                            <img class="img-fluid" src="../../assets/img/vorschau.png">
                        </div>
                        <p class="motivPaketMotivfarbe-text">Wähle die Motivfarbe</p>
                        <ul class="motivPaketMotivfarbe-color-list">
                            <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color"></li>
                            <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color active"></li>
                            <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color"></li>
                            <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color"></li>
                            <li name="motivPaketMotivfarbe" class="motivPaketMotivfarbe-color"></li>
                        </ul>
                        <p class="motivPaketTextarea">Änderungen am Motiv</p>
                        <textarea class="form-control" id="motivAenderung" rows="5"
                            placeholder="Beispiele: AK21 statt AK20, Bitte anderen Spruch über/unter dem Motiv, Über/Unter dem Motiv den Text weglassen, etc."></textarea>
                    </div>
                </div>
                <div class="col-md-12 col-lg-8">
                    <div class="bibliothekUploadWrapper">
                        <div class="bibliothekUploadSwitch"
                            :class="{left: motifSelection === false, right: motifSelection === true}">
                            <div class="bibliothekUploadTab" :class="{active: motifSelection === false}"
                                bibliothekuploadtab-direction="left" v-on:click="chooseMotif()">Motivbibliothek</div>
                            <div class="bibliothekUploadTab" :class="{active: motifSelection === true}"
                                bibliothekuploadtab-direction="right" v-on:click="uploadMotif()">Motiv hochladen</div>
                        </div>
                    </div>
                    <div :style="{display: motifSelection === false ? 'block' : 'none'}" class="bibliothekTab">
                        <div class="row justify-content-center">
                            <div class="col-lg-11 noPadding">
                                <form action="#" class="suchfunktion">
                                    <div class="form-group d-md-flex">
                                        <input type="text" class="form-control" placeholder="Suchbegriff eingeben..">
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <motif-card v-for="index in 8" :key="index" :id="index" />
                        </div>
                    </div>
                    <div :style="{display: motifSelection === true ? 'block' : 'none'}" class="motivHochladenTab">
                        <div class="row">
                            <div class="col-12">
                                <div class="alertContainer buttons">
                                    <div class="alert-info" role="alert">
                                        Unsere Grafikabteilung baut das von euch hochgeladene Motiv 1:1 nach. Falls
                                        Änderungswünsche beachtet werden müssen, trage diese bitte links unter
                                        <span>"Änderungen am Motiv:"</span> ein!
                                    </div>
                                </div>
                                <input type="file" name="filepond" multiple data-max-file-size="3MB"
                                    data-max-files="3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ###################### CONTENT ###################### -->
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
            <order-fieldset-footer button-prev v-on:prev-tab="previousTab()" alert="Bitte wähle ein Motiv aus oder lade eins hoch!"
                button-next v-on:next-tab="nextTab()" />
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
        </fieldset>
        <fieldset :class="{active: activeTab === 3}" :style="{display: activeTab === 3 ? 'block' : 'none'}">
            <!-- ###################### CONTENT ###################### -->
            <order-fieldset-head title="Rückseite" button-prev="Vorderseite" v-on:prev-tab="previousTab()"
                button-next="Sonderdruck" v-on:next-tab="nextTab()" />
            <p class="form-text">Wähle das Format deiner Rückseite.<br>
                Die oberen zwei, sowie die unteren drei Felder für die Rückseite sind optional und werden nicht beachtet, wenn nichts
                eingetragen wird.
            </p>
            <div class="row">
                <div class="col-md-12">
                    <div class="row rueckseite">
                        <div class="col-md-12 col-lg-6 col-xl-5">
                            <div class="rueckseiteVorschau">
                                <div class="rueckseiteVorschauBild">
                                    <div class="hoodieShirtWrapper">
                                        <div class="hoodieShirtSwitch left">
                                            <div class="hoodieShirtTab active" hoodieshirttab-direction="left">Hoodies</div>
                                            <div class="hoodieShirtTab" hoodieshirttab-direction="right">Shirts</div>
                                        </div>
                                    </div>
                                    <img class="img-fluid" src="../../assets/img/rueckseite-vorschau.png">
                                    <canvas>
                                      <img class="motiv horizontalesMotiv" src="../../assets/img/motiv_abschlussmeister.png">
                                    </canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6 col-xl-7">
                            <div class="row namenslisteFormate">
                                <div class="col-lg-6">
                                    <label for="selected-item-1" class="selected-label">
                                        <div class="inputText">1-Spaltig</div>
                                        <input type="radio" v-model.number="nameListColumns" name="selected-item" id="selected-item-1" value="1">
                                        <span class="icon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="selected-content">
                                            <img class="img-fluid" src="../../assets/img/einspaltig.png" alt="">
                                        </div>
                                    </label>
                                </div>
                                <div class="col-lg-6">
                                    <label for="selected-item-2" class="selected-label">
                                        <div class="inputText">2-Spaltig</div>
                                        <input type="radio" v-model.number="nameListColumns" checked name="selected-item" id="selected-item-2" value="2">
                                        <span class="icon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="selected-content">
                                            <img class="img-fluid" src="../../assets/img/zweispaltig.png" alt="">
                                        </div>
                                    </label>
                                </div>
                                <div class="col-lg-6">
                                    <label for="selected-item-3" class="selected-label">
                                        <div class="inputText">3-Spaltig</div>
                                        <input type="radio" v-model.number="nameListColumns" name="selected-item" id="selected-item-3" value="3">
                                        <span class="icon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="selected-content">
                                            <img class="img-fluid" src="../../assets/img/dreispaltig.png" alt="">
                                        </div>
                                    </label>
                                </div>
                                <div class="col-lg-6">
                                    <label for="selected-item-4" class="selected-label">
                                        <div class="inputText">4-Spaltig</div>
                                        <input type="radio" v-model.number="nameListColumns" name="selected-item" id="selected-item-4" value="4">
                                        <span class="icon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="selected-content">
                                            <img class="img-fluid" src="../../assets/img/vierspaltig.png" alt="">
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ###################### EINSPALTIG ###################### -->
                    <div class="row namenslisteTab einSpaltig" :style="{display: nameListColumns === 1 ? 'flex' : 'none'}">
                        <!-- OBERER TEIL -->
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control" placeholder="Optional: Motivlogo"
                                style="max-width: 250px;">
                        </div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Optional: 10b"
                                style="max-width: 250px;">
                        </div>
                        <!-- OBERER TEIL -->
                        <!-- MITTLERER TEIL -->
                        <div class="col-sm-12 col-md-2 col-lg-3"></div>
                        <div class="col-sm-12 col-md-8 col-lg-6">
                            <div class="namelistContainer" contenteditable="false">
                                <name-input name="namelist1" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-2 col-lg-3"></div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Optional: Lehrername"
                                style="max-width: 250px;">
                        </div>
                        <!-- MITTLERER TEIL -->
                        <!-- UNTERER TEIL -->
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Optional: AK2021"
                                style="max-width: 250px;">
                        </div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Optional: Schulname"
                                style="max-width: 250px;">
                        </div>
                        <!-- UNTERER TEIL -->
                    </div>
                    <!-- ###################### EINSPALTIG ###################### -->

                    <!-- ###################### ZWEISPALTIG ###################### -->
                    <div class="row namenslisteTab zweiSpaltig" :style="{display: nameListColumns === 2 ? 'flex' : 'none'}">
                        <!-- OBERER TEIL -->
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control" placeholder="Optional: Motivlogo"
                                style="max-width: 250px;">
                        </div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Optional: 10b"
                                style="max-width: 250px;">
                        </div>
                        <!-- OBERER TEIL -->
                        <!-- MITTLERER TEIL -->
                        <div class="col-sm-12 col-md-1 col-lg-1"></div>
                        <div class="col-sm-12 col-md-5 col-lg-5">
                            <div class="namelistContainer" contenteditable="false">
                                <name-input name="namelist1" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-5 col-lg-5">
                            <div class="namelistContainer" contenteditable="false">
                                <name-input name="namelist2" />
                            </div>
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
                            <input type="text" class="form-control inputAbstand" placeholder="Optional: AK2021"
                                style="max-width: 250px;">
                        </div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Optional: Schulname"
                                style="max-width: 250px;">
                        </div>
                        <!-- UNTERER TEIL -->
                    </div>
                    <!-- ###################### ZWEISPALTIG ###################### -->
                    <!-- ###################### DREISPALTIG ###################### -->
                    <div class="row namenslisteTab dreiSpaltig" :style="{display: nameListColumns === 3 ? 'flex' : 'none'}">
                        <!-- OBERER TEIL -->
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control" placeholder="Optional: Motivlogo"
                                style="max-width: 250px;">
                        </div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Optional: 10b"
                                style="max-width: 250px;">
                        </div>
                        <!-- OBERER TEIL -->
                        <!-- MITTLERER TEIL -->
                        <div class="col-md-6 col-lg-4">
                            <div class="namelistContainer" contenteditable="false">
                                <name-input name="namelist1" />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="namelistContainer" contenteditable="false">
                                <name-input name="namelist2" />
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-4">
                            <div class="namelistContainer" contenteditable="false">
                                <name-input name="namelist3" />
                            </div>
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
                            <input type="text" class="form-control inputAbstand" placeholder="Optional: AK2021"
                                style="max-width: 250px;">
                        </div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Optional: Schulname"
                                style="max-width: 250px;">
                        </div>
                        <!-- UNTERER TEIL -->
                    </div>
                    <!-- ###################### DREISPALTIG ###################### -->
                    <!-- ###################### VIERSPALTIG ###################### -->
                    <div class="row namenslisteTab vierSpaltig" :style="{display: nameListColumns === 4 ? 'flex' : 'none'}">
                        <!-- OBERER TEIL -->
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control" placeholder="Optional: Motivlogo"
                                style="max-width: 250px;">
                        </div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Optional: 10b"
                                style="max-width: 250px;">
                        </div>
                        <!-- OBERER TEIL -->
                        <!-- MITTLERER TEIL -->
                        <div class="col-md-6">
                            <div class="namelistContainer" contenteditable="false">
                                <name-input name="namelist1" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="namelistContainer" contenteditable="false">
                                <name-input name="namelist2" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="namelistContainer" contenteditable="false">
                                <name-input name="namelist3" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="namelistContainer" contenteditable="false">
                                <name-input name="namelist4" />
                            </div>
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
                            <input type="text" class="form-control inputAbstand" placeholder="Optional: AK2021"
                                style="max-width: 250px;">
                        </div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Optional: Schulname"
                                style="max-width: 250px;">
                        </div>
                        <!-- UNTERER TEIL -->
                    </div>
                    <!-- ###################### VIERSPALTIG ###################### -->

                    <div class="rueckseiteTextareaContainer">
                        <p class="rueckseiteTextarea">Änderungen auf der Rückseite:</p>
                            <textarea class="form-control" id="motivAenderung" rows="5"
                                placeholder="Beispiele: Bitte eine Old English Schriftart (oder eine andere?) verwenden, Namen bitte nach dem Nachnamen alphabetisch sortieren, etc."></textarea>
                    </div>
                </div>
            </div>
            <!-- ###################### CONTENT ###################### -->
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
            <order-fieldset-footer button-prev v-on:prev-tab="previousTab()"
                alert="Bitte trage die Namen für die Rückseite ein!" button-next v-on:next-tab="nextTab()" />
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
        </fieldset>
        <fieldset :class="{active: activeTab === 4}" :style="{display: activeTab === 4 ? 'block' : 'none'}">
            <!-- ###################### CONTENT ###################### -->
            <order-fieldset-head title="Sonderdruck" button-prev="Rückseite" v-on:prev-tab="previousTab()"
                button-next="Menge" v-on:next-tab="nextTab()" />
            <p class="form-text">
                Wähle eine Individualisierung oder überspringe diesen Schritt.<br>
                Möglich sind bis zu zwei Individualisierungen auf einem Textil.
            </p>
            <div class="row">
                <div class="col-md-12">
                    <div class="row sonderdruck">
                        <div class="col-md-12 col-lg-6">
                            <div class="sonderdruckVorschau">
                                <div class="hoodieShirtWrapper">
                                    <div class="hoodieShirtSwitch left">
                                        <div class="hoodieShirtTab active" hoodieshirttab-direction="left">Hoodies</div>
                                        <div class="hoodieShirtTab" hoodieshirttab-direction="right">Shirts</div>
                                    </div>
                                </div>
                                <div class="sonderdruckVorschauBild">
                                    <img class="img-fluid" src="../../assets/img/rueckseite-vorschau.png">
                                </div>
                                <label for="sonderdruckSelected-item-9" class="sonderdruckSelected-label sonderdruckSelect">
                                    <div class="inputText">Rechter Unterarm</div>
                                    <input type="checkbox" checked name="sonderdruckSelected-item" id="sonderdruckSelected-item-9">
                                    <span class="sonderdruckIcon">
                                        <font-awesome-icon :icon="['fas', 'check']" /></span>
                                    <div class="sonderdruckSelected-content">
                                        <img class="img-fluid" src="../../assets/img/hoodie_rechter_unterarm.png" alt="">
                                        <div class="motivLink">+3,50 EUR</div>
                                    </div>
                                </label>
                                <label for="sonderdruckSelected-item-10" class="sonderdruckSelected-label sonderdruckSelect">
                                    <div class="inputText">Name Rückseite</div>
                                    <input type="checkbox" checked name="sonderdruckSelected-item" id="sonderdruckSelected-item-10">
                                    <span class="sonderdruckIcon">
                                        <font-awesome-icon :icon="['fas', 'check']" /></span>
                                    <div class="sonderdruckSelected-content">
                                        <img class="img-fluid" src="../../assets/img/hoodie_name_rueckseite.png" alt="">
                                        <div class="motivLink">+4,00 EUR</div>
                                    </div>
                                </label>
                                <div role="alert" class="alert-primary sonderdruck-alert-primary">
                                    <font-awesome-icon :icon="['fas', 'exclamation']" />&nbsp;&nbsp;Es sind nur maximal 2 Individualisierungen pro Textil möglich!
                                </div>
                                <div class="selectOtherButton">
                                    <button type="button" name="selectOther" class="selectOther">
                                        Anderen Sonderdruck&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'share']" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <div class="row">

                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodiesFlaggen">
                                    <p class="sonderdruckEingabe">Hoodies - Flaggen</p>
                                    <p class="sonderdruckInfo">Wähle bitte die gewünschte Flagge für die jeweiligen Namen.</p>
                                        <p class="sonderdruckNamenslisteFlaggen">1. Spalte</p>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="dropdown show">
                                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <span class="flagge">Land</span><font-awesome-icon :icon="['fas', 'share']" />
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <div class="sonderdruckFlaggensuche">
                                                            <input type="text" class="form-control" placeholder="Suchen..">
                                                        </div>
                                                        <div v-for="language in languages" :key="language.key" class="dropdown-item" v-on:click="alert('clicked');">
                                                            <country-flag :country="language.flagKey" class="flagge" size='small' style="margin-right: -12px; transform: scale(.32);"/>{{ language.name }}
                                                        </div>
                                                        <!--<div class="dropdown-item"><span class="flagge">🇦🇪</span>Vereinigte Arabische Emirate</div>
                                                        <div class="dropdown-item"><span class="flagge">🇦🇫</span>Afghanistan</div>
                                                        <div class="dropdown-item"><span class="flagge">🇦🇱</span>Albanien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇦🇲</span>Armenien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇦🇴</span>Angola</div>
                                                        <div class="dropdown-item"><span class="flagge">🇦🇶</span>Antarktis</div>
                                                        <div class="dropdown-item"><span class="flagge">🇦🇷</span>Argentinien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇦🇹</span>Österreich</div>
                                                        <div class="dropdown-item"><span class="flagge">🇦🇺</span>Australien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇦🇿</span>Aserbaidschan</div>
                                                        <div class="dropdown-item"><span class="flagge">🇧🇦</span>Bosnien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇧🇩</span>Bangladesh</div>
                                                        <div class="dropdown-item"><span class="flagge">🇧🇪</span>Belgien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇧🇬</span>Bulgarien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇧🇭</span>Bahrain</div>
                                                        <div class="dropdown-item"><span class="flagge">🇧🇮</span>Burundi</div>
                                                        <div class="dropdown-item"><span class="flagge">🇧🇯</span>Benin</div>
                                                        <div class="dropdown-item"><span class="flagge">🇧🇴</span>Bolivien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇧🇷</span>Brasilien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇧🇼</span>Botsuana</div>
                                                        <div class="dropdown-item"><span class="flagge">🇧🇾</span>Weißrussland</div>
                                                        <div class="dropdown-item"><span class="flagge">🇨🇦</span>Kanada</div>
                                                        <div class="dropdown-item"><span class="flagge">🇨🇩</span>Kinshasa</div>
                                                        <div class="dropdown-item"><span class="flagge">🇨🇫</span>Zentralafrikanische Republik</div>
                                                        <div class="dropdown-item"><span class="flagge">🇨🇬</span>Kongo</div>
                                                        <div class="dropdown-item"><span class="flagge">🇨🇭</span>Schweiz</div>
                                                        <div class="dropdown-item"><span class="flagge">🇨🇱</span>Chile</div>
                                                        <div class="dropdown-item"><span class="flagge">🇨🇲</span>Kamerun</div>
                                                        <div class="dropdown-item"><span class="flagge">🇨🇳</span>China</div>
                                                        <div class="dropdown-item"><span class="flagge">🇨🇴</span>Kolumbien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇨🇺</span>Kuba</div>
                                                        <div class="dropdown-item"><span class="flagge">🇨🇾</span>Zypern</div>
                                                        <div class="dropdown-item"><span class="flagge">🇨🇿</span>Tschechien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇩🇪</span>Deutschland</div>
                                                        <div class="dropdown-item"><span class="flagge">🇩🇰</span>Dänemark</div>
                                                        <div class="dropdown-item"><span class="flagge">🇩🇴</span>Dominikanische Republik</div>
                                                        <div class="dropdown-item"><span class="flagge">🇩🇿</span>Algerien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇪🇨</span>Ecuador</div>
                                                        <div class="dropdown-item"><span class="flagge">🇪🇪</span>Estland</div>
                                                        <div class="dropdown-item"><span class="flagge">🇪🇬</span>Ägypten</div>
                                                        <div class="dropdown-item"><span class="flagge">🇪🇷</span>Eritrea</div>
                                                        <div class="dropdown-item"><span class="flagge">🇪🇸</span>Spanien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇪🇹</span>Äthiopien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇫🇮</span>Finnland</div>
                                                        <div class="dropdown-item"><span class="flagge">🇫🇷</span>Frankreich</div>
                                                        <div class="dropdown-item"><span class="flagge">🇬🇦</span>Gabun</div>
                                                        <div class="dropdown-item"><span class="flagge">🇬🇧</span>Vereinigtes Königreich</div>
                                                        <div class="dropdown-item"><span class="flagge">🇬🇪</span>Georgien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇬🇭</span>Ghana</div>
                                                        <div class="dropdown-item"><span class="flagge">🇬🇲</span>Gambia</div>
                                                        <div class="dropdown-item"><span class="flagge">🇬🇳</span>Guinea</div>
                                                        <div class="dropdown-item"><span class="flagge">🇬🇷</span>Griechenland</div>
                                                        <div class="dropdown-item"><span class="flagge">🇬🇹</span>Guatemala</div>
                                                        <div class="dropdown-item"><span class="flagge">🇭🇳</span>Honduras</div>
                                                        <div class="dropdown-item"><span class="flagge">🇭🇷</span>Kroatien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇭🇹</span>Haiti</div>
                                                        <div class="dropdown-item"><span class="flagge">🇭🇺</span>Ungarn</div>
                                                        <div class="dropdown-item"><span class="flagge">🇮🇨</span>Kanarischen Inseln</div>
                                                        <div class="dropdown-item"><span class="flagge">🇮🇩</span>Indonesien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇮🇪</span>Irland</div>
                                                        <div class="dropdown-item"><span class="flagge">🇮🇱</span>Israel</div>
                                                        <div class="dropdown-item"><span class="flagge">🇮🇳</span>Indien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇮🇶</span>Irak</div>
                                                        <div class="dropdown-item"><span class="flagge">🇮🇷</span>Iran</div>
                                                        <div class="dropdown-item"><span class="flagge">🇮🇸</span>Island</div>
                                                        <div class="dropdown-item"><span class="flagge">🇮🇹</span>Italien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇯🇲</span>Jamaika</div>
                                                        <div class="dropdown-item"><span class="flagge">🇯🇴</span>Jordanien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇯🇵</span>Japan</div>
                                                        <div class="dropdown-item"><span class="flagge">🇰🇪</span>Kenia</div>
                                                        <div class="dropdown-item"><span class="flagge">🇰🇬</span>Kirgisistan</div>
                                                        <div class="dropdown-item"><span class="flagge">🇰🇭</span>Kambodscha</div>
                                                        <div class="dropdown-item"><span class="flagge">🇰🇵</span>Nordkorea</div>
                                                        <div class="dropdown-item"><span class="flagge">🇰🇷</span>Südkorea</div>
                                                        <div class="dropdown-item"><span class="flagge">🇹🇯</span>Kurdistan</div>
                                                        <div class="dropdown-item"><span class="flagge">🇰🇼</span>Kuwait</div>
                                                        <div class="dropdown-item"><span class="flagge">🇰🇿</span>Kasachstan</div>
                                                        <div class="dropdown-item"><span class="flagge">🇱🇦</span>Laos</div>
                                                        <div class="dropdown-item"><span class="flagge">🇱🇧</span>Libanon</div>
                                                        <div class="dropdown-item"><span class="flagge">🇱🇰</span>Sri Lanka</div>
                                                        <div class="dropdown-item"><span class="flagge">🇱🇷</span>Liberia</div>
                                                        <div class="dropdown-item"><span class="flagge">🇱🇸</span>Lesotho</div>
                                                        <div class="dropdown-item"><span class="flagge">🇱🇹</span>Litauen</div>
                                                        <div class="dropdown-item"><span class="flagge">🇱🇺</span>Luxemburg</div>
                                                        <div class="dropdown-item"><span class="flagge">🇱🇻</span>Lettland</div>
                                                        <div class="dropdown-item"><span class="flagge">🇱🇾</span>Libyen</div>
                                                        <div class="dropdown-item"><span class="flagge">🇲🇦</span>Marokko</div>
                                                        <div class="dropdown-item"><span class="flagge">🇲🇩</span>Moldawien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇲🇬</span>Madagaskar</div>
                                                        <div class="dropdown-item"><span class="flagge">🇲🇰</span>Nordmazedonien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇲🇱</span>Mali</div>
                                                        <div class="dropdown-item"><span class="flagge">🇲🇲</span>Myanmar</div>
                                                        <div class="dropdown-item"><span class="flagge">🇲🇳</span>Mongolei</div>
                                                        <div class="dropdown-item"><span class="flagge">🇲🇷</span>Mauretanien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇲🇺</span>Mauritius</div>
                                                        <div class="dropdown-item"><span class="flagge">🇲🇼</span>Malawi</div>
                                                        <div class="dropdown-item"><span class="flagge">🇲🇽</span>Mexiko</div>
                                                        <div class="dropdown-item"><span class="flagge">🇲🇾</span>Malaysia</div>
                                                        <div class="dropdown-item"><span class="flagge">🇲🇿</span>Mosambik</div>
                                                        <div class="dropdown-item"><span class="flagge">🇳🇦</span>Namibia</div>
                                                        <div class="dropdown-item"><span class="flagge">🇳🇪</span>Niger</div>
                                                        <div class="dropdown-item"><span class="flagge">🇳🇬</span>Nigeria</div>
                                                        <div class="dropdown-item"><span class="flagge">🇳🇮</span>Nicaragua</div>
                                                        <div class="dropdown-item"><span class="flagge">🇳🇱</span>Niederlande</div>
                                                        <div class="dropdown-item"><span class="flagge">🇳🇴</span>Norwegen</div>
                                                        <div class="dropdown-item"><span class="flagge">🇳🇵</span>Nepal</div>
                                                        <div class="dropdown-item"><span class="flagge">🇳🇿</span>Neuseeland</div>
                                                        <div class="dropdown-item"><span class="flagge">🇴🇲</span>Oman</div>
                                                        <div class="dropdown-item"><span class="flagge">🇵🇦</span>Panama</div>
                                                        <div class="dropdown-item"><span class="flagge">🇵🇪</span>Peru</div>
                                                        <div class="dropdown-item"><span class="flagge">🇵🇬</span>Papua-Neuguinea</div>
                                                        <div class="dropdown-item"><span class="flagge">🇵🇭</span>Philippinen</div>
                                                        <div class="dropdown-item"><span class="flagge">🇵🇰</span>Pakistan</div>
                                                        <div class="dropdown-item"><span class="flagge">🇵🇱</span>Polen</div>
                                                        <div class="dropdown-item"><span class="flagge">🇵🇷</span>Puerto Rico</div>
                                                        <div class="dropdown-item"><span class="flagge">🇵🇸</span>Palästina</div>
                                                        <div class="dropdown-item"><span class="flagge">🇵🇹</span>Portugal</div>
                                                        <div class="dropdown-item"><span class="flagge">🇵🇾</span>Paraguay</div>
                                                        <div class="dropdown-item"><span class="flagge">🇶🇦</span>Katar</div>
                                                        <div class="dropdown-item"><span class="flagge">🇷🇴</span>Rumänien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇷🇸</span>Serbien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇷🇺</span>Russland</div>
                                                        <div class="dropdown-item"><span class="flagge">🇷🇼</span>Ruanda</div>
                                                        <div class="dropdown-item"><span class="flagge">🇸🇦</span>Saudi-Arabien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇸🇩</span>Sudan</div>
                                                        <div class="dropdown-item"><span class="flagge">🇸🇪</span>Schweden</div>
                                                        <div class="dropdown-item"><span class="flagge">🇸🇬</span>Singapur</div>
                                                        <div class="dropdown-item"><span class="flagge">🇸🇮</span>Slowenien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇸🇰</span>Slowakei</div>
                                                        <div class="dropdown-item"><span class="flagge">🇸🇱</span>Sierra Leone</div>
                                                        <div class="dropdown-item"><span class="flagge">🇸🇳</span>Senegal</div>
                                                        <div class="dropdown-item"><span class="flagge">🇸🇴</span>Somalia</div>
                                                        <div class="dropdown-item"><span class="flagge">🇸🇸</span>Südsudan</div>
                                                        <div class="dropdown-item"><span class="flagge">🇸🇻</span>El Salvador</div>
                                                        <div class="dropdown-item"><span class="flagge">🇸🇾</span>Syrien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇸🇿</span>Swasiland</div>
                                                        <div class="dropdown-item"><span class="flagge">🇹🇩</span>Tschad</div>
                                                        <div class="dropdown-item"><span class="flagge">🇹🇬</span>Togo</div>
                                                        <div class="dropdown-item"><span class="flagge">🇹🇭</span>Thailand</div>
                                                        <div class="dropdown-item"><span class="flagge">🇹🇯</span>Tadschikistan</div>
                                                        <div class="dropdown-item"><span class="flagge">🇹🇲</span>Turkmenistan</div>
                                                        <div class="dropdown-item"><span class="flagge">🇹🇳</span>Tunesien</div>
                                                        <div class="dropdown-item"><span class="flagge">🇹🇷</span>Türkei</div>
                                                        <div class="dropdown-item"><span class="flagge">🇹🇼</span>Taiwan</div>
                                                        <div class="dropdown-item"><span class="flagge">🇹🇿</span>Tansania</div>
                                                        <div class="dropdown-item"><span class="flagge">🇺🇦</span>Ukraine</div>
                                                        <div class="dropdown-item"><span class="flagge">🇺🇬</span>Uganda</div>
                                                        <div class="dropdown-item"><span class="flagge">🇺🇸</span>USA</div>
                                                        <div class="dropdown-item"><span class="flagge">🇺🇾</span>Uruguay</div>
                                                        <div class="dropdown-item"><span class="flagge">🇺🇿</span>Usbekistan</div>
                                                        <div class="dropdown-item"><span class="flagge">🇻🇪</span>Venezuela</div>
                                                        <div class="dropdown-item"><span class="flagge">🇻🇳</span>Vietnam</div>
                                                        <div class="dropdown-item"><span class="flagge">🇽🇰</span>Kosovo</div>
                                                        <div class="dropdown-item"><span class="flagge">🇾🇪</span>Jemen</div>
                                                        <div class="dropdown-item"><span class="flagge">🇿🇦</span>Südafrika</div>
                                                        <div class="dropdown-item"><span class="flagge">🇿🇲</span>Sambia</div>
                                                        <div class="dropdown-item"><span class="flagge">🇿🇼</span>Simbabwe</div>
                                                        <div class="dropdown-item"><span class="flagge">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>England</div>
                                                        <div class="dropdown-item"><span class="flagge">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>Schottland</div>
                                                        <div class="dropdown-item"><span class="flagge">🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>Wales</div>-->                                 
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="namenslisteFlaggen" id="namenslisteFlaggen">Max Mustermann</span>
                                        </div>
                                        <p class="sonderdruckNamenslisteFlaggen">2. Spalte</p>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="dropdown show">
                                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <span class="flagge">🇩🇪</span><font-awesome-icon :icon="['fas', 'share']" />
                                                    </a>

                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <a class="dropdown-item" href="#">Deutschland</a>
                                                        <a class="dropdown-item" href="#">Spanien</a>
                                                        <a class="dropdown-item" href="#">Türkei</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="namenslisteFlaggen" id="namenslisteFlaggen">Marie Musterfrau</span>
                                        </div>
                                        <p class="sonderdruckNamenslisteFlaggen">3. Spalte</p>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="dropdown show">
                                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <span class="flagge">Land</span><font-awesome-icon :icon="['fas', 'share']" />
                                                    </a>

                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <a class="dropdown-item" href="#">Deutschland</a>
                                                        <a class="dropdown-item" href="#">Spanien</a>
                                                        <a class="dropdown-item" href="#">Türkei</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="namenslisteFlaggen" id="namenslisteFlaggen">Max Mustermann</span>
                                        </div>
                                        <p class="sonderdruckNamenslisteFlaggen">4. Spalte</p>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="dropdown show">
                                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <span class="flagge">Land</span><font-awesome-icon :icon="['fas', 'share']" />
                                                    </a>

                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <a class="dropdown-item" href="#">Deutschland</a>
                                                        <a class="dropdown-item" href="#">Spanien</a>
                                                        <a class="dropdown-item" href="#">Türkei</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="namenslisteFlaggen" id="namenslisteFlaggen">Marie Musterfrau</span>
                                        </div>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="dropdown show">
                                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <span class="flagge">Land</span><font-awesome-icon :icon="['fas', 'share']" />
                                                    </a>

                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <a class="dropdown-item" href="#">Deutschland</a>
                                                        <a class="dropdown-item" href="#">Spanien</a>
                                                        <a class="dropdown-item" href="#">Türkei</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="namenslisteFlaggen" id="namenslisteFlaggen">Max Mustermann</span>
                                        </div>
                                </div>

                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodiesLinkerUnterarm">
                                    <p class="sonderdruckEingabe">Hoodies - Linker Unterarm</p>
                                    <p class="sonderdruckInfo">Trenne bitte alle Namen hintereinander mit einem Komma.</p>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">XS</div></div><input type="text" class="form-control" id="hoodiesLinkerUnterarmXS" placeholder="Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">S</div></div><input type="text" class="form-control" id="hoodiesLinkerUnterarmS" placeholder="Name, Name, Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">M</div></div><input type="text" class="form-control" id="hoodiesLinkerUnterarmM" placeholder="Name, Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">L</div></div><input type="text" class="form-control" id="hoodiesLinkerUnterarmL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">XL</div></div><input type="text" class="form-control" id="hoodiesLinkerUnterarmXL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">2XL</div></div><input type="text" class="form-control" id="hoodiesLinkerUnterarm2XL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">3XL</div></div><input type="text" class="form-control" id="hoodiesLinkerUnterarm3XL" placeholder=".."></div>
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodiesLinkerOberarm">
                                    <p class="sonderdruckEingabe">Hoodies - Linker Oberarm</p>
                                    <p class="sonderdruckInfo">Trenne bitte alle Namen hintereinander mit einem Komma.</p>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">XS</div></div><input type="text" class="form-control" id="hoodiesLinkerOberarmXS" placeholder="Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">S</div></div><input type="text" class="form-control" id="hoodiesLinkerOberarmS" placeholder="Name, Name, Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">M</div></div><input type="text" class="form-control" id="hoodiesLinkerOberarmM" placeholder="Name, Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">L</div></div><input type="text" class="form-control" id="hoodiesLinkerOberarmL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">XL</div></div><input type="text" class="form-control" id="hoodiesLinkerOberarmXL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">2XL</div></div><input type="text" class="form-control" id="hoodiesLinkerOberarm2XL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">3XL</div></div><input type="text" class="form-control" id="hoodiesLinkerOberarm3XL" placeholder=".."></div>
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodiesRechterUnterarm">
                                    <p class="sonderdruckEingabe">Hoodies - Rechter Unterarm</p>
                                    <p class="sonderdruckInfo">Trenne bitte alle Namen hintereinander mit einem Komma.</p>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">XS</div></div><input type="text" class="form-control" id="hoodiesRechterUnterarmXS" placeholder="Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">S</div></div><input type="text" class="form-control" id="hoodiesRechterUnterarmS" placeholder="Name, Name, Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">M</div></div><input type="text" class="form-control" id="hoodiesRechterUnterarmM" placeholder="Name, Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">L</div></div><input type="text" class="form-control" id="hoodiesRechterUnterarmL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">XL</div></div><input type="text" class="form-control" id="hoodiesRechterUnterarmXL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">2XL</div></div><input type="text" class="form-control" id="hoodiesRechterUnterarm2XL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">3XL</div></div><input type="text" class="form-control" id="hoodiesRechterUnterarm3XL" placeholder=".."></div>
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodiesRechterOberarm">
                                    <p class="sonderdruckEingabe">Hoodies - Rechter Oberarm</p>
                                    <p class="sonderdruckInfo">Trenne bitte alle Namen hintereinander mit einem Komma.</p>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">XS</div></div><input type="text" class="form-control" id="hoodiesRechterOberarmXS" placeholder="Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">S</div></div><input type="text" class="form-control" id="hoodiesRechterOberarmS" placeholder="Name, Name, Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">M</div></div><input type="text" class="form-control" id="hoodiesRechterOberarmM" placeholder="Name, Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">L</div></div><input type="text" class="form-control" id="hoodiesRechterOberarmL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">XL</div></div><input type="text" class="form-control" id="hoodiesRechterOberarmXL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">2XL</div></div><input type="text" class="form-control" id="hoodiesRechterOberarm2XL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">3XL</div></div><input type="text" class="form-control" id="hoodiesRechterOberarm3XL" placeholder=".."></div>
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodiesLinkeBrust">
                                    <p class="sonderdruckEingabe">Hoodies - Linke Brust</p>
                                    <p class="sonderdruckInfo">Trenne bitte alle Namen hintereinander mit einem Komma.</p>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">XS</div></div><input type="text" class="form-control" id="hoodiesLinkeBrustXS" placeholder="Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">S</div></div><input type="text" class="form-control" id="hoodiesLinkeBrustS" placeholder="Name, Name, Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">M</div></div><input type="text" class="form-control" id="hoodiesLinkeBrustM" placeholder="Name, Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">L</div></div><input type="text" class="form-control" id="hoodiesLinkeBrustL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">XL</div></div><input type="text" class="form-control" id="hoodiesLinkeBrustXL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">2XL</div></div><input type="text" class="form-control" id="hoodiesLinkeBrust2XL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">3XL</div></div><input type="text" class="form-control" id="hoodiesLinkeBrust3XL" placeholder=".."></div>
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodiesRechteBrust">
                                    <p class="sonderdruckEingabe">Hoodies - Rechte Brust</p>
                                    <p class="sonderdruckInfo">Trenne bitte alle Namen hintereinander mit einem Komma.</p>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">XS</div></div><input type="text" class="form-control" id="hoodiesRechteBrustXS" placeholder="Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">S</div></div><input type="text" class="form-control" id="hoodiesRechteBrustS" placeholder="Name, Name, Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">M</div></div><input type="text" class="form-control" id="hoodiesRechteBrustM" placeholder="Name, Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">L</div></div><input type="text" class="form-control" id="hoodiesRechteBrustL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">XL</div></div><input type="text" class="form-control" id="hoodiesRechteBrustXL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">2XL</div></div><input type="text" class="form-control" id="hoodiesRechteBrust2XL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">3XL</div></div><input type="text" class="form-control" id="hoodiesRechteBrust3XL" placeholder=".."></div>
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodiesNameRueckseite">
                                    <p class="sonderdruckEingabe">Hoodies - Name Rückseite</p>
                                    <p class="sonderdruckInfo">Trenne bitte alle Namen hintereinander mit einem Komma.</p>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">XS</div></div><input type="text" class="form-control" id="hoodiesNameRueckseiteXS" placeholder="Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">S</div></div><input type="text" class="form-control" id="hoodiesNameRueckseiteS" placeholder="Name, Name, Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">M</div></div><input type="text" class="form-control" id="hoodiesNameRueckseiteM" placeholder="Name, Name, .."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">L</div></div><input type="text" class="form-control" id="hoodiesNameRueckseiteL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">XL</div></div><input type="text" class="form-control" id="hoodiesNameRueckseiteXL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">2XL</div></div><input type="text" class="form-control" id="hoodiesNameRueckseite2XL" placeholder=".."></div>
                                        <div class="input-group"><div class="input-group-prepend"><div class="input-group-text">3XL</div></div><input type="text" class="form-control" id="hoodiesNameRueckseite3XL" placeholder=".."></div>
                                </div>
                                <div class="col-md-6">
                                    <label for="sonderdruckSelected-item-1" class="sonderdruckSelected-label">
                                        <div class="inputText">Linker Unterarm</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-1">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid" src="../../assets/img/hoodie_linker_unterarm.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label for="sonderdruckSelected-item-2" class="sonderdruckSelected-label">
                                        <div class="inputText">Linker Oberarm</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-2">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid" src="../../assets/img/hoodie_linker_oberarm.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label for="sonderdruckSelected-item-3" class="sonderdruckSelected-label">
                                        <div class="inputText">Rechter Unterarm</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-3">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid" src="../../assets/img/hoodie_rechter_unterarm.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label for="sonderdruckSelected-item-4" class="sonderdruckSelected-label">
                                        <div class="inputText">Rechter Oberarm</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-4">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid" src="../../assets/img/hoodie_rechter_oberarm.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label for="sonderdruckSelected-item-5" class="sonderdruckSelected-label">
                                        <div class="inputText">Linke Brust</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-5">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid" src="../../assets/img/hoodie_linke_brust.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label for="sonderdruckSelected-item-6" class="sonderdruckSelected-label">
                                        <div class="inputText">Rechte Brust</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-6">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid" src="../../assets/img/hoodie_rechte_brust.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label for="sonderdruckSelected-item-7" class="sonderdruckSelected-label">
                                        <div class="inputText">Name Rückseite</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-7">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid" src="../../assets/img/hoodie_name_rueckseite.png" alt="">
                                            <div class="motivLink">+4,00 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label for="sonderdruckSelected-item-8" class="sonderdruckSelected-label">
                                        <div class="inputText">Flaggen</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-8">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid" src="../../assets/img/hoodie_flaggen.png" alt="">
                                            <div class="motivLink">+5,00 EUR</div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="sonderdruckSelected-item-11" class="sonderdruckSelected-label">
                                        <div class="inputText">Linker Oberarm</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-11">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid shirtGroessen" src="../../assets/img/shirt_linker_oberarm.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label for="sonderdruckSelected-item-12" class="sonderdruckSelected-label">
                                        <div class="inputText">Rechter Oberarm</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-12">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid shirtGroessen" src="../../assets/img/shirt_rechter_oberarm.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label for="sonderdruckSelected-item-13" class="sonderdruckSelected-label">
                                        <div class="inputText">Linke Brust</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-13">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid shirtGroessen" src="../../assets/img/shirt_linke_brust.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label for="sonderdruckSelected-item-14" class="sonderdruckSelected-label">
                                        <div class="inputText">Rechte Brust</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-14">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid shirtGroessen" src="../../assets/img/shirt_rechte_brust.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label for="sonderdruckSelected-item-15" class="sonderdruckSelected-label">
                                        <div class="inputText">Name Rückseite</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-15">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid shirtGroessen" src="../../assets/img/shirt_name_rueckseite.png" alt="">
                                            <div class="motivLink">+4,00 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label for="sonderdruckSelected-item-16" class="sonderdruckSelected-label">
                                        <div class="inputText">Flaggen</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-16">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid shirtGroessen" src="../../assets/img/shirt_flaggen.png" alt="">
                                            <div class="motivLink">+5,00 EUR</div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ###################### CONTENT ###################### -->
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
            <order-fieldset-footer button-prev v-on:prev-tab="previousTab()"
                alert="Bitte mach eine Eingabe oder wähl deine bisherigen Schritte ab und überspringe diesen Schritt!" button-next v-on:next-tab="nextTab()" />
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
        </fieldset>
        <fieldset :class="{active: activeTab === 5}" :style="{display: activeTab === 5 ? 'block' : 'none'}">
            <!-- ###################### CONTENT ###################### -->
            <order-fieldset-head title="Menge" button-prev="Sonderdruck" v-on:prev-tab="previousTab()" button-final
                v-on:add-to-cart="addToCart()" />
            <p class="form-text">Trage die gewünschten Größen für dein Paket ein.<br>
                Achte bitte darauf, dass du mindestens 10 Stück bzw. im Bundle gleich viele Hoodies und Shirts
                einträgst.</p>
            <div class="row groessenAuswahl">
                <div class="col-12 col-md-6 groessenAbstand groessenAbstand2">
                    <p class="groessenText">Wähle die Größen der Hoodies im Bundle</p>
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
                    <p class="groessenText">Wähle die Größen der Shirts im Bundle</p>
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
                    <p class="groessenText">Wähle die Größen der Hoodies</p>
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
                    <p class="groessenText">Wähle die Größen der Shirts</p>
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
            <order-fieldset-footer button-prev v-on:prev-tab="previousTab()" button-final
                v-on:add-to-cart="addToCart()" />
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
        </fieldset>
    </form>
</template>
<script>
    import {
        store,
        mutations
    } from '../OrderStore'
    import numeral from 'numeral';
    import locales from 'numeral'
    import * as FilePond from 'filepond';
    import de_DE from 'filepond/locale/de-de';
    import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
    import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
    import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
    import OrderFieldsetHead from './OrderFieldsetHead';
    import OrderFieldsetFooter from './OrderFieldsetFooter';
    import SizeInput from './SizeInput';
    import NameInput from './NameInput';
    import MotifCard from './MotifCard';
    import CountryFlag from 'vue-country-flag';
    import languages from '../languages';
    export default {
        components: {
            OrderFieldsetHead,
            OrderFieldsetFooter,
            SizeInput,
            NameInput,
            MotifCard,
            CountryFlag
        },
        props: {
            products: Array,
        },
        data() {
            return {
                activeTab: 1,
                motifSelection: false,
                nameListColumns: 2,
                store: store,
                languages: languages
            }
        },
        computed: {
            currentItem() {
                return this.store.currentItem;
            }
        },
        mounted() {
            FilePond.registerPlugin(
                // encodes the file as base64 data
                FilePondPluginFileEncode,
                // validates the size of the file
                FilePondPluginFileValidateSize,
                // corrects mobile image orientation
                FilePondPluginImageExifOrientation,
                // previews dropped images
                FilePondPluginImagePreview
            );
            this.pond = FilePond.create(
                document.querySelector('input[name=filepond]')
            );
            this.pond.setOptions(de_DE);
            this.pond.setOptions(
                {
                    allowFileEncode: true,
                    credits: false,
                    labelIdle: 'Zieh deine Dateien in das Kästchen oder <span class="filepond--label-action">lade welche per Klick hoch</span>'
                }
            );
            console.log(languages);
        },
        methods: {
            nextTab(event) {
                this.activeTab++;
            },
            previousTab(event) {
                this.activeTab--;
            },
            chooseMotif() {
                if (this.motifSelection) {
                    this.motifSelection = !this.motifSelection
                }
            },
            uploadMotif() {
                if (!this.motifSelection) {
                    this.motifSelection = !this.motifSelection
                }
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
        height: 0px;
        width: 0px;
        overflow: hidden;
        clip: rect(1px 1px 1px 1px);
        /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);
    }

</style>
