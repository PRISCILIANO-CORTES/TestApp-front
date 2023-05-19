export const globalFilterProducts = (products = [], filter = { name: '' }) => {

    let viewProducts = []
    const isName = filter.name !== "";

    if (isName) {

        viewProducts = products.filter((product) => {

            let haveName = false;

            if (isName) {
                haveName = product.name.toLowerCase().includes(filter.name.toLowerCase())
            }

            let comparativeFilter = [];

            if (isName) {
                comparativeFilter.push(haveName);
            }

            const isProductFilter = comparativeFilter.every((filterProduct) => filterProduct);

            return isProductFilter;
        });

    } else {
        viewProducts = products
    }

    return viewProducts;
}
