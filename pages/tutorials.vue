<template>
  <div>
    <v-row>
      <v-col class="text-center" v-for="(item, i) in tutorials" :key="i">
        <v-card class="mx-auto" width="900">
          <v-list-item three-line class="mt-2">
            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                {{ item.title }}
              </v-list-item-title>
              <v-list-item-subtitle>
              {{item.description}}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
              color="primary"
              @click.stop="dialog = true;selectedUrl=item.link"
            >
              Go To Website
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="text-h5"> Go to selected website? </v-card-title>

        <v-card-text>
          Website is not anyway related to "javaneeds". continue on your own
          risk ?.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Disagree
          </v-btn>

          <v-btn color="green darken-1" text @click="dialog = false;clickfun()"  >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      selectedUrl:'',
      tutorials: [
        {
          title: 'Heading One',
          description: 'Officia fugiat adipisicing aliquip nulla id commodo.',
          link: 'http://google.com',
          logo: 'abc.jpg',
        },
        {
          title: 'Heading One',
          description: 'Officia fugiat adipisicing aliquip nulla id commodo.',
          link: 'http://google.com',
          logo: 'abc.jpg',
        },
        {
          title: 'Heading One',
          description: 'Officia fugiat adipisicing aliquip nulla id commodo.',
          link: 'http://google.com',
          logo: 'abc.jpg',
        },
      ],
    }
  },
 methods: {
    clickfun() {
        window.open(
        this.selectedUrl,
        '_blank' // <- This is what makes it open in a new window.
      );
    }
  }
}
</script>
