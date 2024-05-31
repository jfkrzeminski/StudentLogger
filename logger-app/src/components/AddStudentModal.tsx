// AddStudentModal.tsx
import React, { useState } from 'react';
import './AddStudentModal.css';

interface AddStudentModalProps {
  onClose: () => void;
  onSave: (name: string, status: string, imageUrl: string) => void;
}

const AddStudentModal: React.FC<AddStudentModalProps> = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Checked In');
  const [imageUrl, setImageUrl] = useState('');

  const handleSave = () => {
    onSave(name, status, imageUrl);
    onClose();
  };

  return (
    <div className="modal-background">
      <div className="modal">
        <h2>Add New Student</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="status">Status:</label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Checked In">Checked In</option>
          <option value="Checked Out">Checked Out</option>
        </select>
        <label htmlFor="imageUrl">Image URL:</label>
        <input type="text" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <div className="button-group">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddStudentModal;
