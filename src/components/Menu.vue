<template>
    <div>
        <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          
          contain
          :src="require('../assets/Logopro.png')"
          transition="scale-transition"
          width="70"
        />
      </div>
      <v-btn
        text
        @click="Review()"
      >
        รีวิว TINY CAFE
      </v-btn>
      
      <v-spacer></v-spacer>

      <v-avatar color="accent">
      <v-icon dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>
    </v-app-bar>


        <v-card
        class="mx-auto"
        max-width="1200"
        max-height="1500">
<v-row>

        <v-col
      cols="12"
      >
      <v-container
      class="text-h3">
      เมนู
      </v-container>
      </v-col>
      
      <v-col
      cols="12"
      >
      <v-container
      >
      </v-container>
      </v-col>

        <v-col
      cols="12"
      >
      <v-container
      class="text-h6">
        TINY CAFE
      </v-container>
      </v-col>
      <v-col
      cols="12"
      >
      <v-container
      >
      </v-container>
      </v-col>

    <v-col cols="12"  md="6">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          class="mx-auto"
          max-width="500"
        >
          <v-img :src="require('../assets/dessert.jpg')"></v-img>
  
          <v-card-text>
            <h2 class="text-h6 primary--text">
              ของหวาน
            </h2>
            Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
          </v-card-text>
  
          <v-card-title>
            
          </v-card-title>
  
          <v-fade-transition>
            <v-overlay
              v-if="hover"
              absolute
              color="#91164CAF"
            >
              <v-btn
              @click="ListDessert()"
              >รายการของหวาน</v-btn>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
    </v-hover>
    </v-col>

    <v-col cols="12" md="6">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          class="mx-auto"
          max-width="500"
        >
          <v-img height="500px" :src="require('../assets/drink.jpg')"></v-img>
  
          <v-card-text>
            <h2 class="text-h6 primary--text">
              เครื่องดื่ม
            </h2>
            Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
          </v-card-text>
  
          <v-card-title>
            
          </v-card-title>
  
          <v-fade-transition>
            <v-overlay
              v-if="hover"
              absolute
              color="#633003"
            >
              <v-btn
              @click="ListDrink()"
              >รายการเครื่องดื่ม</v-btn>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
    </v-hover>
    </v-col>
    </v-row>
        </v-card>
    </div>
  </template>

<script>
export default {
  name: 'RecCafe',

  data: () => ({
    
  }),
  methods: {
    ListDessert () {
      this.$router.push({ path: '/listdessert'}).catch(()=>{})
    },
    ListDrink() {
      this.$router.push({ path: '/listdrink'}).catch(()=>{})
    },
    Review() {
      this.$router.push({ path: '/review'}).catch(()=>{})
    },

  }
 
 
}
</script>