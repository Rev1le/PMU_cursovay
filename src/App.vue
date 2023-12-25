<script >
import HelloWorld from './components/HelloWorld.vue'
import userMixin from "./mixins/user"
import MeterForm from "./views/MeterForm.vue";
import MeterHistory from './views/MeterHistory.vue';

export default {
  components: {
    HelloWorld,
    MeterForm,
    MeterHistory
  },
  mixins: [userMixin],
  async created() {
    await this.getUserInstance();
  },
  data() {
    return {
      user: null,
      changeMeters: true
    }
  },
  methods: {
    async getUserInstance() {
      let user;

      await this.$asyncCallbackWithLoading(async () => {
        user = await this.getUserByUUID();
        console.log('innerUser', user);
      });

      if (user) {
        this.user = user;
        return
      }

      const createAndGetUser = async () => {
        await this.createUser();
        this.user = await this.getUserByUUID();
      };

      await this.$asyncCallbackWithLoading(createAndGetUser);
    },
    async changeMeterHistory() {
      this.changeMeters = false;
      await this.$nextTick(() =>  this.changeMeters = true);
    }
  }
}
</script>

<template>
  <el-tabs tab-position="top" class="app__tabs main-app-page">
    <el-tab-pane>
      <template #label>
        <span class="tab-label">
          <el-icon :size="21"><plus /></el-icon>
          <span>Передать показания</span>
        </span>
      </template>
      <MeterForm @newMeter="changeMeterHistory" :user-data="user" />
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="tab-label">
          <el-icon :size="21"><edit /></el-icon>
          <span>История показаний</span>
        </span>
      </template>
      <MeterHistory v-if="changeMeters" />
    </el-tab-pane>
  </el-tabs>
</template>


<style>
.app__tabs.main-app-page .el-tabs__nav-scroll {
  overflow: scroll;
}

.app__tabs.main-app-page span.el-tabs__nav-prev,
.app__tabs.main-app-page span.el-tabs__nav-next {
  display: none;
}

</style>

<style>
.app__tabs {
  height: 200px;
  width: 100%;
}

.tab-label {
  gap: 5px;
  display: flex;
  align-items: center;
}
</style>
