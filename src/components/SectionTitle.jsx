export default function SectionTitle({ etiqueta, titulo, descricao }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
        {etiqueta}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071a3e] sm:text-4xl">
        {titulo}
      </h2>

      <p className="mt-4 text-base leading-relaxed text-slate-600">
        {descricao}
      </p>
    </div>
  );
}