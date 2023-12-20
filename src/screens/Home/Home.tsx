import { ContactsList, Header, Input } from "../../components";
import { HomeWrapper } from "./style";

export const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Input placeholder="Pesquisar contato..." mode="secondary" />
      <ContactsList />
    </HomeWrapper>
  );
};
