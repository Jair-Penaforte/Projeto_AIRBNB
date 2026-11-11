import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img src="" alt="" className="aspect-square rounde-2xl" />
      <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
      <p className="truncate">
        Descrição
        dfsdfsdfsdfsdfdskkkkkkkdskjdkjgskjgsdjkjksdjksdjksdfjksdjkfsdjkfsdkjfsdjkl
      </p>
      <p>
        <span className="font-semibold">R$ 550</span> por noite
      </p>
    </a>
  );
};

export default Item;
