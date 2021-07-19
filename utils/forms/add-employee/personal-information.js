import {
  createFormFieldConfig,
  requiredRule,
  emailRegex,
  checkLength,
} from "../../helper-functions/form-functions";

const personalInformation = {
  "first-name": {
    ...createFormFieldConfig({
      id: "first-name",
      placeholder: "First Name",
      errorMessage: "First name is required",
    }),
    validators: [requiredRule()],
  },
  "last-name": {
    ...createFormFieldConfig({
      id: "last-name",
      placeholder: "Last Name",
      errorMessage: "Last name is required",
    }),
    validators: [requiredRule()],
  },
  email: {
    ...createFormFieldConfig({
      type: "email",
      id: "email",
      placeholder: "Email Address",
      errorMessage: "Please make sure email address is valid",
    }),
    validators: [requiredRule(), emailRegex()],
  },
  male: {
    ...createFormFieldConfig({
      type: "radio",
      id: "male",
      name: "gender",
      label: "Male",
    }),
  },
  female: {
    ...createFormFieldConfig({
      type: "radio",
      id: "female",
      name: "gender",
      label: "female",
    }),
  },
  unspecified: {
    ...createFormFieldConfig({
      type: "radio",
      id: "unspecified",
      name: "gender",
      label: "Unspecified",
      checked: true,
    }),
  },
  dob: {
    ...createFormFieldConfig({
      type: "date",
      id: "dob",
      label: "Date of Birth",
      errorMessage: "Date of Birth is required",
    }),
    validators: [requiredRule()],
  },
  "address-line-one": {
    ...createFormFieldConfig({
      id: "address-line-one",
      placeholder: "Address Line 1",
      errorMessage: "First line of address is required",
    }),
  },
  "address-line-two": {
    ...createFormFieldConfig({
      id: "address-line-two",
      placeholder: "Address line 2",
    }),
  },
  town: {
    ...createFormFieldConfig({
      id: "town",
      placeholder: "Town",
      errorMessage: "Town is required",
    }),
    validators: [requiredRule()],
  },
  city: {
    ...createFormFieldConfig({
      id: "city",
      placeholder: "City",
      errorMessage: "City is required",
    }),
    validators: [requiredRule()],
  },
  postcode: {
    ...createFormFieldConfig({
      id: "postcode",
      placeholder: "Postcode",
      errorMessage: "Please enter a valid postcode",
    }),
    validators: [requiredRule(), checkLength(6)],
  },
  telephone: {
    ...createFormFieldConfig({
      id: "telephone",
      placeholder: "Telephone Number",
      errorMesage: "Telephone Number is required",
    }),
    validators: [requiredRule()],
  },
};

export default personalInformation;
