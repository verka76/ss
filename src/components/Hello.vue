<template>
  <div>
    <button type="button" class="btn" @click="showModal = true"> Добавить</button>
    <div v-show="showModal" class="model">
    <div class="modal-content">
      <span class="close" @click="showModal=false" style="font-size: 30px; cursor: pointer">&times;</span>
      <h2 class="nazvanie">Добавить новый товар</h2>
      <form @submit.prevent="addNewProduct">
        <p>
        <label for="name" class="pi"> Название:</label>
        <input class="ostin" type="text" id="name" v-model="newProduct.name" required>
        </p>
        <p>
        <label for="description" class="pi">Описание:</label>
        <input class="ostin" type="text" id="description" v-model="newProduct.description" required placeholder="Описание одежды">
        </p>
        <p>
        <label for="quantity" class="pi">Количество:</label>
        <input class="ostin"  type="number" id="quantity" v-model="newProduct.quantity" required>
        </p>
        <p>
        <label for="image" class="pi">Изображение</label>
        <input  type="file" id="image" ref="fileInput" @change="onFileChange">
        </p>
        <img v-if="newProduct.image" :src="newProduct.image" alt="img">
        <button class="kp1 kp" type="submit">Сохранить</button>
        <button class="kp2 kp" type="button" @click="showModal=false">Отмена</button>
      </form>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return{
      showModal: false,
      newProduct: {
        name: '',
        description: '',
        quantity: '',
        image: ''
      }
    }
  },
  methods: {
    onFileChange(event){
      const file = event.target.files[0];
      if (file) {
        this.newProduct.image = URL.createObjectURL(file);
      }
    },
    addNewProduct() {
      this.$emit('add-product', { ...this.newProduct});
      this.newProduct.description = ' ';
      this.newProduct.quantity = '';
      this.newProduct.image = '';
      this.showModal =false;
    }
  }
}
</script>
 <style scoped lang="scss">
         .modal-content {
           background-color: #fff;
           padding: 40px;
           border-radius: 10px;
           box-shadow: 0 0 17px 0 #e7e7e7;
           max-width: 300px;
           max-height: 80%;
           overflow-y: auto;
           margin-left: auto;
           margin-right: auto;
         }
        .close {
          font-size: 20px;
          float: left;
        }
        .nazvanie {
          margin: 0;
          font-size: 23px;
          color: #62aed5;
        }
        .kp{
          padding: $padding $padding*2;
          background: #F0C54D;
          border: none;
          border-radius: $radius;
          color: white;
          width: 85px;
        }
        .kp1 {
          float: right;
        }
        .kp2{
          float: left;
        }
        .pi {
          font-size: 20px;
          font-style: italic;
        }
        .ostin{
          height: 30px;
          width: 80%;
          border-radius: 10px;
          border: #fff;
          box-shadow: 0 0 17px 0 #e7e7e7;
        }
        .model{
          background: rgba(64,64,64, .4);
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          right: 0;
          left: 0;
          top: 0;
          bottom: 0;
          height:120%;


        }
 </style>