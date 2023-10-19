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
        @click="goToRegister()"
      >
        ลงทะเบียน
      </v-btn>
    </v-app-bar>


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
      class="text-h3 text-center">
      ลงทะเบียน TINY CAFE
      </v-container>
      </v-col>
      <v-col
      cols="12"
      >
      <v-container
      >
      </v-container>
      </v-col>
</v-row>

    <v-card :items="reviewItem"
    elevation="10"
  class="mx-auto"
    max-width="1000"
    max-height="1400">
      <v-card-title style="font-size: 24px !important;">ลงทะเบียน</v-card-title>
      <v-card-text>
          <v-form
      ref="registerForm"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="20"
        :rules="nameRules"
        label="ชื่อผู้ใช้งาน"
        required
        outlined
      ></v-text-field>
  
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="รหัสผ่าน"
        required
        outlined
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="ยืนยันรหัสผ่าน"
        required
        outlined
      ></v-text-field>
  
      <v-btn
        :disabled="!valid"
        color="success"
        @click="Register()"
        block
      >
      ลงทะเบียน
      </v-btn>
  
    </v-form>
      </v-card-text>
    
    </v-card>
    </div>
  </template>
  
  <script>
  export default {
      data: () => ({
        userName: '',
        password: '',
        userItem: [],
        
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'กรุณากรอกชื่อผู้ใช้งาน',
          v => (v && v.length <= 20) || 'กรุณากรอกชื่อผู้ใช้งานห้ามเกิน 20 ตัวอักษร',
        ],
        password: '',
        passwordRules: [
          v => !!v || 'กรุณากรอกรหรัสผ่าน'
        ]
      }),

      created () {
      this.initialize()
    },

      methods: {
        async initialize () {
        this.userItem = []
        try {
          var data = await this.axios.get('http://localhost:9000/user')
          this.userItem = data.data
        } catch (error) {
          
        }
      },
          Register () {
              if (this.$refs.registerForm.validate(true)) {
                  localStorage.setItem('username', this.name)
                  this.$EventBus.$emit('getUsername')
                  this.$router.push('/login')
              } else {
                  
              }
          },


    goToLogin () {
      this.$router.push({ path: '/login'}).catch(()=>{})
    },
    
    RecCafe () {
      this.$router.push({ path: '/reccafe'}).catch(()=>{})
    },
    RecFood () {
      this.$router.push({ path: '/recfood'}).catch(()=>{})
    },
      }
  
  }
  </script>
  
  
  <style>
  
  </style>