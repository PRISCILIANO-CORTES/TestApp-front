import * as Yup from "yup";

export default Yup.object().shape({
    name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
    price: Yup.number()
        .min(1, "Price must be at least 1 characters")
        .required("Price is required"),
    category: Yup.string()
        .min(1, "Category must be at least 1 characters")
        .required("Category is required"),
    description: Yup.string()
        .min(1, "Description must be at least 1 characters")
        .required("Description is required"),
});
