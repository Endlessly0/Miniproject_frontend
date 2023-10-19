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
      ของหวาน
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
          <v-img height="350px" :src="require('../assets/pic/D1.jpg')"></v-img>
  
          <v-card-text>
            <h2 class="text-h6 primary--text">
            Deep Chocolate Cake
            </h2>
            เค้กช็อคโกแลตหน้านิ่มละมุน โรยด้วยผงคาเฟอีน
          </v-card-text>
  
          <v-card-title>ราคา: 150 บาท</v-card-title>

        </v-card>
    </v-col>
    
    <v-col cols="12"  md="4">
        <v-card
          class="mx-auto"
          max-width="350"
        >
          <v-img height="350px" :src="require('../assets/pic/D2.jpg')"></v-img>
  
          <v-card-text>
            <h2 class="text-h6 primary--text">
                Classic Strawberry Cake
            </h2>
            เค้กอบเบอรรีละมุนและหอมหวานตกแต่งด้วยครีมชีส
          </v-card-text>
  
          <v-card-title>ราคา: 180 บาท</v-card-title>

        </v-card>
    </v-col>

    <v-col cols="12"  md="4">
        <v-card
          class="mx-auto"
          max-width="350"
        >
          <v-img  height="350px" :src="require('../assets/pic/D3.jpg')"></v-img>
  
          <v-card-text>
            <h2 class="text-h6 primary--text">
                Fresh milk muffin cake
            </h2>
            เค้กมัฟฟินด้านบนราดด้วยนมสดและผสมกับสตรอเบอรรี
          </v-card-text>
  
          <v-card-title>ราคา: 160 บาท</v-card-title>

        </v-card>
    </v-col>

    <v-col cols="12"  md="4">
        <v-card
          class="mx-auto"
          max-width="350"
        >
          <v-img height="350px" :src="require('../assets/pic/D4.jpg')"></v-img>
  
          <v-card-text>
            <h2 class="text-h6 primary--text">
                Chocolate chip cookies
            </h2>
            คุกกี้ช็อคชิพที่มีช็อคโกแลตบนหน้าคุกกี้
          </v-card-text>
  
          <v-card-title>ราคา: 60 บาท</v-card-title>

        </v-card>
    </v-col>
    
    <v-col cols="12"  md="4">
        <v-card
          class="mx-auto"
          max-width="350"
        >
          <v-img height="350px" :src="require('../assets/pic/D5.jpg')"></v-img>
  
          <v-card-text>
            <h2 class="text-h6 primary--text">
                Salted Caramel Cookies
            </h2>
            คุกกี้หน้ากรอบเสริมด้วยซอลต์คาราเมลหวานๆ
          </v-card-text>
  
          <v-card-title>ราคา: 70 บาท</v-card-title>

        </v-card>
    </v-col>

    <v-col cols="12"  md="4">
        <v-card
          class="mx-auto"
          max-width="350"
        >
          <v-img height="350px" :src="require('../assets/pic/D6.jpg')"></v-img>
  
          <v-card-text>
            <h2 class="text-h6 primary--text">
                Croissant
            </h2>
            ครัวซองเนื้อสัมผัสนุ่มสายแป้งห้ามพลาด
          </v-card-text>
  
          <v-card-title>ราคา: 50 บาท</v-card-title>

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