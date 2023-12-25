<template>
    <div class="meter-history">
        <el-carousel :interval="4000" type="card">
            <el-carousel-item v-for="(meter, ind) in meters" :key="ind">
                <MeterViewCard :meter="meter" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import metersMixin from "../mixins/meters";
import MeterViewCard from "../components/MeterViewCard.vue";

export default {
    name: "MeterHistory",
    mixins: [metersMixin],
    components: {MeterViewCard},
    // props: ["userUuid"],
    data() {
        return {
            meters: []
        }
    },
    async mounted() {
        const userUuuid = localStorage.getItem('userUUID');
        this.meters = await this.getMeterForUser(userUuuid);
    },
    // watch: {
    //     async userUUID(newValue) {
    //         const userUuuid = localStorage.getItem('userUUID');
    //         this.meters = await this.getMeterForUser(newValue);
    //     }
    // }
}
</script>