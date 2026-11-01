import { useEffect, useState } from 'react';

const etapas = [
  'Câmera pronta',
  'Lousa e contexto',
  'Sugestão de pasta',
  'OCR e perspectiva',
  'Documento e resumo',
];

const tarefas = [
  'Correção de perspectiva',
  'Reconhecimento de texto',
  'Preparação do documento',
  'Organização na pasta',
];

const topicos = [
  'A arquitetura em camadas separa apresentação, lógica e dados.',
  'O padrão MVC distribui responsabilidades entre Model, View e Controller.',
  'Microsserviços permitem evoluir componentes de forma independente.',
  'APIs REST permitem a comunicação entre serviços usando HTTP.',
];

const conteudo = [
  'Arquitetura de Sistemas',
  '',
  ...topicos,
].join('\n');

function Icone({ nome, className = 'h-5 w-5' }) {
  const caminhos = {
    camera:
      'M4 7h4l2-3h4l2 3h4v13H4z M16 13a4 4 0 11-8 0 4 4 0 018 0',
    pasta:
      'M3 6h7l2 2h9v12H3z M3 6V4h7l2 2',
    grade:
      'M3 3h18v18H3z M9 3v18 M15 3v18 M3 9h18 M3 15h18',
    voltar:
      'M15 5l-7 7 7 7',
    check:
      'M5 12l4 4L19 6',
    documento:
      'M6 3h8l4 4v14H6z M14 3v5h4 M9 12h6 M9 16h6',
    reiniciar:
      'M4 10a8 8 0 111 8 M4 4v6h6',
    compartilhar:
      'M12 16V3 M7 8l5-5 5 5 M5 13v8h14v-8',
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={caminhos[nome]} />
    </svg>
  );
}

function Documento({ compacto = false }) {
  return (
    <div className="rounded-xl bg-[#fffef8] p-4 text-slate-800">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[9px] font-bold uppercase tracking-wider">
          Arquitetura de Sistemas
        </span>
        <span className="rounded bg-red-500 px-1.5 py-0.5 text-[8px] font-bold text-white">
          PDF
        </span>
      </div>

      {compacto ? (
        <div aria-hidden="true" className="mt-4 space-y-2">
          {[90, 100, 75, 85, 60].map((largura, indice) => (
            <div
              key={indice}
              style={{ width: `${largura}%` }}
              className={`h-1.5 rounded-full ${
                indice > 2 ? 'bg-teal-300/60' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          {topicos.map((topico, indice) => (
            <p key={topico} className="text-[11px] leading-relaxed">
              <strong>{indice + 1}.</strong> {topico}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CameraPreview() {
  const [etapa, setEtapa] = useState(0);
  const [grade, setGrade] = useState(false);
  const [editarPasta, setEditarPasta] = useState(false);
  const [pasta, setPasta] = useState('TI · Aula 04');
  const [progresso, setProgresso] = useState(0);
  const [mostrarResumo, setMostrarResumo] = useState(false);
  const [abrirDocumento, setAbrirDocumento] = useState(false);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    if (etapa !== 1) return;

    const temporizador = setTimeout(() => setEtapa(2), 1100);

    return () => clearTimeout(temporizador);
  }, [etapa]);

  useEffect(() => {
    if (etapa !== 3) return;

    const temporizador = setTimeout(() => {
      if (progresso < tarefas.length) {
        setProgresso((atual) => atual + 1);
      } else {
        setEtapa(4);
      }
    }, 550);

    return () => clearTimeout(temporizador);
  }, [etapa, progresso]);

  function reiniciar() {
    setEtapa(0);
    setProgresso(0);
    setMostrarResumo(false);
    setAbrirDocumento(false);
    setEditarPasta(false);
    setPasta('TI · Aula 04');
    setMensagem('');
  }

  function processar() {
    setEditarPasta(false);
    setProgresso(0);
    setEtapa(3);
  }

  async function compartilhar() {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Jovi Vision — Resumo de exemplo',
          text: conteudo,
        });
        setMensagem('Compartilhamento concluído.');
      } else {
        await navigator.clipboard.writeText(conteudo);
        setMensagem('Resumo copiado para compartilhar.');
      }
    } catch (erro) {
      if (erro.name !== 'AbortError') {
        setMensagem('Não foi possível compartilhar. Você pode selecionar o resumo.');
      }
    }
  }

  const principal =
    'flex min-h-11 items-center justify-center gap-2 rounded-xl bg-teal-400 px-4 py-3 text-xs font-bold text-[#062326] hover:bg-teal-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300';

  const secundario =
    'flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300';

  return (
    <div className="mx-auto w-full max-w-[21rem]">
      <div className="rounded-[2.8rem] border border-slate-600 bg-[#20252b] p-2 shadow-2xl shadow-slate-950/30">
        <div className="relative flex h-[39rem] flex-col overflow-hidden rounded-[2.3rem] bg-[#0b1826] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-3 z-20 h-3 w-3 -translate-x-1/2 rounded-full bg-black ring-2 ring-white/5"
          />

          <div className="flex shrink-0 items-center justify-between px-6 pb-2 pt-7 text-[10px] font-medium text-slate-200">
            <span>9:41</span>
            <span className="text-[9px] uppercase tracking-wider">
              Jovi · Demo
            </span>
            <span aria-label="Bateria completa">100%</span>
          </div>

          {etapa <= 2 ? (
            <>
              <div className="flex shrink-0 items-center justify-around gap-1 bg-black/30 px-3 py-3 text-[10px]">
                <span className="text-white/45">VÍDEO</span>
                <span className="text-white/45">FOTO</span>
                <span className="rounded-full bg-yellow-400/10 px-3 py-1 font-semibold text-yellow-400">
                  DOCUMENTO
                </span>
                <span className="text-white/45">PRO</span>
              </div>

              <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-gradient-to-b from-[#101a28] to-[#152638] p-5">
                <div className="relative w-full rounded-md border border-white/5 bg-[#203344] p-5 shadow-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-teal-200">
                    Aula 04
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-100">
                    Arquitetura de Sistemas
                  </h3>

                  <div className="mt-5 space-y-3 text-[11px] text-slate-300">
                    <p>Apresentação → Lógica → Dados</p>
                    <div className="h-px bg-white/15" />
                    <p>Model · View · Controller</p>
                    <div className="h-px bg-white/15" />
                    <p>Microsserviços e APIs REST</p>
                  </div>

                  {etapa === 2 && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-2 rounded-md border border-teal-300 shadow-[0_0_20px_#2dd4bf25]"
                    >
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-teal-300 px-3 py-1 text-[8px] font-bold text-[#062326]">
                        LOUSA DETECTADA
                      </span>
                    </div>
                  )}
                </div>

                {grade && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 grid grid-cols-3 grid-rows-3"
                  >
                    {Array.from({ length: 9 }, (_, indice) => (
                      <div key={indice} className="border border-white/15" />
                    ))}
                  </div>
                )}

                {etapa === 1 && (
                  <div
                    role="status"
                    className="absolute inset-x-4 bottom-4 rounded-xl border border-teal-300/30 bg-[#09292d]/95 p-3 text-center text-xs text-teal-100"
                  >
                    Simulando detecção da lousa e do contexto…
                  </div>
                )}
              </div>

              <div className="shrink-0 bg-[#080d13] px-4 pb-5 pt-4">
                {etapa === 2 ? (
                  <div className="rounded-2xl border border-teal-400/40 bg-teal-400/5 p-3">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-teal-400/10 p-2 text-teal-300">
                        <Icone nome="pasta" />
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="text-[8px] tracking-widest text-teal-300">
                          SALVAR EM
                        </p>
                        <p className="mt-1 truncate text-xs font-medium">
                          {pasta}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setEditarPasta(!editarPasta)}
                        aria-expanded={editarPasta}
                        className="min-h-11 px-2 text-xs text-teal-300"
                      >
                        {editarPasta ? 'Fechar' : 'Editar'}
                      </button>
                    </div>

                    {editarPasta && (
                      <label className="mt-3 block text-[10px] text-slate-300">
                        Escolha a pasta
                        <select
                          value={pasta}
                          onChange={(evento) => setPasta(evento.target.value)}
                          className="mt-2 w-full rounded-lg border border-white/20 bg-[#102330] p-2 text-xs text-white"
                        >
                          <option>TI · Aula 04</option>
                          <option>Estudo · Arquitetura</option>
                          <option>Trabalho · Sistemas</option>
                        </select>
                      </label>
                    )}
                  </div>
                ) : (
                  <p className="py-3 text-center text-[10px] text-slate-400">
                    Fotografe para iniciar a experiência inteligente.
                  </p>
                )}

                <div className="mt-4 flex items-center justify-around">
                  <button
                    type="button"
                    aria-label="Ativar grade de enquadramento"
                    aria-pressed={grade}
                    onClick={() => setGrade(!grade)}
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ${
                      grade ? 'text-yellow-400' : 'text-white'
                    }`}
                  >
                    <Icone nome="grade" />
                  </button>

                  <button
                    type="button"
                    disabled={etapa === 1}
                    aria-label={
                      etapa === 2
                        ? 'Confirmar pasta e processar captura'
                        : 'Simular captura'
                    }
                    onClick={() =>
                      etapa === 2 ? processar() : setEtapa(1)
                    }
                    className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white active:scale-95 disabled:opacity-50 motion-safe:transition-transform"
                  >
                    <span
                      className={`h-12 w-12 rounded-full border-2 border-black ${
                        etapa === 2 ? 'bg-teal-400' : 'bg-white'
                      }`}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={reiniciar}
                    aria-label="Reiniciar demonstração"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10"
                  >
                    <Icone nome="reiniciar" />
                  </button>
                </div>

                <p className="mt-3 text-center text-[10px] text-yellow-400">
                  {etapa === 2 ? 'Confirmar e organizar' : 'Modo inteligente'}
                </p>
              </div>
            </>
          ) : etapa === 3 ? (
            <div className="flex min-h-0 flex-1 flex-col justify-center px-5 py-5">
              <Documento compacto />

              <h3 className="mt-7 text-center text-lg font-semibold">
                Processando captura…
              </h3>
              <p className="mt-2 text-center text-[10px] text-slate-400">
                Jovi Vision Core · Simulação
              </p>

              <div
                role="progressbar"
                aria-label="Processamento demonstrativo"
                aria-valuemin={0}
                aria-valuemax={tarefas.length}
                aria-valuenow={progresso}
                className="mt-5 h-1 overflow-hidden rounded-full bg-white/10"
              >
                <div
                  style={{ width: `${(progresso / tarefas.length) * 100}%` }}
                  className="h-full bg-teal-400"
                />
              </div>

              <ul className="mt-5 space-y-2">
                {tarefas.map((tarefa, indice) => (
                  <li
                    key={tarefa}
                    className={`flex items-center gap-3 rounded-xl border p-3 text-[11px] ${
                      indice < progresso
                        ? 'border-teal-400/30 bg-teal-400/5 text-teal-100'
                        : 'border-white/10 text-slate-500'
                    }`}
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                      {indice < progresso ? (
                        <Icone nome="check" className="h-3 w-3" />
                      ) : (
                        indice + 1
                      )}
                    </span>
                    {tarefa}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={reiniciar}
                className="mt-5 self-center text-xs text-slate-400 hover:text-white"
              >
                Cancelar simulação
              </button>
            </div>
          ) : (
            <>
              <div className="shrink-0 border-b border-white/10 px-5 pb-4 pt-3">
                <p className="flex items-center gap-2 text-[10px] text-teal-300">
                  <Icone nome="pasta" className="h-3 w-3" />
                  {pasta}
                </p>

                <h3 className="mt-2 text-sm font-semibold leading-relaxed">
                  Aula 04 — Arquitetura de Sistemas.pdf
                </h3>

                <div className="mt-3 flex flex-wrap gap-2 text-[9px] text-slate-400">
                  <span className="rounded bg-white/5 px-2 py-1">
                    Gemini · simulação
                  </span>
                  <span className="rounded bg-white/5 px-2 py-1">
                    OCR · exemplo
                  </span>
                </div>
              </div>

              <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
                {abrirDocumento ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setAbrirDocumento(false)}
                      className="flex min-h-11 items-center gap-1 text-xs text-teal-300"
                    >
                      <Icone nome="voltar" className="h-4 w-4" />
                      Voltar ao resultado
                    </button>
                    <Documento />
                  </>
                ) : (
                  <>
                    <div className="overflow-hidden rounded-2xl bg-white/5">
                      <Documento compacto />
                      <div className="flex items-center justify-between gap-3 p-3">
                        <div>
                          <p className="text-[10px] font-medium">
                            Documento de exemplo
                          </p>
                          <p className="mt-1 text-[9px] text-slate-400">
                            Prévia ilustrativa do PDF
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => setAbrirDocumento(true)}
                          className="min-h-11 px-3 text-xs font-medium text-teal-300"
                        >
                          Abrir
                        </button>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-teal-400/25 bg-teal-400/5 p-4">
                      {mostrarResumo ? (
                        <>
                          <h4 className="text-xs font-semibold text-teal-200">
                            Resumo em tópicos
                          </h4>

                          <ul className="mt-3 space-y-3">
                            {topicos.map((topico) => (
                              <li
                                key={topico}
                                className="flex gap-2 text-[11px] leading-relaxed text-slate-300"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-400"
                                />
                                {topico}
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setMostrarResumo(true)}
                          className="w-full text-left"
                        >
                          <span className="text-[9px] font-bold uppercase tracking-wider text-teal-300">
                            Resumo inteligente
                          </span>
                          <span className="mt-2 block text-xs leading-relaxed">
                            Ver o resumo de exemplo em tópicos →
                          </span>
                        </button>
                      )}
                    </div>

                    <div className="flex items-start gap-3 rounded-xl bg-white/5 p-3">
                      <span className="rounded-lg bg-teal-400/10 p-2 text-teal-300">
                        <Icone nome="pasta" className="h-4 w-4" />
                      </span>
                      <div className="text-[10px] leading-relaxed">
                        <p className="font-medium text-slate-200">
                          Integrações previstas
                        </p>
                        <p className="mt-1 text-slate-400">
                          Google Drive e Google Fotos
                        </p>
                        <p className="text-slate-500">
                          Nenhum envio externo nesta demonstração.
                        </p>
                      </div>
                    </div>
                  </>
                )}

                <p role="status" className="text-[10px] leading-relaxed text-teal-200">
                  {mensagem}
                </p>
              </div>

              <div className="grid shrink-0 grid-cols-[0.85fr_1.15fr] gap-2 border-t border-white/10 px-4 py-4">
                <button
                  type="button"
                  onClick={reiniciar}
                  className={secundario}
                >
                  <Icone nome="reiniciar" className="h-4 w-4" />
                  Nova captura
                </button>

                <button
                  type="button"
                  onClick={compartilhar}
                  className={principal}
                >
                  <Icone nome="compartilhar" className="h-4 w-4" />
                  Compartilhar
                </button>
              </div>
            </>
          )}

          <div
            aria-hidden="true"
            className="mx-auto mb-3 mt-1 h-1 w-24 shrink-0 rounded-full bg-white/25"
          />
        </div>
      </div>

      <div className="mt-5">
        <p role="status" className="text-center text-xs font-medium text-slate-600">
          {etapa + 1} de 5 · {etapas[etapa]}
        </p>

        <div aria-hidden="true" className="mt-3 flex justify-center gap-2">
          {etapas.map((item, indice) => (
            <span
              key={item}
              className={`h-1.5 w-8 rounded-full ${
                indice <= etapa ? 'bg-teal-500' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
        Demonstração com conteúdo fixo. Captura, OCR, classificação,
        PDF e resumo são simulados.
      </p>
    </div>
  );
}