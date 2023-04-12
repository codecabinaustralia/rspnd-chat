<template>
  <div id="app">
    
<div class="w-full text-rspnd">
  {{tenant}}
</div>
   
  </div>
</template>

<script>
import { doc, onSnapshot } from "firebase/firestore";
import {db} from "./firebase"
export default {
  data(){
    return{
      tenant: null
    }
  },
  methods:{
    async initiate(){
      this.getTenant()
    },
    getTenant(){
      onSnapshot(doc(db, "tenants", "DirNZfLx0KQVFp0g7f93"), (doc) => {
        this.tenant = {...doc.data(), id: doc.id}
    });
    }
  },
  created(){
    this.initiate()
  }

}
</script>

