import { ContactsListWrapper, Header, ListContainer, Card } from "./style";
import { arrow, edit, trash } from "../../assets";

export const ContactsList = () => {
  return (
    <ContactsListWrapper>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Ordenar" />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Matheus</strong>
              <small>instagram</small>
            </div>
            <span>mateus@devacademy.com.br</span>
            <span>(41) 99999-9999</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Editar" />
            </a>
            <button>
              <img src={trash} alt="Deletar" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </ContactsListWrapper>
  );
};
