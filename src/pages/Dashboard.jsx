import { Link } from 'react-router';

export default function Dashboard({ stats, evaluations, onLogout }) {
  return (
    <main className="min-h-screen bg-[#f5f7fa] px-5 py-10 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="font-semibold text-blue-700">
            Voltar ao site
          </Link>

          <button
            type="button"
            onClick={onLogout}
            className="min-h-11 rounded-full border border-slate-300 bg-white px-5 text-sm font-semibold"
          >
            Sair
          </button>
        </div>

        <h1 className="mt-10 text-3xl font-bold tracking-tight text-[#071a3e]">
          Painel de avaliações
        </h1>
        <p className="mt-3 text-slate-600">
          Acompanhe as opiniões sobre o Jovi Vision.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-600">Total de avaliações</p>
            <p className="mt-2 text-3xl font-bold">{stats.total}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-600">Nota média</p>
            <p className="mt-2 text-3xl font-bold">{stats.average}/5</p>
          </div>
        </div>

        <h2 className="mt-10 text-xl font-semibold">Comentários</h2>

        {evaluations.length === 0 ? (
          <p className="mt-4 text-slate-600">
            Nenhuma avaliação registrada.
          </p>
        ) : (
          <ul className="mt-4 space-y-4">
            {evaluations.map((item) => (
              <li
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex flex-wrap justify-between gap-2 text-sm">
                  <strong className="text-blue-700">
                    Nota {item.score}/5
                  </strong>
                  <span className="text-slate-500">{item.date}</span>
                </div>
                <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-700">
                  {item.comment}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}