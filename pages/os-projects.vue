<template>
  <div>
    <v-row class="mt-1">
      <v-col v-for="(item, i) in projects" :key="i">
        <v-card class="mx-auto" width="400">
          <v-card-title>
            <v-icon large left> mdi-github </v-icon>
            <span class="text-h6 font-weight-light">Repository : {{item.name}}</span>
          </v-card-title>

          <v-card-text class="">
            {{item.description}}
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-content>
                <v-list-item-title>{{item.author}}</v-list-item-title>
              </v-list-item-content>

              <v-row align="center" justify="end">
                <v-icon class="mr-1"> mdi-star </v-icon>
                <span class="subheading mr-2">{{item.stars}}</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1"> mdi-share-variant </v-icon>
                <span class="subheading">{{item.fork}}</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
        projects:[
          {
            name:'proident sint.',
            link:'Aute aute cillum ',
            description:'Aute esse qui nulla occaecat eiusmod et Lorem. Duis adipisicing consectetur sit ut excepteur fugiat ullamco cillum commodo. In minim qui id duis ex ut consequat deserunt consectetur culpa ullamco do labore culpa. Esse cillum exercitation minim ipsum sint veniam quis reprehenderit amet. Non magna non sunt mollit commodo velit consequat pariatur proident qui. Nulla mollit eu nostrud eiusmod commodo qui labore adipisicing.',
            author:'Ank sdl',
            stars: 200,
            fork: 200,
          },
            {
            name:'Eu aute',
            link:'anim consectetur aliquip.',
            description:'Adipisicing consequat laborum laboris incididunt amet ullamco nisi consequat sit velit id qui. Consectetur pariatur ut est culpa et. Duis labore duis mollit cupidatat nisi consectetur ex occaecat do do eiusmod ex duis. Anim consequat amet eu dolor deserunt labore qui irure nulla aliquip excepteur. Consequat sit aliquip qui est eu ad et Lorem fugiat anim anim esse laborum. Ullamco velit et culpa do commodo velit nisi ea in minim exercitation do.',
            author:'Ank sdl',
            stars: 200,
            fork: 200,
          }
        ]

    }
  },
}
</script>
