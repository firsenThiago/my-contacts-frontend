import {
  HomeWrapper,
  ContactsListWrapper,
  Header,
  ListContainer,
} from "./style";
import { arrow } from "../../assets";
import { Input, Button, InfoContact } from "../../components";
import mock from "../../mock/mock.json";

export const Home = () => {
  return (
    <HomeWrapper>
      <Input placeholder="Pesquisar contato..." mode="secondary" />
      <ContactsListWrapper>
        <Header>
          <strong>{mock.length} contatos</strong>
          <Button
            mode="link"
            type="button"
            toPage="/new"
            linkText="Novo Contato"
          />
        </Header>
        <ListContainer>
          <header>
            <Button
              mode="iconButton"
              type="button"
              icon={arrow}
              alt="Ordenar"
              text="Nome"
            />
          </header>
        </ListContainer>
        {mock.map((item, index) => (
          <InfoContact item={item} key={item.email} index={index} />
        ))}
      </ContactsListWrapper>
    </HomeWrapper>
  );
};
