<script setup></script>

<template>
  <main>
    <div class="product-form">
      <div class="top">
        <div class="product-title">
          <h5>Cosmetic Score simulation</h5>
          <p style="color: #6c757d; font-size: 12px">
            Enter the information of a product and get its rating.
          </p>
          <hr />
        </div>

        <div class="category">
          <label for="category" class="form-label">
            <span>Category</span>
            <button
              class="btn btn-outline-secondary dropdown-toggle"
              style="
                border: 0.3px solid rgb(183, 183, 183);
                outline: none;
                font-size: small;
              "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select a category
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Shampoo </a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
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
          ></textarea>
        </div>

        <div class="legend">
          <div class="vaseline">
            <div class="vas"></div>
            <span>Vaseline cocoa butter</span>
          </div>

          <div class="vaseline">
            <div class="vas"></div>
            <span>Glycerine</span>
          </div>

          <div class="vaseline">
            <div class="vas"></div>
            <span>Perfume</span>
          </div>

          <div class="petrolatum">
            <div class="pet"></div>
            <span>Petrolatum</span>
          </div>

          <div class="citronellon">
            <div class="cit"></div>
            <span>Citronellon</span>
          </div>
        </div>
      </div>

      <div class="buttons">
        <button>Reset</button>
        <button class="calculate">Calculate</button>
      </div>
    </div>

    <div class="health-score">
      <div class="top">
        <h6 style="padding-bottom: 3px">Score</h6>
        <hr />
        <div>
          <div class="at-risk">
            <div>
              <div class="at"></div>
              <span>At risk</span>
            </div>
            <div class="value">1</div>
          </div>

          <div class="low-risk">
            <div>
              <div class="low"></div>
              <span>Low risk</span>
            </div>
            <div class="value">1</div>
          </div>

          <div class="without-risk">
            <div>
              <div class="with"></div>
              <span>Without risk</span>
            </div>
            <div class="value">3</div>
          </div>
        </div>
      </div>

      <div class="total">
        <p class="title">Total</p>
        <div class="total-cosmetic-score">
          <div class="at"></div>
          <span style="color: black"
            >100/<span style="font-size: 9px">100</span></span
          >
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
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
.vaseline {
  background-color: rgb(182, 236, 182);
  border-radius: 12px;
  display: inline-block;
  font-size: small;
  padding: 1px 10px;
  margin-right: 10px;
  margin-bottom: 5px;
}
.vas {
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
