import React from "react";
import './estilo.css'
const max_itens = 5;
const max_esquerda = (max_itens - 1) / 2;

export default function Paginacao({
  limitePorPag, //->Limite de itens por página
  totalItens, //->total de itens
  deslocamento,
  setDeslocamento,
}) {
  const pagAtual = deslocamento ? deslocamento / limitePorPag + 1 : 1;
  const paginas = Math.ceil(totalItens / limitePorPag);
  const primeiro = Math.max(pagAtual - max_esquerda, 1);

  function onPageChange(page) {
    setDeslocamento((page - 1) * limitePorPag);
  }

  let botoes = Array.from({ length: Math.min(max_itens, paginas) });
  return (
    <>
      <ul className="paginacao">
        <li>
          <button
            onClick={() => onPageChange(pagAtual - 1)}
            disabled={pagAtual === 1}
          >
            Anterior
          </button>
        </li>
        {botoes
          .map((_, index) => {
            return index + primeiro;
          })
          .map((page) => {
            if(page<=paginas){
              return (
                <li key={page}>
                  <button
                    onClick={() => onPageChange(page)}
                    className={
                      page === pagAtual
                        ? "paginacaoBotaoLigado"
                        : "paginacaoBotao"
                    }
                  >
                    {page}
                  </button>
                </li>
              );
            }
            return null;
          })}
        <li>
          <button
            onClick={() => onPageChange(pagAtual + 1)}
            disabled={pagAtual === paginas}
          >
            Próxima
          </button>
        </li>
      </ul>
    </>
  );
}
