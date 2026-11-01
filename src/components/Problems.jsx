import SectionTitle from './SectionTitle';

const problemas = [
  {
    numero: '01',
    titulo: 'Tudo misturado na galeria',
    descricao:
      'Fotos da aula dividem espaço com capturas de tela e registros pessoais. O conteúdo está salvo, mas nem sempre está organizado.',
  },
  {
    numero: '02',
    titulo: 'Encontrar vira uma tarefa',
    descricao:
      'Na hora de estudar, localizar aquele quadro ou slide exige percorrer imagens e tentar lembrar quando a foto foi tirada.',
  },
  {
    numero: '03',
    titulo: 'Registrar não basta',
    descricao:
      'Depois da captura, ainda é preciso organizar, reler e separar os pontos importantes para revisar o conteúdo.',
  },
];

export default function Problems() {
  return (
    <section
      id="problema"
      className="bg-white px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          etiqueta="Parece familiar?"
          titulo="A foto está salva. Mas onde?"
          descricao="O desafio começa depois do clique: transformar uma galeria cheia em conteúdo fácil de encontrar e revisar."
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