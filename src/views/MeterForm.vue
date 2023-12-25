<template>
  <div class="meter-form">
    <ValidationField
      label="Холодная вода"
      :value="meterData.coldW"
      @update:value="meterData.coldW = $event"
    />
    <ValidationField
      label="Горячая вода"
      :value="meterData.hotW"
      @update:value="meterData.hotW = $event"
    />
    <ValidationField
      label="Э1"
      :value="meterData.eOne"
      @update:value="meterData.eOne = $event"
    />
    <ValidationField
      label="Э2"
      :value="meterData.eTwo"
      @update:value="meterData.eTwo = $event"
    />
    <el-button class="meter-form__save-btn" type="success" @click="saveMeter">Сохранить</el-button>
  </div>
  <!-- {{ meterData }}  -->
</template>

<script>
import ValidationField from '../components/ValidationField.vue';
import metersMixin from "../mixins/meters";

export default {
  name: "MeterForm",
  components: {
    ValidationField
  },
  mixins: [metersMixin],
  props: ["userData"],
  emits: ["newMeter"],
  data() {
    return { 
      meterData: {
        coldW: null,
        hotW: null,
        eOne: null,
        eTwo: null
      }
    }
  },
  methods: {
    async saveMeter() {
      
      // if (!this.meterData.coldW || !this.meterData.hotW || !this.meterData.eOne || !this.meterData.eTwo || !userUUID) {
      //   console.log('Failed');
      //   return;
      // }

      const createMeter = async () => {
        const userUUID = localStorage.getItem('userUUID');
        await this.createNewMeter(this.meterData, userUUID);
      };

      await this.$asyncCallbackWithLoading(createMeter);

      this.$emit("newMeter");
    }
  }
}
</script>

<style scoped>
.meter-form {
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  align-items: center;
}

.meter-form__save-btn {
  margin: 5px;
  width: 200px;
}
</style>
