import { Routes, Route } from "react-router-dom";
import { Home, NewContact, EditContact } from "../screens";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
};
