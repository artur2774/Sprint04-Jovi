import SectionTitle from './SectionTitle';

const recursos = [
  {
    numero: '01',
    titulo: 'Fotografe normalmente.',
    descricao:
      'O fluxo começa no gesto que você já conhece: registrar o quadro, o slide ou a página que quer consultar depois.',
    detalhe: 'O conteúdo é o ponto de partida',
  },
  {
    numero: '02',
    titulo: 'Cada assunto no seu lugar.',
    descricao:
      'A proposta usa IA para identificar o tema e organizar a imagem na pasta correspondente, com possibilidade de corrigir a categoria.',
    detalhe: 'Organização desde a captura',
  },
  {
    numero: '03',
    titulo: 'Revise quando precisar.',
    descricao:
      'Quando solicitado, a solução propõe gerar um resumo do conteúdo registrado para apoiar a revisão.',
    detalhe: 'Resumo sob demanda',
  },
];

const tecnologias = [
  {
    sigla: 'CV',
    nome: 'Visão computacional',
    descricao: 'Interpreta os elementos presentes na imagem.',
  },
  {
    sigla: 'OCR',
    nome: 'Reconhecimento de texto',
    descricao: 'Extrai texto de quadros, slides e páginas.',
  },
  {
    sigla: 'IA',
    nome: 'Inteligência generativa',
    descricao: 'Apoia a identificação de temas e a produção de resumos.',
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
          etiqueta="A experiência Jovi Vision"
          titulo="Do clique à próxima revisão."
          descricao="Fotografar, organizar e resumir: três momentos de uma experiência pensada para a rotina de estudos."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {recursos.map((recurso) => (
            <article
              key={recurso.numero}
              className="flex flex-col rounded-3xl bg-[#071a3e] p-7 text-white"
            >
              <span className="text-sm font-semibold tracking-widest text-blue-300">
                {recurso.numero}
              </span>

              <h3 className="mt-7 text-2xl font-semibold tracking-tight">
                {recurso.titulo}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-blue-100/80">
                {recurso.descricao}
              </p>

              <p className="mt-7 border-t border-white/15 pt-4 text-xs font-medium text-blue-200">
                {recurso.detalhe}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Por trás da proposta
          </p>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#071a3e]">
            Três tecnologias. Uma experiência conectada.
          </h3>

          <div className="mt-8 grid gap-7 md:grid-cols-3">
            {tecnologias.map((tecnologia) => (
              <div key={tecnologia.sigla}>
                <span className="inline-flex h-12 min-w-12 items-center justify-center rounded-xl bg-blue-50 px-3 text-sm font-bold text-blue-700">
                  {tecnologia.sigla}
                </span>

                <h4 className="mt-4 font-semibold text-[#071a3e]">
                  {tecnologia.nome}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {tecnologia.descricao}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-7 border-t border-slate-200 pt-5 text-xs leading-relaxed text-slate-500">
            Tecnologias previstas na solução. A demonstração deste site
            utiliza conteúdo fixo para representar o fluxo.
          </p>
        </div>

        <div className="mt-8 rounded-3xl bg-blue-600 p-8 text-center text-white sm:p-12">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Tirar a foto já é fácil.
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-blue-50">
            Nossa proposta é facilitar tudo o que vem depois.
          </p>

          <a
            href="#avaliacao"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50"
          >
            O que você achou da proposta?
          </a>
        </div>
      </div>
    </section>
  );
}