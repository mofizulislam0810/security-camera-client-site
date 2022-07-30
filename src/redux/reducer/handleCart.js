const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            return [
                ...state,
                {
                    ...product,
                    qty: 1,
                },
            ];
            break;
        case "INCREMENT":
            //Increase the quantity
            const exist = state.find((x) => x._id === product._id);
            if (exist) {
                //Increase the quantity
                return state.map((x) =>
                    x._id === product._id ? { ...x, qty: x.qty + 1 } : x
                );
            }
            break;
        case "DECREMENT":
            return state.map((x) =>
                x._id === product._id ? { ...x, qty: x.qty - 1 } : x
            );

            break;
        case "DELITEM":
            return state.filter((x) => x._id !== product._id);
            break;

        default:
            return state;
            break;
    }
};

export default handleCart;
