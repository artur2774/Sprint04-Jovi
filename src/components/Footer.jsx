const links = [
  { titulo: 'O problema', destino: '#problema' },
  { titulo: 'Funcionalidades', destino: '#funcionalidades' },
  { titulo: 'Aplicações', destino: '#usos' },
  { titulo: 'Avaliar projeto', destino: '#avaliacao' },
];

export default function Footer() {
  return (
    <footer className="bg-[#071a3e] px-5 py-12 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white"
            >
              Jovi<span className="text-blue-300">Vision</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-100/80">
              Uma proposta de experiência de câmera pensada para
              a rotina de estudantes.
            </p>

            <p className="mt-3 text-xs text-blue-200">
              Projeto acadêmico · Smartech
            </p>
          </div>

          <div className="md:justify-self-end">
            <h2 className="text-sm font-semibold">Explore o projeto</h2>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-x-8">
              {links.map((link) => (
                <li key={link.destino}>
                  <a
                    href={link.destino}
                    className="inline-block py-1 text-sm text-blue-100/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
                  >
                    {link.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-blue-100/80 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Jovi Vision.</p>
          <p>Desenvolvido para Front-end Design e Web Development.</p>
        </div>
      </div>
    </footer>
  );
}