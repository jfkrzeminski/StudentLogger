import React, { useState } from 'react';
import AddStudentModal from './CheckinInterface/AddStudentModal/AddStudentModal';

interface WaffleMenuProps {
  onAddStudent: (name: string, status: 'Checked In' | 'Checked Out', location: string, imageUrl: string) => void;
}

const WaffleMenu: React.FC<WaffleMenuProps> = ({ onAddStudent }) => {
  const [showModal, setShowModal] = useState(false);

  const handleAddStudent = (name: string, status: 'Checked In' | 'Checked Out', location: string, imageUrl: string) => {
    onAddStudent(name, status, location, imageUrl);
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
