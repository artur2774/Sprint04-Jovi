import SectionTitle from './SectionTitle';

const aplicacoes = [
  {
    etiqueta: 'Aprendizado',
    titulo: 'Estudo e pesquisa',
    descricao:
      'Registros visuais para acompanhar o conteúdo e consultar depois.',
    itens: [
      'Quadros e apresentações em sala de aula',
      'Páginas de livros e materiais de estudo',
      'Experimentos e atividades de laboratório',
      'Anotações visuais para revisão',
    ],
  },
  {
    etiqueta: 'Conexões',
    titulo: 'Vida social e criação',
    descricao:
      'Uma proposta que também acompanha os momentos fora da sala.',
    itens: [
      'Videochamadas e encontros em grupo',
      'Retratos e memórias com amigos',
      'Registros em diferentes condições de luz',
      'Vídeos e apresentações criativas',
    ],
  },
];

export default function Uses() {
  return (
    <section id="usos" className="bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          etiqueta="Aplicações"
          titulo="Para estudar. Para conectar. Para criar."
          descricao="O conceito Jovi Vision aproxima dois universos da rotina estudantil: o acadêmico e o social."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {aplicacoes.map((aplicacao) => (
            <article
              key={aplicacao.titulo}
              className="rounded-3xl border border-slate-200 bg-[#f5f7fa] p-7 sm:p-9"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                {aplicacao.etiqueta}
              </span>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#071a3e]">
                {aplicacao.titulo}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {aplicacao.descricao}
              </p>

              <ul className="mt-6 space-y-4">
                {aplicacao.itens.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-slate-700"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}