<template>
  <div>
    <template>
      <v-tabs fixed-tabs background-color="primary" dark class="">
        <v-tab>Core Java</v-tab>
        <v-tab>Java Spring</v-tab>
        <v-tab>Spring Boot</v-tab>
        <v-tab>Mysql</v-tab>
        <v-tab-item>
          <v-row class="mt-1 mb-2">
            <v-col class="text-center" v-for="(item, i) in coreJava" :key="i">
              <v-card class="mx-auto" max-width="344">
                <iframe :src="item.link"></iframe>

                <v-card-title>{{ item.name }}</v-card-title>

                <v-card-actions>
                  <v-btn color="orange lighten-2" text>Explore</v-btn>

                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item>
          <v-row class="mt-1 mb-2">
            <v-col class="text-center" v-for="(item, i) in coreJava" :key="i">
              <v-card class="mx-auto" max-width="344">
                <iframe :src="item.link"></iframe>

                <v-card-title>{{ item.name }}</v-card-title>

                <v-card-actions>
                  <v-btn color="orange lighten-2" text>Explore</v-btn>

                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item>
          <v-row class="mt-1 mb-2">
            <v-col class="text-center" v-for="(item, i) in coreJava" :key="i">
              <v-card class="mx-auto" max-width="344">
                <iframe :src="item.link"></iframe>

                <v-card-title>{{ item.name }}</v-card-title>

                <v-card-actions>
                  <v-btn color="orange lighten-2" text>Explore</v-btn>

                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item>
          <v-row class="mt-1 mb-2">
            <v-col class="text-center" v-for="(item, i) in coreJava" :key="i">
              <v-card class="mx-auto" max-width="344">
                <iframe :src="item.link"></iframe>

                <v-card-title>{{ item.name }}</v-card-title>

                <v-card-actions>
                  <v-btn color="orange lighten-2" text>Explore</v-btn>

                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      coreJava: [
        {
          link: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1',
          name: 'Velit occaecat quis exercitation eiusmod sunt cillum excepteur.',
        },
        {
          link: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1',
          name: 'occaecat quis exercitation eiusmod sunt cillum excepteur.',
        },
        {
          link: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1',
          name: 'occaecat quis exercitation eiusmod sunt cillum excepteur.',
        },
      ],
      springJava: [
        {
          link: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1',
          name: 'Velit occaecat quis exercitation eiusmod sunt cillum excepteur.',
        },
        {
          link: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1',
          name: 'occaecat quis exercitation eiusmod sunt cillum excepteur.',
        },
        {
          link: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1',
          name: 'occaecat quis exercitation eiusmod sunt cillum excepteur.',
        },
      ],
      bootJava: [
        {
          link: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1',
          name: 'Velit occaecat quis exercitation eiusmod sunt cillum excepteur.',
        },
        {
          link: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1',
          name: 'occaecat quis exercitation eiusmod sunt cillum excepteur.',
        },
        {
          link: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1',
          name: 'occaecat quis exercitation eiusmod sunt cillum excepteur.',
        },
      ],
      sql: [
        {
          link: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1',
          name: 'Velit occaecat quis exercitation eiusmod sunt cillum excepteur.',
        },
        {
          link: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1',
          name: 'occaecat quis exercitation eiusmod sunt cillum excepteur.',
        },
        {
          link: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1',
          name: 'occaecat quis exercitation eiusmod sunt cillum excepteur.',
        },
      ],
    }
  },
}
</script>