<template>
  <v-card class="mx-auto">
    <v-card-text>
      <template>
        <v-container fluid>
          <v-radio-group v-model="radios">
            <template v-slot:label>
              <div class="text-h5">Q:Your favourite <strong>search engine</strong></div>
            </template>
            <v-radio value="Google">
              <template v-slot:label>
                <div>
                  Of course it's <strong class="success--text">Google</strong>
                </div>
              </template>
            </v-radio>
            <v-radio value="Duckduckgo">
              <template v-slot:label>
                <div>
                  Definitely <strong class="primary--text">Duckduckgo</strong>
                </div>
              </template>
            </v-radio>
          </v-radio-group>
        </v-container>
      </template>
    </v-card-text>
    <v-card-actions>
      <v-btn text outlined
        rounded color="teal accent-4" @click="reveal = true">
        SUBMIT
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">Answer</p>
          <p>
            late 16th century (as a noun denoting a place where alms were
            distributed): from medieval Latin eleemosynarius, from late Latin
            eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
          </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn text color="teal accent-4" @click="reveal = false">
            Close
          </v-btn>
           <v-btn text color="teal accent-4" @click="reveal = false">
            Next
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      reveal: false,
    }),
  }
</script>