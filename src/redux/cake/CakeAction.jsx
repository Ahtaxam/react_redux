import { BUY_CAKE } from "./CakeType";

const buyCake = (noOfCakes = 1) => {
    return {
        type: BUY_CAKE,
        payload: noOfCakes
    };
    }

export default buyCake;