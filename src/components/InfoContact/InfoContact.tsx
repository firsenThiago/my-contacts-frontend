import { InfoWrapper } from "./style";
import { edit, trash } from "../../assets";
import { Link } from "react-router-dom";
import { Button } from "..";

type InfoContactProps = {
  item: {
    nome: string;
    telefone: string;
    email: string;
    categoria: string;
  };
  index: number;
};

export const InfoContact = ({ item, index }: InfoContactProps) => {
  return (
    <InfoWrapper>
      <div className="info">
        <div className="contact-name">
          <strong>{item.nome}</strong>
          <small>{item.categoria}</small>
        </div>
        <span>{item.email}</span>
        <span>{item.telefone}</span>
      </div>
      <div className="actions">
        <Link to={`/edit/${index}`}>
          <img src={edit} alt="Editar" />
        </Link>
        <Button type="button" icon={trash} alt="Deletar" />
      </div>
    </InfoWrapper>
  );
};
