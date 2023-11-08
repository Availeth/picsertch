
const Modals = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; // Don't render anything if the modal is closed
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p>Modal content goes here...</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const Modals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Modals;