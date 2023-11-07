<script setup>
import { reactive } from "vue";
import AppButton from "../components/AppButton.vue";

const foodState = reactive({
  category: "",
  ingredients: "",
  calorieValue: "",
  fattySubstanceValue: "",
  saturatedFatsValue: "",
  carbsValue: "",
  sugarValue: "",
  fibreValue: "",
  proteinValue: "",
  saltValue: "",
  fruit_vegValue: "",
});

const convertToArray = (ingredient) => {
  return ingredient.split(",");
};

const reset_form = () => {
  (foodState.category = ""),
    (foodState.ingredients = ""),
    (foodState.calorieValue = ""),
    (foodState.fattySubstanceValue = ""),
    (foodState.saturatedFatsValue = ""),
    (foodState.carbsValue = ""),
    (foodState.sugarValue = ""),
    (foodState.fibreValue = ""),
    (foodState.proteinValue = ""),
    (foodState.saltValue = ""),
    (foodState.fruit_vegValue = "");
};
</script>

<template>
  <main>
    <div class="product-form">
      <div class="top">
        <div class="product-title">
          <h5>Product Score</h5>
          <p style="color: #6c757d; font-size: 12px">
            Enter the information of a product and get its rating.
          </p>
          <hr />
        </div>

        <div class="category">
          <label for="category" class="form-label">
            <span>Category</span>
            <select
              style="
                width: 348px;
                height: 33px;
                border: 0.3px solid rgb(183, 183, 183);
                outline: none;
                font-size: small;
                padding: 0 10px;
                color: #6c757d;
                border-radius: 6px;
              "
              v-model="foodState.category"
            >
              <option disabled value="">Please select one</option>
              <option>Wheat bread</option>
              <option>Canned tomato</option>
              <option>Minced beef</option>
            </select>
          </label>

          <div class="toggler">
            <label for="bio" class="form-label">Bio</label>

            <input type="checkbox" id="switch" class="checkbox" />

            <label for="switch" class="toggle"></label>
          </div>
          <hr style="margin-top: 0.2rem" />
        </div>

        <div class="ingredient-list">
          <label for="ingredient" class="form-label">Ingredient list</label>
          <textarea
            class="form-control-lg"
            id="exampleFormControlTextarea1"
            rows="2"
            cols="25"
            style="border: 0.3px solid rgb(183, 183, 183); outline: none"
            v-model="foodState.ingredients"
          ></textarea>
        </div>
        <hr />

        <div class="nutritional-table">
          <h5>Nutritional table</h5>
          <p>For 100g of product</p>

          <form>
            <label for="calories">
              <span>Calories</span>
              <div class="input">
                <input
                  type="text"
                  name="calories"
                  id="calories"
                  v-model="foodState.calorieValue"
                />
                <label for="" class="inner-labels">kcal</label>
              </div>
            </label>

            <label for="fatty-substances">
              <span>Fatty substances</span>
              <div class="input">
                <input
                  type="text"
                  name="fatty-substances"
                  id="fatty-substances"
                  v-model="foodState.fattySubstanceValue"
                />
                <label for="" class="inner-labels">g</label>
              </div>
            </label>
            <label for="saturated-fats">
              <span>Saturated fats</span>
              <div class="input">
                <input
                  type="text"
                  name="saturated-fats"
                  id="saturated-fats"
                  v-model="foodState.saturatedFatsValue"
                />
                <label for="" class="inner-labels">g</label>
              </div>
            </label>
            <label for="carbohydrates">
              <span>Carbohydrates</span>
              <div class="input">
                <input
                  type="text"
                  name="carbohydrates"
                  id="carbohydrates"
                  v-model="foodState.carbsValue"
                />
                <label for="" class="inner-labels">g</label>
              </div>
            </label>
            <label for="sugars">
              <span>Sugars</span>
              <div class="input">
                <input
                  type="text"
                  name="sugars"
                  id="sugars"
                  v-model="foodState.sugarValue"
                />
                <label for="" class="inner-labels">g</label>
              </div>
            </label>
            <label for="fibres">
              <span>Fibres</span>
              <div class="input">
                <input
                  type="text"
                  name="fibres"
                  id="fibres"
                  v-model="foodState.fibreValue"
                />
                <label for="" class="inner-labels">g</label>
              </div>
            </label>
            <label for="proteins">
              <span>Proteins</span>
              <div class="input">
                <input
                  type="text"
                  name="proteins"
                  id="proteins"
                  v-model="foodState.proteinValue"
                />
                <label for="" class="inner-labels">g</label>
              </div>
            </label>
            <label for="salt">
              <span>Salt</span>
              <div class="input">
                <input
                  type="text"
                  name="salt"
                  id="salt"
                  v-model="foodState.saltValue"
                />
                <label for="" class="inner-labels">g</label>
              </div>
            </label>
            <label for="fruit_veggies">
              <span>Fruits, vegetables and nuts</span>
              <div class="input">
                <input
                  type="text"
                  name="fruit_veggies"
                  id="fruit_veggies"
                  v-model="foodState.fruit_vegValue"
                />
                <label for="" class="inner-labels">%</label>
              </div>
            </label>
          </form>
        </div>
      </div>

      <div class="buttons">
        <AppButton @click="reset_form" class="reset">Reset</AppButton>
        <AppButton class="calculate">Calculate</AppButton>

        <!-- <button class="reset" @click="reset_form">Reset</button>
        <button class="calculate">Calculate</button> -->
      </div>
    </div>

    <div class="health-score">
      <div class="top">
        <h6 style="padding-bottom: 3px">Health score</h6>
        <hr />
        <div>
          <div class="nutritional-balance">
            <p class="title">Nutritional balance</p>
            <p class="value">/60</p>
          </div>

          <div class="addictives">
            <p class="title">Addictives</p>
            <p class="value">/30</p>
          </div>

          <div class="bio">
            <p class="title">Bio</p>
            <p class="value">/10</p>
          </div>
        </div>
      </div>

      <div class="total">
        <p class="title">Total</p>
        <p class="value">/100</p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
h5 {
  font-size: 16px;
}

.category {
  margin-top: 10px;
  padding-bottom: 0px;

  label span {
    margin-right: 177px;
  }

  button {
    width: 300px;
    text-align: left;
  }

  button:hover {
    background-color: #fff;
    color: #6c757d;
  }

  label {
    margin-bottom: 15px;
  }

  .toggle {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
    background-color: rgb(223, 220, 220);
    border-radius: 30px;
    border: 1px solid rgb(193, 192, 192);
  }

  /* After slide changes */
  .toggle:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    top: 1px;
    left: 1px;
    transition: all 0.5s;
  }

  /* Checkbox checked effect */
  .checkbox:checked + .toggle::after {
    left: 27px;
  }

  /* Checkbox checked toggle label bg color */
  .checkbox:checked + .toggle {
    background-color: green;
  }

  /* Checkbox vanished */
  .checkbox {
    display: none;
  }

  .toggler {
    display: flex;
    gap: 214px;
  }
}

.ingredient-list {
  display: flex;
  margin-bottom: 15px;

  label {
    margin-right: 150px;
  }
}

.nutritional-table {
  p {
    color: #6c757d;
    font-size: 12px;
  }

  label {
    display: block;
    margin-bottom: 15px;
  }

  label span {
    display: inline-block;
    text-align: left;
    width: 200px;
    margin-right: 40px;
  }

  input {
    width: 300px;
    padding: 0px 7px;
    border: 0.3px solid rgb(183, 183, 183);
    outline: none;
  }

  .input {
    position: relative;
    display: inline-block;
  }

  .inner-labels {
    position: absolute;
    top: 2px;
    left: 270px;
    color: gray;
    font-size: small;
  }
}

.health-score {
  background-color: #fff;
  width: 400px;
  height: 250px;
  border: 0.5px solid rgb(224, 224, 224);
  border-radius: 5px;

  .top {
    padding: 15px 15px;
    border-bottom: 0.5px solid rgb(224, 224, 224);
  }
}

.nutritional-balance {
  display: flex;
  justify-content: space-between;
}

.addictives {
  display: flex;
  justify-content: space-between;
}

.bio {
  display: flex;
  justify-content: space-between;
}

.total {
  display: flex;
  justify-content: space-between;
  background-color: rgb(221, 230, 237);
  padding: 15px 15px 0px 15px;
}

label {
  font-size: 14px;
  color: rgb(77, 74, 74);
}

p {
  font-size: 14px;
  color: rgb(77, 74, 74);
}
</style>
