import imagem from '../assets/img1.png';

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#f5f7fa] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-800">
            Jovi Vision · Protótipo acadêmico
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-[#071a3e] sm:text-5xl lg:text-6xl">
            A câmera que
            <span className="block text-blue-600">
              estudantes merecem.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
            Uma proposta para registrar anotações, apresentações e momentos
            com mais clareza. Conheça a experiência Jovi Vision.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#funcionalidades"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              Explorar funcionalidades
            </a>

            <a
              href="#usos"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[#071a3e] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              Conhecer aplicações
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="rounded-[2rem] border border-white bg-white p-5 shadow-xl shadow-blue-950/5 sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="text-sm font-semibold text-[#071a3e]">
                Um novo olhar.
              </span>
              <span className="text-xs text-slate-500">
                Conceito Jovi Vision
              </span>
            </div>

            <img
              src={imagem}
              alt="Imagem ilustrativa da proposta Jovi Vision"
              className="aspect-[4/3] w-full rounded-2xl bg-slate-100 object-contain"
              fetchPriority="high"
            />

            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              Dos conteúdos da aula aos momentos do dia a dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}