import { Button, Input, PageHeader, Select } from "../../components";
import { FormWrapper } from "./style";

const inputData = [
  { placeholder: "Nome", type: "text" },
  { placeholder: "Email", type: "email" },
  { placeholder: "Telefone", type: "tel" },
];

const optionsData = ["Facebook", "GitHub", "Instagram", "LinkedIn", "Twitter"];

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
        <Select options={optionsData} placeholder="Categorias" />
        <Button mode="primary" text="Cadastrar" />
      </FormWrapper>
    </>
  );
};
