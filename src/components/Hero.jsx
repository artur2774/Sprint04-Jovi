import CameraPreview from './CameraPreview';

const destaques = [
  ['Fotografe', 'Registre o conteúdo'],
  ['Organize', 'Encontre por assunto'],
  ['Revise', 'Consulte um resumo'],
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f5f7fa] px-5 py-14 md:px-8 md:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 -z-10 h-[35rem] w-[35rem] rounded-full bg-blue-200/50 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold text-blue-800">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-blue-600"
            />
            Conheça a experiência Jovi Vision
          </span>

          <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight text-[#071a3e] sm:text-6xl">
            Fotografar é fácil.
            <span className="block text-blue-600">
              Reencontrar também deveria ser.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
            Quadros, slides e anotações no lugar certo. Conheça a proposta
            Jovi Vision: organizar seus registros por assunto e transformar
            conteúdo em material de revisão.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#funcionalidades"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Conhecer os recursos
            </a>

            <a
              href="#avaliacao"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-[#071a3e] hover:bg-white"
            >
              Compartilhar minha opinião
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
            {destaques.map(([titulo, descricao]) => (
              <div key={titulo}>
                <p className="text-sm font-semibold text-[#071a3e]">
                  {titulo}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {descricao}
                </p>
              </div>
            ))}
          </div>
        </div>

        <CameraPreview />
      </div>
    </section>
  );
}