import Image from "./image.js";
/**
 * class to create a Pixelbin object
 */
class Pixelbin {
    /**
     * @param {Object} cloud-details takes detail for cloud name and zone
     */
    constructor({ cloud: { name, zone } }) {
        this.cloudName = name;
        this.cloudZone = zone;
    }

    /**
     * provides image on which transformation can be done.
     * @param {String} imageUri path of image.
     * returns Image
     */
    image(imageUri) {
        return new Image(imageUri, this.cloudName, this.cloudZone);
    }
}

export default Pixelbin;
