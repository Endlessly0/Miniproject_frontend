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

<v-card class="mx-auto"
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
          อาหาร
          </v-container>
          </v-col>
    
        <v-col
          cols="6"
          sm="6"
        >
          <v-img 
          height="350px"
          width="750px"
          :src="require('../assets/recfood1.jpg')">
            
          </v-img>
        </v-col>
        <v-col
          cols="6"
          sm="6"
        >
        <v-container
          class="text-h5">
          ของหวาน
          <v-container class="subtitle-1 ">
          </v-container >
          <v-container class="subtitle-1 ">
            ของหวานภายในร้านมีทั้งเค้ก บราวนี่ คุกกี้
          </v-container >
          <v-container class="subtitle-1 ">
            วาฟเฟิลกรอบๆ คู่กับซอสช็อคโกแลตหลากหลายรสชาติ
          </v-container >
          </v-container>
        </v-col>
        <v-col
          cols="6"
          sm="6"
        >
        <v-container
          class="text-h5">
          เครื่องดื่ม
          <v-container class="subtitle-1 ">
          </v-container >
          <v-container class="subtitle-1 ">
            คาปูชิโน เอสเพรสโซ ชาเขียวผสมกับนมร้อน ให้รสชาติละมุนและหวานน้อย
          </v-container >
          <v-container class="subtitle-1 ">
            ผสมน้ำผลไม้ต่าง ๆ ให้เป็นเครื่องดื่มลดความกระหายน้ำ
          </v-container >
        </v-container>
        </v-col>
        <v-col
          cols="6"
          sm="6"
        >
          <v-img 
          height="350px"
          width="750px"
          :src="require('../assets/recfood2.jpg')">
            
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