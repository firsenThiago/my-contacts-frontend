import { ContactsListWrapper, Header, ListContainer, Card } from "./style";
import { arrow, edit, trash } from "../../assets";
import { Link } from "react-router-dom";

export const ContactsList = () => {
  return (
    <ContactsListWrapper>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/new"> Novo contato</Link>
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
            <Link to="/edit/:id">
              <img src={edit} alt="Editar" />
            </Link>

            <button>
              <img src={trash} alt="Deletar" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </ContactsListWrapper>
  );
};
