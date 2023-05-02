export default function ModalCompponent({ resetSubmit }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="modal" style={style}>
      <div>You have adopted Birds. Thank you</div>
      <button onClick={resetSubmit}>&times;</button>
    </div>
  );
}
