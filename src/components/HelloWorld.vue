<template>

<div>
  <v-app>
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
        @click="RecCafe()"
      >
        แนะนำร้าน TINY CAFE
      </v-btn>
      <v-btn
        text
        @click="RecFood()"
      >
        แนะนำอาหาร
      </v-btn>
      
<v-spacer></v-spacer>

    </v-app-bar>
  
  <v-card
    class="mx-auto"
    max-width="2000"
  >
    <v-img
      class="black--text align-center  "
      height="750px"
      :src="require('../assets/stpage.jpg')"
    >
      <v-card-title 
      class="text-h2"
      >TINY CAFE</v-card-title>
      <v-spacer></v-spacer>
      <v-card-subtitle class="text-h5 pb-0">
      Welcome to TINY CAFE 
    </v-card-subtitle>
    </v-img>

    <v-card-subtitle class="pb-0">
      เข้ามาเป็นสมาชิกกับเรา
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>เพื่อเข้าถึงเมนูอาหาร</div>

      <div>ได้ร่วมกิจกรรมและรับของรางวัลจากทางร้าน</div>
    </v-card-text>

    <v-card-actions>
      <v-btn class="text-h5 pb-0"
        @click="goToLogin()"
        color="orange"
        text
      >
        เข้าสู่ระบบ
      </v-btn>

      <v-btn class="text-h5 pb-0"
        @click="goToRegister()"
        color="orange"
        text
      >
        ลงทะเบียน
      </v-btn>
    </v-card-actions>
  </v-card>
  

  <!-- <v-main>
      <router-view/>
    </v-main> -->


</v-app>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    
  }),
  methods: {
    goToLogin () {
      this.$router.push({ path: '/login'}).catch(()=>{})
    },
    goToRegister () {
      this.$router.push({ path: '/register'}).catch(()=>{})
    },
    RecCafe () {
      this.$router.push({ path: '/reccafe'}).catch(()=>{})
    },
    RecFood () {
      this.$router.push({ path: '/recfood'}).catch(()=>{})
    },

    Table () {
      this.$router.push({ path: '/manageTable'}).catch(()=>{})
    },

  }
 
 
}
</script>

<!-- <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col> -->