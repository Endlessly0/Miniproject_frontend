<template>

<div >
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
      <v-btn
        text
        @click="goToLogin()"
      >
        เข้าสู่ระบบ
      </v-btn>
      <v-btn
        text
        @click="goToRegister()"
      >
        ลงทะเบียน
      </v-btn>
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
      TINY CAFE
      </v-container>
      </v-col>

    <v-col
      cols="6"
      sm="4"
    >
    <v-container
      class="text-h5">
      สถานที่
      <v-container class="subtitle-1 ">
      </v-container >
      <v-container class="subtitle-1 ">
        มหาวิทยาลัยสงขลานครินทร์ 15 ถนนกาญจนวณิชย์ อำเภอหาดใหญ่ จังหวัดสงขลา
      </v-container >
      <v-container class="subtitle-1 ">
        เวลาทำการ : 10.00 - 17.00 น.
      </v-container >
      </v-container>
    </v-col>

    <v-col
      cols="6"
      sm="4"
    >
    <v-container
      class="text-h5">
      อาหารในร้าน
      <v-container class="subtitle-1 ">
      </v-container >
      <v-container class="subtitle-1 ">
        ภายในร้านมีเครื่องดื่มหลากหลายประเภท ไม่ว่าจะเมนูร้อน เย็น ปั่น
      </v-container >
      <v-container class="subtitle-1 ">
        และของหวานสามารถสั่งทานควบคู่กัน
      </v-container >
    </v-container>
    </v-col>

    <v-col
      cols="6"
      sm="4"
    >
      <v-img :src="require('../assets/stpage.jpg')">
        
      </v-img>
    </v-col>
    <v-col
      cols="6"
      sm="4"
    >
    <v-container
      class="text-h5">
      บรรยากาศภายในร้าน
      <v-container class="subtitle-1 ">
      </v-container >
      <v-container class="subtitle-1 ">
        ร้านแอร์เย็นสบาย สามารถนั่งผ่อนคลายหรือทำงาน
      </v-container >
      <v-container class="subtitle-1 ">
        ภายในร้านมีบริการที่จอดรถและ Free WiFi
      </v-container >
      </v-container>
    </v-col>

    <v-col
      cols="6"
      sm="4"
    >
      <v-img 
      height="400px"
      width="750px"
      :src="require('../assets/reccafe1.jpg')">
        
      </v-img>
    </v-col>

    <v-col
      cols="6"
      sm="4"
    >
      <v-img 
      height="400px"
      width="750px"
      :src="require('../assets/reccafe2.jpg')">
        
      </v-img>
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
        goToLogin () {
          this.$router.push({ path: '/login'}).catch(()=>{})
        },
        goToRegister () {
          this.$router.push({ path: '/register'}).catch(()=>{})
        },
        RecCafe () {
          this.$router.push({ path: '/reccafe'}).catch(()=>{})
        },
        RecFood() {
          this.$router.push({ path: '/recfood'}).catch(()=>{})
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