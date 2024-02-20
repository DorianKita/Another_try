import { createPortal } from "react-dom";
import { useRef, forwardRef, useImperativeHandle } from "react";
import Button from "./Button.jsx";

const Modal = forwardRef(function Modal({ buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="px-16 py-8 rounded-md backdrop:bg-stone-800/90 "
    >
      <h2 className="text-3xl mb-6 text-stone-500">Invalid value!</h2>
      <p className="text-xl">All inputs must be filled.</p>
      <p className="text-xl">Please input valid values.</p>
      <form method="dialog" className="mt-8 text-end">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
