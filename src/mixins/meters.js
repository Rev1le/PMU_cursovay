import { collection, addDoc, doc, getDoc, query, where, getDocs } from 'firebase/firestore';

const DB_NAME = 'meters';

export default {
  methods: {
    getMeterCollection() {
      return collection(this.$db, DB_NAME);
    },
    /**
     * 
     * @param {object} meterData 
     * @param {string} userUUID 
     * @returns Promise
     */
    async createNewMeter(meterData, userUUID) {
      const colRef = collection(this.$db, DB_NAME);
      const nowUTC = (new Date()).getTime()
      return addDoc(colRef, {
        meterData,
        userUUID,
        datetime: nowUTC,
        meterDataVersion: 1
      });
    },
    async getMeterForUser(userUUID) {
      if (userUUID === null) {
        return null;
      }

      const queryRef =  query(
        this.getMeterCollection(),
        where("userUUID", "==", userUUID)
      );

      const querySnapshot = await getDocs(queryRef);

      let resultMeterList = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        resultMeterList.push(doc.data());
      });

      return resultMeterList;
    }
  }
}