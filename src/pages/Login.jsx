import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  function entrar(evento) {
    evento.preventDefault();

    if (
      email.trim().toLowerCase() !== 'demo@jovi.com' ||
      senha !== 'Jovi123!'
    ) {
      setErro('E-mail ou senha incorretos.');
      return;
    }

    onLogin();
    navigate('/painel', { replace: true });
  }

  const campo =
    'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600';

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f7fa] px-5 py-12">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-blue-950/5 sm:p-9">
        <Link to="/" className="text-xl font-bold text-[#071a3e]">
          Jovi<span className="text-blue-600">Vision</span>
        </Link>

        <h1 className="mt-8 text-3xl font-bold tracking-tight text-[#071a3e]">
          Acesse seu painel.
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Entre para acompanhar as avaliações do projeto.
        </p>

        <form onSubmit={entrar} className="mt-6">
          <label htmlFor="email" className="text-sm font-medium">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            autoComplete="username"
            required
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            className={campo}
          />

          <label
            htmlFor="senha"
            className="mt-5 block text-sm font-medium"
          >
            Senha
          </label>
          <input
            id="senha"
            type="password"
            autoComplete="current-password"
            required
            value={senha}
            onChange={(evento) => setSenha(evento.target.value)}
            className={campo}
          />

          <p role="alert" className="mt-4 text-sm text-red-700">
            {erro}
          </p>

          <button
            type="submit"
            className="mt-4 min-h-12 w-full rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
          <p className="font-semibold text-slate-800">Acesso demonstrativo</p>
          <p>E-mail: demo@jovi.com</p>
          <p>Senha: Jovi123!</p>
        </div>

        <Link
          to="/"
          className="mt-6 inline-block text-sm font-medium text-blue-700"
        >
          Voltar ao site
        </Link>
      </div>
    </main>
  );
}