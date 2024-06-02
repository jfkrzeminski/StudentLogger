import React, { useState } from 'react';
import AddStudentModal from './AddStudentModal/AddStudentModal';

interface WaffleMenuProps {
  onAddStudent: (name: string, status: 'Checked In' | 'Checked Out', imageUrl: string) => void;
}

const WaffleMenu: React.FC<WaffleMenuProps> = ({ onAddStudent }) => {
  const [showModal, setShowModal] = useState(false);

  const handleAddStudent = (name: string, status: 'Checked In' | 'Checked Out', imageUrl: string) => {
    onAddStudent(name, status, imageUrl);
    setShowModal(false);
  };

  return (
    <div className="waffle-menu">
      <button onClick={() => setShowModal(true)}>Add Student</button>
      {showModal && <AddStudentModal onClose={() => setShowModal(false)} onSave={handleAddStudent} />}
    </div>
  );
};

export default WaffleMenu;
