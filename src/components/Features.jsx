import SectionTitle from './SectionTitle';
import imagem from '../assets/img1.png';

const funcionalidades = [
  {
    numero: '01',
    titulo: 'Modo Documento Inteligente',
    descricao:
      'A proposta prevê reconhecer quadros e folhas, ajustando a perspectiva para facilitar a leitura.',
  },
  {
    numero: '02',
    titulo: 'IA de Foco em Texto',
    descricao:
      'O conceito prioriza a nitidez dos caracteres para tornar os registros de conteúdo mais legíveis.',
  },
  {
    numero: '03',
    titulo: 'Zoom Melhorado',
    descricao:
      'A solução propõe melhorar a visualização de detalhes em quadros e apresentações distantes.',
  },
];

export default function Features() {
  return (
    <section
      id="funcionalidades"
      className="bg-[#f5f7fa] px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          etiqueta="A proposta"
          titulo="Mais clareza. Menos interrupções."
          descricao="Conheça os recursos conceituais que orientam o desenvolvimento do Jovi Vision."
        />

        <div className="grid items-center gap-10 rounded-[2rem] bg-[#071a3e] p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            {funcionalidades.map((item) => (
              <article
                key={item.numero}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-400/15 text-sm font-semibold text-blue-200">
                  {item.numero}
                </span>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-blue-100/80">
                    {item.descricao}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <figure className="mx-auto w-full max-w-72">
            <div className="rounded-[2.5rem] border border-white/20 bg-slate-950 p-3 shadow-2xl">
              <div className="overflow-hidden rounded-[2rem] bg-slate-900">
                <div className="flex justify-between px-5 py-4 text-xs text-slate-300">
                  <span>Jovi Vision</span>
                  <span>Documento</span>
                </div>

                <div className="relative">
                  <img
                    src={imagem}
                    alt="Exemplo visual de conteúdo na câmera conceitual"
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-6 rounded-lg border-2 border-white/80"
                  />
                </div>

                <div aria-hidden="true" className="flex justify-center py-5">
                  <div className="h-12 w-12 rounded-full border-4 border-slate-900 bg-white ring-2 ring-white/70" />
                </div>
              </div>
            </div>

            <figcaption className="mt-4 text-center text-xs leading-relaxed text-blue-100/80">
              Visualização ilustrativa. Os recursos de câmera e IA
              apresentados fazem parte do conceito do projeto.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}