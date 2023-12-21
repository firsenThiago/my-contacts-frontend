import {
  HomeWrapper,
  ContactsListWrapper,
  Header,
  ListContainer,
} from "./style";
import { arrow } from "../../assets";
import { Link } from "react-router-dom";
import { Input, Button, InfoContact } from "../../components";
import mock from "../../mock/mock.json";

export const Home = () => {
  return (
    <HomeWrapper>
      <Input placeholder="Pesquisar contato..." mode="secondary" />
      <ContactsListWrapper>
        <Header>
          <strong>{mock.length} contatos</strong>
          <Link to="/new">Novo contato</Link>
        </Header>
        <ListContainer>
          <header>
            <Button type="button" icon={arrow} alt="Ordenar">
              Nome
            </Button>
          </header>
        </ListContainer>
        {mock.map((item, index) => (
          <InfoContact item={item} key={item.email} index={index} />
        ))}
      </ContactsListWrapper>
    </HomeWrapper>
  );
};
