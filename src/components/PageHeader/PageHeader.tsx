import { Link } from "react-router-dom";
import { arrow } from "../../assets";
import { PageHeaderWrapper } from "./style";

type PageHeaderProps = {
  title: string;
};

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <PageHeaderWrapper>
      <Link to="/">
        <img src={arrow} alt="Arrow" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </PageHeaderWrapper>
  );
};
