/**
 * class to create a Transformation object
 */
class Transformation {
    /**
     * @param {Transformation} _transformation
     */
    constructor(_transformation) {
        this._transformation = _transformation || [];
    }

    /**
     * provides functionality to append transformation.
     * @param {Transformation} transformation.
     * returns Transformation
     */
    and(transformation) {
        if (transformation instanceof Transformation) {
            return new Transformation([
                ...this._transformation,
                ...transformation.getTransformation(),
            ]);
        }
        throw new Error("Argument Should Be Instance of Transformation");
    }

    /**
     * provides functionality to get all transformation.
     * returns Transformation list
     */
    getTransformation() {
        return this._transformation;
    }
}

export default Transformation;
