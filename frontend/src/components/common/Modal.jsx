function Modal({ children }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">{children}</div>
    </div>
  );
}

export default Modal;