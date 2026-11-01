import { useState } from 'react';

const links = [
  { titulo: 'O problema', destino: '#problema' },
  { titulo: 'Funcionalidades', destino: '#funcionalidades' },
  { titulo: 'Aplicações', destino: '#usos' },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#042c53]/90 backdrop-blur-xl">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8"
      >
        <a
          href="#"
          aria-label="Jovi Vision — início"
          onClick={() => setMenuAberto(false)}
          className="text-xl font-bold tracking-tight text-white"
        >
          Jovi<span className="text-blue-300">Vision</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.destino}>
              <a
                href={link.destino}
                className="text-sm font-medium text-blue-100 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
              >
                {link.titulo}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#avaliacao"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#042c53] transition-colors hover:bg-blue-100 md:inline-flex"
        >
          Avaliar projeto
        </a>

        <button
          type="button"
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          onClick={() => setMenuAberto(!menuAberto)}
          className="min-h-11 rounded-xl px-3 text-sm font-medium text-white hover:bg-white/10 md:hidden"
        >
          {menuAberto ? 'Fechar menu' : 'Abrir menu'}
        </button>
      </nav>

      {menuAberto && (
        <div
          id="menu-mobile"
          className="border-t border-white/10 px-5 py-4 md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-2">
            {[...links, {
              titulo: 'Avaliar projeto',
              destino: '#avaliacao',
            }].map((link) => (
              <li key={link.destino}>
                <a
                  href={link.destino}
                  onClick={() => setMenuAberto(false)}
                  className="block rounded-xl px-3 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  {link.titulo}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}