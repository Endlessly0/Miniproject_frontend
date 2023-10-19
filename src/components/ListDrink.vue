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
        @click="Menu()"
      >
        เมนู TINY CAFE
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
      >
      </v-container>
      </v-col>
        <v-col
      cols="12"
      >
      <v-container
      class="text-h3">
      เครื่องดื่ม
      </v-container>
      </v-col>


      <v-col
      cols="12"
      >
      <v-container
      >
      </v-container>
      </v-col>

    <v-col cols="12"  md="4">
        <v-card
          class="mx-auto"
          max-width="350"
        >
          <v-img height="350px" :src="require('../assets/pic/Dr1.jpg')"></v-img>
  
          <v-card-text>
            <h2 class="text-h6 primary--text">
                Cappuccino
            </h2>
            คาปูชิโนที่ผสมระหว่างเอสเพรสโซ, นมร้อน
          </v-card-text>
  
          <v-card-title>ราคา: 90 บาท</v-card-title>

        </v-card>
    </v-col>
    
    <v-col cols="12"  md="4">
        <v-card
          class="mx-auto"
          max-width="350"
        >
          <v-img height="350px" :src="require('../assets/pic/Dr2.jpg')"></v-img>
  
          <v-card-text>
            <h2 class="text-h6 primary--text">
                Matcha Latte
            </h2>
            ชาเขียวผสมกับนมร้อนให้รสชาติละมุนและหวาน
          </v-card-text>
  
          <v-card-title>ราคา: 100 บาท</v-card-title>

        </v-card>
    </v-col>

    <v-col cols="12"  md="4">
        <v-card
          class="mx-auto"
          max-width="350"
        >
          <v-img height="350px" :src="require('../assets/pic/Dr3.jpg')"></v-img>
  
          <v-card-text>
            <h2 class="text-h6 primary--text">
                Strawberry Smoothie
            </h2>
            สมูทตี้ที่ผสมสตรอเบอรรีสด
          </v-card-text>
  
          <v-card-title>ราคา: 110 บาท</v-card-title>

        </v-card>
    </v-col>

    <v-col cols="12"  md="4">
        <v-card
          class="mx-auto"
          max-width="350"
        >
          <v-img height="350px" :src="require('../assets/pic/Dr4.jpg')"></v-img>
  
          <v-card-text>
            <h2 class="text-h6 primary--text">
                Chocolate
            </h2>
            ช็อคโกแลตรสนุ่ม หวานตัดขมนิดๆ
          </v-card-text>
  
          <v-card-title>ราคา: 95 บาท</v-card-title>

        </v-card>
    </v-col>
    
    <v-col cols="12"  md="4">
        <v-card
          class="mx-auto"
          max-width="350"
        >
          <v-img height="350px" :src="require('../assets/pic/Dr5.jpg')"></v-img>
  
          <v-card-text>
            <h2 class="text-h6 primary--text">
                Espresso
            </h2>
            รสชาติและกลิ่นหอมของกาแฟ
          </v-card-text>
  
          <v-card-title>ราคา: 120 บาท</v-card-title>

        </v-card>
    </v-col>

    <v-col cols="12"  md="4">
        <v-card
          class="mx-auto"
          max-width="350"
        
        >
          <v-img height="350px"
          :src="require('../assets/pic/Dr6.jpg')"></v-img>
  
          <v-card-text>
            <h2 class="text-h6 primary--text">
              Milk Tea
            </h2>
            ชานมกลมกล่อมพร้อมกับไข่มุกหนุบหนับ
          </v-card-text>
  
          <v-card-title>ราคา: 60 บาท</v-card-title>

        </v-card>
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
    Menu () {
      this.$router.push({ path: '/menu'}).catch(()=>{})
    },
    goToRegister () {
      this.$router.push({ path: '/register'}).catch(()=>{})
    },

  }
 
 
}
</script>