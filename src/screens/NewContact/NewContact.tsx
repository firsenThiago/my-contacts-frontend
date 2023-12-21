import { Input, PageHeader } from "../../components";
import { FormWrapper } from "./style";

const inputData = [
  { placeholder: "Nome", type: "text" },
  { placeholder: "Email", type: "email" },
  { placeholder: "Telefone", type: "tel" },
];

export const NewContact = () => {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <FormWrapper>
        {inputData.map((item) => {
          return (
            <Input
              mode={"primary"}
              placeholder={item.placeholder}
              key={item.placeholder}
              type={item.type}
            />
          );
        })}
      </FormWrapper>
    </>
  );
};
