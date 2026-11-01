import SectionTitle from './SectionTitle';

const problemas = [
  {
    numero: '01',
    titulo: 'Conteúdo difícil de ler',
    descricao:
      'Fotos de quadros e apresentações podem perder detalhes, dificultando a consulta na hora de estudar.',
  },
  {
    numero: '02',
    titulo: 'Luz nem sempre favorável',
    descricao:
      'Ambientes com pouca iluminação ou reflexos tornam o registro de informações mais difícil.',
  },
  {
    numero: '03',
    titulo: 'Registros pouco práticos',
    descricao:
      'Ajustar a câmera e repetir fotos interrompe a atenção que poderia estar no conteúdo da aula.',
  },
];

export default function Problems() {
  return (
    <section id="problema" className="bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          etiqueta="O desafio"
          titulo="Sua atenção merece ficar no que importa."
          descricao="Registrar o conteúdo deveria ajudar no aprendizado. Estes são alguns dos desafios que orientam a proposta Jovi Vision."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {problemas.map((problema) => (
            <article
              key={problema.numero}
              className="rounded-3xl border border-slate-200 bg-[#f5f7fa] p-7"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                {problema.numero}
              </span>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#071a3e]">
                {problema.titulo}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {problema.descricao}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}