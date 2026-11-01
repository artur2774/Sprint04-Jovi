import { useState } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router';

import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Features from './components/Features';
import EvaluationSection from './components/EvaluationSection';
import Uses from './components/Uses';
import Footer from './components/Footer';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import useEvaluations from './hooks/useEvaluations';

export default function App() {
  const [autenticado, setAutenticado] = useState(
    () => sessionStorage.getItem('jovi_demo_session') === 'ativa'
  );

  const {
    evaluations,
    stats,
    addEvaluation,
    loading,
    error,
  } = useEvaluations();

  function entrar() {
    sessionStorage.setItem('jovi_demo_session', 'ativa');
    setAutenticado(true);
  }

  function sair() {
    sessionStorage.removeItem('jovi_demo_session');
    setAutenticado(false);
  }

  return (
    <>
      {loading && (
        <p
          role="status"
          className="bg-blue-50 px-5 py-3 text-center text-sm text-blue-800"
        >
          Carregando avaliações...
        </p>
      )}

      {error && (
        <p
          role="alert"
          className="bg-red-50 px-5 py-3 text-center text-sm text-red-800"
        >
          {error} Atualize a página para tentar novamente.
        </p>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />

              <main>
                <Hero />
                <Problems />
                <Features />

                <EvaluationSection
                  stats={stats}
                  evaluations={evaluations}
                  onAddEvaluation={addEvaluation}
                />

                <Uses />

                <div className="bg-white px-5 pb-10 text-center">
                  <Link
                    to={autenticado ? '/painel' : '/login'}
                    className="inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Acessar painel
                  </Link>
                </div>
              </main>

              <Footer />
            </>
          }
        />

        <Route
          path="/login"
          element={
            autenticado ? (
              <Navigate to="/painel" replace />
            ) : (
              <Login onLogin={entrar} />
            )
          }
        />

        <Route
          path="/painel"
          element={
            autenticado ? (
              <Dashboard
                stats={stats}
                evaluations={evaluations}
                onLogout={sair}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}