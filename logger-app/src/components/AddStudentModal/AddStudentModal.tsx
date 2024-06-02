import React, { useState } from 'react';
import './AddStudentModal.css';

interface AddStudentModalProps {
  onClose: () => void;
  onSave: (name: string, status: 'Checked In' | 'Checked Out', imageUrl: string) => void;
}

const AddStudentModal: React.FC<AddStudentModalProps> = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'Checked In' | 'Checked Out'>('Checked In');
  const [imageUrl, setImageUrl] = useState('');

  const handleSave = () => {
    onSave(name, status, imageUrl);
    onClose();
  };

  return (
    <div className="modal-background">
      <div className="modal">
        <h2>Add Student</h2>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value as 'Checked In' | 'Checked Out')}>
          <option value="Checked In">Checked In</option>
          <option value="Checked Out">Checked Out</option>
        </select>
        <label>Image URL:</label>
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <div className="button-group">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddStudentModal;
