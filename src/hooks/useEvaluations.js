import { useEffect, useState } from 'react';

const API =
  'https://6ae77f7556b2ee1e544070c5.mockapi.io/api/v1/evaluations';

export default function useEvaluations() {
  const [evaluations, setEvaluations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function carregar() {
      try {
        const resposta = await fetch(API, {
          signal: controller.signal,
        });

        if (!resposta.ok) {
          throw new Error('Não foi possível carregar as avaliações.');
        }

        const dados = await resposta.json();

        if (!Array.isArray(dados)) {
          throw new Error('A API retornou um formato inesperado.');
        }

        setEvaluations(dados.reverse());
      } catch (erro) {
        if (erro.name !== 'AbortError') {
          setError(erro.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    carregar();

    return () => controller.abort();
  }, []);

  const stats = {
    total: evaluations.length,
    average: evaluations.length
      ? Math.round(
          (evaluations.reduce(
            (total, item) => total + Number(item.score),
            0
          ) / evaluations.length) * 10
        ) / 10
      : 0,
  };

  async function addEvaluation(score, comment) {
    const comentario = comment.trim();

    if (!comentario || comentario.length > 500) {
      throw new Error('Escreva um comentário de até 500 caracteres.');
    }

    if (!Number.isInteger(score) || score < 1 || score > 5) {
      throw new Error('Selecione uma nota entre 1 e 5.');
    }

    const resposta = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        score,
        comment: comentario,
        date: new Date().toLocaleDateString('pt-BR'),
      }),
    });

    if (!resposta.ok) {
      throw new Error('Não foi possível salvar. Tente novamente.');
    }

    const avaliacao = await resposta.json();

    setEvaluations((atuais) => [avaliacao, ...atuais]);
  }

  return { evaluations, stats, addEvaluation, loading, error };
}