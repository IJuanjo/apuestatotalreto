import { ReactNode, useEffect } from "react";
import Close from "@/icons/close/Close";

interface ModalProps {
  title: string;
  Children: ReactNode,
  onClose?: () => void;
}

const Modal = ({ title, Children, onClose }: ModalProps) => {
  useEffect(() => {
    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
      <div className="relative my-auto w-full max-w-[560px] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
        <div className="h-1.5 w-full bg-primary-500" />
        <div className="flex items-center justify-between border-botton px-5 py-4 md:px-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-300">Acceso</div>
            <div className="mt-1 text-xl font-bold text-neutral-900 md:text-2xl">{title}</div>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 transition-colors hover:border-neutral-300 hover:text-neutral-700"
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <Close />
          </button>
        </div>
        <div className="bg-neutral-100/40 px-5 py-5 md:px-6 md:py-6">
          {Children}
        </div>
      </div>
    </div>
  )
}

export default Modal
