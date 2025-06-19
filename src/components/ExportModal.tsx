import React, { useState } from 'react';
import '../styles/ExportModal.css';


interface ExportModalProps {
  show: boolean;
  onClose: () => void;
  onExport: (format: string) => void;
}

const ExportModal: React.FC<ExportModalProps> = ({ show, onClose, onExport }) => {
  const [format, setFormat] = useState<string>('csv');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    onExport(format);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal modalbg" style={{ display: 'block' }}>
      <div className="exportmodal-content">
        <div className="exportmodal-header">
          <span className="close" onClick={onClose} style={{ paddingTop: 5, paddingRight: 10 }}>
            &times;
          </span>
          <h4 style={{ paddingLeft: 15, paddingTop: 15 }}>Select your file type</h4>
        </div>
        <form className="form" onSubmit={handleDownload}>
          <div
            className="exportmodal-body"
            style={{ paddingLeft: 15, paddingTop: 15, paddingBottom: 10 }}
          >
            <label htmlFor="format">Export to</label>
            <select
              id="formatDropdown"
              name="format"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
            >
              <option value="csv">Excel (CSV)</option>
              <option value="pdf">PDF</option>
              <option value="xml">Excel (XML)</option>
              <option value="doc">Microsoft Word 2003</option>
            </select>
          </div>
          <div className="exportmodal-footer">
            <button
              type="submit"
              id="downloadButton"
              style={{
                float: 'right',
                marginRight: 50,
                marginTop: 15,
                color: 'black',
              }}
            >
              Download
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExportModal;
