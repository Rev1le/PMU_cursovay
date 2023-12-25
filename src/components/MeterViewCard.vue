<template>
    <el-card class="box-card meter-view-card">
    <template #header>
      <div class="card-header">
        <span>Показания за {{ date }}</span>
      </div>
    </template>
    <div class="meter-list">
      <span v-show="meter.meterData.coldW">Холодная вода: {{ meter.meterData.coldW }}</span>
      <span v-show="meter.meterData.hotW">Горячая вода: {{ meter.meterData.hotW }}</span>
      <span v-show="meter.meterData.eOne">Э1: {{ meter.meterData.eOne }}</span>
      <span v-show="meter.meterData.eTwo">Э2: {{ meter.meterData.eTwo }}</span>
      
    </div>
    <!-- <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div> -->
  </el-card>
</template>

<script>
export default {
  props: ["meter"],
  computed: {
    date() {
      const d = new Date(this.meter.datetime);
      console.log(this.meter.datetime)
      return d.toLocaleDateString('ru-RU')
    }
  }
}
</script>

<style scoped>
.meter-list {
  display: flex;
  flex-direction: column;
}
</style>