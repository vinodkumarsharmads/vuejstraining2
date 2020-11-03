<template>
    <section class="shopping-list">
        <h3>Shopping List</h3>
        <form>
          <p class="h4 text-center mb-4">Add Ingredient</p>
          <div class="form-group">
              <input placeholder="name" v-model.trim="addIngredientForm.name" type="text" class="form-control"  id="name"/>
              <input placeholder="quantity" v-model.trim="addIngredientForm.quantity" type="text" class="form-control" id="quantity"/>
          </div>

          <button @click="addIngredient()" class="button">Add Ingredient</button>
        </form>
        <table style="width:100%" class="table-bordered">
            <tr>
                <th>Ingredient Name</th>
                <th>Quantity</th>
            </tr>
            <tr v-for="(ingredient, idx) in ingredients" :key="idx">
                <td>{{ingredient.name}}</td>
                <td>{{ingredient.quantity}}</td>
            </tr>
        </table>
        
    </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
    return {
      addIngredientForm: {
        name: '',
        quantity: ''
      },
    }
  },
  
  computed: {
    ...mapState(['ingredients']),
    ingredients() {
        return this.$store.state.ingredients
    }
  },

  methods : {
    addIngredient() {
      this.$store.dispatch('addIngredient', {
        name: this.addIngredientForm.name,
        quantity: this.addIngredientForm.quantity
      })
    },
  }
}
</script>