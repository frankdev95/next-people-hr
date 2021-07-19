import {
  createFormFieldConfig,
  createFormSelectField,
  requiredRule,
  isNumber,
} from "../../helper-functions/form-functions";

import { holidayYears } from "../../../data/components/calendar";

const jobInformation = {
  company: {
    ...createFormSelectField({
      id: "company",
      placeholder: "Select a company",
      options: ["Alive Digital", "Magnus Search"],
      errorMessage: "Company is required",
    }),
  },
  location: {
    ...createFormSelectField({
      id: "location",
      placeholder: "Select a location",
      options: ["Maidstone", "Ashford", "Bristol"],
      errorMessage: "Location is required",
    }),
  },
  department: {
    ...createFormSelectField({
      id: "department",
      placeholder: "Select a department",
      options: ["Development", "Design", "Sales"],
      errorMessage: "Department is required",
    }),
  },
  role: {
    ...createFormSelectField({
      id: "role",
      placeholder: "Select a job role",
      options: ["Web Developer", "Accountant", "Software Designer"],
      errorMessage: "Role is required",
    }),
  },
  manager: {
    ...createFormSelectField({
      id: "manager",
      placeholder: "Select who you report to",
      options: ["Matt Kershaw", "Lucy Feebleman"],
    }),
  },
  "start-date": {
    ...createFormFieldConfig({
      type: "date",
      id: "start-date",
      errorMessage: "Start Date Required",
      label: "Start Date",
    }),
  },
  "ni-number": {
    ...createFormFieldConfig({
      id: "ni-number",
      placeholder: "National Insurance Number",
      errorMessage: "National Insurance Number Required",
    }),
  },
  "holiday-year": {
    ...createFormSelectField({
      id: "holiday-year",
      placeholder: "Select Holiday Year",
      options: holidayYears,
    }),
  },
  "work-pattern": {
    ...createFormSelectField({
      id: "work-pattern",
      placeholder: "Select Work Pattern",
      options: [
        "Monday to Friday 9am to 5:30pm (37.5 Hrs)",
        "Monday to Friday 9am to 5:00pm (35 Hrs)",
      ],
      errorMessage: "Work Pattern Required",
    }),
  },
  "contracted-hours": {
    ...createFormFieldConfig({
      id: "contracted-hours",
      placeholder: "Contracted Hours",
      errorMessage: "Please enter a valid number",
    }),
    validators: [requiredRule(), isNumber()],
  },
  "fulltime-hours": {
    ...createFormFieldConfig({
      id: "fulltime-hours",
      placeholder: "Full Time Hours",
      errorMessage: "Please enter a valid number",
    }),
    validators: [requiredRule(), isNumber()],
  },
  "fulltime-entitlement": {
    ...createFormFieldConfig({
      id: "fulltime-entitlement",
      placeholder: "Full Time Annual Holiday Entitlement (Days)",
    }),
  },
};

export default jobInformation;
