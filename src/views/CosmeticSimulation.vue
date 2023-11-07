<script setup>
import { reactive } from "vue";
import { Icon } from "@iconify/vue";

const ingredientsState = reactive({
  cosmeticIngredients: "",
  selected: "",
  score: 0,
  calculating: false,
  noRiskValue: 0,
  lowRiskValue: 0,
  highRiskValue: 0,
});

const like_button = () => {
  style.color = rgb(249, 24, 128);
};

const classifyIngredients = (ingredients) => {
  ingredientsState.noRiskValue = 0;
  ingredientsState.lowRiskValue = 0;
  ingredientsState.highRiskValue = 0;

  for (const ingredient of ingredients) {
    if (ingredient.hazardLevel <= 2) {
      ingredientsState.noRiskValue += 1;
    } else if (ingredient.hazardLevel > 2 && ingredient.hazardLevel < 3) {
      ingredientsState.lowRiskValue += 1;
    } else if (ingredient.hazardLevel >= 3) {
      ingredientsState.highRiskValue += 1;
    }
  }
};

// This returns an array of the ingredients
const generateChips = (ingredients) => {
  if (ingredients.length === 0) {
    return [];
  }
  return ingredients.split(","); //converts string to array
};

const calculateCosmeticScore = async () => {
  if (
    ingredientsState.selected !== "" &&
    generateChips(ingredientsState.cosmeticIngredients).length > 0
  ) {
    ingredientsState.calculating = true;
    const URL = "https://food-cosmetic-qa.k-lab.workers.dev/cosmetic";
    const requestObj = {
      category: ingredientsState.selected,
      ingredients: generateChips(ingredientsState.cosmeticIngredients),
    };
    try {
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(requestObj),
      });
      const data = await response.json();
      ingredientsState.score = data.Data.SCORE;
      classifyIngredients(data.Data.INGREDIENTS);
    } catch (err) {}
    ingredientsState.calculating = false;
  } else {
    return;
  }
};

const reset_form = () => {
  (ingredientsState.selected = ""),
    (ingredientsState.cosmeticIngredients = ""),
    (ingredientsState.score = 0);
};
</script>

<template>
  <main>
    <div class="product-form">
      <div class="top">
        <div class="product-title">
          <h5>Cosmetic Score</h5>
          <p style="color: #6c757d; font-size: 12px">
            Enter the information of a product and get its rating.
          </p>
          <hr />
        </div>

        <div class="category">
          <label for="category" class="form-label">
            <span>Category</span>
            <select
              v-model="ingredientsState.selected"
              style="
                width: 348px;
                height: 40px;
                border: 0.3px solid rgb(183, 183, 183);
                outline: none;
                font-size: small;
                padding: 0 10px;
                color: #6c757d;
                border-radius: 6px;
              "
            >
              <option disabled value="">Please select one</option>
              <option>Shampoo</option>
              <option>Body Lotion</option>
              <option>Perfume</option>
            </select>
          </label>
        </div>

        <hr style="margin-top: 0.2rem" />

        <div class="inci-composition">
          <label for="inci-composition" class="form-label"
            >INCI composition</label
          >

          <textarea
            class="form-control-lg"
            id="exampleFormControlTextarea1"
            placeholder="cocoa butter, glycerin, perfumes, preservatives, fragrances"
            rows="4"
            cols="50"
            style="
              border: 0.3px solid rgb(183, 183, 183);
              outline: none;
              font-size: 12px;
            "
            v-model="ingredientsState.cosmeticIngredients"
          ></textarea>

          <!-- <span>{{ generateChips(ingredientsState.cosmeticIngredients) }}</span> -->
        </div>

        <div
          class="legend"
          v-if="generateChips(ingredientsState.cosmeticIngredients)"
        >
          <div
            class="ingredient"
            v-for="ingredient in generateChips(
              ingredientsState.cosmeticIngredients
            )"
          >
            <div class="bullet-point"></div>
            <span>{{ ingredient }}</span>
          </div>
        </div>
      </div>

      <div class="buttons">
        <button class="reset" @click="reset_form">Reset</button>
        <button class="calculate" @click="calculateCosmeticScore">
          {{ ingredientsState.calculating ? "Calculating..." : "Calculate" }}
        </button>
      </div>
    </div>

    <div class="health-score">
      <div class="top">
        <h6 style="padding-bottom: 3px">Risk metrics</h6>

        <div class="like-icon-container">
          <div class="like-icon-img">
            <Icon
              icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
              width="14"
              @click="like_button"
            />
          </div>
          <div>0</div>
        </div>

        <hr />
        <div>
          <div class="at-risk">
            <div>
              <div class="at"></div>
              <span>High risk</span>
            </div>
            <div class="value">{{ ingredientsState.highRiskValue }}</div>
          </div>

          <div class="low-risk">
            <div>
              <div class="low"></div>
              <span>Low risk</span>
            </div>
            <div class="value">{{ ingredientsState.lowRiskValue }}</div>
          </div>

          <div class="without-risk">
            <div>
              <div class="with"></div>
              <span>No risk</span>
            </div>
            <div class="value">{{ ingredientsState.noRiskValue }}</div>
          </div>
        </div>
      </div>

      <div class="total">
        <p class="title">Score</p>
        <div class="total-cosmetic-score">
          <div class="at"></div>
          <span style="color: black"
            >{{ ingredientsState.score
            }}<span style="font-size: 9px">/100</span></span
          >
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.like-icon-container {
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: rgb(249, 24, 128);
  }
}

.like-icon-img {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  cursor: pointer;

  &:hover {
    // width: 30px;
    // height: 30px;
    border-radius: 50%;
    background-color: rgb(249, 24, 128, 0.1);
    border: 0;
  }
}

main {
  height: 100vh;
}

h5 {
  font-size: 16px;
}

.product-form {
  height: 398px;
}
.category {
  margin-top: 10px;
  padding-bottom: 0px;

  label span {
    margin-right: 200px;
  }

  button {
    width: 348px;
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
    gap: 278px;
  }
}

.inci-composition {
  display: flex;
  margin-bottom: 15px;

  label {
    margin-right: 140px;
  }
}

li {
  list-style: none;
}

.legend {
  display: inline-block;
  margin-left: 260px;
  width: 410px;
  margin-bottom: 15px;
}
.ingredient {
  background-color: rgb(182, 236, 182);
  border-radius: 12px;
  display: inline-block;
  font-size: small;
  padding: 1px 10px;
  margin-right: 10px;
  margin-bottom: 5px;
}
.bullet-point {
  height: 8px;
  width: 8px;
  background-color: rgb(63, 143, 63);
  border-radius: 50%;
  display: inline-block;
  margin-right: 7px;
}

.petrolatum {
  background-color: rgb(235, 115, 115);
  color: rgb(117, 28, 28);
  border-radius: 12px;
  font-size: small;
  display: inline-block;
  padding: 1px 10px;
  margin-right: 10px;
}
.pet {
  height: 8px;
  width: 8px;
  background-color: rgb(178, 37, 37);
  border-radius: 50%;
  display: inline-block;
  margin-right: 7px;
}

.citronellon {
  background-color: rgb(232, 192, 119);
  color: rgb(82, 63, 27);
  font-size: small;
  border-radius: 12px;
  display: inline-block;
  padding: 1px 10px;
}
.cit {
  height: 8px;
  width: 8px;
  background-color: rgb(196, 138, 30);
  border-radius: 50%;
  display: inline-block;
  margin-right: 7px;
}

.health-score {
  height: 205px;
  span,
  .title {
    font-size: small;
    color: gray;
  }

  .value {
    font-size: small;
  }
}

.at-risk,
.low-risk,
.without-risk {
  display: flex;
  justify-content: space-between;
}

.at {
  height: 8px;
  width: 8px;
  background-color: rgb(178, 37, 37);
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
}

.low {
  height: 8px;
  width: 8px;
  background-color: rgb(196, 138, 30);
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
}

.with {
  height: 8px;
  width: 8px;
  background-color: rgb(63, 143, 63);
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
