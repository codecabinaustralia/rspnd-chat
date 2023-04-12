<template>
  <div id="app">
    
<div class="w-full text-rspnd">
  {{tenantData}}
</div>
   
  </div>
</template>

<script>
import { doc, onSnapshot } from "firebase/firestore";
import {db} from "./firebase"
export default {
  props: [{
    tenant: {
      type: String,
      required: true
    }
  }],
  data(){
    return{
      tenantData: null
    }
  },
  methods:{
    async initiate(){
      this.getTenant()
    },
    getTenant(){
      onSnapshot(doc(db, "tenants", this.tenant), (doc) => {
        this.tenantData = {...doc.data(), id: doc.id}
    });
    }
  },
  created(){
    this.initiate()
  }

}
</script>

