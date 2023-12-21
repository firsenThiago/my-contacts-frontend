import { ContactsList, Input } from "../../components";
import { HomeWrapper } from "./style";

export const Home = () => {
  return (
    <HomeWrapper>
      <Input placeholder="Pesquisar contato..." mode="secondary" />
      <ContactsList />
    </HomeWrapper>
  );
};
