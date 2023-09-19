export type InputDataListType = {
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  label: string;
};

export const INPUT_DATA_LIST: InputDataListType[] = [
  {
    name: "name",
    placeholder: "",
    required: true,
    label: "Name",
  },
  {
    name: "email",
    placeholder: "",
    required: true,
    label: "Email Address",
  },
  {
    name: "contact",
    placeholder: "",
    required: true,
    label: "Contact",
  },
  {
    name: "relation_to_nominee",
    placeholder: "",
    required: true,
    label: "Relation To Nominee",
  },
  {
    name: "name_of_nominee",
    placeholder: "",
    required: true,
    label: "Name of nominee",
  },
];

export type inputSchemaType = {
  name: string;
  email: string;
  contact: string;
  relation_to_nominee: string;
  name_of_nominee: string;
};

export const inputSchema: inputSchemaType = {
  name: "",
  email: "",
  contact: "",
  relation_to_nominee: "",
  name_of_nominee: "",
};
