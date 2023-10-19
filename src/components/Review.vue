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
      รีวิว
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
<v-data-table
    :headers="headers"
    :items="reviewItem"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>รีวิวจากคุณ</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-btn
              color="primary"
              dark
              class="mb-2"
              @click="openDialog('add', defaultItem)"
            >
              รีวิว
            </v-btn>
      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-btn small outlined
        class="mr-2"
        @click="openDialog('edit', item)"
        color="blue">
        <v-icon>
        mdi-pencil
      </v-icon>
      </v-btn>
      <v-btn small outlined
        @click="deleteItem(item)"
        color="red" class="m1-2">
        <v-icon>
        mdi-delete
      </v-icon>
      </v-btn>
    </template>

  </v-data-table>
  <v-dialog v-model="dialogCreate" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                  <v-text-field
                      v-model="Id"
                      label="รีวิวที่"
                    ></v-text-field>

                    <v-text-field
                      v-model="Message"
                      label="ข้อความรีวิว"
                    ></v-text-field>
                    
                  </v-col>

                  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                ยกเลิก
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save(formTitle)"
              >
                บันทึก
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">คุณต้องการลบการรีวิวนี้ ใช่ หรือ ไม่?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">ยกเลิก</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">ตกลง</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
      </v-col>

      

    
    </v-row>
        </v-card>
    </div>
  </template>

<script>
export default {
  data: () => ({
      Message: '',
      Id: '',

      dialogCreate: false,
      dialogDelete: false,
      
      headers: [
        // {
        //   text: 'ไอดี',
        //   align: 'start',
        //   sortable: false,
        //   value: 'id',
        // },
        { text: 'รีวิวที่', value: 'reviewId' },
        { text: 'ข้อความรีวิว', value: 'message' },
        
        { text: 'จัดการ', value: 'actions', sortable: false },
      ],
      reviewItem: [],
      editedIndex: -1,
      editedItem: {
        Message: '',

      },
      defaultItem: {
        Id: '',
        Message: '',

      },
      formTitle: '',
      idReview: '',
      idForDelete: ''
  }),
  watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

  methods: {
    ListDessert () {
      this.$router.push({ path: '/listdessert'}).catch(()=>{})
    },
    ListDrink() {
      this.$router.push({ path: '/listdrink'}).catch(()=>{})
    },
    Menu() {
      this.$router.push({ path: '/menu'}).catch(()=>{})
    },



    async initialize () {
        this.reviewItem = []
        try {
          var data = await this.axios.get('http://localhost:9000/review')
          console.log('data review ====>', data)
          this.reviewItem = data.data
        } catch (error) {
          
        }
      },
      openDialog(Action, item) {
        //console.log(Action, item)
        this.formTitle = ''
        if (Action === 'add') {
            this.dialogCreate = true
            this.formTitle = 'เพิ่มข้อมูล'
        } else  {
            this.dialogCreate = true
            this.formTitle = 'แก้ไขข้อมูล'
            this.Message = item.message
            this.Id = item.reviewId

            this.idReview = item.id
        }
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.idForDelete = item.id
        this.dialogDelete = true
      },

      async deleteItemConfirm () {
        try {
          var response = await this.axios.delete('http://localhost:9000/review/' + this.idForDelete)
          this.initialize()
        } catch (error) {
          
        }
        this.closeDelete()
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      close () {
        this.dialogCreate = false
        this.Message = ''
        this.Id = ''

        
      },

      async save (action) {
        var data = {
            message: this.Message,
            reviewId: this.Id,

          }
        if(action === 'เพิ่มข้อมูล') {
          // this.desserts.push(this.editedItem)
          //console.log('data after send ===>', data)
          try {
            var dataResponse = await this.axios.post('http://localhost:9000/review', data)
            console.log('dataResponse ===>', dataResponse)
            this.close()
            this.initialize()
          } catch (error) {
            console.log(error.message)
          }
        } else {
          try {
            var dataResponseEdit = await this.axios.put('http://localhost:9000/review/' + this.idReview, data)
            console.log('dataResponse ===>', dataResponseEdit)
            this.close()
            this.initialize()
          } catch (error) {
            console.log(error.message)
          }

        }
        this.close()
      },

  }
 
 
}
</script>