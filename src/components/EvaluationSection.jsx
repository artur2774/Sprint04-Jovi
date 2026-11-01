import { useState } from 'react';
import SectionTitle from './SectionTitle';

export default function EvaluationSection({
  stats,
  evaluations,
  onAddEvaluation,
}) {
  const [score, setScore] = useState(5);
  const [comment, setComment] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviando, setEnviando] = useState(false);

  async function enviarAvaliacao(evento) {
  evento.preventDefault();

  if (enviando) return;

  setEnviando(true);
  setMensagem('');

  try {
    await onAddEvaluation(Number(score), comment);
    setComment('');
    setMensagem('Avaliação registrada com sucesso.');
  } catch {
    setMensagem(
      'Não foi possível enviar. Confira sua conexão e tente novamente.'
    );
  } finally {
    setEnviando(false);
  }
}

  const campo =
    'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-800 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20';

  return (
    <section
      id="avaliacao"
      className="bg-[#f5f7fa] px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          etiqueta="Sua opinião"
          titulo="Ajude a construir o próximo passo."
          descricao="Avalie a proposta do Jovi Vision e conte o que podemos melhorar."
        />

        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-600">Nota média</p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#071a3e]">
              {stats.average}
              <span className="text-base font-normal text-slate-500">
                {' '}/ 5
              </span>
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-600">Avaliações</p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#071a3e]">
              {stats.total}
            </p>
          </div>
        </div>

        <form
          onSubmit={enviarAvaliacao}
          className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <h3 className="text-xl font-semibold text-[#071a3e]">
            Como você avalia a proposta?
          </h3>

          <label
            htmlFor="nota"
            className="mt-6 block text-sm font-medium text-slate-700"
          >
            Sua nota
          </label>

          <select
            id="nota"
            value={score}
            onChange={(evento) => setScore(Number(evento.target.value))}
            className={campo}
          >
            <option value={5}>5 — Excelente</option>
            <option value={4}>4 — Muito boa</option>
            <option value={3}>3 — Regular</option>
            <option value={2}>2 — Precisa melhorar</option>
            <option value={1}>1 — Insuficiente</option>
          </select>

          <label
            htmlFor="comentario"
            className="mt-5 block text-sm font-medium text-slate-700"
          >
            Seu comentário
          </label>

          <textarea
            id="comentario"
            value={comment}
            onChange={(evento) => {
              setComment(evento.target.value);
              setMensagem('');
            }}
            maxLength={500}
            rows={4}
            required
            placeholder="O que chamou sua atenção? O que poderia melhorar?"
            className={`${campo} resize-y`}
          />

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              {comment.length}/500 caracteres
            </p>

            <button
              type="submit"
              disabled={enviando}
              className="min-h-12 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-wait disabled:opacity-60"
            >
              {enviando ? 'Enviando...' : 'Enviar avaliação'}
            </button>
          </div>

          <p role="status" className="mt-4 text-sm text-slate-700">
            {mensagem}
          </p>
        </form>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[#071a3e]">
            Comentários recebidos
          </h3>

          {evaluations.length === 0 ? (
            <p className="mt-4 rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-600">
              Ainda não há avaliações. Compartilhe a primeira opinião.
            </p>
          ) : (
            <ul className="mt-5 space-y-4">
              {evaluations.map((item) => (
                <li
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-blue-700">
                      Nota {item.score}/5
                    </span>
                    <span className="text-xs text-slate-500">
                      {item.date}
                    </span>
                  </div>

                  <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-700">
                    {item.comment}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}