<template>
  <div class="d-flex justify-center">
    <div style="width:750px">

      <!-- Title & Description -->
      <div class="mt-6 mb-12 justify-center align-center text--center">
        <p class="mb-6 fs--extra-extra-large bold">Calculez vos mensualités</p>
        <p class="fs--large">Calculez rapidement le montant de vos mensualités de remboursement de votre investissement locatif. Vous trouverez en détails le montant du remboursement dû à votre emprunt ainsi que le coût des intérêts</p>
      </div>

      <!-- Information -->
      <div class="d-flex justify-space-between">

        <!-- Price & Chart -->
        <div style="width:45%">
          <div class="mb-8">
            <p class="bold mb-4">Montant du bien</p>
            <el-input type="number" :step-strictly="true" :step="500" :min="1000" v-model="price">
              <template slot="prepend">€</template>
            </el-input>
          </div>
          <apex-chart :options="chartOptions" :series="chartSeries" class="d-flex justify-center" />
        </div>

        <!-- Sliders -->
        <div style="width:45%">
          <div>
            <p class="bold mb-4">Montant de l'apport</p>
            <el-slider v-model="contribution" :min="0" :max="contributionMax" :step="1000"></el-slider>
            <p class="box bold mt-4 mb-10 justify-center align-center text--center">{{ contributionTitle }}</p>
          </div>
          <div>
            <p class="bold mb-4">Durée</p>
            <el-slider v-model="duration" :min="0" :max="40" :step="1"></el-slider>
            <p class="box bold mt-4 mb-10 justify-center align-center text--center">{{ durationTitle }}</p>
          </div>
          <div>
            <p class="bold mb-4">Taux d'intérêt</p>
            <el-slider v-model="rate" :min="0" :max="3" :step="0.05"></el-slider>
            <p class="box bold mt-4 justify-center align-center text--center">{{ rateTitle }}</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';

@Component
export default class IndexPage extends Vue {

  /** ******************** Parameters & Variables ******************** **/

  price: number = 100000;
  contribution: number = 20000;
  duration: number = 20;
  rate: number = 1.65;

  /** ******************** Getters & Setters ******************** **/

  get contributionMax() {
    return this.price > 0 ? this.price as number : 0;
  }

  get contributionTitle() {
    let contribution = this.contribution + ' €';
    let percentage = this.price > 0 ? Math.round(((this.contribution * 100) / this.price)) : 0;
    return contribution + ' - ' + percentage + '% prix';
  }

  get durationTitle() {
    return 'Durée ' + this.duration + ' ans';
  }

  get rateTitle() {
    return this.rate + '%';
  }

  get loan() {
    return this.price - this.contribution;
  }

  get monthly() {
    let r = (this.rate/100);
    let m = this.duration*12;
    let l = this.loan;
    let monthly = ((l * r)/12) / (1 - Math.pow((1+(r/12)), -m));
    return monthly > 0 ? Math.round(monthly) : 0;
  }

  get interests() {
    let m = this.duration*12;
    let interests = ((this.monthly*m) - this.loan)/m;
    return interests > 0 ? Math.round(((this.monthly*m) - this.loan)/m) : 0;
  }

  get chartOptions() {
    return {
      colors: ['#F82C60', '#FC655E'],
      chart: {type: 'donut'},
      labels: ['Mensualités : ' + this.monthly + ' € / mois', 'Coût des intérêts : ' + this.interests + ' € / mois'],
      legend: {
        position: 'bottom',
        horizontalAlign: 'left',
        fontSize: '16px',
      },
      dataLabels: {enabled: false},
      tooltip: { enabled: false },
    }
  }

  get chartSeries() {
    return [this.monthly, this.interests];
  }

  /** ******************** Watch ******************** **/

  @Watch('price')
  onValueChanged(price: number) {
    if (!price) this.price = 0;
    if (this.contribution > this.price) this.contribution = 0;
  }
}
</script>

<style lang="scss">
.box {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  @extend .pt-2;
  @extend .pb-2;
}
</style>
