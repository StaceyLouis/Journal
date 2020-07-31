
import * as yup from 'yup'

const formSchema = yup.object().shape({
  title: yup
    .string()
    .required("Please include a title"),
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is Required"),
 post: yup
    .string()
    .min(10,"Thoughts must be 10 characters or more")

})

export default formSchema